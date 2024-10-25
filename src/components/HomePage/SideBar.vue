<template>
    <div>
      <link rel='stylesheet' href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
      <div :class="['sidebar', { close: sidebarClosed }]">
        <div class="logo-details">
          <i class="bi bi-list" @click="toggleMenu"></i>
          <span class="logo_name">Survey Menu </span>
        </div>
        <hr>
        <ul class="nav-links">
          <li>
            <a href="#">
              <i class="bi bi-house"></i>
              <span class="link_name">Home</span> 
            </a>
          </li>
          <li>
            <div class="icon-links" @click="toggleSubMenu('management')">
              <a href="#">
                <i class="bi bi-gear"></i>
                <span class="link_name">Management</span>
              </a>
              <i :class="menuState.management ? 'bx bxs-chevron-up arrow' : 'bx bxs-chevron-down arrow'"></i>
            </div>
            <ul :class="['sub-menu', { open: menuState.management }]">
              <li><a href="#"><i class="bi bi-building"></i>Corporate</a></li>
              <li><a href="#"><i class="bi bi-file-earmark-text"></i>Survey</a></li>
              <li><a href="#"><i class="bi bi-question-square"></i>Questionnaire</a></li>
              <li><a href="#"><i class="bi bi-people-fill"></i>User</a></li>
              <li><a href="#"><i class="bi bi-database"></i>Master data</a></li>
            </ul>
          </li>
          <li>
            <div class="icon-links" @click="toggleSubMenu('report')">
              <a href="#">
                <i class="bi bi-file-text-fill"></i>
                <span class="link_name">Report</span>
              </a>
              <i :class="menuState.report ? 'bx bxs-chevron-up arrow' : 'bx bxs-chevron-down arrow'"></i>
            </div>
            <ul :class="['sub-menu', { open: menuState.report }]">
              <li><a href="#"><i class="bi bi-file-bar-graph"></i>Dashboard</a></li>
              <li><a href="#"><i class="bi bi-file-earmark"></i>File export</a></li>
            </ul>
          </li>
          <li>
            <div class="logout-details">
              <hr width="300">
              <a href="#">
                <div class="profile-content">
                  <i class='bx bx-log-out'></i>
                  <span>Log Out</span>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuState: {
          management: false,
          report: false,
        },
        sidebarClosed: false,
      };
    },
    methods: {
      toggleMenu() {
        this.sidebarClosed = !this.sidebarClosed;
      },
      toggleSubMenu(menu) {
        this.menuState[menu] = !this.menuState[menu];
      }
    }
  };
  </script>
  
  <style scoped>
  /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'); */
  @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    text-decoration: none;
  }

  
  
  .sidebar {
    position: fixed;
    top: 8%;
    left: 1%;
    height: 90%;
    width: 240px;
    background: #11101d;
    border-radius: 15px;
    transition: all 0.4s ease;
  }
  
  .sidebar.close {
    width: 74px;
  }
  
  .sidebar .logo-details {
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
    line-height: 50px;
    cursor: pointer;
  }
  
  .sidebar .logo-details .logo_name {
    font-size: 16px;
    color: #fff;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .sidebar.close .logo_name {
    opacity: 0;
    pointer-events: none;
  }
  
  .sidebar .nav-links {
    height: 100%;
    padding-top: 20px;
  }
  
  .sidebar .nav-links li {
    position: relative;
    list-style: none;
    transition: all 0.4s ease;
  }
  
  .sidebar .nav-links li:hover {
    background: #1d1d31;
  }
  
  .sidebar .nav-links li .icon-links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
  
  .sidebar .nav-links li i {
    height: 50px;
    min-width: 78px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 20px;
  } 
  .sidebar .nav-links li a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  
  .sidebar .nav-links li a .link_name {
    font-size: 16px;
    font-weight: 400;
    color: #fff;
  }
  
  .sidebar .nav-links li .sub-menu {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.4s ease;
  }
  
  .sidebar .nav-links li .sub-menu.open {
    max-height: 200px; /* Adjust this value based on your submenu content */
  }
  
  .sidebar .nav-links li .sub-menu a {
    color: #fff;
    font-size: 16px;
    padding: 5px 0px;
    white-space: nowrap;
    opacity: 0.6;
    transition: all 0.3s ease;
  }
  
  .sidebar .nav-links li .sub-menu a:hover {
    opacity: 1;
  }
  
  .sidebar .logout-details {
    position: fixed;
    bottom: 0;
    left: 0.8%;
    width: 100%;
    padding: 18px 0;
  }
  
  .sidebar .logout-details i {
    height: 52px;
    width: 52px;
    object-fit: cover;
    border-radius: 16px;
    color: #fff;
    text-align: center;
    line-height: 52px;
  }
  
  .arrow {
    transition: all 0.4s ease;
  }
  </style>
  