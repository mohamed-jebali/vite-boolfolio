<template>
     <div class="card col-3 mb-4 p-0 me-4">
           <img :src="image" class="card-img-top" :alt="title">
           <div class="card-body">
           <h5 class="card-title">{{ title }}</h5>
           <p class="card-text">{{ description.substring(0,50) }}</p>
           <p class="card-text">{{ slug }}</p>
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
    }
}
</script>
<style lang="scss">
    
</style>