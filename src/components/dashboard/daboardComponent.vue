<template>
  <div class="status-cards-container pt-5 pb-5">
    <div class="container">

      <!-- skeletone wait data to come  -->
      <div class="row" v-if="!isDataGet">
        <div  class="col-md-4" v-for="(item, index) in 3" :key="index">
              <Skeleton width="26rem" height="16rem"></Skeleton>
        </div>
      </div>
      <div v-else class="row">

        <div class="col-md-4 mb-4" v-for="(cat, index) in cats" :key="index">
          <router-link
            style="color: inherit; text-decoration: none"
            :to="'/category/' + cat.id"
            @click="storeCat(cat.level)"
          >
            <div class="status-card">
              <div class="icon-wrapper">
                <div class="cat_image">
                  <img :src="cat.image" alt="" />
                </div>
              </div>
              <div class="status-text">{{ cat.name }}</div>

              <div class="num">
                {{ cat.num_cars }}
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Skeleton from "primevue/skeleton";

export default {
  data() {
    return {
      cats: [],
      isDataGet : false ,
      statuses: [
        { id: 1, text: "New Cars", icon: "car" },
        { id: 2, text: "Towing", icon: "truck-tow" },
        { id: 3, text: "Warehouse", icon: "warehouse" },
        { id: 4, text: "Shipping in Progress", icon: "ship" },
        { id: 5, text: "Cars in Custom", icon: "customs" },
        { id: 6, text: "Arrived", icon: "check-circle" },
      ],
    };
  },
  methods: {
    async getCats() {
      await axios.get("categories").then((res) => {
        this.cats = res.data.data;
        this.isDataGet = true ;
      });
    },
    storeCat(level){
      localStorage.setItem('level', level) ;
    }
  },
  components: {
    Skeleton,
  },
  mounted() {
    this.getCats();
  },
};
</script>

<style scoped lang="scss">
.cat_image {
  width: 120px;
  height: 120px;
}
.cat_image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: .7s all;
}
.status-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  background-color: #f3f3ff;
  padding: 20px;
}

.status-card {
  position: relative;
  width: 413px;
  height: 244.286px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #dbd9d9;

  transition: 0.7s all;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.num {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #4d2e90;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  transition: .7s all;
}
.status-card:hover {
  // transform: scale(1.05);
  background-color: #4d2e90;
  .status-text{
    color: #fff;
  }
  img{
        filter: brightness(0) invert(1);
  }
  .num{
    background: #fff;
    color: #4d2e90;
  }

}

.icon-wrapper {
  font-size: 3em;
  color: #4d2e90;
  margin-bottom: 10px;
}

.status-text {
  color: #322e2d;
  text-align: center;
  font-family: Poppins;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 20px;
  transition: .7s all;
}
</style>
