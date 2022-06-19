<template>
    <div class="flex flex-col w-full justify-center items-center">
        <Countrynav class="flex w-full" />
        <p class="font-semibold md:w-4/5 m-1.5 text-center">Indonesia might be famous for Indomie, but here are some
            foods that inspire the many flavor of it! Varying from spicy, salty, sweet or sour, Indonesian food offers
            rich taste and is a MUST try.
        </p>
        <div class="flex w-10/12 items-start">
            <Filter :filter="filters"/>
        </div>
        <div class="flex flex-wrap w-full justify-center items-center">
            <Food v-for="(food, index) in foods" :key="food.id" :node="food" :idx="index" />
        </div>
    </div>
</template>

<script>
import Countrynav from '../../components/header/Countrynav.vue';
import Food from '../../components/Country/Food.vue';
import Filter from '../../components/Tools/Filters/Filter.vue'

import axios from 'axios';
    export default {
        name: 'Foods',
        components: {
            Countrynav,
            Food, Filter
        },
        data(){
            return {
                foods: [],
                filters: [],
            }
        },
        mounted() {
            this.getFoods()
    },
        watch: {
            $route() {
                this.getFoods()
            }
        },
        methods: {
            async getFoods() {
                this.$store.commit("setIsLoading", true)

                const country_slug = this.$route.params.country_slug
                const query = this.$route.query.filter_by
                

                if (query === undefined) {
                    await axios.get(`/api/v1/foods/country/${country_slug}/`).then(response => {
                        this.foods = response.data
                        this.getFilters()
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    
                    this.$store.commit("setIsLoading", false)
                } else {
                    this.getFilters()
                    const arrayQuery = query.split('-and-')

                    await axios.post(`/api/v1/foods/filter_by/`, { 'country_slug': country_slug, 'filter_by': arrayQuery }).then(response => {
                        this.getFilters(arrayQuery)
                        this.foods = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })

                    this.$store.commit("setIsLoading", false)
                }
                
            },
            async getFilters(arrayQuery) {                
                await axios.get(`/api/v1/foods/list_filters/`).then(response => {
                    response.data.map(el => {
                        if (arrayQuery) {
                        const UniqueValues = new Set(arrayQuery)
                        if (UniqueValues.has(el.name.toLowerCase())) {
                            return el.used = true
                        }
                        } else {
                            return
                        }
                    })

                    this.filters = response.data
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