<template>
  <div class="login-container">
    <div class="login-card">
      <h2 class="fw-bold">Hello Dear Visitor!</h2>
      <p>Please Enter Login Information</p>
      <form @submit.prevent="login" ref="loginForm">
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
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            v-model="password"
            placeholder="Please enter your password"
            @input="validatePassword"
            required
          />
          <span v-if="passwordError" class="error">{{ passwordError }}</span>
        </div>

        <div class="d-flex justify-content-end align-items-end">
          <button class="btn forget" @click.prevent="forget = true"> Forget Password ? </button>
        </div>
        <button type="submit" class="sign-in-button" :disabled="disabled">
          <span v-if="!spinner">Request</span>
            <div class="spinner-border mx-2" role="status" v-if="spinner">
                    <span class="visually-hidden">Loading...</span>
                  </div>
        </button>


      </form>
      <div class="divider">OR</div>
      <router-link to="/register" class="request-user-link">
        Request A User
      </router-link>
    </div>
  </div>

  <Dialog v-model:visible="forget" width="700" modal header="" :style="{ width: '25rem' }">
    <form action="">
      <p class="forget-text">
        Please contact customer service at email <a href="mailto:ahmadsamerlego@gmail.com" class="color">[email@example.com]</a> or phone <a href="tel:01013746111" class="color">[123-456-7890]</a>.
      </p>

      <div class="mt-3 flex-center">
        <router-link to="/home" class="btn main-btn pt-3 pb-3 w-100 fw-bold"> Home </router-link>
      </div>
    </form>
  </Dialog>
  <Toast />
</template>

<script>
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import axios from 'axios';
import Toast from 'primevue/toast';

export default {
  data() {
    return {
      phone: '',
      password: '',
      forget: false,
      countries: [],
      selectedCountry: null,
      phoneError: '',
      passwordError: '',
            disabled : false ,
      spinner : false,
 
    };
  },
  components: {
    Dialog,
    Dropdown,
    Toast
  },
  methods: {
    validatePhone() {
      const phonePattern = /^[0-9]{10,15}$/;
      this.phoneError = !phonePattern.test(this.phone) ? 'Phone number must contain only numbers and be 10-15 digits long.' : '';
    },
    validatePassword() {
      this.passwordError = this.password.length < 6 ? 'Password must be at least 6 characters long.' : '';
    },
    validateForm() {
      // Trigger validation for all fields
      this.validatePhone();
      this.validatePassword();

      // Return true if no errors
      return !this.phoneError && !this.passwordError;
    },
     async login(){
      this.disabled = true ;
      this.spinner = true ;
      const fd = new FormData(this.$refs.loginForm)
      fd.append('country_code', this.selectedCountry.key)
      fd.append('device_type', 'web')
      fd.append('device_id', localStorage.getItem('device_id'))
      await axios.post('sign-in', fd)
      .then( (res)=>{
        if(res.data.key === "success"){
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
            
            setTimeout(() => {
              this.success = true ;
              localStorage.setItem('user', JSON.stringify(res.data.data))
              localStorage.setItem('token', res.data.data.token)
                        this.$router.push('/')
            }, 1000);

        }else{
            this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });

        }

         this.disabled = false ;
              this.spinner = false ;
      } )
      .catch( (err)=>{
            this.$toast.add({ severity: 'error', summary: "something wrong", life: 3000 });
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

        fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => localStorage.setItem('device_id', data.ip))
    .catch(error => console.error(error));

  },
};
</script>

<style scoped>
.error {
  color: red;
  font-size: 0.875em;
  margin-top: 0.5em;
}
</style>
<style scoped lang="scss">
.forget-text{
  color: #332F2E;
  font-size: 16px;
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

input {
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
.forget{
  color: #331F8E;
  font-weight: 600;
  font-size: 20px;
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
