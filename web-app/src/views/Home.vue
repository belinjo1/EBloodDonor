<template>
  <div class="main">
    <h1><font-awesome-icon :icon="['fas', 'bullhorn']" /> Announcements</h1>

    <div v-if="this.announcements">
       <div id="announcements">
          <AnnouncementCard
            v-for="announcement in pageOfItems"
            :key="announcement._id"
            :announcement="announcement"
          />
        </div>
        
        <Pagination :announcements="this.announcements" @updatePage="this.updatePage" ></Pagination>
    </div>

    <div v-else>
      <h3><font-awesome-icon :icon="['fas', 'circle-exclamation']" /> There are no announcements!</h3>
    </div>
   
  </div>

</template>

<script>
import AnnouncementCard from "@/components/AnnouncementCard.vue";
import Pagination from "@/components/Pagination.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    AnnouncementCard,
    Pagination
  },
  data(){
    return{
      pageOfItems: []
    }
  },
  created() {
    this.getAnnouncements();
  },
  computed: {
    ...mapGetters(["announcements"]),
  },
  methods: {
    ...mapActions(["getAnnouncements"]),
    updatePage(pageOfItems) {
    // update page of items
    this.pageOfItems = pageOfItems;
  }
  },
  
};
</script>

<style scoped>
#announcements {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
}

.main {
  margin: 100px 0;
}

svg{
  color: rgb(190, 65, 71);
}

ul{
  border: '2px solid red';
}

li {
  display: 'inline-block';
  border: '2px dotted green';
}
a {
    color: 'blue';
}

@media only screen and (max-width: 500px) {
  #announcements {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
  }
}
</style>
