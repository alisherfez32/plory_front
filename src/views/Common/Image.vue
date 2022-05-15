<template>
    <div class="flex flex-col w-full justify-center items-center">
        <Countrynav v-if="isCountry"/>
        <Citynav v-else/>
        <hr>
        <div class="flex flex-wrap justify-center items-center">
            <Image 
            v-for="image in images" :key="image.id" :node="image"
            />
            <!-- <div class="">
                <Carousel :itemsToShow="3.95" :wrapAround="true">
                <Slide v-for="slide in images" :key="slide.id">
                  <div class="carousel__item">
                      <Swiper :node="slide"/>
                      <img :src="slide.get_image" alt="">
                  </div>
                </Slide>
                <template #addons>
                  <Navigation />
                  <Pagination />
                </template>
            </Carousel>
            </div> -->
        </div>
    </div>
</template>

<script>

import Citynav from '../../components/header/Citynav.vue'
import Countrynav from '../../components/header/Countrynav.vue'
// import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel';
// import 'vue3-carousel/dist/carousel.css';

import Image from '../../components/Common/Image.vue'
import Swiper from '../../components/Swiper.vue'
import axios from 'axios'

    export default {
        name: 'Cost',
        components: {
            Citynav, 
            Countrynav,
            Image,
            Swiper,
            // Carousel, Pagination, Slide, Navigation
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
                    url = `/api/v1/images/city/${city_slug}/`
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