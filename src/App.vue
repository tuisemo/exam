<template>
  <div id="app">
    <LayoutHeader/>
    <div class="routerWrap">
    <router-view/>
    </div>
  </div>
</template>

<script>
import LayoutHeader from '@/components/LayoutHeader'
export default {
  components: {
    LayoutHeader
  },
  mounted () {
    this.$store.dispatch('getProductsList')
  }
}
</script>

<style lang="less">
html,body{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Microsoft YaHei','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  background: #eee;
  color: #2c3e50;
  font-size: 14px;
  margin: 0 auto;
  max-width: 1000px;
  height: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.routerWrap{
  margin: 0 auto;
}
</style>
