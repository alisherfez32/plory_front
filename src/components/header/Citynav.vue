<template>
    <div class="inline-block">
         <button class="first:border-l-0 border-2 border-r-gray-900 px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out" 
         v-for="item in items" :key="item.id"
         @click="goToItem(item.id)">
         {{item.name}}
      </button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                items: [
                  {id: 'services', name: 'Services'},
                  {id: 'news', name: 'News'},
                  {id: 'foods', name: 'Foods'}
                ]
            }
        },
        methods: {
            goToItem(id){
                console.log(id);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>