<script>
import axios from 'axios';

export default{
  data() {
    return {
      apiUrl:'',
      projects: []
    }
  },
  methods: {
    getApi(){
      axios.get(this.apiUrl, {
      params: {

      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })  
    }
    },
    created() {
      this.getApi();
    },
}
</script>

<template>
  <div class="container">
    <div class="row">
      <h1 class="text-center">
        Main
      </h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
