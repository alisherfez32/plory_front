<template>
    <div>
        <Citynav class="flex w-full"/>
        <div class="flex flex-wrap w-full justify-center items-center">
            <Visit v-for="item in visits" :key="item.id" :node="item"/>
        </div>
    </div>
</template>

<script>
import Citynav from '../../components/header/Citynav.vue';
import Visit from '../../components/City/Visit.vue';

import axios from 'axios';

    export default {
        name: 'Cost',
        components: {
            Citynav,
            Visit
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