<template>
  <div class="car-list-container pt-5">
    <div class="container">
      <header class="w-25 d-flex justify-content-start align-items-center">
        <span class="line right"></span>
        <h3 class="cat-title fw-bold my-cars-title">My Cars</h3>
        <span class="line left"></span>
      </header>

      <!-- charts  -->
      <section class="card-filter mt-4 mb-4 d-flex px-4 py-4">
        <div>
          <apexchart
            type="pie"
            width="300"
            height="300"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>

        <section class="parts">
          <!-- item  -->
          <button
            class="item d-flex btn"
            @click="filterCars('Total Cars', 'all')"
          >
            <span class="icon" style="background: #322e2d"></span>
            <span class="text mx-3" style="color: #322e2d">
              {{ all_length }} Total Cars
            </span>
          </button>

          <!-- item  -->
          <button
            class="item d-flex btn"
            @click="filterCars('New Cars', 'new_cars')"
          >
            <span class="icon" style="background: #14b8a6"></span>
            <span class="text mx-3" style="color: #322e2d">
              {{ new_length }} New Car
            </span>
          </button>

          <!-- item  -->
          <button
            class="item d-flex btn"
            @click="filterCars('Towing', 'towing')"
          >
            <span class="icon" style="background: #3b82f6"></span>
            <span class="text mx-3" style="color: #322e2d">
              {{ towing_length }} Towing
            </span>
          </button>

          <!-- item  -->
          <button
            class="item d-flex btn"
            @click="filterCars('WareHouses', 'warehouse')"
          >
            <span class="icon" style="background: #6366f1"></span>
            <span class="text mx-3" style="color: #322e2d">
              {{ warehouse }} WareHouses
            </span>
          </button>

          <!-- item  -->
          <button
            class="item d-flex btn"
            @click="filterCars('Shipping', 'shipping')"
          >
            <span class="icon" style="background: #facc15"></span>
            <span class="text mx-3" style="color: #322e2d">
              {{ shipping }} Shipping
            </span>
          </button>

          <!-- item  -->
          <button
            class="item d-flex btn"
            @click="filterCars('Custom', 'custom')"
          >
            <span class="icon" style="background: #a855f7"></span>
            <span class="text mx-3" style="color: #322e2d">
              {{ custom }} Custom
            </span>
          </button>

          <!-- item  -->
          <button
            class="item d-flex btn"
            @click="filterCars('Ready Collected', 'ready_collected')"
          >
            <span class="icon" style="background: #f59e0b"></span>
            <span class="text mx-3" style="color: #322e2d">
              {{ ready_collected }} Ready Collected
            </span>
          </button>
        </section>
      </section>

      <h3 class="cat-title fw-bold my-cars-title mt-4 mb-4 text-start">
        {{ type }} ({{ cars.length }})
      </h3>

      <div class="car-list mb-5">
        <carComponentVue
          v-for="car in cars"
          :key="car.id"
          :car="car"
          :type="type"
        />
      </div>
      <!-- <footer class="mb-5" v-if="type!==''">
      <pagination :totalPages="totalPages" :currentPage="currentPage" @pageChanged="handlePageChange" />
    </footer> -->

      <div
        class="d-flex justify-content-center align-items-center flex-column mb-4"
        v-if="cars.length == 0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="130"
          height="130"
          viewBox="0 0 130 130"
          fill="none"
        >
          <g clip-path="url(#clip0_353_3275)">
            <path
              d="M127.674 92.1224L118.952 65.6308C118.623 64.6319 117.546 64.0886 116.548 64.4174C115.549 64.7462 115.006 65.8228 115.334 66.8216L123.549 91.7722C123.303 91.7359 123.053 91.711 122.797 91.711H115.429L105.701 62.1627V42.7267H106.443C107.017 42.7267 107.522 43.0926 107.702 43.6372L112.395 57.8948C112.659 58.6961 113.404 59.2042 114.204 59.2042C114.401 59.2042 114.602 59.1732 114.8 59.1082C115.799 58.7794 116.342 57.7028 116.013 56.704L111.32 42.4464C110.625 40.3362 108.665 38.9183 106.444 38.9183H77.9843C74.2389 36.4994 69.7806 35.0938 64.9998 35.0938C60.219 35.0938 55.7606 36.4994 52.0153 38.9183H23.5559C21.3343 38.9183 19.3749 40.3362 18.6799 42.4466L2.32582 92.1226C2.15494 92.6414 2.06836 93.1814 2.06836 93.7276V107.292C2.06836 108.344 2.92098 109.197 3.97266 109.197C5.02434 109.197 5.87695 108.344 5.87695 107.292V96.8445C5.87695 96.114 6.47135 95.5196 7.20184 95.5196H31.0439C31.5464 95.5196 32.0138 95.8114 32.2342 96.2631L36.9193 105.856C37.7739 107.606 39.5845 108.736 41.532 108.736H88.4673C90.4148 108.736 92.2254 107.606 93.08 105.856L97.7651 96.2631C97.9858 95.8116 98.4529 95.5196 98.9554 95.5196H122.797C123.528 95.5196 124.122 96.114 124.122 96.8445V124.867C124.122 125.597 123.528 126.192 122.797 126.192H7.20184C6.47135 126.192 5.87695 125.597 5.87695 124.867V116.694C5.87695 115.642 5.02434 114.789 3.97266 114.789C2.92098 114.789 2.06836 115.642 2.06836 116.694V124.867C2.06836 127.697 4.37129 130 7.20184 130H122.798C125.628 130 127.931 127.697 127.931 124.867V93.7276C127.931 93.1817 127.845 92.6416 127.674 92.1224ZM101.893 58.479C101.517 58.3922 101.128 58.3447 100.73 58.3447H88.9871C88.8015 52.3195 86.3843 46.8471 82.5358 42.7267H101.893V58.479ZM41.0125 58.345H29.2696C28.8715 58.345 28.4822 58.3922 28.1067 58.4793V42.7269H47.4637C43.6155 46.8473 41.1981 52.3198 41.0125 58.345ZM6.45078 91.7725L22.2976 43.6374C22.4768 43.0928 22.9826 42.7269 23.5559 42.7269H24.2981V62.1632L14.5704 91.711H7.20184C6.94615 91.711 6.69682 91.7362 6.45078 91.7725ZM94.3427 94.5916L89.6574 104.185C89.437 104.636 88.9698 104.928 88.4671 104.928H41.5322C41.0298 104.928 40.5626 104.636 40.3419 104.184L35.6569 94.5916C34.8022 92.8417 32.9916 91.711 31.0441 91.711H18.5804L28.0115 63.0641C28.1907 62.5194 28.6965 62.1536 29.2698 62.1536H41.1971C41.7653 66.553 43.548 70.7485 46.3572 74.2088C49.7613 78.402 54.5241 81.3537 59.768 82.5201C60.7946 82.7476 61.8122 82.1014 62.0405 81.0746C62.2688 80.0481 61.6218 79.0307 60.595 78.8022C56.1857 77.8214 52.1793 75.3374 49.3142 71.8081C46.4088 68.229 44.8084 63.7136 44.8084 59.0937C44.8084 47.9599 53.8662 38.9021 64.9998 38.9021C76.1333 38.9021 85.1912 47.9599 85.1912 59.0937C85.1912 68.5847 78.4614 76.8933 69.1895 78.8492C68.1604 79.0663 67.502 80.0763 67.7191 81.1054C67.9083 82.0019 68.6992 82.6171 69.5805 82.6171C69.7108 82.6171 69.843 82.6037 69.9753 82.5757C75.2799 81.4568 80.1052 78.5201 83.5624 74.3068C86.4186 70.826 88.2286 66.5954 88.802 62.1536H100.729C101.303 62.1536 101.809 62.5194 101.988 63.0641L111.419 91.711H98.9554C97.0082 91.711 95.1976 92.8417 94.3427 94.5916Z"
              fill="#CDC8CD"
            />
            <path
              d="M13.6885 121.213H20.6572C21.7089 121.213 22.5615 120.36 22.5615 119.309C22.5615 118.257 21.7089 117.404 20.6572 117.404H13.6885C12.6368 117.404 11.7842 118.257 11.7842 119.309C11.7842 120.36 12.6368 121.213 13.6885 121.213Z"
              fill="#CDC8CD"
            />
            <path
              d="M13.6885 115.265H20.6572C21.7089 115.265 22.5615 114.412 22.5615 113.36C22.5615 112.309 21.7089 111.456 20.6572 111.456H13.6885C12.6368 111.456 11.7842 112.309 11.7842 113.36C11.7842 114.412 12.6368 115.265 13.6885 115.265Z"
              fill="#CDC8CD"
            />
            <path
              d="M69.3911 67.5763C69.9291 67.5763 70.4639 67.3495 70.8404 66.9082C71.5232 66.1084 71.4282 64.9062 70.6284 64.2234C69.0582 62.8833 66.9732 62.1416 64.7568 62.1348C62.5443 62.13 60.4511 62.8574 58.873 64.1884C58.0689 64.8663 57.9668 66.0678 58.645 66.8717C59.323 67.6758 60.5244 67.7781 61.3283 67.0997C62.2005 66.3644 63.4385 65.9431 64.7276 65.9431H64.7454C66.0413 65.9472 67.2842 66.376 68.1558 67.12C68.5144 67.4264 68.9539 67.5763 69.3911 67.5763Z"
              fill="#CDC8CD"
            />
            <path
              d="M54.5109 54.9873H54.4883C53.4363 54.9939 52.5906 55.8295 52.585 56.8812C52.5792 57.9329 53.4384 58.7901 54.49 58.7959H54.5007C55.5476 58.7959 56.3992 57.9501 56.4048 56.902C56.4103 55.8503 55.5625 54.9931 54.5109 54.9873Z"
              fill="#CDC8CD"
            />
            <path
              d="M75.3248 58.7852C75.339 58.7868 75.3537 58.7865 75.3679 58.7878C75.4147 58.7916 75.4611 58.7954 75.5089 58.7956H75.5195H75.5221C75.5236 58.7956 75.5249 58.7954 75.5264 58.7954C75.5896 58.7951 75.6521 58.7921 75.7138 58.786C76.6756 58.6898 77.4264 57.8783 77.4264 56.8913C77.4264 55.8582 76.6029 55.019 75.5769 54.9898C75.5612 54.9893 75.5457 54.9873 75.5297 54.9873H75.5238C75.5233 54.9873 75.5226 54.9873 75.5221 54.9873H75.5071H75.499C75.4982 54.9873 75.4972 54.9873 75.4964 54.9873C74.4498 54.9873 73.6094 55.8331 73.6035 56.8812C73.5982 57.8704 74.3587 58.6872 75.3248 58.7852Z"
              fill="#CDC8CD"
            />
            <path
              d="M47.8087 9.02249C48.1805 9.39447 48.668 9.58033 49.1552 9.58033C49.6425 9.58033 50.13 9.39447 50.5017 9.02249L52.0411 7.48306L53.5805 9.02249C53.9523 9.39421 54.4398 9.58033 54.927 9.58033C55.4143 9.58033 55.9018 9.39447 56.2735 9.02249C57.0172 8.2788 57.0172 7.073 56.2735 6.32957L54.734 4.79013L56.2735 3.2507C57.0172 2.50701 57.0172 1.30121 56.2735 0.557769C55.53 -0.185923 54.3242 -0.185923 53.5805 0.557769L52.0411 2.0972L50.5017 0.557769C49.758 -0.185923 48.5522 -0.185923 47.8087 0.557769C47.0651 1.30146 47.0651 2.50726 47.8087 3.2507L49.3482 4.79013L47.8087 6.32957C47.0651 7.07326 47.0651 8.27906 47.8087 9.02249Z"
              fill="#CDC8CD"
            />
            <path
              d="M34.2409 28.8844C39.0354 28.8844 42.9359 24.9839 42.9359 20.1892C42.9359 15.3946 39.0354 11.4941 34.2409 11.4941C29.4464 11.4941 25.5459 15.3946 25.5459 20.1892C25.5459 24.9839 29.4467 28.8844 34.2409 28.8844ZM34.2409 15.303C36.9354 15.303 39.1273 17.495 39.1273 20.1894C39.1273 22.8839 36.9354 25.0761 34.2409 25.0761C31.5465 25.0761 29.3545 22.8841 29.3545 20.1894C29.3545 17.495 31.5467 15.303 34.2409 15.303Z"
              fill="#CDC8CD"
            />
            <path
              d="M90.8791 27.709C91.2508 28.0807 91.7383 28.2669 92.2255 28.2669C92.7128 28.2669 93.2003 28.081 93.572 27.709L95.1114 26.1696L96.6509 27.709C97.0226 28.0807 97.5101 28.2669 97.9973 28.2669C98.4846 28.2669 98.9721 28.081 99.3438 27.709C100.087 26.9653 100.087 25.7595 99.3438 25.0161L97.8044 23.4767L99.3438 21.9372C100.087 21.1935 100.087 19.9877 99.3438 19.2443C98.6001 18.5006 97.3943 18.5006 96.6509 19.2443L95.1114 20.7837L93.572 19.2443C92.8283 18.5006 91.6225 18.5006 90.8791 19.2443C90.1354 19.988 90.1354 21.1938 90.8791 21.9372L92.4185 23.4767L90.8791 25.0161C90.1354 25.7598 90.1354 26.9656 90.8791 27.709Z"
              fill="#CDC8CD"
            />
            <path
              d="M64.8948 27.4215H64.9007C65.9495 27.4215 66.8016 26.5727 66.8049 25.5228L66.8217 19.8523C66.8248 18.8006 65.9749 17.9454 64.923 17.9424C64.921 17.9424 64.9192 17.9424 64.9172 17.9424C63.8683 17.9424 63.0162 18.7912 63.0129 19.8411L62.9961 25.5116C62.9931 26.563 63.8431 27.4182 64.8948 27.4215Z"
              fill="#CDC8CD"
            />
            <path
              d="M52.5197 21.3813C51.6176 21.9216 51.3243 23.0911 51.8646 23.9935L54.8109 28.9127C55.1679 29.5086 55.7989 29.8387 56.4464 29.8387C56.7792 29.8387 57.1167 29.7514 57.4231 29.5678C58.3253 29.0275 58.6185 27.858 58.0782 26.9556L55.1319 22.0364C54.5913 21.1343 53.4218 20.8408 52.5197 21.3813Z"
              fill="#CDC8CD"
            />
            <path
              d="M72.3549 29.6394C72.6637 29.8268 73.0047 29.9159 73.3411 29.9159C73.9847 29.9159 74.6126 29.5896 74.9709 28.9996L77.9467 24.0966C78.4923 23.1976 78.2059 22.0263 77.3068 21.4806C76.4075 20.9352 75.2365 21.2214 74.6908 22.1205L71.7151 27.0234C71.1694 27.9225 71.4561 29.0938 72.3549 29.6394Z"
              fill="#CDC8CD"
            />
            <path
              d="M82.3823 17.0096C86.4067 17.0096 89.6806 13.7355 89.6806 9.71137C89.6806 5.68721 86.4067 2.41309 82.3823 2.41309C78.3578 2.41309 75.084 5.68721 75.084 9.71137C75.084 13.7355 78.3578 17.0096 82.3823 17.0096ZM82.3823 6.22168C84.3066 6.22168 85.872 7.78727 85.872 9.71137C85.872 11.6355 84.3064 13.2011 82.3823 13.2011C80.4582 13.2011 78.8926 11.6355 78.8926 9.71137C78.8926 7.78727 80.4579 6.22168 82.3823 6.22168Z"
              fill="#CDC8CD"
            />
          </g>
          <defs>
            <clipPath id="clip0_353_3275">
              <rect width="130" height="130" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <div class="mt-2">
          <span> No Cars Yet </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import carComponentVue from "../shared/carToDetail.vue";
import Pagination from "./PaginationComponent.vue";

export default {
  components: {
    // Pagination,
    carComponentVue,
  },
  data() {
    return {
      type: "Total Items",
      // series: [44, 55, 13, 43, 22, 44, 55, 13, 43],
      chartOptions: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: [
          "New Cars",
          "Towing",
          "Warehouse",
          "Shipping",
          "Custom",
          "Collected",
          
        ],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      cars: [],
      links: [
        { text: "Dashboard", url: "/dashboard" },
        { text: "New Cars", url: "/new-cars" },
        // ... Add more links as necessary
      ],
      currentPage: 1,
      totalPages: 10,
      // lengthes
      new_length: "",
      towing_length: "",
      warehouse: "",
      shipping: "",
      custom: "",
      ready_collected: "",
      all_length: "",
    };
  },

  computed: {
    series() {
      return [
        parseInt(this.new_length),
        parseInt(this.towing_length),
        parseInt(this.warehouse),
        parseInt(this.shipping),
        parseInt(this.custom),
        parseInt(this.ready_collected),
      ];
    },
  },

  methods: {
    handlePageChange(page) {
      this.currentPage = page;
      // Fetch new data based on the current page
    },
    filterCars(type, level) {
      this.type = type;
      // this.cars = this.cars.filter( el => el.level == level ) ;
      // if(level == "all"){
      //   this.cars = this.cars.filter( el => el )
      // }
      this.getMyCars(level);
    },
    async getMyCars(level) {
      await axios
        .get("my-cars", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          if (level == "all") {
            this.cars = res.data.data.data;
          } else {
            this.cars = res.data.data.data.filter((el) => el.level == level);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },

    async getMyCarsLengths() {
      await axios
        .get("my-cars", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          this.all_length = this.cars.filter((el) => el).length;
          this.new_length = this.cars.filter(
            (el) => el.level == "new_cars"
          ).length;
          this.towing_length = this.cars.filter(
            (el) => el.level == "towing"
          ).length;
          this.warehouse = this.cars.filter(
            (el) => el.level == "warehouse"
          ).length;
          this.shipping = this.cars.filter(
            (el) => el.level == "shipping"
          ).length;
          this.custom = this.cars.filter((el) => el.level == "custom").length;
          this.ready_collected = this.cars.filter(
            (el) => el.level == "ready_collected"
          ).length;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  mounted() {
    this.getMyCars("all");
    this.getMyCarsLengths();
  },
};
</script>


<style  lang="scss">
.apexcharts-legend {
  display: none !important;
}
.parts {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .item {
    width: 200px;
    .icon {
      width: 20px;
      height: 20px;
    }
    .text {
      font-weight: 500;
    }
  }
}
</style>

<style lang="scss">
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
<style scoped lang="scss">
.card-filter {
  border-radius: 10px;
  border: 1px solid rgba(219, 217, 217, 0.87);
  background: #fff;
}
.line {
  width: 50px;
  background-color: #331f8e;
  height: 3px;
  margin-top: -10px;
  &.right {
    margin-right: 15px;
  }
  &.left {
    margin-left: 15px;
  }
}
.detail {
  color: #331f8e;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 109.5%;
}
.car-model {
  color: #322e2d;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: start;
}
.cat-title {
  color: #331f8e;
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
