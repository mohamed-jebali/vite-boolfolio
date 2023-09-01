<template>
  <div class="container">
    <div class="row justify-content-between p-4 p-md-0">
     <AppProjectCard v-for="project in projects"
     :project='project'
     @click="$router.push({ name: 'projects.show', params: { slug: project.slug} })"/>
  </div>
  </div>
</template>
<script>

import AppProjectCard from '../AppProjectCard.vue'
import axios from 'axios';

export default {
  data() {
    return {
      searchText:''
    }
  },
  name:'AppProjectList',
    components:{
    AppProjectCard,
  },
    data() {
    return {
      apiUrl:'http://127.0.0.1:8000/api/projects',
      projects:[]
    }
  },
    methods: {
    getProjects(){
      axios.get(this.apiUrl, {
    })
    .then((response) => {
      console.log(response.data.results.data);
      this.projects = response.data.results.data;
    })
    .catch(function (error) {
      console.log(error);
    })  
    }
    },
    created() {
      this.getProjects();
    },
}
</script>
<style lang="scss">

</style>