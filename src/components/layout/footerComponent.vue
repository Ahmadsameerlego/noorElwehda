<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-column">
        <h3>About Our Company</h3>
        <p class="text-start footer-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
      </div>
      <div class="footer-column">
        <h3>Latest Cars</h3>
        <div v-for="car in latestCars" :key="car.id" class="car">
          <img :src="car.image" alt="Car Image" height="100">
          <div class="car-info">
            <h4 class="car-title">{{ car.name }}</h4>
            <p class="text-start mb-0">Car ID <span style="color:#fff">{{ car.car_id }}</span></p>
            <p class="text-start mb-0"> Price {{ car.price }}</p>
            <p class="text-start mb-0"> VIN {{car.vin }}</p>
          </div>
        </div>
      </div>
      <div class="footer-column">
        <h3>Useful Links</h3>
        <ul>
          <li v-for="link in usefulLinks" :key="link.text" class="useful d-flex align-items-center mb-2">
            <i class="fa-solid fa-angles-right"></i>
            <router-link :to="link.href" class="use-link text-start d-inline-block mx-3">
                {{ link.text }}
                </router-link>
          </li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Contact Information</h3>
        <div>
          <div class="d-flex align-items-center mb-3">
            <font-awesome-icon class="footer-icon" icon="location-dot" /> 
            <span class="mx-3">
                <div class="text-start" style="color:#919191">
                    Address
                </div>
                <div class="footer-title text-start">
                    30 Al Moarob Street, Al Ruwais
                </div>
            </span>
          </div>
          <div class="d-flex align-items-center mb-3">
            <font-awesome-icon class="footer-icon" icon="phone" /> 
        <span class="mx-3">
                <div class="text-start" style="color:#919191">
                    Phone
                </div>
                <div class="footer-title text-start">
                    +971527992240
                </div>
            </span>
          </div>
         <div class="d-flex align-items-center mb-3">
             <font-awesome-icon class="footer-icon" icon="envelope" /> 
          <span class="mx-3">
                <div class="text-start" style="color:#919191">
                    Email
                </div>
                <div class="footer-title text-start">
support@yoursite.com
                </div>
            </span>
         </div>
         <div class="d-flex align-items-center mb-3">
             <font-awesome-icon  class="footer-icon" :icon="['fab', 'instagram']" />
             <span class="mx-3">
                <div class="text-start" style="color:#919191">
                    Instagram
                </div>
                <div class="footer-title text-start">
Follow @NoorAlwahda                </div>
            </span>
         </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom d-flex justify-content-around">
      <p>&copy; Copyright 2024. All Rights Reserved - Noor Al Wahda</p>
      <p>Powered by Noor Al Wahda</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      latestCars: [
        {
          id: 1,
          name: 'Hyundai, Accent, 2018',
          car_id: 'AL00023',
          price: '7,000 AED',
          vin: 'VIN 1234567890',
          image: require('@/assets/imgs/footer.png')
        },
        {
          id: 2,
          name: 'Hyundai, Accent, 2019',
                    car_id: 'AL00023',

          price: '8,000 AED',
          vin: 'VIN 1234567891',
          image: require('@/assets/imgs/footer.png')
        },
        {
          id: 3,
          name: 'Hyundai, Accent, 2019',
                    car_id: 'AL00023',

          price: '8,500 AED',
          vin: 'VIN 1234567892',
          image: require('@/assets/imgs/footer.png')
        }
      ],
      usefulLinks: [
        { text: 'Available Car', href: '#' },
        { text: 'Shipping Price List', href: '#' },
        { text: 'Search by Vin or LOT', href: '#' },
        { text: 'Buy Cars', href: '#' },
        { text: 'About Us', href: '#' },
        { text: 'Contact Us', href: '#' },
        { text: 'Ledger', href: '#' },
        { text: 'My Cars', href: '#' },
        { text: 'Subscribe', href: '#' }
      ]
    };
  }
};
</script>

<style scoped>
.footer-bottom{
    background: #331F8E;
}

.car-title{
    color: #FFF;

font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: 21px; /* 140% */

}
.footer-title{
    color: #FFF;

font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 20px; /* 200% */

}
.footer-icon{
    border-radius:  4px;
    color: #331F8E;
    padding: 17px 16px;
    font-size: 20px;
opacity: 0.72;
background:  #FFF;


}
.fa-angles-right{
    color:#606060 ;
}
.use-link{
    color: rgba(255, 255, 255, 0.72);

font-family: Poppins;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 30px; /* 200% */

}
.useful a{
    display: inline-block;
    text-align: start;
    width: 100%;
}
.footer-desc{
    color: rgba(255, 255, 255, 0.75);

font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 32px; /* 200% */

}
.footer-column h3{
    border-bottom: 2.5px solid #331F8E;
    padding-bottom: 12px;
    text-align: start;
    margin-bottom: 20px !important;
}
.footer {
  background-color: #1e1e1e;
  color: #fff;
  padding: 40px 0 0px 0px;
  font-size: 14px;
}

.container {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-column {
  flex: 1;
  margin: 0 20px;
}

.footer-column h3 {
  font-size: 16px;
  margin-bottom: 10px;
}

.footer-column p, .footer-column ul, .footer-column a {
  font-size: 14px;
  color: #ddd;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 5px;
}

.footer-column ul li a {
  text-decoration: none;
  color: #ddd;
}

.footer-column ul li a:hover {
  text-decoration: underline;
}

.footer-column .car {
  display: flex;
  margin-bottom: 10px;
}

.footer-column .car img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 10px;
}
.car{
      border-bottom: 2px solid rgba(167, 167, 167, 0.20);

}
.footer-column .car-info h4 {
  font-size: 14px;
  margin: 0;
  color: #fff;


}

.footer-column .car-info p {
  margin: 5px 0 0 0;
}

.footer-bottom {
  background-color: #331F8E;
  color: #ddd;
  text-align: center;
  padding: 10px 0;
  margin-top: 20px;
}

.footer-bottom p {
  margin: 5px 0;
    color: #FFF;

font-family: Poppins;
font-size: 14px !important;
font-style: normal;
font-weight: 400;
line-height: 28px; /* 200% */
}

.footer-bottom p:first-child {
  font-size: 12px;
}

.footer-bottom p:last-child {
  font-size: 14px;
}
</style>
