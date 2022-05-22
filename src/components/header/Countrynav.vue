<template>
    <div class="md:mb-10 mb-4 h-16 items-center justify-center mt-0">
         <div class="flex flex-col justify-center items-center md:px-6 sm:px-4 px-2 cursor-pointer font-medium text-sm hover:bg-gray-300 active:underline" 
         v-for="item in items" :key="item.id"
         @click="goToItem(item.name)">
         <component :is="item.icon"></component>
         <p :style="{textDecoration: item.style}">{{item.text}}</p>
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
                  {style: 'none', icon: 'guide', id:'/', text: 'Guide', name: 'Country'},
                  {style: 'none', icon: 'food',id: 'food/', text: 'Cuisine', name: 'Food'},
                  {style: 'none', icon: 'trans',id: 'transport/', text: 'Transportion', name: 'Transport'},
                  {style: 'none', icon: 'apps',id: 'app-and-website/', text: 'Apps&Webs', name: 'AppsAndWebs'},
                  {style: 'none', icon: 'image',id: 'image/', text: 'Pictures', name: 'Images'},
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
                e.style = 'underline'
            }
        },
        computed: {
        }
    }
</script>

<style lang="scss" scoped>

</style>