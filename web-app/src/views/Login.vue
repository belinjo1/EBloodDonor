<template>
    <div class="main">
        <div class="login">
            <div>
            <img src="../assets/avatar.png" class="profile-image" alt="profile icon">
            <form @submit.prevent="submit">
                <div class="input-label">
                <label for="email"><font-awesome-icon :icon="['fas', 'envelope']" /> Email</label>
                <input type="text" name="email" v-model="form.email" placeholder="Enter your email" />
                </div>
                <div class="input-label">
                <label for="password"><font-awesome-icon :icon="['fas', 'key']" /> Password</label>
                <input type="password" name="password" v-model="form.password" placeholder="Enter your password" />
                </div>
                <button type="submit">Login</button>
            </form>
            <p v-if="showError" id="error">email or Password is incorrect</p>
            </div>
        </div>
    </div>
  
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      showError: false
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      const User = {email: this.form.email, password: this.form.password};
      try {
          await this.LogIn(User);
          this.$router.push("/profile");
          this.showError = false
      } catch (error) {
        this.showError = true
        console.log(error)
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.main{
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-image{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 15px 0;
  background: linear-gradient(130deg, rgba(255,74,77,1) 9%, rgba(48,153,255,1) 100%);
}

.input-label{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px 0;
}
label {
  /* padding: 12px 12px 12px 0; */
  display: inline-block;
  padding: 5px 0;
  font-size: 9pt;
  margin-left: 10px;
}
button[type="submit"] {
  background: linear-gradient(138deg, rgba(92,169,235,1) 0%, rgba(148,67,240,1) 100%);
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 30px;
  border: none;
  width: 100%;
  margin: 15px 0;
  font-size: 12pt;
}
button[type="submit"]:hover {
  background: linear-gradient(138deg, rgba(65,152,227,1) 0%, rgba(124,38,222,1) 100%);
}
input {
  /* margin: 5px; */
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
  padding: 12px 18px;
  border-radius: 18px;
  border:none;
  font-size: 11pt;
}
#error {
  color: red;
}
</style>