<template>
    <div class="flex flex-col w-full justify-center items-center">
        <Countrynav class="flex w-full"/>
        <h1>Foods</h1>
        <div class="flex flex-wrap w-full justify-center items-center">
            <Food v-for="(food, index) in foods" :key="food.id" :node="food" :idx="index"
            />
        </div>
    </div>
</template>

<script>
import Countrynav from '../../components/header/Countrynav.vue';
import Food from '../../components/Country/Food.vue';

import axios from 'axios';
    export default {
        name: 'Foods',
        components: {
            Countrynav,
            Food,
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