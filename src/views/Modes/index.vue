<template>
  <div class="flex-container2">
    <div class="flex-item item13">
      <img src="public\images\logo.webp" alt="" />
      <div class="wenzi13">
        <h1>BATTLE ROYALE</h1>

        <p>
          Massive maps. 60-player matches. An ever-shrinking Ring. Will your
          squad win it all?
        </p>
      </div>
      <div class="wenzitiaozhuan">
        <p class="inline-text">
          <span @click="tiaozhuan"> MAP </span>
        </p>
      </div>
    </div>
    <div class="flex-item item14">
      <img src="public\images\图标.png" alt="" />
      <div class="wenzi14">
        <h1>STAY INSIDE THE RING</h1>
        <br />

        <p>
          The Ring is always closing and you won't last long on the outside. As
          the Ring gets smaller, you'll be forced into more encounters with the
          remaining squads. So make sure you have the right loadout to take them
          on.
        </p>
      </div>
    </div>
    <div class="flex-item item15">
      <div class="wenzi15">
        <h1>GET YOUR LOOT ON</h1>
        <br />
        <p>
          You'll drop in with basic gear. Explore the map -and Death Boxes of
          fallen foes- to find better equipment. If you're going to survive,
          you'll need it.
        </p>
      </div>
    </div>
    <div class="flex-item item16">
      <div class="wenzi16">
        <h1>LAST SQUAD STANDING</h1>
        <br />
        <p>
          Show off your cosmetics, badges, and achievements across platforms and
          accounts.
        </p>
      </div>
    </div>
    <div class="map" id="MMAP" ref="MMAP">
      <h1>MAPS</h1>

      <br />

      <p>
        Want to know more about the maps you'll be fighting on in the Apex
        Games? Get the inside scoop below.
      </p>
    </div>
    <div class="flex-item item17">
      <table>
        <tr>
          <td>
            <img src="./images/Olympus.jpg" alt="Olympus" />
            <span> Olympus </span>
          </td>
          <td>
            <img src="./images/World‘s Edge.jpg" alt="" />
            <span> World's Edge </span>
          </td>
          <td>
            <img src="./images/Kings Canyo.jpg" alt="" />
            <span> Kings Canyo </span>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <img src=".\images\Storm Point.jpg" alt="" />

            <span> Storm Point </span>
          </td>
        </tr>
      </table>

      <div class="wenzi4">
        <h1>NEW BATTLE PASS</h1>
        <p>
          Whether you're in Duos or Trios, the goal is the same: to be the last
          squad left alive. But death isn't always permanent --keep your squad
          in the fight with the help of Respawn Beacons.
        </p>

        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    //点击跳转事件
    tiaozhuan() {
      this.$refs["MMAP"].scrollIntoView(true);
    },
  },
};
</script>

<style scoped lang="css">
.item13 {
  background-image: url("./images/mode头部.jpg");
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
  top: 80px;
  overflow-clip-margin: content-box;
}
.inline-text a {
  color: aliceblue;
}
.wenzitiaozhuan {
  width: 55%;
  font-family: "STKaiti";
  margin: auto;
  padding: 20px;
  text-align: center;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 80%;
  left: 50%;
  font-size: 15px;
  color: #fff;
  text-align: center;
  line-height: 1;
  font-weight: lighter;
}
.inline-text {
  display: inline;
  position: relative;
  z-index: 999;
  font-size: 20px;
  text-decoration: underline;
}
.wenzi13 {
  width: 55%;
  font-family: "STKaiti";
  margin: auto;
  padding: 20px;
  text-align: center;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 60%;
  left: 50%;
  font-size: 2vw;
  color: #fff;
  text-align: center;
  line-height: 1;
  font-weight: lighter;
}
.item14 {
  background-image: url("./images/mode1111111.png");
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
  margin: 10px;
  align-items: center;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}
.wenzi14 h1 {
  font-weight: bolder;
}
.wenzi14 p {
  font-weight: lighter;
}
.wenzi14 {
  position: absolute;
  top: 40%;
  left: 60%;
  font-size: 20px;
  width: 40%;
  height: auto;
  text-align: center;
  letter-spacing: 5px;
  line-height: 1;
  color: #fff;
  float: right;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.item15 {
  background-image: url("./images/mode222222w.png");
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
  margin: 10px;
}
.item15 h1 {
  font-weight: bolder;
  text-align: center;
  font-weight: bold;
}
.item15 p {
  font-weight: lighter;
}
.wenzi15 h1 {
  font-weight: bolder;
}

.wenzi15 {
  position: absolute;
  top: 40%;
  right: 57%;
  font-size: 20px;
  left: 10px;
  width: 35%;
  height: auto;
  text-align: center;
  letter-spacing: 5px;
  line-height: 1;
  color: #fff;
  float: right;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.item16 {
  background-image: url("./images/mode3333.png");
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
  margin: 10px;
}
.wenzi16 h1 {
  font-weight: bolder;
}
.wenzi16 p {
  font-weight: lighter;
}
.wenzi16 {
  position: absolute;
  top: 40%;
  left: 60%;
  font-size: 20px;
  width: 40%;
  height: auto;
  text-align: center;
  letter-spacing: 5px;
  line-height: 1;
  color: #fff;
  float: right;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.map {
  width: 50%;
  font-size: large;
  line-height: 1em;
  letter-spacing: 5px;
}

.item17 {
  width: 100%;
  display: flex;
  flex: 1;
  position: relative;
  flex: 1;
  overflow: hidden;
  width: 100%;
  align-self: stretch;
  box-sizing: border-box;
  margin: 10px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}
.item17 img {
  width: 400px;
}
.item17 > table td,
tr {
  padding: 20px;
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