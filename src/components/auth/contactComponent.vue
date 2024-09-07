<template>
  <div class="login-container pt-5 pb-5">
    <div class="login-card">
      <h2 class="fw-bold">Contact Us</h2>
      <p>Please Enter Login Information</p>
      <form @submit.prevent="sendMessage" ref="contactForm">
        

          <div class="form-group position-relative">
          <label for="password">Your Name</label>
          <input type="text" id="username" name="user_name" v-model="user_name" placeholder="Please enter your name" required />
        </div>


         <div class="form-group">
                      <label for="username">Mobile Number</label>
         <div class="row">
            <div class="col-2">
                <select class="form-select h-100" name="" id="" required>
                    <option v-for="country in countries" :key="country.id" :value="country.key"> {{   country.key }} </option>
                </select>
            </div>
            <div class="col-10">
                          <input type="tel" id="phone"  name="phone"  v-model="phone" placeholder="Please enter your Mobile Number" required />
            </div>
         </div>
        </div>

        <div class="form-group position-relative">
          <label for="password">Email</label>
          <input type="email" id="email" name="email" v-model="email" placeholder="Please enter your email" required />
        </div>


          <div class="form-group position-relative">
              <label for="password">Message</label>
              <textarea  v-model="message" required name="complaint" id="" cols="30" placeholder="Please Enter Yout Message" rows="6" class="form-control"></textarea>
            </div>
         
        <button type="submit" class="sign-in-button" :disabled="disabled"> 
           <span v-if="!spinner">Send</span>
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
      username: '',
      password: '',
      countries : [],
      user_name : '',
      phone : '',
      email : '',
      disabled : false ,
      message : '',
      spinner : false
    };
  },
  components:{
    Toast
  },
  methods: {
    signIn() {
      // Add your sign-in logic here
      console.log('Sign in with', this.username, this.password);
    },
    async getCountries(){
      await axios.get('countries')
      .then( (res)=>{
        this.countries = res.data.data ;
      } )
    },
    async sendMessage(){
      this.disabled = true ;
      this.spinner = true ;
      const fd = new FormData(this.$refs.contactForm)
      await axios.post('new-complaint', fd, {
        headers:{
          Authorization : `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
        if(res.data.msg === "success"){
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
            this.user_name = "";
            this.phone = "";
            this.message = "";
            this.email = "";

        }else{
                        this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });

        }

         this.disabled = false ;
              this.spinner = false ;
      } )
      .catch( (err)=>{
                                  this.$toast.add({ severity: 'error', summary: "something wrong", life: 3000 });
                                   this.disabled = false ;
              this.spinner = false ;
      } )
    }
  },
  mounted(){
    this.getCountries()
  }
};
</script>

<style scoped lang="scss">

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

input , select{
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
