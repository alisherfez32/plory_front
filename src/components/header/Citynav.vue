<template>
    <div class="h-16 items-center justify-center mt-0">
         <div class="flex flex-col justify-center items-center md:px-6 sm:px-4 px-2 cursor-pointer font-medium text-sm hover:bg-gray-300 active:underline" 
         v-for="item in items" :key="item.id"
         @click="goToItem(item.name)">
         <component :is="item.icon"></component>
         <p>{{item.text}}</p>
        </div>
    </div>
</template>

<script>
import guide from '../../assets/icons/nav/guide.vue'
import cost from '../../assets/icons/nav/costs.vue'
import rent from '../../assets/icons/nav/rent.vue'
import see from '../../assets/icons/nav/see.vue'
import image from '../../assets/icons/nav/image.vue'
    export default {
        name: 'City Navigation',
        components: {
            guide, cost, image, see, rent
        },
        data(){
            return {
                items: [
                  {text: 'Guide', icon: 'guide', id: '/', name: 'City'},
                  {text: 'Cost of living', icon: 'cost', id: 'cost-of-living/', name: 'Cost Of Living'},
                  {text: 'Stay', icon: 'rent', id: 'stay/', name: 'Stay'},
                  {text: 'Experience', icon:'see', id: 'visit/', name: 'See'},
                  {text: 'Photos', icon:'image', id: 'image/', name: 'Image'},
                //   {id: 'score/', name: 'Score'},
                ]
            }
        },
        methods: {
            goToItem(name){
                const city_slug = this.$route.params.city_slug
                if(name==='City'){
                    this.$router.push({name: name, params: {country_slug: 'c', city_slug: city_slug }})
                }
                this.$router.push({name: name, params: {city_slug: city_slug }})
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>