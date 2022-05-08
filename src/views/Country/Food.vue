<template>
    <div>
        <Countrynav />
        <h1>Foods</h1>
        {{foods}}
    </div>
</template>

<script>
import Countrynav from '../../components/header/Countrynav.vue';

import axios from 'axios';
    export default {
        name: 'Foods',
        components: {
            Countrynav
        },
        data(){
            return {
                foods: []
            }
        },
        mounted() {
            this.getFoods()
        },
        methods: {
            async getFoods() {
                this.$store.commit("setIsLoading", true)

                const country_slug = this.$route.params.country_slug
                
                await axios.get(`/api/v1/foods/country/${country_slug}/`).then(response => {
                    this.foods = response.data
                })
                .catch(error => {
                    console.log(error)
                })
                
                this.$store.commit("setIsLoading", false)
                
                document.title = 'Foods | ' + country_slug

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>