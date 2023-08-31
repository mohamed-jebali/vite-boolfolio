<template>
  <div class="container">
    <div class="row justify-content-between p-4 p-md-0">
     <AppProjectCard v-for="project in store.projects"
     :title='project.title'
     :description='project.description'
     :slug='project.slug'
     :image='project.image'
     :type='project.type.name'
     @click="$router.push({ name: 'projects.show', params: { slug: project.slug} })"/>
  </div>
  </div>
</template>
<script>

import AppProjectCard from '../AppProjectCard.vue'
import { store } from '../../store';
import axios from 'axios';

export default {
    data() {
    return {
      apiUrl:'http://127.0.0.1:8000/api/projects',
      store,
    }
  },
    methods: {
    getProjects(){
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
      this.getProjects();
    },
    name:'AppProjectList',
    components:{
    AppProjectCard,
  },
  props:{
    projects:Array,
  },
}
</script>
<style lang="scss">

</style>