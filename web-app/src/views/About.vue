<template>
  <div class="container">
    <div class="background">
      <p class="teksti-nalt">
        Grupi jonë përbehet nga Blerim Morina, Rilind Tasholli dhe Besart
        Ibishi.
      </p>
      <div class="textarea">
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
  top: 50%;
  left: 65%;
  transform: translate(-35%, -50%);
  font-weight: bold;
  color: black;
  text-align: justify;
  font-size: 28px;
  font-family: "Times New Roman", Times, serif;
  text-align: center;
  text-shadow: 0.5px 0.5px lightcoral;
}

img {
  width: 30%;
  height: 55%;
  position: absolute;
  top: 60%;
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
  text-shadow: 1px 1px lightslategray;
}

.textarea h5 {
  margin-top: 40px;
  color: rgb(0, 0, 0, 0.7);
}

.teksti-nalt {
  position: absolute;
  top: 14%;
  left: 78%;
  transform: translate(-86%, -22%);
  text-align: justify;
  font-size: 20px;
  font-family: "Times New Roman", Times, serif;
  color: rgb(0, 0, 0, 0.8);
  font-weight: bold;
  text-align: center;
  text-shadow: 1px 1px lightgray;
}

@media only screen and (max-width: 800px) {
  img {
    width: 35%;
    height: 54%;
    position: absolute;
    top: 60%;
    left: 30%;
    transform: translate(-45%, -60%);
    border-radius: 20px;
    box-shadow: 10px 10px 5px lightcoral;
  }

  .textarea {
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-35%, -40%);
    font-weight: bold;
    color: black;
    text-align: justify;
    font-size: 20px;
    font-family: "Times New Roman", Times, serif;
  }

  .ne {
    position: absolute;
    top: 20%;
    left: 35%;
    font-size: 22px;
    transform: translate(-75%, -65%);
  }

  .teksti-nalt {
    position: absolute;
    top: 20%;
    left: 80%;
    transform: translate(-80%, -20%);
    text-align: justify;
    font-size: 16px;
    font-family: "Times New Roman", Times, serif;
    color: rgb(0, 0, 0, 0.8);
    font-weight: bold;
    text-align: center;
  }
}
</style>
