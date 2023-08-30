<script>
import axios from 'axios';
import AppProjectList from './AppProjectsList.vue'
import { store } from '../store.js';

export default{
  name:'AppMain',
  components:{
    AppProjectList,
  },
  data() {
    return {
      apiUrl:'http://127.0.0.1:8000/api/projects',
      store,
    }
  },
  methods: {
    getApi(){
      axios.get(this.apiUrl, {
      params: {

      }
    })
    .then((response) => {
      console.log(response.data.results.data);
      this.store.projects = response.data.results.data;
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
    <AppProjectList :AppProjectList="AppProjectList"/>
  </div>
</template>

<style lang="scss" scoped>

</style>
