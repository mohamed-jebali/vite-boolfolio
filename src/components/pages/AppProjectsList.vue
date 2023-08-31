<template>
     <div class="row justify-content-between p-4 p-md-0">
      <AppProjectCard v-for="project in store.projects"
      :title='project.title'
      :description='project.description'
      :slug='project.slug'
      :image='project.image'
      :type='project.type.name'
      />
   </div>
</template>
<script>

import AppProjectCard from './AppProjectCard.vue'
import { store } from '../../store';

export default {
    data() {
    return {
      store,
    }
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