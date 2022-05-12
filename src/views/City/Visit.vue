<template>
    <div>
        <Citynav />
        <h1>Visits</h1>
        {{visits}}
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
                visits: []
            }
        },
        mounted() {
            this.getCost()
        },
        methods: {
            async getCost() {
                this.$store.commit("setIsLoading", true)

                const city_slug = this.$route.params.city_slug
                
                await axios.get(`/api/v1/visits/city/${city_slug}/`).then(response => {
                    this.visits = response.data
                })
                .catch(error => {
                    console.log(error)
                })
                
                this.$store.commit("setIsLoading", false)
                
                document.title = 'See | ' + city_slug

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>