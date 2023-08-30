<template>
     <div class="card col-12 p-0 col-md-4 col-lg-3 mb-4 me-1">
           <img :src="image" class="card-img-top" :alt="title">
           <div class="card-body">
           <h5 class="card-title">Title: {{ title }}</h5>
           <h6 class="card-title">Type: {{ type }}</h6>
           <p class="card-text">Description: {{ description.substring(0,50) }}</p>
           <p class="card-text">Slug: {{ slug }}</p>
  </div>
</div>
</template>
<script>
export default {
    props:{
        title : String,
        description : String,
        slug : String,
        image : String,
        type : String,
    }
}
</script>
<style lang="scss">
    
</style>