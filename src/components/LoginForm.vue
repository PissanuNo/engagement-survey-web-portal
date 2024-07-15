<template>
  <div class="container-fluid">
    <div class="box-container">
      <div class="title-container">
        <div class="imgcontainer">
          <img src="../assets/images/egco.png" alt="logo" class="logo" />
          <h3>Log in to your account</h3>
          <br>
          <p>Welcome back! Please enter your details.</p>
        </div>
      </div>
      <div class="form-container">
        <label for="form2Example1">Email</label>
        <input type="email" id="form2Example1" class="form-control form-control" placeholder="Enter your Email"
          v-model="email" />
      </div>

      <div class="form-container">
        <label for="form2Example2">Password</label>
        <div class="password-toggle">
          <input :type="passwordVisible ? 'text' : 'password'" id="form2Example2" class="form-control form-control"
            placeholder="Password" v-model="password" />
          <span class="toggle-password" @click="togglePasswordVisibility">
            <img v-if="passwordVisible" src="../assets/images/eye.png" alt="Open eye" class="eye-icon">
            <img v-else src="../assets/images/eye_slash.png" alt="Closed eye" class="eye-icon">
          </span>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col d-flex justify-content-start align-items-center">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="rememberMe" id="form2Example31" />
            <label class="form-check-label" for="form2Example31"> Remember me </label>
          </div>
        </div>

        <div class="col d-flex justify-content-end align-items-center">
          <a href="#!" class="text-decoration-none">Forgot password?</a>
        </div>
      </div>
      <button type="button" @click="validateLogin" class="btn btn-secondary">Sign in</button>
    </div>

    <div class="modal-overlay" v-if="showModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 style="margin-right: auto;">Warning</h3>
            <button type="button" class="close" @click="showModal = false">
              <span>&times;</span>
            </button>
          </div>
          <div class="separator"></div>
          <div class="modal-header  ">
            <p>{{ errorMessage }}</p>
          </div>
          <div class="separator"></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-error" @click="showModal = false">OK</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      passwordVisible: false,
      showModal: false,
      errorMessage: ''
    };
  },

  mounted() {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    if (savedEmail && savedPassword) {
      this.email = savedEmail;
      this.password = savedPassword;
      this.rememberMe = true;
    }

  },
  methods: {
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
    validateFields() {
      if (!this.email || !this.password) {
        this.errorMessage = 'Please fill in your email and password completely.';
        this.showModal = true;
        return false;
      }
      return true;
    },
    validateLogin() {
      if (!this.validateFields()) {
        return;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const containsAtSymbol = /@/;

      if (this.password.length < 8) {
        this.errorMessage = 'Password must be at least 8 characters.';
        this.showModal = true;
      } else if (!containsAtSymbol.test(this.email)) {
        this.errorMessage = 'Email must have @';
        this.showModal = true;
      } else if (!emailPattern.test(this.email)) {
        this.errorMessage = 'Invalid email format';
        this.showModal = true;
      } else if (this.email !== 'veerapat@gmail.com' || this.password !== '12345678') {
        this.errorMessage = 'Your email or password is not correct';
        this.showModal = true;
      } else {
        if (this.rememberMe) {
          localStorage.setItem('email', this.email);
          localStorage.setItem('password', this.password);
        } else {
          localStorage.removeItem('email');
          localStorage.removeItem('password');
        }
        this.$router.push({ name: 'error' });
      }
    }
  }
};
</script>

<style scoped>
h3 {
  font-weight: bold;
}

p {
  font-size: 15px;
  line-height: 1.2;
}

.container-fluid {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #ffffff;
}

.box-container {
  border-radius: 10px;
  width: 350px;
  padding: 20px;
  background-color: #ffffff;
}

.title-container {
  text-align: center;
  margin-bottom: 20px;
}

.form-container {
  margin-bottom: 20px;
}

.form-check-label {
  margin-bottom: 0;
}

.btn-secondary {
  width: 100%;
  background-color: #00BAB3;
  color: white;
  border: none;
}

.btn-secondary:hover {
  background-color: #5aa261;
}

.imgcontainer {
  justify-content: center;
  align-items: center;
}

.logo {
  max-width: 50%;
  height: auto;
}

.password-toggle {
  position: relative;
  display: flex;
  align-items: center;
}

.password-toggle .toggle-password {
  position: absolute;
  right: 10px;
  cursor: pointer;
}

.eye-icon {
  width: 15px;
  height: auto;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-dialog {
  width: 35%;
  max-height: 40%;
  height: 30%;
}

.modal-content {
  background-color: #fcfafa;
  border-radius: 8px;
}

.modal-header {
  border-bottom: none;
  padding: 11px;
}

.separator {
  border-top: 2px solid #ddd;
}

/* .modal-body {
  text-align: left; 
  padding: 20px;
} */

.modal-footer {
  border-top: none;
  padding: 20px;
}

.btn-error {
  border-radius: 10px;
  display: block;
  margin-left: auto;
  width: 65px;
  height: 50px;
  background-color: #146af3;
  color: white;
}

.close {
  font-size: 35px;
  background-color: transparent;
  border: none;
  margin-left: auto;
}
</style>
