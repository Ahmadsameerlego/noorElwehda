<template>
  <div class="car-list-container pt-5">
    <div class="container">
      
    <header class="w-25 d-flex justify-content-start align-items-center">
        <span class="line right"></span>
        <h3 class="cat-title fw-bold my-cars-title">Ledger</h3>
        <span class="line left"></span>
    </header>


    <!-- Customer Outstanding  -->
    <section class="row mb-4">
        <div class="col-md-6">
            <section class="outstand w-100 d-flex justify-content-between align-items-baseline">
                <h6 class="mb-0">
                    Customer Outstanding
                </h6>

                <div class="d-flex">
                    <span>
                        4000$
                    </span>

                    <span class="mx-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697" stroke="#322E2D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.5 12H20.33" stroke="#322E2D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>

                    <span>
                        12,000 AED
                    </span>
                </div>
            </section>
        </div>
    </section>
    

    <div class="car-list" >
      
      <carComponentVue v-for="car in cars" :key="car.id" :car="car" :type="type"/>
    </div>
    <footer class="mb-5" >
      <pagination :totalPages="totalPages" :currentPage="currentPage" @pageChanged="handlePageChange" />
    </footer>


    </div>
  </div>
</template>

<script>
import carComponentVue from '../shared/carComponent.vue';
import Pagination from './PaginationComponent.vue';

export default {
  components: {
    Pagination,
    carComponentVue
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
   
  },
};
</script>


<style  lang="scss">
    .outstand{
        background-color: #FEF0F4;
        border: 1.2px solid #CC2525;
        border-radius: 7px;
        padding: 10px;
        color:#CC2525 ;
        h6, span{font-weight: 600;}
    }
  .apexcharts-legend{display: none !important;}
  .parts{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .item{
      width: 200px;
      .icon{
        width: 20px;
        height: 20px;
      }
      .text{
        font-weight: 500;
      }
    }
  }
</style>

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
<style scoped lang="scss">
.card-filter{
    border-radius: 10px;
    border: 1px solid rgba(219, 217, 217, 0.87);
    background:  #FFF;

}
.line{
    width: 50px;
    background-color: #331F8E;
    height: 3px;
    margin-top: -10px;
    &.right{
        margin-right: 15px;
        
    }
    &.left{
        margin-left: 15px;
    }
}
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
