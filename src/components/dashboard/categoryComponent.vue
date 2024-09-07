<template>
  <div class="car-list-container">
    <div class="container">
        <nav class="mb-0 pb-0 px-0 py-0">
        <ul class="breadcrumb">
          <li >
            <router-link to="/dashboard" class="main">Dashboard</router-link> /
            <router-link to="/dashboard" class="active">{{ level }}</router-link> 

          </li>
        </ul>
      </nav>

    <header>
      <h3 class="cat-title fw-bold">{{ level }}</h3>
      
    </header>
    <div class="car-list mb-5">
      
      <carComponentVue v-for="car in cars" :key="car.id" :car="car"/>
    </div>
    <!-- <footer class="mb-5">
      <pagination :totalPages="totalPages" :currentPage="currentPage" @pageChanged="handlePageChange" />
    </footer> -->
    </div>
  </div>
  <Toast />
</template>

<script>
import axios from 'axios';
import carComponentVue from '../shared/carToDetail.vue';
// import Pagination from './PaginationComponent.vue';
import Toast from 'primevue/toast';

export default {
  
  components: {
    // Pagination,
    carComponentVue,
    Toast
  },
  data() {
    return {
            level : '',
      cars: [],
      links: [
        { text: 'Dashboard', url: '/dashboard' },
        { text: 'New Cars', url: '/new-cars' },
        // ... Add more links as necessary
      ],
      currentPage: 1,
      totalPages: 10,
    };
  },
  methods: {
    handlePageChange(page) {
      this.currentPage = page;
      // Fetch new data based on the current page
    },

    async getCarsByCategory(){
      await axios.get(`cars-by-category?category_id=${this.$route.params.id}`, {
        headers:{
          Authorization : `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
        this.cars = res.data.data.data
      } )
      .catch( (err)=>{
                      this.$toast.add({ severity: 'error', summary: "Something Went Wrong", life: 10000 });
      } )
    }
  },
  mounted(){
    this.getCarsByCategory();
    let level = localStorage.getItem('level') ;
    if(level){
      if(level == "new_cars"){
        this.level = "New Cars";
      }
      else if(level == "towing"){
        this.level = "Towing";
      }
      else if(level == "warehouse"){
        this.level = "Warehouse";
      }
      else if(level == "shipping"){
        this.level = "Shipping";
      }
      else if(level == "custom"){
        this.level = "Custom";
      }
      
      else if(level == "ready_collected"){
        this.level = "Ready Collected";
      }
      else{
        this.level = "Cars";

      }
    }
  }
};
</script>


<style lang="scss">
    .breadcrumb{
        a{text-decoration: none;}
        .main{
            color:  #979797;
            font-family: Poppins;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px; /* 133.333% */
        }
        .active{
            color:  #331F8E;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 16px; /* 133.333% */

        }
    }
</style>
<style scoped>
.detail{
color:  #331F8E;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 109.5%;

}
.car-model{
    color:  #322E2D;
font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-align: start;
}
.cat-title{
color: #331F8E;
font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.car-list-container {
  padding: 5px;
  background-color: #f3f3ff;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  color: #4d2e90;

}

 nav ul {
  display: flex;
  list-style: none;
  gap: 10px;
}

 nav ul li {
  font-size: 1.2em;
}

.car-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 10px;
}

.car-item {
    height: 230px;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 20px;
}

.car-item img {
  width: 150px;
  height: 200px;
  border-radius: 10px;
}

.car-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
}



.car-info ul {
  list-style: none;
  padding: 0;
}

.car-info ul li {
  font-size: 1em;
  line-height: 1.5;
}

footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
