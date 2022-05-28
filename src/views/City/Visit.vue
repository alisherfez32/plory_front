<template>
    <div>
        <Citynav class="flex w-full"/>
        <div  class="flex w-full justify-center items-center">
            <p class="font-semibold md:w-3/5 m-1.5 text-center -mb-2">List of things you have to do while in Jakarta! You can go to historic places or to new and modern sites to hang out. Tired of the city life? There are tiny islands 1 hour away from the North that are worth to visit.</p>
        </div>
        <div class="flex flex-wrap w-full justify-center items-center">
            <Visit v-for="item in visits" :key="item.id" :node="item"/>
        </div>
    </div>
</template>

<script>
import Citynav from '../../components/header/Citynav.vue';
import Visit from '../../components/City/Visit.vue';

import axios from 'axios';

    export default {
        name: 'Cost',
        components: {
            Citynav,
            Visit
        },
        data(){
            return {
                visits: []
            }
        },
        mounted() {
            this.getCost()
        },
        methods: {
            async getCost() {
                this.$store.commit("setIsLoading", true)

                const city_slug = this.$route.params.city_slug
                
                await axios.get(`/api/v1/visits/city/${city_slug}/`).then(response => {
                    this.visits = response.data
                })
                .catch(error => {
                    console.log(error)
                })
                
                this.$store.commit("setIsLoading", false)
                
                document.title = 'See | ' + city_slug

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>