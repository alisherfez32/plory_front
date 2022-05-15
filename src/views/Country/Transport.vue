<template>
    <div class="flex flex-col w-full justify-center items-center">
        <Countrynav />
        <h1>Transports</h1>
        <div class="flex flex-wrap w-full justify-center items-center">
            <Trans :node="trans" 
            v-for="trans in transports" :key="trans.id" />
        </div>
    </div>
</template>

<script>
import Countrynav from '../../components/header/Countrynav.vue';
import Trans from '../../components/Country/Trans.vue';

import axios from 'axios';
    export default {
        name: 'Transport',
        components: {
            Countrynav,
            Trans
        },
        data(){
            return {
                transports: []
            }
        },
        mounted() {
            this.getCost()
        },
        methods: {
            async getCost() {
                this.$store.commit("setIsLoading", true)

                const country_slug = this.$route.params.country_slug
                
                await axios.get(`/api/v1/transports/country/${country_slug}/`).then(response => {
                    this.transports = response.data
                })
                .catch(error => {
                    console.log(error)
                })
                
                this.$store.commit("setIsLoading", false)
                
                document.title = 'Transports | ' + country_slug

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>