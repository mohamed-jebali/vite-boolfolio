<script>
  import AppHeader from './components/AppHeader.vue'
  import AppMain from './components/AppMain.vue'
  import AppFooter from './components/AppFooter.vue'
export default{
  name:'App',
  components:{
    AppFooter,
    AppMain,
    AppHeader
  }

}
</script>

<template>
  <AppHeader/>
  <AppMain/>
  <router-view></router-view>
  <AppFooter/>
</template>

<style lang="scss">
@use '../styles/general.scss' as * ;
@import "./bootstrap/scss/bootstrap";

</style>
