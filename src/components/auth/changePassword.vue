<template>
  <div class="login-container">
    <div class="login-card">
      <h2 class="fw-bold">Change Your Password</h2>
      <p>Please Enter  Information</p>
      <form @submit.prevent="login" ref="loginForm">
      
        <div class="form-group position-relative">
          <label for="old_password">Old Password</label>
          <input
            type="password"
            id="old_password"
            name="old_password"
            v-model="old_password"
            placeholder="Please enter  password"
            @input="validatePassword"
            required
          />
          <span v-if="passwordError" class="error">{{ passwordError }}</span>
        </div>

         <div class="form-group position-relative">
          <label for="password">New Password</label>
          <input
            type="password"
            id="password"
            name="password"
            v-model="password"
            placeholder="Please enter  password"
            @input="validateNewPassword"
            required
          />
          <span v-if="passwordNewError" class="error">{{ passwordNewError }}</span>
        </div>

         <div class="form-group position-relative">
          <label for="password_confirmation">Confirm Password</label>
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            v-model="password_confirmation"
            placeholder="Please enter  password"
            @input="validateConPassword"
            required
          />
          <span v-if="passwordConError" class="error">{{ passwordConError }}</span>
        </div>

        <div v-if="pass_enter">
            <div v-if="password_iden" class="d-flex justify-content-start mx-3">
            <span class="text-success fs-6 text-start">Password identically</span>
        </div>
        <div v-else class="d-flex justify-content-start mx-3">
            <span class="error fs-6 text-start w-100">Password Doesn't Match</span>
        </div>
        </div>


        <button type="submit" class="sign-in-button" :disabled="disabled">
          <span v-if="!spinner">Change</span>
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
import axios from 'axios';
import Toast from 'primevue/toast';

export default {
  data() {
    return {
      old_password : '',
      password: '',
      password_confirmation : '',
      passwordError: '',
      passwordConError: '',
      passwordNewError: '',
            disabled : true ,
      spinner : false,
    password_iden : false,
    pass_enter : false
    };
  },
  components: {
    Toast
  },
  methods: {
    
    validatePassword() {
      this.passwordError = this.old_password.length < 6 ? 'Password must be at least 6 characters long.' : '';
    },
    validateNewPassword() {
        if( this.password == this.password_confirmation ){
            this.disabled = false ;
        }else{
            this.disabled = true ;
        }
      this.passwordNewError = this.password.length < 6 ? 'Password must be at least 6 characters long.' : '';
    },
    validateConPassword() {
        this.pass_enter = true ;
        

        if( this.password == this.password_confirmation ){
            this.password_iden =  true ;
            this.disabled = false ;
        }else{
            this.password_iden =  false ;
            this.disabled = true ;
        }
      this.passwordConError = this.password_confirmation.length < 6 ? 'Password must be at least 6 characters long.' : '';
    },
    validateForm() {
      this.validatePassword();

      // Return true if no errors
      return !this.phoneError && !this.passwordError;
    },
     async login(){
      this.disabled = true ;
      this.spinner = true ;
      const fd = new FormData(this.$refs.loginForm)
      if(this.selectedCountry){
              fd.append('country_code', this.selectedCountry.key)
      }
      await axios.post('update-passward?_method=patch', fd, {
        headers : {
            Authorization : `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{

       
        if(res.data.key === "success"){
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
            
        setTimeout(() => {
            this.$router.push('/profile')
        }, 2000);

        }else{
            this.$toast.add({ severity: 'error', summary: res.data.msg, life: 10000 });

        }
        
         this.disabled = false ;
              this.spinner = false ;
      } )
      .catch( (err)=>{
            this.$toast.add({ severity: 'error', summary: err.response.data.msg, life: 10000 });
            this.disabled = false ;
              this.spinner = false ;
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

</style>
