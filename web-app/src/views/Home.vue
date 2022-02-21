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

  </div>
</template>

<script>
import AnnouncementCard from '@/components/AnnouncementCard.vue'
import { mapActions, mapGetters} from 'vuex'

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

@media only screen and (max-width: 500px) {
  #announcements{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
  }
}
</style>
