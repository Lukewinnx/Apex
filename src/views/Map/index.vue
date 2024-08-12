<template>
  <div class="map" id="a1">
    <h1>MAPS</h1>

    <br />

    <p>
      Want to know more about the maps you'll be fighting on in the Apex Games?
      Get the inside scoop below.
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
        squad left alive. But death isn't always permanent --keep your squad in
        the fight with the help of Respawn Beacons.
      </p>

      <br />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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