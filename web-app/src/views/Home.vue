<template>
  <div class="main">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div id="announcements">
       <AnnouncementCard
        v-for="announcement in announcements"
        :key="announcement.id"
        :announcement="announcement"/>
    </div>
  </div>
</template>

<script>
import AnnouncementCard from '@/components/AnnouncementCard.vue'

export default {
  name: 'Home',
  components: {
    AnnouncementCard
  },
  data () {
    return {
      announcements: [
        {
            id: 1,
            title: "Announcement 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
            city: "Prishtine",
            bloodtype: "B-",
            participants: 23
        },
        {
            id: 2,
            title: "Announcement 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            city: "Gjilan",
            bloodtype: "AB",
            participants: 15
        },
        {
            id: 3,
            title: "Announcement 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            city: "Ferizaj",
            bloodtype: "B+",
            participants: 19
        }
      ]
    }
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
