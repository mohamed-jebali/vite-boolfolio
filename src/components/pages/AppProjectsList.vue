<template>
  <div class="container">
    <div class="row">
      <div class="col-11 col-md-6 col-lg-4 mx-auto d-flex mb-5" role="search">
                 <input class="form-control me-2" type="text" name="searchText" id="searchText" placeholder="Search Project" aria-label="Search" v-model="searchText" @keyup.enter="newSearch(searchText)">
                 <button class="btn btn-outline-success" type="submit" @click="newSearch(searchText)">Search</button>
      </div>
    </div>
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
      projects:[],
      searchText:''
    }
  },
    methods: {
    getProjects(apiUrl = this.apiUrl, titleQuery = false,){
      const params = {}
        if (titleQuery) {
                params.search = titleQuery;
            }
      axios.get(apiUrl, { params }, {
    })
    .then((response) => {
      console.log(response.data.results.data);
      this.projects = response.data.results.data;
    })
    .catch(function (error) {
      console.log(error);
    })  
    },
    newSearch(titleToSearch){
            this.getProjects(this.apiUrl, titleToSearch);
        }
    },
    created() {
      this.getProjects();
    },
}
</script>
<style lang="scss">

</style>