<template>
    <div>
        <div class="card">
          <div class="card-header">
            <h2 class="title">{{announcement.title}}</h2>
          </div>
          <div class="card-body">
            <div class="blood-type">
                <img src="../assets/cardIcon.png" class="card-image" alt="card image">
                <span>{{announcement.bloodtype}}</span>
            </div>
           
            <p class="description">{{announcement.description}}</p>
          </div>
           <div class="card-footer">
              <div class="info">
                <span class="city"><font-awesome-icon :icon="['fas', 'map-marker-alt']" />{{announcement.city}}</span>
                <span class="participants"><font-awesome-icon :icon="['fas', 'users']" />{{announcement.participants}}</span>
              </div>
              <button>Apply</button>
           </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    announcement: Object
  }
}
</script>

<style scoped>
.card{
  background-color: rgb(232, 235, 236);
  border-radius: 15px;
  margin: 10px;
  padding: 10px;
  width: 100%;
  max-width: 380px;
  box-shadow: 1px 2px 8px 1px rgba(0, 0, 0, 0.15);
  border: solid 1px rgba(204, 204, 204, 0.39);
  min-height: 244px;
}
.card>*{
  padding: 10px;
}
.card-body{
  display: flex;
  align-items: center;
}

.blood-type{
    /* border: dashed 1px green; */
    border-radius: 10px;
    background-color: rgb(206, 212, 214);
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 80px;
    min-height: 80px;
    padding: 10px 15px;
    margin: 5px;
}

.blood-type span{
    font-weight: bold;
    font-size: 30pt;
}
.card-image{
  width: 40px;
}
.card-footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}
.card-footer>*{
  margin: 0 20px;
}

.card-footer > button{
  /* background-color: rgb(59, 89, 189); */
  background: linear-gradient(132deg, rgb(125, 80, 204) 0%, rgb(58, 101, 255) 100%);
  padding: 8px 25px;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 11pt;
  transition: 0.8s;
}
.card-footer > button:hover{
  /* background-color: rgb(69, 111, 202); */
  background: linear-gradient(132deg, rgb(106, 62, 180) 0%, rgb(54, 92, 230) 100%);
  color: white;
  cursor: pointer;
}
.city,
.participants{
  margin: 0 8px;
}
.city>svg,
.participants>svg{
  margin: 0 3px;
}
</style>
