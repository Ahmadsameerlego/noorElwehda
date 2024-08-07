<template>
  <section class="sub-cust">
    <div class="customers">
      <section class="d-flex justify-content-between align-items-center">
        <nav class="mb-0 pb-0 px-0 py-0">
            <ul class="breadcrumb">
              <li>
                <router-link to="/dashboard" class="main">My Account</router-link> /
                <router-link to="/dashboard" class="active"
                  >Sub Customers</router-link
                >
              </li>
            </ul>
          </nav>

          <div>
            <router-link class="main-btn btn py-2 px-2 fw-bold" to="/add-subCustomer"> Add Sub-Customer </router-link>
          </div>
      </section>
      <div class="customer-list" v-motion-slide-visible-left
 :delay="400"
    :duration="1500">
        <div
          class="customer-card"
          v-for="(customer, index) in customers"
          :key="index"
        >
         <router-link to="/show-subCustomer">
           <div class="row">
            <div class="col-md-6 mb-3">
              <div>
                <span>Customer ID:</span>
                  <div class="customer-name">
                    {{ customer.id }}
                  </div>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div>
                <span>Assigned cars:</span> <div class="customer-name">{{ customer.assignedCars }}</div>
              </div>
            </div>
            <div class="col-md-12 mb-3">
              <div>
                <span>Customer name:</span>
                <div>
                  <span class="customer-name">{{ customer.name }}</span>
                </div>
              </div>
            </div>
          </div>
         </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      customers: [
        {
          id: "54122455",
          assignedCars: 3,
          name: "Ahmed Mohamed Adiv",
        },
        {
          id: "54122455",
          assignedCars: 3,
          name: "Ahmed Mohamed Ali",
        },
        // Add more customers as needed
      ],
    };
  },
};
</script>

<style scoped>
.customer-card * {
  text-align: start;
}
.sub-cust {
  background-color: #f8f8ff;
}
.customers {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #4a4a4a;
}

.customer-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.customer-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(219, 217, 217, 0.87);
}

.customer-card ul {
  list-style: none;
  padding: 0;
}

.customer-card ul li {
  margin-bottom: 10px;
}

.customer-name {
  color: #331f8e;
  font-weight: 600;
}
</style>
