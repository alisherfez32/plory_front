<template>
    <div class="justify-center items-center">
        <Countrynav class="flex w-full" v-show="isCountry"/>
        <Citynav class="flex w-full" v-show="!isCountry"/>
        <div class="flex flex-wrap justify-center items-center">
            <ImageCt 
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

import ImageCt from '../../components/Common/Image.vue'
import Swiper from '../../components/Swiper.vue'
import axios from 'axios'

    export default {
        name: 'Cost',
        components: {
            Citynav, 
            Countrynav,
            ImageCt,
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
                

                // this.$route.params.country_slug
                // const city_slug = this.$route.params.city_slug

                let url = ''

                if(this.$route.params.city_slug){
                    this.isCountry = false
                    const city_slug = this.$route.params.city_slug
                    document.title = 'Pictures | ' + city_slug
                    console.log('City', city_slug);

                    url = `/api/v1/images/city/${city_slug}/`
                } else {
                    this.isCountry = true
                    const country_slug = this.$route.params.country_slug
                    document.title = 'Pictures | ' + country_slug
                    console.log('Country',country_slug);
                    
                    url = `/api/v1/images/${country_slug}/`
                }
                
                await axios.get(url).then(response => {
                    this.images = response.data
                })
                .catch(error => {
                    console.log(error)
                })
                
                this.$store.commit("setIsLoading", false)
            

            }
        }
    }
</script>

<style lang="scss" scoped>
</style>