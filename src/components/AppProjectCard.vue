<template>
     <div class="card col-12 p-0 col-md-4 col-lg-3 mb-4 me-1">
           <img :src="project.image" class="card-img-top" :alt="project.title">
           <div class="card-body">
           <h5 class="card-title">Title: {{ project.title }}</h5>
           <h6 class="card-title">Type: {{ project.type.name }}</h6>
           <p class="card-text">Description: {{ project.description.substring(0,50) }}</p>
           <p class="card-text">Slug: {{ project.slug }}</p>
  </div>
</div>
</template>
<script>
export default {
    name:'AppProjectCard',
    props:{
        project : Object,
    }
}
</script>
<style lang="scss">
    
</style>