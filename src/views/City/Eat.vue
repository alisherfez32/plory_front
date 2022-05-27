<template>
    <div class="flex flex-col w-full justify-center items-center">
        <Citynav class="flex w-full"/>
        <p class="font-semibold md:w-3/5 m-1.5 text-center">The go to restaurants in Jakarta loved by locals and expats! With the majority of Muslims, you will not have a hard time finding Halal restaurant.</p>
        <div class="flex flex-wrap w-full justify-center items-center">
            <EatCp v-for="food in eats" :key="food.id" :node="food"
            />
        </div>
    </div>
</template>

<script>
import Citynav from '../../components/header/Citynav.vue'
import EatCp from '../../components/City/EatCp.vue'

import axios from 'axios'

    export default {
        name: 'Eat',
        components: {
            Citynav, EatCp
        },
        data(){
            return {
                eats: []
            }
        },
        mounted(){
            this.getEats()
        },
        methods: {
            async getEats() {
                this.$store.commit("setIsLoading", true)

                const city_slug = this.$route.params.city_slug
                
                await axios.get(`/api/v1/eats/city/${city_slug}/`).then(response => {
                    this.eats = response.data
                })
                .catch(error => {
                    console.log(error)
                })
                
                this.$store.commit("setIsLoading", false)
                
                document.title = 'Foods | ' + city_slug
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>