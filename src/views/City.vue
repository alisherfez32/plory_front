<template>
    <div class="flex flex-col w-full justify-center items-center">
        <Citynav class="flex items-center justify-center mt-0 h-16 m-2"/>
        <div class="w-full sm:mt-8 mt-4">
            <InfoCity :node="city" :time="time" :weather="main_weather"/>
        </div>
        <!-- <div class="flex flex-wrap">
                <CityPic :node="city"/>
            </div> -->
    </div>
</template>

<script>
import Citynav from '@/components/header/Citynav.vue'
import InfoCity from '../components/CityInfo.vue'
import CityPic from '../components/City/index.vue'

import axios from 'axios'
    export default {
        name: 'City',
        components: {
            Citynav, InfoCity, CityPic
        },
        data() {
            return {
                city: {},
                main_weather: {},
                timestamps: {},
                time: ''
            }
        },
        mounted() {
            this.getCity()
        },
        watch: {
            $route(to, from) {
                if(to.name == 'City'){
                    this.getCity()
                }
            }
        },
        methods: {
            async getCity(){
                this.$store.commit("setIsLoading", true)

                // const country_slug = this.$route.params.country_slug
                const city_slug = this.$route.params.city_slug
                this.getWeather(city_slug)
                
                await axios
                .get(`/api/v1/city-tree/detailed/info/${city_slug}`)
                .then(response => {
                    this.city = response.data

                })
                .catch(error => {
                    console.log(error)
                })
                
                this.$store.commit("setIsLoading", false)
                document.title = this.city.name + ' | Plory '
                
            },
            getWeather(city){
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=660b7afb5ac016ad6131d30875ad3635`
                axios.get(url).then(response => {
                    this.main_weather = response.data.main

                    const lat = response.data.coord.lat
                    const lng = response.data.coord.lon
                    this.getTime(lat, lng)

                })
            },
            getTime(lat, lng){
                console.log(lat, lng);
                const url = `http://api.geonames.org/timezoneJSON?lat=${lat}&lng=${lng}&username=dadakhon`
                axios.get(url).then(response => {
                    this.time = response.data.time
                })
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>