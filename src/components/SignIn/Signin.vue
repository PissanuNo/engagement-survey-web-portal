<template>
  <div class="boxcomponent">
    <div class="boxsignin">
        <h1><strong style="font-family: CarnacBold;">Sign In</strong></h1>
        <p style="color: gray; font-family: CarnacLight;">Sign in to stay connected.</p>
        <form action="">
            <label for="Email">Email</label>
            <input type="text">
            <label for="Password">Password</label>
            <input type="text">
        </form>
        <div class="remember">
            <div class="left">
              <input type="checkbox" >
              <label>Rememberme?</label>
            </div>
            <div class="right">
              <p style="color: rgb(58, 44, 250);">Forgot Password</p>
            </div>
        </div>
        <button>Sign in</button>
    </div>
  </div>
  <div class="boximage">
    <img src="/src/assets/images/bakertilly-bg-logo.png" alt="">
  </div>
</template>

<script>
export default {

}
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
label{
  color: gray;
}

.boximage img{
    position: fixed;
    top: -120px;
    left: -120px;
}

.boxcomponent{
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

.boxsignin{
    width: 40%;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 30px;
    z-index: 1;
}

form{
    line-height: 30px;
}

input{
    width: 100%;
    border-color: rgb(58, 44, 250);
    border-radius: 5px;

}

.remember{
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

.remember label{
   margin-left: 5px;
}

.remember p {
  cursor: pointer;
}

button{
  text-align: center;
    color: white;
    background-color: rgb(58, 44, 250);
    border: none;
    border-radius: 5px;
    width: 35%;
    margin-top: 20px;
    padding-bottom: 5px;
}

@media screen and (max-width: 768px){
  .boxcomponent{
    width: 100%;
}
}

</style>