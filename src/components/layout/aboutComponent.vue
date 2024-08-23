<template>
  <div class="car-list-container pt-5">
    <div class="container w-75 mx-auto">
      
    <header class="w-25 d-flex justify-content-start align-items-center">
        <span class="line right"></span>
      <h3 class="cat-title fw-bold my-cars-title">About us</h3>
              <span class="line left"></span>
    </header>

    <div class="mt-5 mb-5">
        <div class="row">
            <div class="col-md-7">
                        <p style="color:#322E2D" class="text-start">
                            {{ data }}
                        </p>

            </div>
            <div class="col-md-5">
                <div class="about-image">
                    <img :src="require('@/assets/imgs/about.png')" alt="" class="w-100">
                </div>
            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default{
    data(){
        return{
            data : ''
        }
    },
    methods:{
        async getAbout(){
            await axios('about')
            .then( (res)=>{
                this.data = res.data.data ;
            } )
        }
    },
    mounted(){
        this.getAbout();
    }
}
</script>


<style  lang="scss">
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
