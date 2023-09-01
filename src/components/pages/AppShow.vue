<template>
    <div class="container">
        <h1 class="text-center mb-4">
            Selected Project
        </h1>
        <div class="row justify-content-center">
                <AppProjectCard v-if="project" :project="project"
                />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import AppProjectCard from '../AppProjectCard.vue'
import AppNotFound from '../pages/AppNotFound.vue'

export default {
   data() {
       return {
           apiUrl:'http://127.0.0.1:8000',
           project:false
       }
   },
   name:'AppShow',
    components:{
        AppProjectCard,
        AppNotFound
    },
   methods: {
        getShow(){
               console.log(this.$route.params.slug);
               axios.get(`${this.apiUrl}/api/projects/${this.$route.params.slug}`).then((response) => {
                 console.log(response);
                 this.project = response.data.results;
             }).catch(function (error) {
                 // handle error
                 console.log(error);
             });
        }
    },
    created() {
        this.getShow();
    },
}
</script>
<style lang="scss">
   
</style>