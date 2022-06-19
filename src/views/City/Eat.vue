<template>
    <div class="flex flex-col w-full justify-center items-center">
        <Citynav class="flex w-full" />
        <p class="font-semibold md:w-3/5 m-1.5 text-center mb-2">The go to restaurants in Jakarta loved by locals and
            expats! With the majority of Muslims, you will not have a hard time finding Halal restaurant.</p>

        <div class="flex w-10/12 items-start">
            <Filter :filter="filters"/>
        </div>
 
        <div class="flex flex-wrap w-full justify-center items-center">
            <EatCp v-for="food in eats" :key="food.id" :node="food" class="mt-4"/>
        </div>
    </div>
</template>

<script>
import Citynav from '../../components/header/Citynav.vue'
import EatCp from '../../components/City/EatCp.vue'
import Filter from '../../components/Tools/Filters/Filter.vue'

import axios from 'axios'

    export default {
        name: 'Eat',
        components: {
            Citynav, EatCp, Filter
        },
        data(){
            return {
                eats: [],
                filters: [],
            }
        },
        mounted(){
            this.getEats()
    },
    watch: {
        $route() {
            this.getEats()
        }
    },
        methods: {
            async getEats() {
                this.$store.commit("setIsLoading", true)

                const city_slug = this.$route.params.city_slug
                const query = this.$route.query.filter_by

                if (query === undefined) {
                    await axios.get(`/api/v1/eats/city/${city_slug}/`).then(response => {
                        this.eats = response.data
                        this.getFilters()
                    })
                        .catch(error => {
                            console.log(error)
                        })
                } else {
                    const arrayQuery = query.split('-and-')

                    await axios.post(`/api/v1/eats/filter_by/`, { 'city_slug': city_slug, 'filter_by': arrayQuery }).then(response => {
                        this.eats = response.data
                        console.log("ANY", response);
                        this.getFilters(arrayQuery)
                    })
                    .catch(error => {
                        console.log(error)
                    })

                }

                this.$store.commit("setIsLoading", false)
                            
            },
            async getFilters(arrayQuery) {
                await axios.get(`/api/v1/eats/list_filters/`).then(response => {
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
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>