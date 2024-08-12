<template>
  <div>
    <div class="Legends">
      <img src="images/图标.png" alt="" />
      <div class="Legendstext1">
        <h1>MEET THE LEGENDS</h1>
        <p>
          It takes grit, talent, and a lot of luck to become a Legend. Pick your
          favorite and see what their unique set of skills can do for your
          squad.
        </p>
      </div>
    </div>
    <div class="aboutnav">
      <h1><router-link to="/All">All</router-link></h1>
      <router-link to="/Assault">Assault</router-link>
      <router-link to="/Skirmisher">Skirmisher</router-link>
      <router-link to="/Recon">Recon</router-link>
      <router-link to="/Controller">Controller</router-link>
      <router-link to="/Support">Support</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  name: "Legends",
  methods: {},
};
</script>

<style scoped>
.Legends {
  position: relative;
  height: 450px;
  overflow: hidden;
  background-image: url("images/bgt.1920w.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-wrap: wrap;
}

.Legends > img {
  /* 子元素在父元素中水平居中 */
  top: 20%;
  position: relative;
  left: 48%;
  max-width: 100%;
  height: 100px;
  background-repeat: no-repeat;
}
.Legendstext1 {
  font-size: larger;
  color: aliceblue;
  width: 50%;
  left: 26%;
  top: 50%;
  position: absolute;
}
.aboutnav {
  background-color: black;
  height: 60px;
}
.aboutnav a {
  color: aliceblue;
  margin: 0 5px;
  font-size: larger;
}
</style>