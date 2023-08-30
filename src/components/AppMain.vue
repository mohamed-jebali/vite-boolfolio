<script>
import axios from 'axios';
import AppProjectCard from './AppProjectCard.vue'

export default{
  name:'AppMain',
  components:{
    AppProjectCard,
  },
  props:{
    projects:Array,
  },
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
      console.log(response.data.results.data);
      this.projects = response.data.results.data;
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
    <div class="row mx-auto">
      <AppProjectCard v-for="project in projects"
      :title='project.title'
      :description='project.description'
      :slug='project.slug'
      :image='project.image'
      />
   </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
