<template>
    <div class="flex flex-col w-full justify-center items-center">
        <Citynav class="flex w-full"/>
        <div class="flex flex-wrap justify-center items-center w-full">
            <Rents v-for="rents in rent" :node="rents" :key="rents.id"/>
        </div>
    </div> 
</template>

<script>
import Citynav from '../../components/header/Citynav.vue';
import Rents from '../../components/City/Rent.vue'

import axios from 'axios';
    export default {
        name: 'Cost',
        components: {
            Citynav, Rents
        },
        data(){
            return {
                rent: []
            }
        },
        mounted() {
            this.getRent()
        },
        methods: {
            async getRent() {
                this.$store.commit("setIsLoading", true)

                const city_slug = this.$route.params.city_slug
                
                await axios.get(`/api/v1/rents/city/${city_slug}/`).then(response => {
                    this.rent = response.data
                })
                .catch(error => {
                    console.log(error)
                })
                
                this.$store.commit("setIsLoading", false)
                
                document.title = 'Rents | ' + city_slug

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>