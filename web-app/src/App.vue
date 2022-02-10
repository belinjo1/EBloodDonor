<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Header from '@/components/Header.vue'

export default {
  components: {
    NavBar,
    Header
  }
}
</script>

<style>
*{
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
