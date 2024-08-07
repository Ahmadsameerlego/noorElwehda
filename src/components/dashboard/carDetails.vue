<template>
  <div class="car-details">
    <div class="container">
      <nav class="mb-0 pb-0 px-0 py-0">
        <ul class="breadcrumb">
          <li>
            <router-link to="/dashboard" class="main">Ledger</router-link> /
            <router-link to="/dashboard" class="active"
              >Car Details</router-link
            >
          </li>
        </ul>
      </nav>

      <div class="car-info"  v-motion-slide-visible-left
      :delay="400"
    :duration="1500">
        <h5 class="text-start fw-bold mb-3">Hyundai, Accent, 2019</h5>
        <ul>
          <li><span>Car ID:</span> <span class="color">AL000034</span></li>
          <li><span>LOT:</span> <span class="color">343434</span></li>
          <li>
            <span>Car Status:</span>
            <span class="status-arrived color">Arrived</span>
          </li>
          <li><span>VIN:</span> <span class="color">FRWFREWF223S</span></li>
          <li><span>Auction Name:</span> <span class="color">Copart Auction</span></li>
          <li><span>Purchasing Date:</span><span class="color"> 20/04/2024</span></li>
        </ul>
      </div>
      <div class="costs"  v-motion-slide-visible-right
      :delay="400"
    :duration="1500">
        <h5 class="text-start fw-bold mb-3">Costs</h5>
        <ul>
            <li>
                <span>Auction Price:</span> 
                <div>
                    <span class="orange color">
                        5,000 $
                    </span>
                    <span class="mx-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697" stroke="#322E2D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.5 12H20.33" stroke="#322E2D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <span class="color">
                        15,000 AED
                    </span>
                </div>
            </li>

            <li>
                <span>Towing Price:</span> 
                <div>
                    <span class="orange color">
                        5,000 $
                    </span>
                    <span class="mx-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697" stroke="#322E2D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.5 12H20.33" stroke="#322E2D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <span class="color">
                        15,000 AED
                    </span>
                </div>
            </li>

            <li>
                <span>Recovery:</span> 
                <div>
                    <span class="orange color">
                        5,000 $
                    </span>
                    <span class="mx-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697" stroke="#322E2D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.5 12H20.33" stroke="#322E2D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <span class="color">
                        15,000 AED
                    </span>
                </div>
            </li>


            <li>
                <span>Storage:</span> 
                <div>
                    <span class="orange color">
                        5,000 $
                    </span>
                    <span class="mx-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697" stroke="#322E2D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.5 12H20.33" stroke="#322E2D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <span class="color">
                        15,000 AED
                    </span>
                </div>
            </li>


            <li>
                <span>Total Car Value:</span> 
                <div>
                    <span class="orange color">
                        5,000 $
                    </span>
                    <span class="mx-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697" stroke="#322E2D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.5 12H20.33" stroke="#322E2D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <span class="color">
                        15,000 AED
                    </span>
                </div>
            </li>

        </ul>
      </div>


       <div class="costs"  v-motion-slide-visible-left
      :delay="400"
    :duration="1500">
        <h5 class="text-start fw-bold mb-3">Customer Paid</h5>
        <ul>
            <li>
                <span>Auction Price:</span> 
                <div>
                    <span class="orange color">
                        5,000 $
                    </span>
                    <span class="mx-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697" stroke="#322E2D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.5 12H20.33" stroke="#322E2D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <span class="color">
                        15,000 AED
                    </span>
                </div>
            </li>

            <li>
                <span>Towing Price:</span> 
                <div>
                    <span class="orange color">
                        5,000 $
                    </span>
                    <span class="mx-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697" stroke="#322E2D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.5 12H20.33" stroke="#322E2D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <span class="color">
                        15,000 AED
                    </span>
                </div>
            </li>

            <li>
                <span>Recovery:</span> 
                <div>
                    <span class="orange color">
                        5,000 $
                    </span>
                    <span class="mx-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697" stroke="#322E2D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.5 12H20.33" stroke="#322E2D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <span class="color">
                        15,000 AED
                    </span>
                </div>
            </li>


            <li>
                <span>Storage:</span> 
                <div>
                    <span class="orange color">
                        5,000 $
                    </span>
                    <span class="mx-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697" stroke="#322E2D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.5 12H20.33" stroke="#322E2D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <span class="color">
                        15,000 AED
                    </span>
                </div>
            </li>


            <li>
                <span>Total Car Value:</span> 
                <div>
                    <span class="orange color">
                        5,000 $
                    </span>
                    <span class="mx-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697" stroke="#322E2D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.5 12H20.33" stroke="#322E2D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <span class="color">
                        15,000 AED
                    </span>
                </div>
            </li>

        </ul>
      </div>


      
      <section class="row mb-4">
        <div class="col-md-12">
            <section class="outstand w-100 d-flex justify-content-between align-items-baseline py-3">
                <h6 class="mb-0">
                    Customer Outstanding
                </h6>

                <div class="d-flex">
                    <span>
                        4000$
                    </span>

                    <span class="mx-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697" stroke="#322E2D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.5 12H20.33" stroke="#322E2D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>

                    <span>
                        12,000 AED
                    </span>
                </div>
            </section>
        </div>
    </section>


     <div>
         <button class="btn main-btn w-25 py-3 fw-bold">Pay</button>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarDetails",
};
</script>

<style scoped lang="scss">
.car-details {
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f8fc;
  border-radius: 8px;
}

.car-info,
.costs,
.customer-paid {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(219, 217, 217, 0.87);
  ul li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .color{
        font-weight: 600;
        color: #331F8E;
    }
    .orange{
        color: #F59E0B !important;
    }
  }
}

.car-info ul,
.costs ul,
.customer-paid ul {
  list-style: none;
  padding: 0;
}

.car-info ul li,
.costs ul li,
.customer-paid ul li {
  margin-bottom: 10px;
}

.status-arrived {
  color: green !important;
}

.usd {
  color: #ffa500;
}

.aed {
  color: #6a1b9a;
}

.customer-outstanding {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: red;
  text-align: center;
  font-weight: bold;
}

.pay-button {
  display: block;
  width: 100%;
  padding: 15px;
  background-color: #6a1b9a;
  color: #fff;
  border: none;
  border-radius: 8px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
}

.pay-button:hover {
  background-color: #5e1789;
}
</style>
