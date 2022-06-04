<template>
    <div class="md:mb-10 mb-4 h-16 items-center justify-center mt-0">
         <div class="flex flex-col justify-center items-center md:px-6 sm:px-4 px-2 cursor-pointer font-medium text-sm hover:bg-gray-300 active:underline" 
         v-for="item in items" :key="item.id"
         @click="goToItem(item.name)">
         <component :is="item.icon" :class="{'bg-gray-200 p-0.5': item.style}"></component>
         <p :class="{'underline': item.style}">{{item.text}}</p>
        </div>
    </div>
</template>

<script>
import guide from '../../assets/icons/nav/guide.vue'
import food from '../../assets/icons/nav/food.vue'
import trans from '../../assets/icons/nav/trans.vue'
import apps from '../../assets/icons/nav/apps.vue'
import image from '../../assets/icons/nav/image.vue'

    export default {
        name: 'Country Navigation',
        components: {
            guide, food, trans, apps, image
        },
        data(){
            return {
                items: [
                  {style: false, icon: 'guide', id:'/', text: 'Guide', name: 'Country'},
                  {style: false, icon: 'food',id: 'food/', text: 'Cuisine', name: 'Food'},
                  {style: false, icon: 'trans',id: 'transport/', text: 'Transportation', name: 'Transport'},
                  {style: false, icon: 'apps',id: 'webs/', text: 'Apps&Webs', name: 'Webs'},
                  {style: false, icon: 'image',id: 'city-image/', text: 'Pictures', name: 'Images'},
                // {id: 'language', name: 'Language'},
                ]
            }
        },
        mounted(){
            this.items.find(e => {
                const name = this.$route.name
                    if(name === e.name){
                        this.getFocus(e)
                    }
                })
        },
        methods: {
            async goToItem(name){
                const country_slug = this.$route.params.country_slug
                
                this.$router.push({name: name, params: {country_slug: country_slug }})
            },
            getFocus(e){
                e.style = true
            }
        },
        computed: {
        }
    }
</script>

<style lang="scss" scoped>

</style>