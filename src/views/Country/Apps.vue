<template>
    <div class="flex flex-col w-full justify-center items-center">
        <Countrynav class="flex w-full" />
        <p class="font-semibold md:w-4/5 m-1.5 text-center">Useful apps you need to download before coming to Indonesia.
            Hint: e-wallet, food delivery & ride-hailing will be your best friend.</p>
        <hr class="h-6">
        <div class="flex w-10/12 items-start">
            <Filter :filter="filters" />
        </div>
        <div class="flex flex-wrap w-full justify-center items-center">
            <AppsAndWebsites :node="app" v-for="app in apps" :key="app.id" />
        </div>
    </div>

</template>

<script>
import Countrynav from '@/components/header/Countrynav.vue'
import AppsAndWebsites from '../../components/Country/AppWeb.vue'
import Filter from '../../components/Tools/Filters/Filter.vue'

import axios from 'axios';
    export default {
        name: 'Apps',
        components: {
            Countrynav,
            AppsAndWebsites, Filter
        },
        data(){
            return {
                apps: [],
                filters: [],
                why: '',
            }
        },
        
        mounted() {
            this.getAppAndWebsites()
    },
    watch: {
        $route() {
            this.getAppAndWebsites()
        }
    },
    methods: {
        async getAppAndWebsites() {
            this.$store.commit("setIsLoading", true)

            const country_slug = this.$route.params.country_slug
            const query = this.$route.query.filter_by


            if (query === undefined) {

                await axios.get(`/api/v1/apps/country/${country_slug}/`).then(response => {
                    this.apps = response.data
                    this.getFilters()
                })
                    .catch(error => {
                        console.log(error)
                    })

                this.$store.commit("setIsLoading", false)
            } else {

                this.getFilters()
                const arrayQuery = query.split('-and-')

                await axios.post(`/api/v1/apps/filter_by/`, { 'country_slug': country_slug, 'filter_by': arrayQuery }).then(response => {
                    this.getFilters(arrayQuery)
                    this.apps = response.data

                })
                    .catch(error => {
                        console.log(error)
                    })

                this.$store.commit("setIsLoading", false)
            }

        },
        async getFilters(arrayQuery) {
            await axios.get(`/api/v1/apps/list_filters/`).then(response => {
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
        },
        computed: {
        }
    }
</script>

<style lang="scss" scoped>

</style>