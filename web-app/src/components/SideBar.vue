<template>
    <div id="sideBar" :class="(sideBarOpen)?'sideBarOpen':'sideBarClosed'">
        <span class="closeBtn" @click="toggleSideBar()">×</span>
        <div class="main-links">
            <ul>
                <li><router-link to="/"><font-awesome-icon :icon="['fas', 'home']" /> Home</router-link></li>
                <li><router-link to="/about"><font-awesome-icon :icon="['fas', 'circle-info']" /> About</router-link></li>
                <li><router-link to="/contact"><font-awesome-icon :icon="['fas', 'address-book']"/> Contact</router-link></li>
                <li><router-link to="/profile"><font-awesome-icon :icon="['fas', 'user']" /> Profile</router-link></li>            
            </ul>
        </div>

        <div v-if="isAdmin" class="admin-links">
            <ul>
            <h3 class="admin-panel-title">Admin Panel</h3>
                <li><router-link to="/admin/users"><font-awesome-icon :icon="['fas', 'users']" /> Users</router-link></li>
                <li><router-link to="/admin/announcements"><font-awesome-icon :icon="['fas', 'bullhorn']" /> Announcements</router-link></li>
                <li><router-link to="/admin/appointments"><font-awesome-icon :icon="['fas', 'calendar-check']" /> Appointments</router-link></li>
                <!-- <li><router-link :to="{ name: Profile }">Profile</router-link></li> -->
            </ul>
        </div>

    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default{
    computed: mapGetters(['sideBarOpen','isAdmin']),
    methods: mapActions(['toggleSideBar'])
}
</script>

<style scoped>
#sideBar *{
   white-space: nowrap;
}
#sideBar{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: rgb(202, 188, 188);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 5;
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    transition: 0.5s;
}

.sideBarClosed{
    width: 0px;
}
.sideBarOpen{
    width: 250px;
}

.closeBtn{
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(185, 35, 48, 0.932);
    width: 25px;
    height: 25px;
    border-radius: 50%;
    align-self: flex-end;
    margin: 15px;
    color: rgb(236, 231, 231);
    font-size: 15pt;
    cursor: pointer;
}
.closeBtn:hover{
    background: rgba(148, 27, 37, 0.932);
}

.main-links,
.admin-links{
    /* border: dashed 1px red; */
    margin: 10px 0;
    width: 100%;
    
}

.admin-panel-title{
    margin-bottom: 10px;
    white-space: nowrap;
}

ul{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style-type: none;
    width: 100%;
    padding: 0;
    /* border: dashed 1px white; */
    padding-left: 40px;
    
}

ul li{
    /* border: dashed 1px green; */
    margin: 3px 0;
    width: 100%;
    text-align: left;
   
}

ul a{
    /* border: dashed 1px red; */
    text-decoration: none;
    color: black;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 12px 50px 12px 20px;
    display: block;
    border-radius: 8px 0 0 8px;
    transition: 0.4s;
}
ul a:hover{
    transition: 0.2s;
    background-color: rgba(160, 144, 144, 0.932);
}

.main-links .router-link-exact-active,
.main-links .router-link-exact-active:hover {
  background-color: rgba(185, 35, 48, 0.932);
  color: white;
}

.admin-links .router-link-exact-active,
.admin-links .router-link-exact-active:hover {
  background-color: rgba(35, 75, 185, 0.932);
  color: white;
}

</style>