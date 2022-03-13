<template>
  <div class="main">
    <h1>About</h1>
    <div class="main-content">
      <img class="card" src="../assets/4.png" alt="" />
      <div class="textarea">
        <img class="logo" src="../assets/logo-text.jpeg" alt="" />
        <p>
          Ne besojmë se krijimi i një aplikacioni siç është E-BloodDonor është i
          domosdoshëm për një shoqëri në të cilën jetojmë. Qellimi ynë është që
          të zbusim vdekshmërinë nga rastet e humbjës së gjakut. Jemi të
          emocionuar që të ju ndihmojmë në udhetimin tonë!
        </p>
      </div>
    </div>
    <div class="team">
      <h2>Our Team</h2>
      <div class="members">
        <div class="member">
          <img src="../assets/blerimi.png" alt="" />
          <h3 class="name">Blerim Morina</h3>
        </div>
        <div class="member">
          <img src="../assets/rilind.png" alt="" />
          <h3 class="name">Rilind Tasholli</h3>
        </div>
        <div class="member">
          <img src="../assets/besarti.jpg" alt="" />
          <h3 class="name">Besart Ibishi</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  min-height: 90vh;
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: solid 2px red; */
}

.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: dashed 1px green; */
}
.textarea {
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  /* border: dashed 1px red; */
}

.textarea .logo {
  width: 130px;
  padding: 20px 0;
}
.textarea p {
  max-width: 450px;
  font-size: 14pt;
  letter-spacing: 1px;
}

.card {
  margin: 20px;
  width: 450px;
  height: 55%;
  /* position: absolute; */
  border-radius: 20px;
  box-shadow: 2px 5px 10px 2px rgba(177, 150, 150, 0.856);
}

.team {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin: 50px 0;
  background: rgb(214, 200, 201);
  box-shadow: 0 3px 10px 2px rgba(95, 82, 82, 0.452);
}

.members {
  display: flex;
  justify-content: center;
  width: 100%;
}

.member {
  /* border: dashed 1px red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

.member img {
  width: 130px;
  padding: 15px;
  margin: 5px 0;
  border-radius: 50%;
  background-color: rgb(151, 162, 199);
}

.name {
  font-size: 11pt;
  margin: 5px 0;
}

@media only screen and (max-width: 800px) {
  .card {
    width: 350px;
  }
}

@media only screen and (max-width: 600px) {
  .main-content {
    flex-direction: column;
  }

  .card {
    width: 80vw;
    order: 2;
  }

  .members {
    flex-direction: column;
  }
}
</style>
