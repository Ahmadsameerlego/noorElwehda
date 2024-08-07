<template>
  <div class="sub-info position-relative pb-5">

     <div class="container">
        <nav class="mb-0 pb-0 px-0 py-0 pt-4 mb-4">
        <ul class="breadcrumb">
          <li >
            <router-link to="/dashboard" class="main">My Accounts</router-link> /
            <router-link to="/subCustomers" class="main">SubCustomers</router-link> /
            <router-link to="/dashboard" class="active">show</router-link> 

          </li>
        </ul>
      </nav>
    
    <!-- sub customer info  -->
    <section v-motion-slide-visible-left
 :delay="400"
    :duration="1500">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">SubCustomer Details</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Assigned Cars</button>
            </li>
            
            </ul>
            <div class="tab-content mt-5" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                    <section class="cust-info">
                        <!-- single  -->
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text">
                                Parent Customer ID
                            </span>
                            <span class="color">
                                C000004
                            </span>
                        </div>
                        <!-- single  -->
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text">
                                Parent Customer Name
                            </span>
                            <span class="color">
                                Majid Salehi
                            </span>
                        </div>
                        <!-- single  -->
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text">
                                Child Customer ID
                            </span>
                            <span class="color">
                                Sub0000343
                            </span>
                        </div>
                        <!-- single  -->
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text">
                                Child Customer Name
                            </span>
                            <span class="color">
                                Rashed Sultan
                            </span>
                        </div>
                        <!-- single  -->
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text">
                                Phone Number
                            </span>
                            <span class="color">
                                +971561919389
                            </span>
                        </div>
                        <!-- single  -->
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text">
                                Address
                            </span>
                            <span class="color">
                                5 Al Mawalid Street, Jebel Ali
                            </span>
                        </div>
                    </section>



                    <section class="cust-info mt-4">
                        <h5 class="reason-text text-start">Block Reason</h5>
                        <p class="block-reason text-start">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                        </p>
                    </section>

                    <div class="mt-3 d-flex justify-content-center">
                        <router-link to="/editSubCustomer/1" class="main-btn w-25 btn pt-3 pb-3 fw-bold mx-3"> Edit </router-link>
                        <button class="main-btn block w-25 btn pt-3 pb-3 fw-bold mx-3" @click="block=true"> Block </button>
                    </div>
                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                    <div class="row mt-4">
                        <div class="col-md-6 mb-3" v-for="car in cars" :key="car.id">
                                  <carComponentVue   :car="car"  />
                        </div>
                    </div>
                    
                </div>
            </div>
    </section>
     </div>
  </div>



    <Dialog v-model:visible="block" width="700" modal header="Block Reason" :style="{ width: '25rem' }">

        <form action="">
            <div class="form-group">
                <label for=""> Reason </label>
                <textarea name="" class="form-control" id="" cols="30" rows="7"></textarea>
            </div>

            <div class="mt-3 flex-center">
                <button class="btn main-btn pt-3 pb-3 w-25 fw-bold"> Confirm </button>
            </div>
        </form>
    </Dialog>


</template>

<script>
import Dialog from 'primevue/dialog';
import carComponentVue from '../shared/carComponent.vue';

export default {
  data() {
    return {
      username: '',
      password: '',
      block : false,
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
    };
  },
  components:{
    Dialog,
    carComponentVue
  },
  methods: {
    signIn() {
      // Add your sign-in logic here
      console.log('Sign in with', this.username, this.password);
    }
  }
};
</script>

<style scoped lang="scss">
.reason-text{
    color: #E50930;
    font-weight: bold;
}
.block-reason{
    color:#979797 ;
}
.main-btn.block{
    background-color: #E50930 !important;
}
.cust-info{
    background-color: #fff;
    border-radius: 10px;
    border: 1.3px solid  rgba(219, 217, 217, 0.87); 
    padding: 20px;
}
.sub-info {
  background-color: #f3f3ff;
}

.nav-tabs{
    display: flex;
    justify-content: center;
    border-bottom: none;
}
.nav-tabs .nav-link{
    font-weight: bold;
    border-radius: 7px;
    padding: 13px 12px;
    background: #fff;
    width: 200px;
    color: #979797;

}
.nav-tabs .nav-link.active{
        background: #34268f;
    color: #fff;
    margin: 0 15px;
}
</style>
