<template>
    <div class="inline-block">
         <button class="first:border-l-0 border-2 border-r-gray-900 px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out" 
         v-for="item in items" :key="item.id"
         @click="goToItem(item.name)">
         {{item.name}}
      </button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                items: [
                  {id: 'cost-of-living/', name: 'Cost Of Living'},
                  {id: 'score/', name: 'Score'},
                  {id: 'visit/', name: 'See'},
                  {id: 'stay/', name: 'Stay'},
                  {id: 'image/', name: 'Image'},
                ]
            }
        },
        methods: {
            goToItem(name){
                const city_slug = this.$route.params.city_slug
                const country_slug = this.$route.params.country_slug
                if(name !== 'Image'){
                    this.$router.push({name: name, params: {city_slug: city_slug }})
                } else {
                    this.$router.push({name: name, params: {country_slug: country_slug, city_slug: city_slug}})
                }
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>