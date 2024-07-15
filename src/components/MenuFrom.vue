<template>
    <div>
      <head>
        <!-- Boicon CDN Link  -->
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
      </head>
  
      <body>
        <hr>
        <div class="sidebar close">
          <div class="logo-details">
            <i class='bx bx-menu'></i>
            <span class="logo_name"> Survey Menu </span>
          </div>
          <hr>
          <ul class="nav-links">
            <li>
              <a href="#">
                <i class='bx bx-home-alt-2 '></i>
                <span class="link_name">Home</span>
              </a>
            </li>
            <li>
              <div class="icon-links">
                <a href="#">
                  <i class='bx bx-cog'></i>
                  <span class="link_name">Management</span>
                </a>
                <i class='bx bxs-chevron-down arrow'></i>
              </div>
              <ul class="sub-menu">
                <li><a href="#"> Corporate</a></li>
                <li><a href="#"> Survey</a></li>
                <li><a href="#"> Questionair</a></li>
                <li><a href="#"> User</a></li>
                <li><a href="#"> Master data</a></li>
              </ul>
            </li>
            <li>
              <div class="icon-links">
                <a href="#">
                  <i class='bx bx-file'></i>
                  <span class="link_name">Report</span>
                </a>
                <i class='bx bxs-chevron-down arrow '></i>
              </div>
              <ul class="sub-menu">
                <li><a href="#"> Dashborad</a></li>
                <li><a href="#"> File export</a></li>
              </ul>
            </li>
            <li>
              <div class="profile-details">
                <a href="#"><hr width="300">
                <div class="profile-content">
                  <i class='bx bx-log-out'></i>
                  <span>Log Out</span>
                </div>
              </a>
              </div>
            </li>
          </ul>
        </div>
      </body>
    </div>
  </template>
  
  <script>
  export default {
    name: "Menu",
  };
  let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
      let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
      arrowParent.classList.toggle("showMenu");
    });
  }
  </script>
  <style scoped>
  /* Google Fonts Import Link */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    text-decoration:none;
  }
  .sidebar{
    position: fixed ;
    left: 0;
    height: 100%;
    width: 280px;
    background: #11101d;
  }
  .sidebar .logo-details{
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .sidebar .logo-details i {
    font-size: 30px;
    color: #fff;
    height: 50px;
    min-width: 78px;
    text-align: center;
    line-height: 50px ;
  }
  .sidebar .logo-details .logo_name {
    font-size: 22px;
    color: #fff;
    font-weight: 600;
  }
  .sidebar .nav-links{
    height: 100%;
    padding-top: 30px;
  }
  .sidebar .nav-links li {
    position: relative;
    list-style: none;
    transition: all 0.4s ease;
    
  }
  .sidebar .nav-links li:hover{
    background: #1d1d31;
  }
  .sidebar .nav-links li .icon-link{
    display: flex;
    align-items: center;
    justify-content: space-between;
  
  }
  .sidebar .nav-links li i {
    height: 50px;
    min-width: 78px;
    text-align: center;
    line-height: 50px ;
    color:#fff; 
    font-size: 20px ;
  }
  .sidebar .nav-links li i a{
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  .sidebar .nav-links li i a .link_name{
    font-size: 18px;
    font-weight: 400;
    color: #fff;
  }
  .sidebar .nav-links li .sub-menu{
    padding: 6px 6px 14px 80px;
    margin-top: -10px;
    background: #1d1b31;
    /* display: none; */
  
  }
  .sidebar .nav-links li .sub-menu a{
    color: #fff;
    font-size: 15px;
    padding: 5px 0px;
    white-space: nowrap;
    opacity: 0.6;
    transform: all 0.3 ease;
  }
  
  .sidebar .nav-links li .sub-menu a:hover{
    opacity: 1;
  }
  .sidebar.close .nav-links li .sub-menu {
    position: absolute;
    left: 100%;
    top: -10px;
    margin-top: 0;
    padding: 10px 20px;
    border-radius: 0px 6px 6px 0px;
    transition: all 0.4 ease;
    opacity: 0;
    pointer-events: none;
  }
  .sidebar.close .nav-links li:hover .sub-menu{
    top: 0;
    opacity: 1;
    pointer-events: auto;
  }
  .sidebar .nav-links li .sub-menu .link_name{
    display: none;
  
  }
  .sidebar.close .nav-links li .sub-menu .link_name {
    font-size: 18px;
    opacity: 1;
    display: block;
  }
  .sidebar.close .nav-links li .sub-menu.blank{
    opacity: 1;
    pointer-events: auto;
    padding: 3px 20px 6px 16px ;
  }
  .sidebar.close .nav-links li:hover .sub-menu.blank{
    top:50%;
    transform: translateY(-50%);
  }
  .sidebar .profile-details {
    position: fixed ;
    bottom: 0;
  }
  .sidebar .profile-details i{
    height: 52px;
    width: 52px;
    object-fit: cover;
    border-radius:16px ;
  }
  /* underline */
  .underline {
    position: fixed;
    bottom: 0;
  }
  </style>
  