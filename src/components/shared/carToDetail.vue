<template>

    <router-link :to="'/car/'+car.id">
       <div class="car-item" >
        <img :src="car.image" alt="Car Image" />
        <div class="car-info">
          <h2 class="car-model">{{ car.model }}</h2>
          <ul class="w-100">
            <div class="w-100 d-flex justify-content-between mb-2">
                <li class="text-start">
                    <span class="text-start">Car ID</span>
                    <br> 
                    <span class="text-start detail">{{ car.car_num }}</span>
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
                    <span class="text-start detail">{{ car.vin }}</span>
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
        <div class="assign" v-if="type=='Ready Collected'">
          <button class="btn assing_btn px-5 pt-2 pb-2" @click.stop="visible=true">  Assign To </button>
        </div>
      </div>
    </router-link>
     
    
  

    <Dialog v-model:visible="visible" width="700" modal header="Assign to" :style="{ width: '25rem' }">

     <form action="">
      <div class="form-item mb-3">
        <input type="radio" style="accent-color:#504646">
        <label  class="assing-item"> Ahmed Samir </label>
      </div>
      <div class="form-item mb-3">
        <input type="radio" style="accent-color:#504646">
        <label  class="assing-item"> Ahmed Samir </label>
      </div>
      <div class="form-item mb-3">
        <input type="radio" style="accent-color:#504646">
        <label  class="assing-item"> Ahmed Samir </label>
      </div>
     </form>
  </Dialog>
</template>

<script>
import Dialog from 'primevue/dialog';

export default {

  data() {
    return {
      visible : false ,
   
    };
  },
props: {
  car: {
    type: Object, // specify the type
    required: true // example of additional option
  },
  type: {
    type: String,
  }
},
components:{
  Dialog
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
.assing-item{
  color: #333;
  font-weight: 600;
  margin: 0 15px;
}
  .p-dialog-content{
    padding: 20px;
  }
  .p-dialog{
    width: 40rem !important;
  }
  .p-dialog-title{
    margin: auto;
    margin-top: 20px;
  }
  .car-item{
    position: relative;
    .assign{
      position: absolute;
      right: -20px;
      bottom: -20px;
      .assing_btn{
        border-radius: 10px;
       background: #00CE3A;
       color: #fff;
      }
    }
  }
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
