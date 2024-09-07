<template>
  <div class="login-container position-relative">

     <nav class="mb-0 pb-0 px-0 py-0">
        <ul class="breadcrumb">
          <li >
            <router-link to="/dashboard" class="main">My Accounts</router-link> /
            <router-link to="/subCustomers" class="main">SubCustomers</router-link> /
            <router-link to="/dashboard" class="active">Edit</router-link> 

          </li>
        </ul>
      </nav>
      
    <div class="login-card mt-5" v-motion-slide-visible-right
 :delay="400"
    :duration="1500">
      <h2 class="fw-bold">Edit Sub customer</h2>
      <p>Please enter Customer information</p>
      <form @submit.prevent="addSubCustomer" ref="subCustomerForm">
        <div class="form-group">
          <label for="username">Customer Name</label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Please enter your customer name"
            required
            @input="validateUsername"
            name="name"
          />
          <span v-if="usernameError" class="error">{{ usernameError }}</span>
        </div>
        <div class="form-group">
          <label for="username">Customer Phone</label>
          <div class="row">
            <div class="col-md-2">
              <Dropdown
                v-model="selectedCountry"
                :options="countries"
                optionLabel="key"
                placeholder="Code"
                class="w-full md:w-14rem"
              >
                <template #value="slotProps">
                  <div v-if="slotProps.value" class="flex align-items-center">
                    <div>
                      {{ slotProps.value.key }} {{ slotProps.value.flag }}
                    </div>
                  </div>
                  <span v-else>
                    {{ slotProps.placeholder }}
                  </span>
                </template>
                <template #option="slotProps">
                  <div class="flex align-items-center">
                    <div>
                      {{ slotProps.option.flag }} {{ slotProps.option.key }}
                    </div>
                  </div>
                </template>
              </Dropdown>
            </div>
            <div class="col-md-10">
              <input
                type="tel"
                id="username"
                v-model="phone"
                placeholder="Please enter your customer Phone"
                required
                @input="validatePhone"
                name="phone"
              />
              <span v-if="phoneError" class="error">{{ phoneError }}</span>
            </div>
          </div>
        </div>

        <div class="form-group position-relative">
          <label for="address">Customer Address</label>
          <input
            type="text"
            id="address"
            v-model="address"
            placeholder="Please enter your customer name"
            required
            name="address"
            @input="validateAddress"
          />

          <span class="location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M15.9998 17.9069C18.2973 17.9069 20.1598 16.0444 20.1598 13.7469C20.1598 11.4494 18.2973 9.58691 15.9998 9.58691C13.7023 9.58691 11.8398 11.4494 11.8398 13.7469C11.8398 16.0444 13.7023 17.9069 15.9998 17.9069Z"
                stroke="#331F8E"
                stroke-width="1.5"
              />
              <path
                d="M4.82709 11.3203C7.45376 -0.226338 24.5604 -0.213005 27.1738 11.3337C28.7071 18.107 24.4938 23.8403 20.8004 27.387C18.1204 29.9737 13.8804 29.9737 11.1871 27.387C7.50709 23.8403 3.29376 18.0937 4.82709 11.3203Z"
                stroke="#331F8E"
                stroke-width="1.5"
              />
            </svg>
          </span>
          <span v-if="addressError" class="error">{{ addressError }}</span>
        </div>


         <div class="form-group position-relative">
          <label for="password">Customer Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Please enter your password"
            @input="validatePassword"
            required
            name="password"
          />
          <span v-if="passwordError" class="error">{{ passwordError }}</span>
        </div>


         <button type="submit" class="sign-in-button" :disabled="disabled">
          <span v-if="!spinner">Edit</span>
            <div class="spinner-border mx-2" role="status" v-if="spinner">
                    <span class="visually-hidden">Loading...</span>
                  </div>
        </button>
      </form>
     
    </div>
  </div>
    <Toast />

</template>

<script>
import Dropdown from "primevue/dropdown";
import axios from "axios";
import Toast from "primevue/toast";

export default {
  data() {
    return {
     username: "",
      password: "",
      passwordError : '',
      countries: [],

      selectedCountry: null,
      usernameError: "",
      phoneError: "",
      address: "",
      addressError: "",
            disabled : false ,
      spinner : false,
      customer : null,
      phone : ''

    };
  },
   methods: {
    validateUsername() {
      this.usernameError =
        this.username.length < 4
          ? "Name must be at least 4 characters long."
          : "";
    },
    validatePhone() {
      const phonePattern = /^[0-9]{10,15}$/;
      this.phoneError = !phonePattern.test(this.phone)
        ? "Phone number must contain only numbers and be 10-15 digits long."
        : "";
    },
    validateAddress() {
      this.addressError =
        this.address.length < 4
          ? "Address must be at least 4 characters long."
          : "";
    },
    validatePassword() {
      this.passwordError = this.password.length < 6 ? 'Password must be at least 6 characters long.' : '';
    },
    validateForm() {
      // Trigger validation for all fields
      this.validateUsername();
      this.validatePhone();
      this.validateAddress();
      this.validatePassword();

      // Return true if no errors
      return !this.usernameError && !this.phoneError && !this.emailError && !this.passwordError;
    },
    // add subcustomer
    async addSubCustomer() {
      this.validateForm()
      this.disabled = true;
      this.spinner = true;
      const fd = new FormData(this.$refs.subCustomerForm);
      if(this.selectedCountry){
        fd.append("country_code", this.selectedCountry.key);
      }
      fd.append('user_id', this.$route.params.id)
      await axios
        .post("update-subcustomer?_method=put", fd, {
          headers:{
            Authorization : `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then((res) => {
          if (res.data.key === "success") {
            this.$toast.add({
              severity: "success",
              summary: res.data.msg,
              life: 3000,
            });

            setTimeout(() => {
              this.$router.push(`/show-subCustomer/${this.$route.params.id}`);
            }, 1000);
          } else {
            this.$toast.add({
              severity: "error",
              summary: res.data.msg,
              life: 6000,
            });
          }

          this.disabled = false;
          this.spinner = false;
        })
        .catch((err) => {
          this.$toast.add({
            severity: "error",
            summary: "something wrong",
            life: 3000,
          });
           this.disabled = false;
          this.spinner = false;
        });
    },
    async getCountries() {
      await axios.get("countries").then((res) => {
        this.countries = res.data.data;
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
          this.username = res.data.data.name
          this.phone = res.data.data.phone
          // this.phone = res.data.data.phone
          this.address = res.data.data.address

          
          for(let i =0 ; i<this.countries.length ; i++){
            if(this.countries[i].key ===res.data.data.country_code ){
              this.selectedCountry = this.countries[i]
            }
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  components: {
    Dropdown,
    Toast,
  },
  mounted() {
    this.getCountries();
    this.getSubCustomer()
  },
};
</script>

<style scoped lang="scss">
.location{
  position: absolute;
  top: 50%;
  right: 5%;
}
.breadcrumb{
    position: absolute;
    top:20px;
    left: 150px;
}
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f3f3ff;
}

.login-card {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 800px;
  width: 100%;
}

h2 {
  color: #331F8E;
  margin-bottom: 10px;
}

p {
  margin-bottom: 20px;
  color: #666666;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  margin: 10px 15px;
  color: #333333;
}

input, select {
  width: calc(100% - 20px);
  padding: 17px;
  margin: 0 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.sign-in-button {
  background-color: #331F8E;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 30%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

.sign-in-button font-awesome-icon {
  margin-right: 10px;
}

.divider {
  margin: 20px 0;
  position: relative;
  text-align: center;
}

.divider:before,
.divider:after {
  content: "";
  height: 1px;
  width: 45%;
  background-color: #ccc;
  position: absolute;
  top: 50%;
}

.divider:before {
  left: 0;
}

.divider:after {
  right: 0;
}

.request-user-link {
  color: #331F8E;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before{
    content: "";
    position: absolute;
    width: 104px;
    height: 1.2px;
    background-color: #331F8E;
    bottom: 0;
    right: 43%;
  }
}

.request-user-link font-awesome-icon {
  margin-right: 5px;
}
</style>
