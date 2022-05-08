<template>
    <div>
        <div class="flex flex-col">
        <Countrynav class="flex items-center justify-center mt-0 h-16 m-2"/>
        
        </div>
        Hello
        {{country}}
        {{country.name}}
        <hr>

        <hr>

        {{citiesInCountry}}

        <hr>
    </div>
</template>

<script>
import Countrynav from '@/components/header/Countrynav.vue'

import axios from 'axios'
    export default {
        name: 'Country',
        components: {
            Countrynav
        },
        data(){
            return {
                country: {}, 
                citiesInCountry: [],
            }
        },
        mounted() {
            this.getCountry()
        },
        watch:{
            $route(to, from){
                if(to.name === 'Country'){
                    this.getCountry()
                }
            }
        },
        methods: {
            async getCountry(){
                this.$store.commit("setIsLoading", true)

                const country_slug = this.$route.params.country_slug
                
                await axios
                .get(`/api/v1/country-tree/${country_slug}`)
                .then(response => {
                    this.country = response.data
                    this.getCitiesOfCountry()
                })
                .catch(error => {
                    console.log(error)
                })
                
                this.$store.commit("setIsLoading", false)
                document.title = this.country.name + ' | Plory '
                
            },
            async getCitiesOfCountry(){
                this.$store.commit("setIsLoading", true)

                const country_name = this.country.get_absolute_url
                
                await axios.get(`/api/v1/city-tree/detailed${country_name}`).then(response => {
                    this.citiesInCountry = response.data
                })
                .catch(error => {
                    console.log(error)
                })
                
                this.$store.commit("setIsLoading", false)
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>