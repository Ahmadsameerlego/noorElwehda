<template>
  <div class="login-container pt-5 pb-5">
    <div class="login-card">
      <h2 class="fw-bold">Profile</h2>
      <p>You Can Edit Your Information From Here</p>
      <form @submit.prevent="register" ref="registerForm">
        <div class="form-group">
          <label for="username">Customer Name</label>
          <input
            type="text"
            id="username"
            v-model="username"
            name="name"
            placeholder="Please enter your username"
            @input="validateUsername"
            required
          />
          <span v-if="usernameError" class="error">{{ usernameError }}</span>
        </div>

        <div class="form-group">
          <label for="phone">Customer Phone</label>
          
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
                id="phone"
                name="phone"
                v-model="phone"
                placeholder="Please enter your customer Phone"
                @input="validatePhone"
                required
              />
              <span v-if="phoneError" class="error">{{ phoneError }}</span>
            </div>
          </div>
        </div>

        <div class="form-group position-relative">
          <label for="email">Customer Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Please enter your email"
            @input="validateEmail"
            required
            name="email"
          />
          <span v-if="emailError" class="error">{{ emailError }}</span>
        </div>

        <div class="form-group">
          <label for="country">Customer Country</label>
          <div class="row">
            <div class="col-md-12">
              <Dropdown
                v-model="country"
                :options="countries"
                optionLabel="name"
                placeholder="Select a Country"
                class="w-full md:w-14rem"
              />
            </div>
          </div>
        </div>

        
        <button type="submit" class="sign-in-button" :disabled="disabled">
          <span v-if="!spinner">Edit</span>
            <div class="spinner-border mx-2" role="status" v-if="spinner">
                    <span class="visually-hidden">Loading...</span>
                  </div>
        </button>


         <router-link to="/changePass" class="request-user-link mt-4">
          Change Password
        </router-link>
      </form>

    </div>
  </div>

     <Dialog v-model:visible="success" width="700" modal header="" :style="{ width: '25rem' }">

        <form action="">
            <div class="mx-auto d-flex justify-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="122" height="122" viewBox="0 0 122 122" fill="none">
                <path d="M107.106 44.8349C106.19 44.1516 105.475 43.2337 105.036 42.1781C104.598 41.1224 104.452 39.968 104.615 38.8366C106.75 25.4166 104.31 21.2991 102.48 19.4691C100.65 17.6391 96.5835 15.2499 83.1635 17.3849C82.0327 17.5368 80.8819 17.3863 79.8283 16.9488C78.7746 16.5112 77.8557 15.8023 77.1651 14.8941C68.3201 3.10077 63.6943 1.72827 61.0001 1.72827C58.306 1.72827 53.6801 3.10077 44.8351 14.8941C44.1446 15.8023 43.2257 16.5112 42.172 16.9488C41.1183 17.3863 39.9675 17.5368 38.8368 17.3849C25.4168 15.2499 21.3501 17.6899 19.5201 19.4691C17.6901 21.2483 15.2501 25.4166 17.3851 38.8366C17.5479 39.968 17.4024 41.1224 16.964 42.1781C16.5256 43.2337 15.8106 44.1516 14.8943 44.8349C3.10096 53.6799 1.7793 58.3058 1.7793 60.9999C1.7793 63.6941 3.10096 68.3199 14.8943 77.1649C15.8106 77.8483 16.5256 78.7661 16.964 79.8218C17.4024 80.8775 17.5479 82.0319 17.3851 83.1633C15.4535 96.6849 17.6901 100.701 19.5201 102.531C21.3501 104.361 25.3151 106.547 38.8368 104.615C39.9682 104.452 41.1226 104.598 42.1783 105.036C43.2339 105.474 44.1518 106.189 44.8351 107.106C53.6801 118.899 58.306 120.272 61.0001 120.272C63.6943 120.272 68.3201 118.899 77.1651 107.106C77.8485 106.189 78.7663 105.474 79.822 105.036C80.8777 104.598 82.032 104.452 83.1635 104.615C96.736 106.547 100.65 104.31 102.48 102.531C104.31 100.752 106.547 96.6849 104.615 83.1633C104.452 82.0319 104.598 80.8775 105.036 79.8218C105.475 78.7661 106.19 77.8483 107.106 77.1649C118.899 68.3199 120.221 63.6941 120.221 60.9999C120.221 58.3058 118.899 53.6799 107.106 44.8349Z" fill="#38E894"/>
                <path d="M58.4583 78.7917C57.7893 78.7955 57.1261 78.6673 56.5068 78.4143C55.8874 78.1614 55.3241 77.7886 54.8491 77.3175L44.6825 67.1508C43.7253 66.1936 43.1875 64.8954 43.1875 63.5417C43.1875 62.188 43.7253 60.8897 44.6825 59.9325C45.6397 58.9753 46.9379 58.4376 48.2916 58.4376C49.6453 58.4376 50.9436 58.9753 51.9008 59.9325L58.4583 66.5408L75.1825 49.7658C75.655 49.2894 76.2172 48.9112 76.8367 48.6532C77.4562 48.3951 78.1206 48.2622 78.7916 48.2622C79.4627 48.2622 80.1271 48.3951 80.7466 48.6532C81.366 48.9112 81.9282 49.2894 82.4008 49.7658C82.8772 50.2384 83.2554 50.8006 83.5135 51.4201C83.7716 52.0395 83.9044 52.704 83.9044 53.375C83.9044 54.0461 83.7716 54.7105 83.5135 55.3299C83.2554 55.9494 82.8772 56.5116 82.4008 56.9842L62.0675 77.3175C61.5925 77.7886 61.0292 78.1614 60.4098 78.4143C59.7905 78.6673 59.1273 78.7955 58.4583 78.7917Z" fill="white"/>
              </svg>

              
            </div>

            <div class="mt-4">
                <p class="success-p">
                  Sent successfully ;
                </p>
                <p class="success-p">
                      Our team will contact you soon
                </p>
              
              </div>


            <div class="mt-3 flex-center">
                <router-link to="/" class="btn main-btn pt-3 pb-3 w-50 mx-auto fw-bold"> Home </router-link>
            </div>
        </form>
    </Dialog>
    <Toast />
</template>

<script>
import axios from 'axios';
import Dropdown from 'primevue/dropdown';
import Dialog from 'primevue/dialog';
import Toast from 'primevue/toast';

export default {
  data() {
    return {
      username: '',
      phone: '',
      email: '',
      password: '',
      countries: [],
      selectedCountry: null,
      country: null,
      usernameError: '',
      phoneError: '',
      emailError: '',
      passwordError: '',
      disabled : false ,
      spinner : false,
      success : false,
      currency_code : ''
    };
  },

  methods: {

    // get profile data 
    async getData(){
      await axios.get('profile', {
        headers : {
          Authorization : `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
        if( res.data.key === "success" ){
          const data = res.data.data ;
          this.username = data.name ;
          this.email = data.email ;
          this.phone = data.phone;
          this.currency_code = data.currency_code;
          for(  let i = 0 ; i < this.countries.length ; i++ ){
            if(data.country_code == this.countries[i].key){
              this.selectedCountry  = this.countries[i] ;
              this.country  = this.countries[i] ;
            }
          }
          // console.log(data)
        }
      } )
      .catch( (err)=>{
            this.$toast.add({ severity: 'error', summary: "something wrong", life: 3000 });
      } )
    },
    validateUsername() {
      this.usernameError = this.username.length < 4 ? 'Name must be at least 4 characters long.' : '';
    },
    validatePhone() {
      const phonePattern = /^[0-9]{10,15}$/;
      this.phoneError = !phonePattern.test(this.phone) ? 'Phone number must contain only numbers and be 10-15 digits long.' : '';
    },
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailError = !emailPattern.test(this.email) ? 'Please enter a valid email address.' : '';
    },
    
    validateForm() {
      // Trigger validation for all fields
      this.validateUsername();
      this.validatePhone();
      this.validateEmail();

      // Return true if no errors
      return !this.usernameError && !this.phoneError && !this.emailError ;
    },
    async register(){
      this.disabled = true ;
      this.spinner = true ;
      const fd = new FormData(this.$refs.registerForm)
      if(this.selectedCountry){
        fd.append("country_code", this.selectedCountry.key);
        fd.append("currency_code", this.selectedCountry.currency_code);
      }
            await axios.post('update-profile?_method=put', fd, {
              headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
              }
            })
      .then( (res)=>{
        if(res.data.key === "success"){
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
            
           
        }else{
            this.$toast.add({ severity: 'error', summary: res.data.msg, life: 5000 });

        }

         this.disabled = false ;
              this.spinner = false ;
      } )
      .catch( (err)=>{
            this.$toast.add({ severity: 'error', summary: "something wrong", life: 3000 });
             this.disabled = false;
          this.spinner = false;
      } )
    },
    async getCountries() {
      await axios.get('countries').then((res) => {
        this.countries = res.data.data;
      });
    },
  },
  mounted() {
    this.getCountries();
    this.getData();
  },
  components: {
    Dropdown,
    Dialog,
    Toast
  },
};
</script>

<style>
.success-p{
  color:  #332F2E;
text-align: center;
font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: capitalize;
text-align: center;
}

.p-toast-message-content{
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>


<style  lang="scss">
.p-placeholder, .p-dropdown-label{
      height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0 17px;
}
.p-dropdown-label span , .p-dropdown-label .flex{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.p-dropdown-label span {font-size: 12px;}
.p-dropdown {
  height: 60px;
  width: 100%;
}
.p-dropdown-items {
  padding: 5px !important;
  margin-bottom: 0px;
}
.p-dropdown-item{
  height: 30px !important;
}
.p-dropdown-trigger {
  display: none !important;
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
  color: #331f8e;
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

input,
select {
  width: calc(100% - 20px);
  padding: 17px;
  margin: 0 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.sign-in-button {
  background-color: #331f8e;
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
  color: #331f8e;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 104px;
    height: 1.2px;
    background-color: #331f8e;
    bottom: 0;
    right: 43%;
  }
}

.request-user-link font-awesome-icon {
  margin-right: 5px;
}
</style>
