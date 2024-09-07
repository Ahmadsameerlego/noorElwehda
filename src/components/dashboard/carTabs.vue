<template>
  <div class="sub-info position-relative pb-5">
    <div class="container">
      <nav class="mb-0 pb-0 px-0 py-0 pt-4 mb-4">
        <ul class="breadcrumb">
          <li>
            <router-link to="/dashboard" class="main">Avilable Cars</router-link>
            /
           
            <router-link to="/dashboard" class="active">Car Details</router-link>
          </li>
        </ul>
      </nav>

      <!-- sub customer info  -->
      <section v-motion-slide-visible-left :delay="400" :duration="1500">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Car Details
            </button>
          </li>
          <li class="nav-item mx-4" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
              @click="getAssignedCars"
            >
              Car Tracker
            </button>
          </li>
          <li class="nav-item mx-4" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
              @click="getAssignedCars"
            >
              Car Finance
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="gallery-tab"
              data-bs-toggle="tab"
              data-bs-target="#gallery"
              type="button"
              role="tab"
              aria-controls="gallery"
              aria-selected="false"
              @click="getAssignedCars"
            >
              Gallery
            </button>
          </li>
        </ul>
        <div class="tab-content mt-5" id="myTabContent">
            <!-- card details  -->
          <div
            class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <section class="cust-info">
              <!-- single  -->
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <span class="text"> Car ID </span>
                <span class="color">
                  {{ car.car_num }}
                </span>
              </div>
              <!-- single  -->
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <span class="text"> Current Step </span>
                <span class="color" style="color:#2DCA72">
                  {{ car.status }}
                </span>
              </div>
           
              <!-- single  -->
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <span class="text"> Car Mark </span>
                <span class="color">
                  {{ car.brand }}
                </span>
              </div>
           
              <!-- single  -->
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <span class="text"> Car Model </span>
                <span class="color">
                  {{ car.model }}
                </span>
              </div>
           
              <!-- single  -->
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <span class="text"> Year </span>
                <span class="color">
                  {{ car.year }}
                </span>
              </div>
           
              <!-- single  -->
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <span class="text"> Transmission </span>
                <span class="color">
                  {{ car.transmission_type }}
                </span>
              </div>
           
              <!-- single  -->
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <span class="text"> Fuel </span>
                <span class="color">
                  {{ car.fuel_type }}
                </span>
              </div>
           
              <!-- single  -->
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <span class="text"> VIN </span>
                <span class="color">
                  {{ car.vin }}
                </span>
              </div>
           
              <!-- single  -->
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <span class="text"> Color </span>
                <span class="color">
                  {{ car.color }}
                </span>
              </div>
           
              <!-- single  -->
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <span class="text"> Body Type </span>
                <span class="color">
                  {{ car.body_type }}
                </span>
              </div>
           
              <!-- single  -->
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <span class="text"> Odometer </span>
                <span class="color">
                  {{ car.distance }} KM
                </span>
              </div>
           
              <!-- single  -->
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <span class="text"> Engine Type </span>
                <span class="color">
                  {{ car.engine_type }}
                </span>
              </div>
           
              <!-- single  -->
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <span class="text"> Cylinders </span>
                <span class="color">
                  {{ car.engine_cylinder }}
                </span>
              </div>
           
              <!-- single  -->
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <span class="text"> Auction Name </span>
                <span class="color">
                  {{ car.auction }}
                </span>
              </div>
           
              <!-- single  -->
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <span class="text"> Purchasing Date </span>
                <span class="color">
                  {{ car.purchasing_date }}
                </span>
              </div>
           
              <!-- single  -->
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <span class="text"> Key </span>
                <span class="color">
                  {{ car.key }}
                </span>
              </div>
           
              <!-- single  -->
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <span class="text"> Primary Damage </span>
                <span class="color">
                  {{ car.damage }}
                </span>
              </div>
           
              <!-- single  -->
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <span class="text"> Container </span>
                <span class="color">
                  {{ car.container }}
                </span>
              </div>
           
              <!-- single  -->
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <span class="text"> Estimation Arrival Date </span>
                <span class="color">
                  {{ car.estimation_arrive_date }}
                </span>
              </div>
           
              <!-- single  -->
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <span class="text"> Picked Up Location </span>
                <span class="color">
                  {{ car.pickup_location }}
                </span>
              </div>
           
            </section>
          </div>

          <!-- car tracker  -->
          <div
            class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div class="row mt-4">
              <div class="col-md-6 mb-3" v-for="(part, index) in parts" :key="index">
                <section class="history parts flex-column justify-content-between align-items-start">
                     <div
                        class="item d-flex"
                    >
                        <span v-if="part.car_status=='جديدة'||part.car_status=='new cars'" class="icon" style="background: #14b8a6"></span>
                        <span v-if="part.car_status=='تم سحبها'||part.car_status=='towing'" class="icon" style="background: #3b82f6"></span>
                        <span v-if="part.car_status=='تم تخزينها'||part.car_status=='warehouse'" class="icon" style="background: #6366f1"></span>
                        <span v-if="part.car_status=='تم شحنها'||part.car_status=='shipping'" class="icon" style="background: #facc15"></span>
                        <span v-if="part.car_status=='في الميناء'||part.car_status=='custom'" class="icon" style="background: #a855f7"></span>
                        <span v-if="part.car_status=='تم وصولها'||part.car_status=='shipping'" class="icon" style="background: #facc15"></span>
                        <span class="text mx-3" style="color: #322e2d">
                        {{part.car_status}}
                        </span>
                    </div>

                    <div class="d-flex justify-content-between align-items-center w-100 mt-3">
                        <div>
                            <div class="date text-start">
                                Start Date 
                            </div>
                            <div class="color"> 
                                {{part.start_date}}
                            </div>
                        </div>
                        <div>
                            <div class="date text-start">
                                End Date 
                            </div>
                            <div class="color"> 
                                {{part.end_date}}
                            </div>
                        </div>
                    </div>
                </section>
              </div>
            </div>
            <!-- <div v-else>
              <Message severity="info"
                >No History For This Car Yet !</Message
              >
            </div> -->
          </div>


          <!-- car tracker  -->
          <div
            class="tab-pane fade"
            id="gallery"
            role="tabpanel"
            aria-labelledby="gallery-tab"
          >
            <div class="history parts">
                 <div
                        class="item d-flex"
                    >
                        <span  class="icon" style="background: #14b8a6"></span>
                        <span class="text mx-3" style="color: #322e2d">
                        New Cars
                        </span>
                    </div>

                <div class="row">
                    <div class="col-md-2 mb-3" v-for="(photo, index) in photos" :key="index">
                        <div class="gallery-item">
                            <img :src="photo.image"  alt="">
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

  <Toast />
</template>

<script>
import axios from "axios";
import Toast from "primevue/toast";

export default {
  data() {
    return {
      username: "",
      password: "",
      block: false,
      parts: [],
      car: {},
      reason: "",
      photos : [],
      is_blocked: null,
    };
  },
  components: {
    Toast,
  },
  methods: {
  
    async getCarDetails() {
      await axios
        .get(`car-details/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          this.car = res.data.data;
        
        })
        .catch((err) => {
          console.error(err);
        });
    },
    async getCarHistory() {
      await axios
        .get(`car-status-history/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          this.parts = res.data.data;
        
        })
        .catch((err) => {
          console.error(err);
        });
    },
    async getCarGallarey() {
      await axios
        .get(`car-gallery/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          this.photos = res.data.data[0].images ;
        
        })
        .catch((err) => {
          console.error(err);
        });
    },
  
  },
  mounted() {
    this.getCarDetails();
    this.getCarHistory();
    this.getCarGallarey();
  },
};
</script>

<style scoped lang="scss">
.gallery-item{
    img{
        width: 200px;
        height: 200px;
        border-radius: 7px;
        object-fit: contain;
    }
}
.history{
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid rgba(219, 217, 217, 0.87);
    padding: 20px;
}
.reason-text {
  color: #e50930;
  font-weight: bold;
}
.block-reason {
  color: #979797;
}
.main-btn.block {
  background-color: #e50930 !important;
}
.main-btn.Unblock {
  background-color: #322E2D !important;
}
.cust-info {
  background-color: #fff;
  border-radius: 10px;
  border: 1.3px solid rgba(219, 217, 217, 0.87);
  padding: 20px;
}
.sub-info {
  background-color: #f3f3ff;
}

.nav-tabs {
  display: flex;
  justify-content: center;
  border-bottom: none;
}
.nav-tabs .nav-link {
  font-weight: bold;
  border-radius: 7px;
  padding: 13px 12px;
  background: #fff;
  width: 200px;
  color: #979797;
}
.nav-tabs .nav-link.active {
  background: #34268f;
  color: #fff;
  margin: 0 15px;
}
</style>
