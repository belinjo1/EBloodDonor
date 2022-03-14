<template>
  <div class="main">
    <h1>About</h1>
    <div class="main-content">
      <div id="slider" class="slidesS">
        <ul id="slideWrap">
          <li><img src="../assets/1.png" alt="" /></li>
          <li><img src="../assets/2.png" alt="" /></li>
          <li><img src="../assets/3.png" alt="" /></li>
          <li><img src="../assets/4.png" alt="" /></li>
          <li><img src="../assets/5.png" alt="" /></li>
        </ul>
        <a id="prev" href="#"></a>
        <a id="next" href="#"></a>
      </div>
      <div class="textarea">
        <!-- <img class="logo" src="../assets/logo-text.jpeg" alt="" /> -->
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
#slider {
  position: relative;
  width: 500px;
  height: auto;
  margin: 100px auto;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  border-radius: 10%;
}

#slider ul {
  position: relative;
  list-style: none;
  height: 100%;
  width: 10000%;
  padding: 0;
  margin: 0;
  transition: all 750ms ease;
  left: 0;
}

#slider ul li {
  position: relative;
  height: 100%;
  float: left;
}

#slider ul li img {
  width: 500px;
  height: auto;
}

#slider #prev,
#slider #next {
  width: 40px;
  line-height: 40px;
  font-size: 1.5rem;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
  text-align: center;
  color: black;
  background: #f9f7fb;
  text-decoration: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: all 150ms ease;
}

#slider #prev:hover,
#slider #next:hover {
  background-color: rgba(0, 0, 0, 0.5);
  text-shadow: 0;
  color: white;
}

#slider #next {
  right: 0px;
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

<script type="text/javascript">
var responsiveSlider = function () {
  var slider = document.getElementById("slider");
  var slideList = document.getElementById("slideWrap");
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");

  var count = 1;
  var sliderWidth = slider.offsetWidth;
  var items = slideList.querySelectorAll("li").length;

  window.addEventListener("resize", function () {
    sliderWidth = slider.offsetWidth;
  });

  var nextSlide = function () {
    if (count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = items)) {
      slideList.style.left = "0px";
      count = 1;
    }
  };

  var prevSlide = function () {
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = 1)) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  next.addEventListener("click", function () {
    nextSlide();
  });

  prev.addEventListener("click", function () {
    prevSlide();
  });

  setInterval(function () {
    nextSlide();
  }, 4000);
};

window.onload = function () {
  responsiveSlider();
};
</script>