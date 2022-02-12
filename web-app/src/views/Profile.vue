<template>
<div class="main">
  <div class="profile">
    <div class="profile-header">
      <div class="header-top">
        <img src="../assets/avatar.png" class="profile-image" alt="profile icon">
        <div class="basic-info">
          <h2 class="name">{{StateUser.name}}</h2>
          <!-- <img src="../assets/star.png" style="background: linear-gradient(121deg, rgba(153,111,94,1) 0%, rgba(163,148,141,1) 50%, rgba(153,111,94,1) 100%); " class="account-level" /> -->
        </div>
        <span class="email"><font-awesome-icon :icon="['fas', 'envelope']"/> {{StateUser.email}}</span>
        <span class="city"><font-awesome-icon :icon="['fas', 'map-marker-alt']"/> Prishtine</span>
      </div>
      <div class="header-bottom">
        <div class="blood-type">
          <span class="info">{{StateUser.bloodtype}}</span>
          <span class="info-title">Blood Type</span>
        </div>
        <div class="donations">
          <span class="info">11</span>
          <span class="info-title">Donations</span>
        </div>
      </div>
    </div>

    <div class="profile-bottom">
      <a href=""><font-awesome-icon :icon="['fas', 'calendar-check']"/> Appointments</a>
      <!-- <a href="#history"><font-awesome-icon :icon="['fas', 'medal']"/> Rewards</a> -->
      <a href=""><font-awesome-icon :icon="['fas', 'pen']"/> Edit Profile</a>
    </div>
  </div>
</div>
  
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(['StateUser'])
}
</script>

<style scoped>

.main{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.profile{
  /* border: dashed 2px orange; */
  margin: 80px 0;
  
}
.profile-header{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header-top{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.name{
  font-size: 25pt;
}
.email,
.city{
  margin: 5px 0;
  opacity: 0.9;
}
.header-top svg {
  color: #2a72c9;
}
.profile-image{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 15px 0;
  background: linear-gradient(130deg, rgba(255,74,77,1) 9%, rgba(48,153,255,1) 100%);
}

.account-level {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        padding: 6px;
        margin: 0 10px;
    }

.basic-info{
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.basic-info>*{
  margin: 0 3px;
}
.basic-info>.age{
  /* font-weight: 600; */
  color: rgb(87, 99, 116);
  font-size: 14pt;
}
.place{
  color: rgb(87, 99, 116);
  font-size: 13pt;
}

.header-bottom{
  display: flex;
  align-items: center;
  margin: 20px 0;
}

.blood-type,
.donations{
  /* border: dashed 1px green; */
  /* width: 120px;
  height: 85px; */
  padding: 22px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  border-radius: 8px;
}

.blood-type .info,
.donations .info{
  font-weight: 600;
  font-size: 18pt;
  padding: 5px 0;
}
.blood-type .info-title,
.donations .info-title{
  font-size: 9pt;
}

.blood-type{
  /* background-color: rgb(228, 181, 191); */
  background: linear-gradient(130deg, rgba(205,128,142,1) 0%, rgba(255,170,170,1) 100%);
}
.donations{
  /* background-color: rgb(178, 216, 223); */
  background: linear-gradient(130deg, rgba(156,209,217,1) 0%, rgba(164,185,222,1) 100%);
}

.profile-bottom{
  /* border: dashed 1px red; */
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile-bottom a{
  /* border: dashed 1px green; */
  padding: 20px 0;
  width: 100%;
  max-width: 250px;
  margin: 7px 0;
  color: rgb(61, 77, 105);
  font-weight: 600;
  font-size: 14pt;
  text-decoration: none;
  background-color: rgb(233, 235, 240);
  border-radius: 6px;
  border: solid 1px rgba(128, 128, 128, 0.123);
  box-shadow: 1px 1px 3px 0px rgb(12, 12, 12, 0.20);
}
.profile-bottom a:hover{
  background-color: rgb(208, 210, 216);
}
</style>
