<template>
  <div class="login-container">
    <div class="login-card">
      <h2 class="fw-bold">Hello Dear Visitor!</h2>
      <p>Please Enter Login Information</p>
      <form @submit.prevent="signIn">
        <div class="form-group">
          <label for="username">User Name</label>
          <input type="text" id="username" v-model="username" placeholder="Please enter your username" required />
        </div>
        <div class="form-group position-relative">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" placeholder="Please enter your password" required />

          
        </div>
        <button type="submit" class="sign-in-button">
           Sign in
        </button>
      </form>
      <div class="divider">OR</div>
      <a href="#" class="request-user-link">
        Request A User
      </a>
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
