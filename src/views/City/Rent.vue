<template>
    <div class="flex flex-col w-full justify-center items-center">
        <Citynav class="flex w-full" />
        <p class="font-semibold md:w-3/5 m-1.5 text-center mb-2">We’ve gathered the most commonly used platform to book
            / rent places to stay in Indonesia. Options are ranging from daily, monthly to yearly.</p>
        
        <div class="flex w-10/12 items-start">
            <Filter :filter="filters" />
        </div>

        <div class="flex flex-wrap justify-center items-center w-full">
            <Rents v-for="rents in rent" :node="rents" :key="rents.id" />
        </div>
    </div>
</template>

<script>
import Citynav from '../../components/header/Citynav.vue';
import Rents from '../../components/City/Rent.vue'
import Filter from '../../components/Tools/Filters/Filter.vue'

import axios from 'axios';
    export default {
        name: 'Cost',
        components: {
            Citynav, Rents, Filter
        },
        data(){
            return {
                rent: [],
                filters: [],
            }
        },
        mounted() {
            this.getRent()
    },
    watch: {
        $route() {
            this.getRent()
        }
    },
        methods: {
            async getRent() {
                this.$store.commit("setIsLoading", true)

                const city_slug = this.$route.params.city_slug
                const query = this.$route.query.filter_by

                if (query === undefined) {
                    await axios.get(`/api/v1/rents/city/${city_slug}/`).then(response => {
                        this.rent = response.data
                        
                        this.getFilters()
                    })
                        .catch(error => {
                            console.log(error)
                        })
                } else {
                    const arrayQuery = query.split('-and-')

                    await axios.post(`/api/v1/rents/filter_by/`, { 'city_slug': city_slug, 'filter_by': arrayQuery }).then(response => {
                        this.rent = response.data
                        this.getFilters(arrayQuery)

                    })
                        .catch(error => {
                            console.log(error)
                        })
                }
                
                this.$store.commit("setIsLoading", false)
            },
            async getFilters(arrayQuery) {
                await axios.get(`/api/v1/rents/list_filters/`).then(response => {
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