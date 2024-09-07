<template>
  <div class="sub-info position-relative pb-5">
    <div class="container">
      <nav class="mb-0 pb-0 px-0 py-0 pt-4 mb-4">
        <ul class="breadcrumb">
          <li>
            <router-link to="/dashboard" class="main">My Accounts</router-link>
            /
            <router-link to="/subCustomers" class="main"
              >SubCustomers</router-link
            >
            /
            <router-link to="/dashboard" class="active">show</router-link>
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
              SubCustomer Details
            </button>
          </li>
          <li class="nav-item" role="presentation">
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
              Assigned Cars
            </button>
          </li>
        </ul>
        <div class="tab-content mt-5" id="myTabContent">
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
                <span class="text"> Child Customer ID </span>
                <span class="color">
                  {{ customer.customer_num }}
                </span>
              </div>
              <!-- single  -->
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <span class="text"> Child Customer Name </span>
                <span class="color">
                  {{ customer.name }}
                </span>
              </div>
              <!-- single  -->
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <span class="text"> Phone Number </span>
                <span class="color">
                  {{ customer.full_phone }}
                </span>
              </div>
              <!-- single  -->
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <span class="text"> Address </span>
                <span class="color">
                  {{ customer.address }}
                </span>
              </div>
            </section>

            <section
              class="cust-info mt-4"
              v-if="customer.block_reason !== null"
            >
              <h5 class="reason-text text-start">Block Reason</h5>
              <p class="block-reason text-start">
                {{ customer.block_reason }}
              </p>
            </section>

            <div class="mt-3 d-flex justify-content-center">
              <router-link
                :to="'/editSubCustomer/'+this.$route.params.id"
                class="main-btn w-25 btn pt-3 pb-3 fw-bold mx-3"
              >
                Edit
              </router-link>
              <button
                v-if="customer.block_reason == null"
                class="main-btn block w-25 btn pt-3 pb-3 fw-bold mx-3"
                @click="block = true"
              >
                Block
              </button>
              <button
                v-if="customer.block_reason !== null"
                class="main-btn Unblock w-25 btn pt-3 pb-3 fw-bold mx-3"
                @click="block = true"
              >
                UnBlock
              </button>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div class="row mt-4" v-if="cars.length > 0">
              <div class="col-md-6 mb-3" v-for="car in cars" :key="car.id">
                <carComponentVue :car="car" />
              </div>
            </div>
            <div v-else>
              <Message severity="info"
                >No Assigend Cars for this user Yet !</Message
              >
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

  <Dialog
    v-model:visible="block"
    width="700"
    modal
    :header="customer.block_reason == null?'Block reason':'Unblock Reason'"
    :style="{ width: '25rem' }"
  >
    <form @submit.prevent="blockUser">
      <div class="form-group">
        <label for=""> Reason </label>
        <textarea
          name=""
          class="form-control"
          id=""
          cols="30"
          rows="7"
          v-model="reason"
        ></textarea>
      </div>

      <div class="mt-3 flex-center">
        <button class="btn main-btn pt-3 pb-3 w-25 fw-bold">Confirm</button>
      </div>
    </form>
  </Dialog>
  <Toast />
</template>

<script>
import Dialog from "primevue/dialog";
import carComponentVue from "../shared/carComponent.vue";
import axios from "axios";
import Message from "primevue/message";
import Toast from "primevue/toast";

export default {
  data() {
    return {
      username: "",
      password: "",
      block: false,
      cars: [],
      customer: {},
      reason: "",
      is_blocked: null,
    };
  },
  components: {
    Dialog,
    carComponentVue,
    Message,
    Toast,
  },
  methods: {
    async blockUser() {
      const fd = new FormData();
      await axios
        .patch(
          `change-block-status?user_id=${this.$route.params.id}&is_blocked=${this.is_blocked}&block_reason=${this.reason}`,
          fd,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          if (res.data.key == "success") {
            this.$toast.add({
              severity: "success",
              summary: res.data.msg,
              life: 3000,
            });

            setTimeout(() => {
              this.block = false;
              this.getSubCustomer();
            }, 2000);
          } else {
            this.$toast.add({
              severity: "error",
              summary: res.data.msg,
              life: 6000,
            });
          }
        })
        .catch((err) => {
          this.$toast.add({
            severity: "error",
            summary: "something wrong",
            life: 3000,
          });
        });
    },
    async getSubCustomer() {
      await axios
        .get(`account-details/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          this.customer = res.data.data;
          if (res.data.data.is_blocked == true) {
            this.is_blocked = 1;
          } else {
            this.is_blocked = 0;
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    async getAssignedCars() {
      await axios
        .get(`cars-by-user?user_id=${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          this.cars = res.data.data.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  mounted() {
    this.getSubCustomer();
  },
};
</script>

<style scoped lang="scss">
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
