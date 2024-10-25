<template>
    <div class="container-fluid">
      <div class="left-container">
        <div class="box-container">
          <div class="title-container">
            <h1>Sign In</h1>
            <p class="lead">Sign in to stay connected.</p>
          </div>
          <div class="form-container">
            <form class="needs-validation" @submit.prevent="verify" novalidate>
              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form2Example1">Email</label>
                <input type="email" id="form2Example1" class="form-control" v-model="email" :class="{ 'is-invalid': emailInvalid }" @click="handleChange"/>
              </div>
              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form2Example2">Password</label>
                <input type="password" id="form2Example2" class="form-control" v-model="password" :class="{ 'is-invalid': passwordInvalid }" @click="handlePasswordChange"/>
              </div>
  
              <div class="row mb-4">
                <div class="col d-flex justify-content-center">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                    <label class="form-check-label" for="form2Example31"> Remember me </label>
                  </div>
                </div>
  
                <div class="col">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>
  
              <button type="submit" class="btn btn-secondary" :disabled="loading || !email || !password">
                <template v-if="loading">
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span>&nbsp;Loading...</span>
                </template>
                <span v-else>Sign in</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="right-container"></div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'LoginForm',
    setup() {
      const email = ref('');
      const password = ref('');
      const emailInvalid = ref(false);
      const passwordInvalid = ref(false);
      const loading = ref(false);
      const invalidMessage = ref('');
  
      const handleChange = () => {
        emailInvalid.value = false;
      };
  
      const handlePasswordChange = () => {
        passwordInvalid.value = false;
      };
  
      const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
      };
  
      const verify = async () => {
        // Validate email
        if (!validateEmail(email.value)) {
          invalidMessage.value = 'Please provide a valid email address.';
          emailInvalid.value = true;
          Warning.value.showModal(); // Show warning modal
          return;
        }
  
        // Validate password
        if (!password.value) {
          invalidMessage.value = 'Password is required.';
          passwordInvalid.value = true;
          Warning.value.showModal(); // Show warning modal
          return;
        }
  
        loading.value = true;
        
        // Simulate API request (replace with real API call)
        try {
          const response = await fakeApiCall(email.value, password.value); // Mock API call
          
          if (!response.success) {
            invalidMessage.value = 'Invalid email or password.';
            Warning.value.showModal();
          } else {
            // Handle success (e.g., navigate to another page)
            console.log('Logged in successfully');
          }
        } catch (error) {
          invalidMessage.value = 'An error occurred. Please try again later.';
          Warning.value.showModal();
        } finally {
          loading.value = false;
        }
      };
  
      // Mock API call
      const fakeApiCall = (email, password) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ success: email === 'test@example.com' && password === 'password123' });
          }, 1000);
        });
      };
  
      return {
        email,
        password,
        emailInvalid,
        passwordInvalid,
        loading,
        invalidMessage,
        verify,
        handleChange,
        handlePasswordChange
      };
    },
  };
  </script>
  
  <style scoped>
  .container-fluid {
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
  }
  
  .left-container {
    width: 50%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('src/assets/images/bakertilly-bg-logo.png');
    background-repeat: no-repeat;
    background-position: top left;
    background-size: auto 25%;
  }
  
  .right-container {
    width: 50%;
    background-image: url('src/assets/images/bakertilly-bg.png');
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .box-container {
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50%;
    width: 50%;
    background-color: rgb(255, 255, 255);
    gap: 5%;
  }
  
  .title-container {
    text-align: center;
  }
  
  .form-container {
    width: 100%;
  }
  
  .btn-secondary {
    width: 100%;
    background-color: var(--primary-color);
    color: var(--font-primary-color);
  }
  
  @media only screen and (max-width: 768px) {
    .container-fluid {
      flex-direction: column;
    }
  
    .left-container,
    .right-container {
      width: 100%;
      height: 50vh;
    }
  }
  </style>
  