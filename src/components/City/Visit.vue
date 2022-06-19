<template>
    <div
        class="px-3 rounded-2xl m-1 cursor-pointer transform transition-all duration-200 ease hover:-translate-y-1 shadow-md w-72 h-80">
        <div class="w-full">
            <figure class="flex justify-center w-full">
                <img class="max-h-44 rounded-2xl transform hover:scale-105 transition duration-700 ease-out" width="256"
                    height="160" :src="node.get_image" alt="Course">
            </figure>
        </div>

        <div class="flex flex-row w-full justify-between h-7 overflow-hidden">
            <p class="text-lg font-bold">{{node.name}}</p>
            <p class="flex flex-row">{{Entryfee(node.entry_fee)}}</p>
        </div>

        <div class="flex justify-center items-center">
            <div class="flex flex-wrap justify-center overflow-hidden h-20">
                <p v-for="filter in node.filter_by" :key="filter.id"
                    class="bg-gray-200 px-1.5 my-2 mx-2 broder-gray-2 rounded-xl h-6 transform transition-all duration-200 ease hover:-translate-y-1 hover:shadow-xl shadow-md">
                    {{filter.name}}
                </p>
            </div>
        </div>

        <div class="flex flex-row justify-between mb-2">
            <div class="flex flex-row text-gray-500 text-lg underline">
                <maps class="mr-1" />
                <a :href="node.url_on_map">{{node.district}}</a>
            </div>
        </div>

    </div>
</template>
<script>
import maps from '../../assets/icons/Info/onmap.vue'

    export default {
        name: 'Visit',
        props: ['node'],
        components: {
            maps
        },
        mounted() {
        },
        methods: {
            Entryfee(e){
                console.log(e);
                if(e == 0){
                    return 'Free'
                } else{
                    return 'IDR ' + e
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>