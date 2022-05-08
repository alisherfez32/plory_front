<template>
    <div>
        <Countrynav />
        <h1>Costs</h1>
        {{cost}}
    </div>
</template>

<script>
import Countrynav from '../../components/header/Countrynav.vue';

import axios from 'axios';
    export default {
        name: 'Cost',
        components: {
            Countrynav
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

                const country_slug = this.$route.params.country_slug
                
                await axios.get(`/api/v1/costs/country/${country_slug}/`).then(response => {
                    this.cost = response.data
                })
                .catch(error => {
                    console.log(error)
                })
                
                this.$store.commit("setIsLoading", false)
                
                document.title = 'Cost | ' + country_slug

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>