<template>
  <div class="car-list-container">
    <div class="container">
        <nav class="mb-0 pb-0">
        <ul class="breadcrumb">
          <li >
            <router-link to="/dashboard" class="main">Dashboard</router-link> /
            <router-link to="/dashboard" class="active">New Cars</router-link> 

          </li>
        </ul>
      </nav>

    <header>
      <h3 class="cat-title fw-bold">New Cars</h3>
      
    </header>
    <div class="car-list">
      <div class="car-item" v-for="car in cars" :key="car.id">
        <img :src="car.image" alt="Car Image" />
        <div class="car-info">
          <h2 class="car-model">{{ car.model }}</h2>
          <ul class="w-100">
            <div class="w-100 d-flex justify-content-between mb-2">
                <li class="text-start">
                    <span class="text-start">Car ID</span>
                    <br> 
                    <span class="text-start detail">{{ car.carID }}</span>
                </li>
                <li class="text-start">
                    <span class="text-start">Lot</span>
                    <br> 
                    <span class="text-start detail">{{ car.lot }}</span>
                </li>
            </div>

             <div class="w-100 d-flex justify-content-between mb-2">
                <li class="text-start">
                    <span class="text-start">Towing Start Date</span>
                    <br> 
                    <span class="text-start detail">{{ car.carID }}</span>
                </li>
                <li class="text-start">
                    <span class="text-start">Auction</span>
                    <br> 
                    <span class="text-start detail">{{ car.lot }}</span>
                </li>
            </div>
             <div class="w-100 d-flex justify-content-between mb-2">
                <li class="text-start">
                    <span class="text-start">Vin</span>
                    <br> 
                    <span class="text-start detail">{{ car.carID }}</span>
                </li>
                <li class="text-start">
                    <span class="text-start">Start</span>
                    <br> 
                    <span class="text-start detail">{{ car.lot }}</span>
                </li>
            </div>
            <!-- <li><strong>LOT:</strong> {{ car.lot }}</li>
            <li><strong>Purchasing Date:</strong> {{ car.purchaseDate }}</li>
            <li><strong>VIN:</strong> <a :href="car.vinLink">{{ car.vin }}</a></li>
            <li><strong>Auction:</strong> {{ car.auction }}</li>
            <li><strong>Export:</strong> {{ car.export }}</li>
            <li><strong>State:</strong> {{ car.state }}</li> -->
          </ul>
        </div>
      </div>
    </div>
    <footer class="mb-5">
      <pagination :totalPages="totalPages" :currentPage="currentPage" @pageChanged="handlePageChange" />
    </footer>
    </div>
  </div>
</template>

<script>
import Pagination from './PaginationComponent.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      cars: [
        {
          id: 1,
          model: 'Hyundai, Accent, 2019',
          carID: 'AL00023',
          lot: '43432',
          purchaseDate: '21/06/2024',
          vin: 'FSDD533555ED',
          vinLink: '#',
          auction: 'Auction',
          export: 'Export',
          state: 'CA',
          image: require('@/assets/imgs/s1.jpg.png'),
        },
        // ... Add more cars as necessary
      ],
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
  },
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
