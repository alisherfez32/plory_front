<template>
    <div class="flex flex-col w-full md:ml-10 ml-4">
        <p class="font-bold text-lg">Results is for query: "{{this.query}}"</p>
        <div class="flex flex-col">
            <p class="font-bold text-lg" v-if="countries.length">📍Countries: </p>
            <div>
                <Country class=""
                v-for="item in countries" 
                :key="item.id" :node="item" @click="getCountry(item.get_absolute_url)"/>
            </div>
            
            <p class="font-bold text-lg" v-if="cities.length">📍Cities: </p>
            <div class="flex flex-wrap">
                <City
                v-for="city in cities" 
                :key="city" :node="city" @click="getCity(city.country, city.citi_main_slug)"/>
            </div>
            
            <p class="font-bold text-lg" v-if="foods.length">📍Foods: </p>
            <div class="flex flex-wrap">
                <Food
                v-for="item in foods" 
                :key="item" :node="item" @click="getFood(item.country)"/>
            </div>
            
            <p class="font-bold text-lg" v-if="rents.length">📍Rents: </p>
            <div class="flex flex-wrap">
                <Rent
                v-for="item in rents" 
                :key="item" :node="item" @click="getRent(item.city)"/>
            </div>
            
            <p class="font-bold text-lg" v-if="transports.length">📍Transports: </p>
            <div class="flex flex-wrap">
                <Transport
                v-for="item in transports" 
                :key="item" :node="item" @click="getTrans(item.country)"/>
            </div>
            
            <p class="font-bold text-lg" v-if="visits.length">📍Visits: </p>
            <div class="flex flex-wrap">
                <Visit
                v-for="item in visits" 
                :key="item" :node="item" @click="getVisit(item.city)"/>
            </div>

                        
            <!-- <p class="font-bold text-lg" v-if="scores.length">📍Scores: </p>
            <div class="flex flex-wrap">
                <Score
                v-for="item in scores" 
                :key="item" :node="item" />
            </div> -->

                        
            <p class="font-bold text-lg" v-if="costs.length">📍Costs: </p>
            <div class="flex flex-wrap cursor-pointer">
                <Cost
                v-for="item in costs" 
                :key="item" :node="item" @click="getCost(item.city)"/>
            </div>

        </div>
        <div class="flex justify-center items-center flex-col mt-12"
        v-show="!this.countries.length && !this.cities.length && !this.costs.length && !this.foods.length && !this.rents.length && !this.transports.length && !this.visits.length">
        <p class="text-[#3E4842] font-semibold text-lg mb-10">There’s nothing yet here, we’ll let you know once it’s ready!</p>
        <img src="../assets/images/empty_search.png" alt="">
        </div>
    </div>
</template>

<script>
import axios from 'axios';

import Country from '../components/Country/index.vue'
import City from '../components/City/index.vue'
import Cost from '../components/City/Cost.vue'
import Food from '../components/Country/Food.vue'
import Rent from '../components/City/Rent.vue'
// import Score from '../components/City/Score.vue'
import Transport from '../components/Country/Trans.vue'
import Visit from '../components/City/Visit.vue'

    export default {
        name: 'Search',
        components: {
            Country, City, Cost, Rent, Food, Visit, Transport
        },
        data(){
            return {
                query: '',
                countries: [],
                cities: [],
                // apps: [],
                costs: [],
                foods: [],
                rents: [],
                // scores: [],
                transports: [],
                visits: [],
                isEmpty: false,
            }
        },
        mounted() {
            document.title = "Search | Stepbook"

            let url = window.location.search.substring(1)
            let params = new URLSearchParams(url)
            let query = params.get("query")

            if(query){
                this.query = query

                this.perfomSearch()
            }
        },
        methods: {
            async perfomSearch(){
                this.$store.commit("setIsLoading", true)

                await axios
                    .post('/api/v1/search/', {'query': this.query})
                    .then(response => {
                        const search = response.data
                        this.countries = search['countries']
                        this.cities = search['cities']
                        // this.apps = search['apps']
                        this.costs = search['costs']
                        this.foods = search['foods']
                        this.rents = search['rents']
                        // this.scores = search['scores']
                        this.transports = search['transports']
                        this.visits = search['visits']
                    })
                    .catch(err => console.log(err))


                this.$store.commit("setIsLoading", false)
            },
            getCountry(e){
                this.$router.push(e)
            },
            getCity(b, e){
                this.$router.push({name: 'City', params:{country_slug: b, city_slug: e}})
            },
            getFood(e){
                this.$router.push({name: 'Food', params:{country_slug: e}})
            },
            getRent(e){
                this.$router.push({name: 'Stay', params:{city_slug: e}})
            },
            getTrans(e) {
                this.$router.push({name: 'Transport', params:{country_slug: e}})
            },
            getVisit(e){
                this.$router.push({name: 'See', params:{city_slug: e}})
            },
            getCost(e){
                // console.log(e);
                this.$router.push({name: 'Cost Of Living', params:{city_slug: e}})
            },
        },
        computed: {
            isEmpty(){
            const isEmpty = this.countries.length && this.cities.length && this.costs.length && this.foods.length && this.rents.length && this.transports.length && this.visits.length
            console.log('is', isEmpty);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>