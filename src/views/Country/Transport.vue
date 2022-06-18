<template>
    <div class="flex flex-col w-full justify-center items-center">
        <Countrynav class="flex w-full" />
        <p class="font-semibold md:w-3/5 m-1.5 text-center">You will find busy roads of the big cities and peaceful slow
            pace stroll of the villages. Here are some options of transportation you will find in Indonesia from
            personal ride to public transportation
        </p>

        <div class="flex w-10/12 items-start">
            <Filter :filter="filters" />
        </div>
        <div class="flex flex-wrap w-full justify-center items-center">
            <Trans :node="trans" v-for="trans in transports" :key="trans.id" />
        </div>
    </div>
</template>

<script>
import Countrynav from '../../components/header/Countrynav.vue';
import Trans from '../../components/Country/Trans.vue';
import Filter from '../../components/Tools/Filters/Filter.vue'

import axios from 'axios';
    export default {
        name: 'Transport',
        components: {
            Countrynav,
            Trans, Filter
        },
        data(){
            return {
                transports: [],
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

                const country_slug = this.$route.params.country_slug
                const query = this.$route.query.filter_by

                if (query === undefined) {
                    await axios.get(`/api/v1/transports/country/${country_slug}/`).then(response => {
                        this.transports = response.data
                        this.getFilters()
                    })
                        .catch(error => {
                            console.log(error)
                        })

                    this.$store.commit("setIsLoading", false)

                } else {

                    this.getFilters()
                    const arrayQuery = query.split('-and-')

                    await axios.post(`/api/v1/transports/filter_by/`, { 'country_slug': country_slug, 'filter_by': arrayQuery }).then(response => {
                        this.getFilters(arrayQuery)
                        this.transports = response.data
                    })
                        .catch(error => {
                            console.log(error)
                        })

                    this.$store.commit("setIsLoading", false)
                }
                
            },
            async getFilters(arrayQuery) {
                await axios.get(`/api/v1/transports/list_filters/`).then(response => {
                    response.data.map(el => {
                        const UniqueValues = new Set(arrayQuery)

                        if (UniqueValues.has(el.name.toLowerCase())) {
                            return el.used = true
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