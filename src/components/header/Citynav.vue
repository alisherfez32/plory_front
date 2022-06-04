<template>
    <div class="md:mb-10 h-16 items-center justify-center mt-0">
         <div class="parent flex flex-col justify-center items-center md:px-6 sm:px-4 px-2 cursor-pointer font-medium text-sm hover:bg-gray-300 active:underline" 
         v-for="item in items" :key="item.id"
         @click="goToItem(item.name)">
         <component :is="item.icon" :class="{'bg-gray-200 p-0.5': item.style}"></component>
         <p :class="{'underline': item.style}" class="child">{{item.text}}</p>
        </div>
    </div>
</template>

<script>
import guide from '../../assets/icons/nav/guide.vue'
import cost from '../../assets/icons/nav/costs.vue'
import rent from '../../assets/icons/nav/rent.vue'
import see from '../../assets/icons/nav/see.vue'
import image from '../../assets/icons/nav/image.vue'
import eat from '../../assets/icons/nav/food.vue'

    export default {
        name: 'City Navigation',
        components: {
            guide, cost, image, see, rent, eat
        },
        data(){
            return {
                items: [
                  {style: false, text: 'Guide', icon: 'guide', id: '/', name: 'City'},
                  {style: false, text: 'Cost of living', icon: 'cost', id: 'cost-of-living/', name: 'Cost Of Living'},
                  {style: false, text: 'Eat', icon: 'eat', id: 'eat/', name: 'Eat'},
                  {style: false, text: 'Stay', icon: 'rent', id: 'stay/', name: 'Stay'},
                  {style: false, text: 'Experience', icon:'see', id: 'visit/', name: 'See'},
                  {style: false, text: 'Pictures', icon:'image', id: 'image/', name: 'Image'},
                //   {id: 'score/', name: 'Score'},
                ]
            }
        },
        mounted() {
            this.items.find(e => {
                const name = this.$route.name
                    if(name === e.name){
                        this.getFocus(e)
                    }
                })
        },
        methods: {
            goToItem(name){
                const city_slug = this.$route.params.city_slug
                if(name==='City'){
                    this.$router.push({name: name, params: {country_slug: 'guide', city_slug: city_slug }})
                } else{
                this.$router.push({name: name, params: {city_slug: city_slug }})
                }
            },
            getFocus(e){
                e.style = true
            }
        }
    }
</script>

<style lang="scss" scoped>
.parent {
    &:focus .child {
        text-decoration: underline;
    }
}
</style>