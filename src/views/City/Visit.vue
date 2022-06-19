<template>
    <div class="flex flex-col w-full justify-center items-center">
        <Citynav class="flex w-full" />
        <div class="flex w-full justify-center items-center">
            <p class="font-semibold md:w-3/5 m-1.5 text-center -mb-2">List of things you have to do while in Jakarta!
                You can go to historic places or to new and modern sites to hang out. Tired of the city life? There are
                tiny islands 1 hour away from the North that are worth to visit.</p>
        </div>
        <div class="flex w-10/12 items-start">
            <Filter :filter="filters" />
        </div>
        <div class="flex flex-wrap w-full justify-center items-center">
            <Visit v-for="item in visits" :key="item.id" :node="item" />
        </div>
    </div>
</template>

<script>
import Citynav from '../../components/header/Citynav.vue';
import Visit from '../../components/City/Visit.vue';
import Filter from '../../components/Tools/Filters/Filter.vue'

import axios from 'axios';

    export default {
        name: 'Cost',
        components: {
            Citynav,
            Visit, Filter
        },
        data(){
            return {
                visits: [],
                filters: [],
            }
        },
        mounted() {
            this.getCost()
    },
    watch: {
        $route() {
            this.getCost()
        }
    },
        methods: {
            async getCost() {
                this.$store.commit("setIsLoading", true)

                const city_slug = this.$route.params.city_slug
                const query = this.$route.query.filter_by

                if (query === undefined) {
                    await axios.get(`/api/v1/visits/city/${city_slug}/`).then(response => {
                        this.visits = response.data
                        this.getFilters()
                    })
                        .catch(error => {
                            console.log(error)
                        })
                } else {
                    const arrayQuery = query.split('-and-')

                    await axios.post(`/api/v1/visits/filter_by/`, { 'city_slug': city_slug, 'filter_by': arrayQuery }).then(response => {
                        this.visits = response.data
                        this.getFilters(arrayQuery)

                        })
                        .catch(error => {
                            console.log(error)
                        })
                }
                
                this.$store.commit("setIsLoading", false)
                
            },
            async getFilters(arrayQuery) {
                await axios.get(`/api/v1/visits/list_filters/`).then(response => {
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