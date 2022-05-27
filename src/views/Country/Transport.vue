<template>
    <div class="flex flex-col w-full justify-center items-center">
        <Countrynav class="flex w-full"/>
        <h1>Transports</h1>
        <p class="font-semibold md:w-3/5 m-1.5 text-center">You will find busy roads of the big cities and peaceful slow pace stroll of the villages. Here are some options of transportation you will find in Indonesia from personal ride to public transportation</p>
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