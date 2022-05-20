<template>
    <div class="flex flex-col w-full justify-center items-center">
         <Countrynav class="w-full flex"/>
        <div class="">
            <CountryInfo />
        </div>
        <hr>
        <p class="text-lg font-bold">List of Cities in {{country.name}}</p>
        <div class="flex flex-wrap justify-center items-center w-full">
            <City v-for="city in citiesInCountry" :key="city.id" :node="city" @click="getToCity(city.citi_main_slug)"/>
        </div>
    </div>
</template>

<script>
import Countrynav from '@/components/header/Countrynav.vue'
import City from '../components/City/index.vue'
import CountryInfo from '../components/CountryInfo.vue'

import axios from 'axios'
    export default {
        name: 'Country',
        components: {
            Countrynav,
            City, CountryInfo
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
                
                await axios.get(`/api/v1/city-tree/detailed${country_name}/`).then(response => {
                    this.citiesInCountry = response.data
                })
                .catch(error => {
                    console.log(error)
                })
                
                this.$store.commit("setIsLoading", false)
            },
            getToCity(e) {
                this.$router.push({name: 'City', params:{city_slug: e}})
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>