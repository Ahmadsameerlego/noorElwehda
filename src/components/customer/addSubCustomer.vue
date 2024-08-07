<template>
  <div class="login-container position-relative">

     <nav class="mb-0 pb-0 px-0 py-0">
        <ul class="breadcrumb">
          <li >
            <router-link to="/dashboard" class="main">My Accounts</router-link> /
            <router-link to="/subCustomers" class="main">SubCustomers</router-link> /
            <router-link to="/dashboard" class="active">Add</router-link> 

          </li>
        </ul>
      </nav>
      
    <div class="login-card"     v-motion-slide-visible-left
 :delay="400"
    :duration="1500">
      <h2 class="fw-bold">Add Sub customer</h2>
      <p>Please enter Customer information</p>
      <form @submit.prevent="signIn">
        <div class="form-group">
          <label for="username">Customer Name</label>
          <input type="text" id="username" v-model="username" placeholder="Please enter your customer name" required />
        </div>
        <div class="form-group">
                      <label for="username">Customer Phone</label>
         <div class="row">
            <div class="col-md-2">
                <select class="form-select h-100" name="" id="">
                    <option value="">+20</option>
                    <option value="">+966</option>
                </select>
            </div>
            <div class="col-md-10">
                          <input type="tel" id="username" v-model="phone" placeholder="Please enter your customer Phone" required />
            </div>
         </div>
        </div>

         <div class="form-group position-relative">
          <label for="username">Customer Address</label>
            <select class="form-select h-100" name="" id="">
                    <option value="">Egypt</option>
                    <option value="">Suadia Arabia</option>
                </select>          
            <span class="location">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M15.9998 17.9069C18.2973 17.9069 20.1598 16.0444 20.1598 13.7469C20.1598 11.4494 18.2973 9.58691 15.9998 9.58691C13.7023 9.58691 11.8398 11.4494 11.8398 13.7469C11.8398 16.0444 13.7023 17.9069 15.9998 17.9069Z" stroke="#331F8E" stroke-width="1.5"/>
            <path d="M4.82709 11.3203C7.45376 -0.226338 24.5604 -0.213005 27.1738 11.3337C28.7071 18.107 24.4938 23.8403 20.8004 27.387C18.1204 29.9737 13.8804 29.9737 11.1871 27.387C7.50709 23.8403 3.29376 18.0937 4.82709 11.3203Z" stroke="#331F8E" stroke-width="1.5"/>
            </svg>
          </span>
        </div>


        <button type="submit" class="sign-in-button">
           Add
        </button>
      </form>
     
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    signIn() {
      // Add your sign-in logic here
      console.log('Sign in with', this.username, this.password);
    }
  }
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
