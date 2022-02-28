<template>
  <div class="main">
    <div class="login">
      <div>
        <h1 class="title">Get in touch<span>.</span> <font-awesome-icon :icon="['fas', 'message']" /></h1>

        <form @submit.prevent="submit">
          <div class="input-label">
            <label for="title"
              ><font-awesome-icon :icon="['fas', 'pen']" /> Title</label
            >
            <input
              type="text"
              name="title"
              v-model="form.title"
              placeholder="Enter Title"
            />
          </div>
          
          <div class="input-label">
            <label for="email"
              ><font-awesome-icon :icon="['fas', 'envelope']" /> Email</label
            >
            <input
              type="text"
              name="email"
              v-model="form.email"
              placeholder="Enter Email"
            />
          </div>

          <div class="input-label">
            <label for="text"
              ><font-awesome-icon :icon="['fas', 'message']" /> Message</label
            >
            <textarea v-model="form.text" name="text" placeholder="Enter Message..." rows="6"></textarea>
            
          </div>

          <button type="submit">Send Message <font-awesome-icon :icon="['fas', 'paper-plane']" /></button>
        </form>
       
      </div>
    </div>
    
    <p v-if="showError" id="error"><font-awesome-icon :icon="['fas', 'circle-exclamation']" /> {{this.errorMessage}}</p>
  </div>
</template>


<script>
import { mapActions } from "vuex"
import schema from '@/data/contactSchema'


export default {
  name: "sendMessage",
  components: {},
  data() {
    return {
      form: {
        title: "",
        text: "",
        email: "",
      },
      showError: false,
      errorMessage: ''
    };
  },
  methods: {
    ...mapActions(["createMessage"]),
    async submit() {
      const message = this.form

      schema.validateAsync(message).then(() => {
          this.createMessage(message).then(() => {
            this.$router.push("/profile");
          }).catch(err => {
            //show login error
            this.errorMessage = err.response.data.message
            this.showError = true
          })

      }).catch(err => {
        //show validation error
        this.errorMessage = err.message
        this.showError = true
      })
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.main {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
}

.title{
  color: rgb(64, 100, 167);
}
.title svg,
.title span{
  color: #ce4a55;
}

.input-label {
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
  background: linear-gradient(
    138deg,
    rgba(92, 169, 235, 1) 0%,
    rgba(148, 67, 240, 1) 100%
  );
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
  background: linear-gradient(
    138deg,
    rgba(65, 152, 227, 1) 0%,
    rgba(124, 38, 222, 1) 100%
  );
}
button[type="submit"] svg{
  color: #f53e4e;
}
input {
  /* margin: 5px; */
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
  padding: 12px 18px;
  border-radius: 18px;
  border: none;
  font-size: 11pt;
  width: 100%;
}
textarea{
   /* margin: 5px; */
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
  padding: 12px 18px;
  border-radius: 11px;
  border: none;
  font-size: 11pt;
  width: 300px;
  max-height: 203px;
}
#error {
  color: rgb(201, 63, 63);
}
</style>