<template>
  <div id="nav">
    <Header></Header>
      <router-view />
    <Footer></Footer>
  </div>

</template>
<script>
import Footer from './components/Footer'
import Header from './components/Header'
export default {
  components:{
    Header,
    Footer
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
 
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  color: lightcoral;
}

#nav a.router-link-exact-active {
  color: red;
}
</style>
