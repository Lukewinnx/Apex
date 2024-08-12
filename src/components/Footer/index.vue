<template>
  <div class="footer tc">
    <h2>此网站的最终归属权归 鲁云鑫 所有</h2>

    <p class="" @click="toTop">APEX</p>
  </div>
</template>

<script>
export default {
  methods: {
    toTop() {
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style scoped>
a:link {
  cursor: pointer;
}
h2 {
  cursor: default;
  padding: 5px;
  height: 1em;
}
p {
  cursor: pointer;
  float: right;
  font-size: 50px;
  color: #cf1132;
}
</style>