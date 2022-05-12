<template>
    <div>
        <Citynav />
        <h1>Rents</h1>
        {{rent}}
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
                rent: {}
            }
        },
        mounted() {
            this.getRent()
        },
        methods: {
            async getRent() {
                this.$store.commit("setIsLoading", true)

                const city_slug = this.$route.params.city_slug
                
                await axios.get(`/api/v1/rents/city/${city_slug}/`).then(response => {
                    this.rent = response.data
                })
                .catch(error => {
                    console.log(error)
                })
                
                this.$store.commit("setIsLoading", false)
                
                document.title = 'Rents | ' + city_slug

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>