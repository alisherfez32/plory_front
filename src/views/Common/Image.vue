<template>
    <div>
        <Countrynav v-if="isCountry"/>
        <Citynav v-else/>
        <hr>
        {{images}}
    </div>
</template>

<script>

import Citynav from '../../components/header/Citynav.vue'
import Countrynav from '../../components/header/Countrynav.vue'
import axios from 'axios'

    export default {
        name: 'Cost',
        components: {
            Citynav, 
            Countrynav,
        },
        data(){
            return {
                images: [],
                isCountry: true
            }
        },
        mounted() {
            this.getImage()
        },
        methods: {
            async getImage() {
                this.$store.commit("setIsLoading", true)
                

                const country_slug = this.$route.params.country_slug
                const city_slug = this.$route.params.city_slug

                let url = ''

                if(city_slug){
                    url = `/api/v1/images/${country_slug}/${city_slug}/`
                    this.isCountry = false
                } else {
                    this.isCountry = true
                    url = `/api/v1/images/${country_slug}/`
                }
                
                await axios.get(url).then(response => {
                    this.images = response.data
                })
                .catch(error => {
                    console.log(error)
                })
                
                this.$store.commit("setIsLoading", false)
                
                document.title = 'Score | ' + city_slug

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>