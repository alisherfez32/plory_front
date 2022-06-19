<template>
    <div class="justify-center items-center">
        <Countrynav class="flex w-full" v-show="isCountry" />
        <Citynav class="flex w-full" v-show="!isCountry" />

        <div class="flex w-10/12 items-start">
            <Filter :filter="filters" />
        </div>

        <div class="flex flex-wrap justify-center items-center">
            <ImageCt v-for="image in images" :key="image.id" :node="image" />
        </div>
    </div>
</template>

<script>

import Citynav from '../../components/header/Citynav.vue'
import Countrynav from '../../components/header/Countrynav.vue'
import Filter from '../../components/Tools/Filters/Filter.vue'


import ImageCt from '../../components/Common/Image.vue'
import axios from 'axios'

    export default {
        name: 'Cost',
        components: {
            Citynav, 
            Countrynav,
            ImageCt, Filter
        },
        data(){
            return {
                images: [],
                isCountry: true,
                filters: [],
            }
        },
        mounted() {
            this.getImage()
    },
    watch: {
        $route() {
            this.getImage()
        }
    },
        methods: {
            async getImage() {
                this.$store.commit("setIsLoading", true)
                
                const query = this.$route.query.filter_by
                let url = ''
                let postUrl = ''

                if(this.$route.params.city_slug){
                    this.isCountry = false
                    const city_slug = this.$route.params.city_slug

                    url = `/api/v1/images/city/${city_slug}/`
                    postUrl = `/api/v1/images/filter_by/${city_slug}/`
                } else {
                    this.isCountry = true
                    const country_slug = this.$route.params.country_slug
                    
                    url = `/api/v1/images/${country_slug}/`
                    postUrl = `/api/v1/images/filter_by/country/${country_slug}/`
                }

                if (query === undefined) {
                    await axios.get(url).then(response => {
                        this.images = response.data
                        this.getFilters()
                    })
    
                    .catch(error => {
                        console.log(error)
                    })
                } else {
                    const arrayQuery = query.split('-and-')
                    this.getFilters(arrayQuery)

                    await axios.post(postUrl, {'filter_by': arrayQuery }).then(response => {
                        this.getFilters(arrayQuery)
                        this.images = response.data
                    })
                        .catch(error => {
                            console.log(error)
                        })
                }

                this.$store.commit("setIsLoading", false)
            },
            async getFilters(arrayQuery) {
                await axios.get(`/api/v1/images/list_filters/`).then(response => {
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