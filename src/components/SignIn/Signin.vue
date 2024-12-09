<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <div class="boxcomponent">
    <div class="boxsignin">
      <h1><strong style="font-family: CarnacBold">Sign In</strong></h1>
      <p style="color: gray; font-family: CarnacLight">
        Sign in to stay connected.
      </p>
      <form class="mypassword">
        <label for="Email">Email</label>
        <input type="email" v-model="username" @input="checkEmpty" />
        <label for="Password">Password</label>
        <input
          :type="[showPassword ? 'text' : 'password']"
          v-model="password"
          @input="checkEmpty"
        />
        <i
          :class="['bi', showPassword ? 'bi-eye eye' : 'bi-eye-slash eye']"
          @click="changeType"
        ></i>
      </form>
      <div class="remember">
        <div class="left">
          <input
            type="checkbox"
            v-model="rememberMe"
            @change="handleRememberMe"
          />
          <label>Rememberme?</label>
        </div>
        <div class="right">
          <p style="color: rgb(58, 44, 250)">Forgot Password</p>
        </div>
      </div>
      <button :class="[isComplete ? 'enabled' : 'disabled']">Sign in</button>
    </div>
  </div>
  <div class="boximage">
    <img src="/src/assets/images/bakertilly-bg-logo.png" alt="" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "Signin",
  setup() {
    const showPassword = ref(false);
    const isComplete = ref(false);
    const username = ref("");
    const password = ref("");
    const rememberMe = ref(false); //////////////

    const changeType = () => {
      showPassword.value = !showPassword.value;
    };

    const checkEmpty = () => {
      if (username.value === "" || password.value === "") {
        isComplete.value = false;
      } else {
        isComplete.value = true;
      }
    };
    /************************/
    const handleRememberMe = () => {
      console.log(rememberMe.value);
      if (rememberMe.value) {
        localStorage.setItem(
          "rememberMe",
          JSON.stringify({
            username: username.value,
            password: password.value,
          })
        );
      } else {
        localStorage.removeItem("rememberMe");
      }
    };

    const loadRememberedCredentials = () => {
      const savedCredentials = JSON.parse(localStorage.getItem("rememberMe"));
      if (savedCredentials) {
        username.value = savedCredentials.username;
        password.value = savedCredentials.password;
        rememberMe.value = true;
        checkEmpty();
      }
    };

    onMounted(() => {
      loadRememberedCredentials();
    });
    /************************/
    return {
      showPassword,
      isComplete,
      username,
      password,
      changeType,
      checkEmpty,
      rememberMe, ///////////
      handleRememberMe, ////////////////
    };
  },
};
</script>

<style scoped>
@font-face {
  font-family: CarnacLight;
  src: url(/src/assets/fonts/Carnac/CarnacLight.ttf);
}
@font-face {
  font-family: CarnacBold;
  src: url(/src/assets/fonts/Carnac/CarnacBold.ttf);
}
label {
  color: gray;
}

.boximage img {
  position: fixed;
  top: -120px;
  left: -120px;
}

.boxcomponent {
  font-family: CarnacLight;
  display: flex;
  background-color: white;
  position: relative;
  top: 0;
  left: 0;
  width: 50%;
  height: 100vh;
  margin: 0;
  align-items: center;
  justify-content: center;
}

.boxsignin {
  width: 40%;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 30px;
  z-index: 1;
}

form {
  position: relative;
  line-height: 30px;
}

.eye {
  position: absolute;
  right: 0;
  margin: 5px 10px;
  cursor: pointer;
}

input {
  width: 100%;
  border-color: rgb(58, 44, 250);
  border-radius: 5px;
}

.remember {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  min-width: 250px;
}

.remember .left {
  display: flex;
  align-items: center;
}

.remember .right {
  margin-top: 15px;
}

.remember input {
  cursor: pointer;
}

.remember label {
  margin-left: 5px;
}

.remember p {
  cursor: pointer;
}

.enabled {
  text-align: center;
  color: white;
  background-color: rgb(58, 44, 250);
  border: none;
  border-radius: 5px;
  width: 35%;
  margin-top: 20px;
  padding-bottom: 5px;
}

.disabled {
  text-align: center;
  color: rgb(0, 0, 0);
  background-color: rgb(168, 167, 175);
  border: none;
  border-radius: 5px;
  width: 35%;
  margin-top: 20px;
  padding-bottom: 5px;
  cursor-even: ;
}

@media screen and (max-width: 768px) {
  .boxcomponent {
    width: 100%;
  }
}
</style>
