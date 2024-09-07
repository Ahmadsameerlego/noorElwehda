<template>
  <div class="car-list-container">
    <div class="container">
      <nav class="mb-0 pb-0 px-0 py-0">
        <ul class="breadcrumb">
          <li>
            <router-link to="/dashboard" class="main">My Account</router-link> /
            <router-link to="/dashboard" class="active"
              >Shipping Price List</router-link
            >
          </li>
        </ul>
      </nav>

      <!-- <div class="row w-100 mt-5 mb-3" v-if="!isDataGet">
        <div  class="col-md-6" v-for="(item, index) in 2" :key="index">
              <Skeleton  height="15rem" ></Skeleton>
        </div>
      </div> -->

      <section class="price-lists mt-5 mb-3">
        <div class="single-shipping">
          <h4 class="color text-center mt-4 mb-4">{{ list.name }}</h4>

          <div class="list-image-shipping">
            <img :src="list.image" alt="" />
          </div>

          <div class="flex-center mt-3 mb-3">
            <button class="btn main-btn w-25 pt-2 pb-2 fw-bold" @click="downloadImage(list.image)">Download</button>
          </div>
        </div>
      </section>

      <!-- <div v-if="isDataGet&&lists.length==0" class="mb-4">
    <Message severity="info">No Shipping Lists Yet !</Message> -->

      <!-- </div> -->
      <!-- <footer class="mb-5">
      <pagination :totalPages="totalPages" :currentPage="currentPage" @pageChanged="handlePageChange" />
    </footer> -->
    </div>
  </div>
  <Toast />
</template>

<script>
import axios from "axios";
// import Pagination from './PaginationComponent.vue';
import Toast from "primevue/toast";
// import Skeleton from "primevue/skeleton";
// import Message from 'primevue/message';

export default {
  components: {
    Toast,
    // Skeleton,
    // Message
  },
  data() {
    return {
      level: "",
      isDataGet: false,

      links: [
        { text: "Dashboard", url: "/dashboard" },
        { text: "New Cars", url: "/new-cars" },
        // ... Add more links as necessary
      ],
      currentPage: 1,
      totalPages: 10,
      list: {},
    };
  },
  methods: {
    handlePageChange(page) {
      this.currentPage = page;

      // Fetch new data based on the current page
    },

    downloadImage(imageUrl) {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'image.jpg'; // you can set the file name here
      link.click();
    },


    async getShiipingPrices() {
      await axios
        .get(`shipping-list-details/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          this.list = res.data.data;
          this.isDataGet = true;
        })
        .catch((err) => {
          this.$toast.add({
            severity: "error",
            summary: "Something Went Wrong",
            life: 10000,
          });
        });
    },
  },
  mounted() {
    this.getShiipingPrices();
  },
};
</script>


<style lang="scss">
.single-shipping {
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid rgba(219, 217, 217, 0.87);
  width: 70%;
  margin: auto;
  .list-image-shipping {
    height: 100%;
    width: 60%;
    margin: auto;
    border-radius: 10px;
    border: 1px solid rgba(219, 217, 217, 0.87);
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}

.breadcrumb {
  a {
    text-decoration: none;
  }
  .main {
    color: #979797;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
  }
  .active {
    color: #331f8e;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 133.333% */
  }
}
</style>
