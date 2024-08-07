<template>
<div class="container">
   <header class="navbar">
    <div class="navbar__logo">
      <img src="@/assets/imgs/logo.svg" alt="Logo" />
    </div>
    <nav class="navbar__links">
      <router-link to="/" class="navbar__link">Home</router-link>
      <!-- <router-link to="/" class="navbar__link">About us</router-link> -->
      <router-link to="/dashboard" class="navbar__link">Dashboard</router-link>
      <router-link to="/mycars" class="navbar__link">My Cars</router-link>
      <router-link to="/ledger" class="navbar__link">Ledger</router-link>
      <!-- <router-link to="/" class="navbar__link">Contact us</router-link> -->
      <router-link to="/subCustomers" class="navbar__link">Subcustomers</router-link>
    </nav>
    <div class="navbar__actions">
      <div class="dropdown">
          <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <span>En</span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Ar</a></li>
          </ul>
        </div>

      
      <div class="navbar__notification mx-4">
          <i class="fa-regular fa-bell"></i>
      </div>
      <router-link to="/login" class="navbar__login">Login</router-link>
    </div>
  </header>
</div>
 
</template>

<script>
export default {
  name: 'NavbarComponent',
};
</script>

<style lang="scss" scoped>
.navbar__logo img{
  width: 200px;
height: 150px;
object-fit: contain;
}
.fa-bell{font-size: 20px;}
.navbar__link{
  color:  #322E2D;
font-family: Poppins;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-decoration: none;
font-family: Poppins;

margin: 0 15px;
}
.navbar__login{
  border-radius:  4px;
  
border: 1px solid  #331F8E !important;
background: rgba(255, 255, 255, 0.01);
width: 150.39px;
padding: 6px 0;
color:  #331F8E;
text-align: center;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 32px; /* 200% */
text-decoration: none;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: white;
  
  &__logo img {
    height: 50px;
  }
  
  &__links {
    display: flex;
    gap: 20px;
    
    &__link {
      text-decoration: none;
      color: black;
      font-weight: bold;
      
      &--active {
        color: #5A33AA; // Your primary color
      }
    }
  }
  
  &__actions {
    display: flex;
    align-items: center;
    gap: 15px;
    
    &__language {
      display: flex;
      align-items: center;
      cursor: pointer;
      
      span {
        margin-right: 5px;
      }
      
      i {
        font-size: 10px;
      }
    }
    
    &__notification i {
      font-size: 20px;
      cursor: pointer;
    }
    
    &__login {
      padding: 5px 15px;
      border: 2px solid #5A33AA; // Your primary color
      background-color: white;
      color: #5A33AA; // Your primary color
      font-weight: bold;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s, color 0.3s;
      
      &:hover {
        background-color: #5A33AA; // Your primary color
        color: white;
      }
    }
  }
}
</style>
