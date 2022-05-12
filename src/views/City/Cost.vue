<template>
    <div>
        <Citynav />
        <h1>Costs</h1>
        {{cost}}
    </div>
</template>

<script>
import Citynav from '../../components/header/Citynav.vue';

import axios from 'axios';
    export default {
        name: 'Cost',
        components: {
            Citynav
        },
        data(){
            return {
                cost: {}
            }
        },
        mounted() {
            this.getCost()
        },
        methods: {
            async getCost() {
                this.$store.commit("setIsLoading", true)

                const city_slug = this.$route.params.city_slug
                
                await axios.get(`/api/v1/costs/city/${city_slug}/`).then(response => {
                    this.cost = response.data
                })
                .catch(error => {
                    console.log(error)
                })
                
                this.$store.commit("setIsLoading", false)
                
                document.title = 'Cost | ' + city_slug

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>