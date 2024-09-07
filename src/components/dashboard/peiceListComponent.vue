<template>
  <div class="car-list-container">
    <div class="container">
        <nav class="mb-0 pb-0 px-0 py-0">
        <ul class="breadcrumb">
          <li >
            <router-link to="/dashboard" class="main">My Account</router-link> /
            <router-link to="/dashboard" class="active">Shipping Price List</router-link> 

          </li>
        </ul>
      </nav>

     <div class="row w-100 mt-5 mb-3" v-if="!isDataGet">
        <div  class="col-md-6" v-for="(item, index) in 2" :key="index">
              <Skeleton  height="15rem" ></Skeleton>
        </div>
      </div>


    <section class="price-lists mt-5 mb-3" v-else>
      <div class="row">
        <div class="col-md-6 mb-3" v-for="(list , index) in lists" :key="index">
          <router-link :to="'/list/'+list.id">
            <div class="single-list">
              <div class="list-image">
                <img :src="list.image" alt="">
              </div>
              <div class="list-name">
                <h5>{{list.name}}</h5>
              </div>
            </div>
          </router-link>
          
        </div>
      </div>
    </section>

     <div v-if="isDataGet&&lists.length==0" class="mb-4">
    <Message severity="info">No Shipping Lists Yet !</Message>

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
// import Pagination from './PaginationComponent.vue';
import Toast from 'primevue/toast';
import Skeleton from "primevue/skeleton";
import Message from 'primevue/message';

export default {
  
  components: {
    Toast,
    Skeleton,
    Message
  },
  data() {
    return {
            level : '',
                  isDataGet : false,

      cars: [],
      links: [
        { text: 'Dashboard', url: '/dashboard' },
        { text: 'New Cars', url: '/new-cars' },
        // ... Add more links as necessary
      ],
      currentPage: 1,
      totalPages: 10,
      lists : []
    };
  },
  methods: {
    handlePageChange(page) {
      this.currentPage = page;
      
      // Fetch new data based on the current page
    },

    async getShiipingPrices(){
      await axios.get(`shipping-lists`, {
        headers:{
          Authorization : `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
        this.lists = res.data.data.data;
                    this.isDataGet = true ;
      } )
      .catch( (err)=>{
          this.$toast.add({ severity: 'error', summary: "Something Went Wrong", life: 10000 });
      } )
    }
  },
  mounted(){
    this.getShiipingPrices();
  
  }
};
</script>


<style lang="scss">
.car-list-container{
  background:  #F8F8FF;
}
  .single-list{
    position: relative;
    height: 280px;
    border-radius: 10px;
    border: 1px solid rgba(219, 217, 217, 0.87);
    box-shadow: 0px 0px 15px #33333325;
    .list-image , img{
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
    .list-name{
      position: absolute;
      bottom: 0;
      left: 0;
      background: rgba(51, 31, 142, 0.80);
      height: 75px;
      width: 100%;
      display: flex;
      justify-content: start;
      align-items: center;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      padding: 0px 15px;
      h5{
        color:#fff;
        font-size: 23px;
        font-weight: 700;
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
