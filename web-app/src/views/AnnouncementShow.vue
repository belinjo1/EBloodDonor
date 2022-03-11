<template>
  <div class="main">
    <div class="announcement">
      <h1>{{ announcement.title }}</h1>
      <p>{{ announcement.text }}</p>
      <div class="info">
        <div class="bloodtype">
          <font-awesome-icon :icon="['fas', 'droplet']" />
          <span style="font-weight: bold">Blood Type: </span>
          <span>{{ announcement.bloodtype }}</span>
        </div>
        <div class="city">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
          <span style="font-weight: bold">Location: </span>
          <span>{{ announcement.city }}</span>
        </div>
        <div class="participants">
          <font-awesome-icon :icon="['fas', 'users']" />
          <span style="font-weight: bold">Participants: </span>
          <span>{{announcement.appointments.length}}</span>
        </div>
      </div>
      <div class="announcement-footer">
        <VueDatePicker v-model="date" placeholder="Choose date" no-header />
        <button class="apply-button" @click="addAppointment()">
          Set Appointment
        </button>
      </div>

      <div class="photo-show">
          <img :src="this.image" alt="">
        </div>
    </div>
  </div>
</template>

<script>
import { VueDatePicker } from "@mathieustan/vue-datepicker";
import "@mathieustan/vue-datepicker/dist/vue-datepicker.min.css";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: {
    VueDatePicker,
  },
  data() {
    return {
      date: null,
      image: ''
    };
  },
  props: ["id"],
  created() {
    this.getAnnouncement(this.$route.params.id).then(()=>{
      this.loadImage(this.announcement.image);
    });
  },
  computed: {...mapGetters(["StateUser", "announcement"])},
  methods: {
    ...mapActions(["getAnnouncement", "createAppointment"]),

    async addAppointment() {
      const appointment = { 
        date: this.date, 
        user: this.StateUser,
        announcement: this.announcement._id
      };
      try {
        await this.createAppointment(appointment);
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    loadImage(file) {
      
      if(file){
        var img = new Buffer.from(file.data.data).toString("base64")
        this.image = `data:${file.contentType};base64,${img}`
      }else{
        this.image = ''
      }
     
    },
    
  },
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  margin: 80px 0;
}

.announcement {
  /* background: linear-gradient(120deg, rgb(231, 235, 238) 0%, rgb(229, 232, 235) 100%); */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  max-width: 750px;
  padding: 25px 0;
  margin: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  /* box-shadow: 0px 0px 13px 1px rgba(15, 15, 15, 0.35); */
}

.announcement > * {
  padding: 10px;
}

.announcement > p {
  /* border: dashed 1px red; */
  width: 100%;
  max-width: 550px;
  margin: 0px 10px;
  word-wrap: break-word;
  white-space: pre-wrap;
}

.info {
  display: flex;
  flex-direction: column;
}

.info > div {
  margin: 4px 0;
}

.announcement-footer {
  display: flex;
  /* border: dashed 1px red; */
  border-radius: 8px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);
  margin: 20px 0;
  background-color: rgb(255, 255, 255);
}

.apply-button {
  /* background-color: rgb(59, 89, 189); */
  background: linear-gradient(
    132deg,
    rgb(125, 80, 204) 0%,
    rgb(58, 101, 255) 100%
  );
  padding: 8px 25px;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 11pt;
  transition: 0.8s;
}
.apply-button:hover {
  /* background-color: rgb(69, 111, 202); */
  background: linear-gradient(
    132deg,
    rgb(106, 62, 180) 0%,
    rgb(54, 92, 230) 100%
  );
  color: white;
  cursor: pointer;
}

svg {
  margin: 0 3px;
}

.photo-show img{
  max-width: 550px;
  max-height: 550px;
}
</style>
