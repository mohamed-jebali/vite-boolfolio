<template>
    <div class="row mx-auto">
        <div class="card col-8">
            <AppProjectCard :project="project"
            />
        </div>
    </div>
</template>

<script>
import { store } from '../../store';
import axios from 'axios';
import AppProjectCard from '../AppProjectCard.vue'
import AppNotFound from '../pages/AppNotFound.vue'

export default {
   data() {
       return {
           apiUrl:'http://127.0.0.1:8000',
           store,
           project : {}
       }
   },
   methods: {
        getShow(){
           if(response.data.success){
               axios.get(`${this.apiUrl}/api/projects/${this.$route.params.slug}`).then((response) => {
                 console.log(response);
                 console.log(this.$route.params.slug);
                 this.project = response.data.results;
             }).catch(function (error) {
                 // handle error
                 console.log(error);
             });
           }
           else{
            this.$router.push({name: 'not-found'})
           } 
        }
    },
    created() {
        this.getShow();
    },
    name:'AppShow',
    components:{
        AppProjectCard,
        AppNotFound
    },
    props:{
        project:Object
    }
}
</script>
<style lang="scss">
   
</style>