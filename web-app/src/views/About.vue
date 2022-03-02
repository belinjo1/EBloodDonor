<template>
  <div class="container">
    <div class="background">
      <p class="teksti-nalt">
        Grupi jonë përbehet nga Blerim Morina, Rilind Tasholli dhe Besart
        Ibishi.
      </p>
      <div class="textarea">
        <h4>Shëndeti i njerëzve në rend te parë!</h4>
        <h5>
          Ne besojmë se krijimi i një aplikacioni siç është E-BloodDonor është i
          domosdoshëm për një shoqëri në të cilën jetojmë. Qellimi ynë është që
          të zbusim vdekshmërinë nga rastet e humbjës së gjakut. Jemi të
          emocionuar që të ju ndihmojmë në udhetimin tonë!
        </h5>
      </div>
      <h2 class="ne">Kush jemi ne?</h2>
      <img src="../assets/4.png" alt="" />
    </div>
  </div>
</template>

<style scoped>
.background {
  width: 100%;
  height: 100%;

  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(240, 128, 128, 0.1);
}

.textarea {
  position: absolute;
  top: 55%;
  left: 65%;
  transform: translate(-35%, -45%);
  font-weight: bold;
  color: black;
  text-align: justify;
  font-size: 28px;
  font-family: "Times New Roman", Times, serif;
}

img {
  width: 30%;
  height: 55%;
  position: absolute;
  top: 55%;
  left: 35%;
  transform: translate(-55%, -65%);
  border-radius: 20px;
  box-shadow: 10px 10px 5px lightcoral;
}
.ne {
  position: absolute;
  top: 15%;
  left: 35%;
  transform: translate(-85%, -65%);
}

.textarea h5 {
  margin-top: 40px;
  color: rgb(0, 0, 0, 0.7);
}

.textarea h4 {
  margin-left: 50px;
}

.teksti-nalt {
  position: absolute;
  top: 13%;
  left: 75%;
  transform: translate(-85%, -25%);
  text-align: justify;
  font-size: 20px;
  font-family: "Times New Roman", Times, serif;
  color: rgb(0, 0, 0, 0.8);
  font-weight: bold;
}
</style>
