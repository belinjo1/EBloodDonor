<template>
  <div class="main">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div id="announcements">
       <AnnouncementCard
        v-for="announcement in announcements"
        :key="announcement._id"
        :announcement="announcement"/>
    </div>

    <button @click="getAnnouncements()">GetAllanncoucmcc</button>
  </div>
</template>

<script>
import AnnouncementCard from '@/components/AnnouncementCard.vue'
import { mapActions, mapStates, mapGetters} from 'vuex'

export default {
  name: 'Home',
  components: {
    AnnouncementCard
  },
  
  created(){
    this.getAnnouncements()
  },
  computed: {
    ...mapGetters(['announcements']),
  },
  methods: {  
    ...mapActions(['getAnnouncements'])
  }
  
}
</script>

<style scoped>
#announcements{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
}

.main{
  margin: 80px 0;
}
</style>
