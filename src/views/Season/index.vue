<template>
  <div class="flex-containerseason">
    <div class="flex-item item7">
      <img src="./images/logo.webp" alt="" />
    </div>
    <div class="flex-item item8">
      <img src="./images/图标.png" alt="" />
      <div class="wenzi1">
        <h1>NEW LEGEND: CONDUIT</h1>
        <br />

        <p>
          Light the way with Conduit, the new support Legend whose shield-based
          abilities and infectious energy shine as the core of any squad.
        </p>
      </div>
    </div>
    <div class="flex-item item9">
      <div class="wenzi2">
        <h1>ENERGIZED STORM POINT</h1>
        <br />
        <p>
          The map has been overhauled, reducing its size and amping up the
          intensity with new POIs to get you into more fights, faster.
        </p>
      </div>
    </div>
    <div class="flex-item item10">
      <div class="wenzi3">
        <h1>CROSS PROGRESSION</h1>
        <br />
        <p>
          Show off your cosmetics, badges, and achievements across platforms and
          accounts.
        </p>
      </div>
    </div>
    <div class="flex-item item11">
      <img src="images/season5.png" alt="" />

      <div class="wenzi4">
        <br />
        <h1>NEW BATTLE PASS</h1>
        <br />
      </div>
    </div>
    <div class="flex-item item12">
      <!-- Swiper -->
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="images/轮播1).jpg" alt="" /></div>
          <div class="swiper-slide"><img src="images/轮播2.jpg" alt="" /></div>
          <div class="swiper-slide"><img src="images/轮播3.jpg" alt="" /></div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {

  mounted() {
    //挂载那mounted实行延迟回调
    this.$nextTick(() => {
      var swiper = new Swiper(".swiper", {
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 800,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    });
  },

};
</script>

<style>
.item7 {
  background-image: url("images/season.jpg");
  background-position: center center;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  position: relative;
  flex: 1;
  overflow: hidden;
  width: 100%;
  align-self: stretch;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.item7 img {
  object-fit: contain;
}
.item8 {
  background-image: url("images/season2..jpg");
  background-position: center center;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  position: relative;
  flex: 1;
  overflow: hidden;
  width: 100%;
  align-self: stretch;
  box-sizing: border-box;
  margin: 0;
}
.wenzi1 h1 {
  font-weight: bolder;
}
.wenzi1 {
  width: 40%;
  height: auto;
  font-size: 2vw;
  text-align: center;
  letter-spacing: 5px;
  line-height: 1;
  color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.item9 {
  background-image: url("images/season3.jpg");
  background-position: center center;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  position: relative;
  flex: 1;
  overflow: hidden;
  width: 100%;
  align-self: stretch;
  box-sizing: border-box;
  margin: 0;
}
.item9 h1 {
  font-weight: bolder;
  text-align: center;
  font-weight: bold;
}
.item9 p {
  font-weight: lighter;
}
.wenzi2 {
  width: 55%;
  font-family: "STKaiti";
  margin: auto;
  padding: 20px;
  text-align: center;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 40%;
  left: 50%;
  font-size: 2vw;
  color: #fff;
  text-align: center;
  line-height: 1;
}
.item10 {
  background-image: url("images/season4.jpg");
  background-position: center center;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  position: relative;
  flex: 1;
  overflow: hidden;
  width: 100%;
  align-self: stretch;
  box-sizing: border-box;
  margin: 0;
}
.wenzi3 {
  width: 55%;
  font-family: "STKaiti";
  margin: auto;
  padding: 20px;
  text-align: center;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 40%;
  left: 50%;
  font-size: 2vw;
  color: #fff;
  text-align: center;
  line-height: 1;
}
.item11 {
  background-image: url("images/dark-sectionbg-xl.jpg.adapt.1920w.jpg");
  background-position: center center;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  position: relative;
  flex: 1;
  overflow: hidden;
  width: 100%;
  align-self: stretch;
  box-sizing: border-box;
  margin: 0;
  color: aliceblue;
  font-size: 19px;
  height: 740px;
}

.item12 {
  background-image: url("images/dark-sectionbg-xl.jpg.adapt.1920w.jpg");
  background-position: center center;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  position: relative;
  flex: 1;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  color: aliceblue;
  font-size: 19px;
}

html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 70%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>