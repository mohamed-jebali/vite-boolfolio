<script>
  import AppHeader from './components/AppHeader.vue'
  import AppFooter from './components/AppFooter.vue'
export default{
  name:'App',
  components:{
    AppFooter,
    AppHeader
  }

}
</script>

<template>
  <AppHeader/>
  <router-view>

  </router-view>
  <AppFooter/>
</template>

<style lang="scss">
@use '../styles/general.scss' as * ;
@import "./bootstrap/scss/bootstrap";

</style>
