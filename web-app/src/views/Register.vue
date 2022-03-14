<template>
  <div class="main">
    <div class="login">
      <div>
        <img
          src="../assets/avatar-plus.png"
          class="profile-image"
          alt="profile icon"
        />
        <form @submit.prevent="submit">
          <div class="input-label">
            <label for="name"
              ><font-awesome-icon :icon="['fas', 'user']" /> Name</label
            >
            <input
              type="text"
              name="name"
              v-model="form.name"
              placeholder="Enter your full name"
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
              placeholder="Enter your email"
            />
          </div>

          <div class="input-label">
            <label for="bloodtype"
              ><font-awesome-icon :icon="['fas', 'droplet']" /> Blood
              Type</label
            >
            <select name="bloodtype" class="select-blood" v-model="form.bloodtype">
              <option disabled>Select blood type</option>
              <option v-for="type in this.bloodtypes" :value="type">
                {{ type }}
              </option>
            </select>
          </div>

          <div class="input-label">
            <label for="city"
              ><font-awesome-icon :icon="['fas', 'fa-home']" /> City</label
            >
            <select name="city" class="select-city" v-model="form.city">
              <option disabled>Select City</option>
              <option v-for="city in cities" :value="city">
                {{ city }}
              </option>
            </select>
          </div>

          <div class="input-label">
            <label for="password"
              ><font-awesome-icon :icon="['fas', 'key']" /> Password</label
            >
            <input
              type="password"
              name="password"
              v-model="form.password"
              placeholder="Enter your password"
            />
          </div>

          <div class="input-label">
            <label for="passwordConfirm"
              ><font-awesome-icon :icon="['fas', 'key']" /> Confirm
              Password</label
            >
            <input
              type="password"
              name="passwordConfirm"
              v-model="form.passwordConfirm"
              placeholder="Confirm your password"
            />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
    <p v-if="showError" id="error">
      <font-awesome-icon :icon="['fas', 'circle-exclamation']" />
      {{ this.errorMessage }}
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters} from "vuex";
import schema from "@/data/registerSchema";

export default {
  components: {},
  data() {
    return {
      form: {
        name: "",
        email: "",
        bloodtype: "O+",
        city: "Prishtinë",
        password: "",
        passwordConfirm: "",
      },
      showError: false,
      errorMessage: "",
    };
  },
  computed: mapGetters(['cities', 'bloodtypes']),
  methods: {
    ...mapActions(["Register"]),
    async submit() {
      const User = this.form;

      schema
        .validateAsync(User)
        .then(() => {
          this.Register(User)
            .then(() => {
              this.$router.push("/profile");
            })
            .catch((err) => {
              //show login error
              this.errorMessage = err.response.data.message;
              this.showError = true;
            });
        })
        .catch((err) => {
          //show validation error
          this.errorMessage = err.message;
          this.showError = true;
        });
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
  margin: 120px 0;
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 15px 0;
  background: linear-gradient(
    130deg,
    rgba(255, 74, 77, 1) 9%,
    rgba(48, 153, 255, 1) 100%
  );
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
    121deg,
    rgba(195, 89, 121, 1) 18%,
    rgba(235, 96, 96, 1) 100%
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
    121deg,
    rgba(186, 61, 99, 1) 18%,
    rgba(235, 73, 73, 1) 100%
  );
}
input {
  /* margin: 5px; */
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
  padding: 12px 18px;
  border-radius: 18px;
  border: none;
  font-size: 11pt;
}
select {
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
  padding: 12px 0;
  border-radius: 18px;
  border: none;
  font-size: 14pt;
  font-weight: bold;
  width: 100%;
  text-align: center;
  color: rgb(35, 37, 39);
  /* cursor: pointer; */
  transition: 0.35s;
}


.select-blood{
  background-color: rgb(231, 159, 171);
}
.select-blood:hover {
  background-color: rgb(201, 140, 151);
  transition: 0.05s;
}

.select-city{
  background-color: rgb(189, 203, 236);
}
.select-city:hover {
  background-color: rgb(169, 180, 207);
  transition: 0.05s;
}

#error {
  color: rgb(201, 63, 63);
}
</style>
