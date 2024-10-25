<template>
    <div class="box-footer">
      <div class="left-footer">
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>© 2021 Hope UI, Made with ❤ by IQONIC Design.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppFooter',
  };
  </script>
  
  <style scoped>
  .box-footer {
    display: flex;
    justify-content: left; /* Center the footer content horizontally */
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%; /* Make footer span full width */
    height: 51px;
    background-color: #f8f9fa; /* Optional background color for footer */
    padding: 10px 0; 
    padding-left: 257px;
  }
  
  .left-footer {
    display: flex;
    gap: 20px; /* Space between each footer item */
    align-items: center; /* Align items vertically */
    font-size: 14px; /* Adjust font size as needed */
    color: #6c757d; /* Adjust text color as needed */
  }
  </style>
  