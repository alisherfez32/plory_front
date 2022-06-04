<template>
    <div class="flex flex-col w-full justify-center items-center">
        <Citynav class="flex w-full"/>
        <p class="font-semibold md:w-3/5 m-1.5 text-center mb-2">We’ve gathered the most commonly used platform to book / rent places to stay in Indonesia. Options are ranging from daily, monthly to yearly.</p>
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
                
                document.title = 'Stay | ' + city_slug

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>