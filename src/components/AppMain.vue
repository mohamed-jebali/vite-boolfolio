<script>
import axios from 'axios';

export default{
  data() {
    return {
      apiUrl:'http://127.0.0.1:8000/api/projects',
      projects: []
    }
  },
  methods: {
    getApi(){
      axios.get(this.apiUrl, {
      params: {

      }
    })
    .then((response) => {
      console.log(this.response.results.data);
      this.projects = this.response.results.data;
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
