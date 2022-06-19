<template>
    <div
        class="rounded-2xl px-3 m-1 cursor-pointer transform transition-all duration-200 ease hover:-translate-y-1 shadow-md w-72 h-80">
        <div class="">
            <figure class="flex justify-center w-full">
                <img class="max-h-44 rounded-2xl transform hover:scale-105 transition duration-700 ease-out" width="256" height="160"
                    :src="node.get_image" alt="Course">
            </figure>
            <p class="h-7 mt-1.5 text-xl font-semibold overflow-hidden">{{node.name}}</p>
        </div>
        <div class="flex justify-center items-center h-20 overflow-hidden">
            <div class="flex flex-wrap justify-center">
            <p v-for="filter in node.filter_by" :key="filter.id"
            class="bg-gray-200 px-1.5  my-2 mx-2 broder-gray-2 rounded-xl h-6 transform transition-all duration-200 ease hover:-translate-y-1 hover:shadow-xl shadow-md">
                {{filter.name}}
            </p>
            </div>
        </div>
        <div class="flex flex-row justify-between mb-2">
            <p class="flex flex-row text-gray-500 ">
                <maps />
                <a class="underline ml-1 text-xl font-medium" :href="node.url">{{node.district}}</a>
            </p>
        </div>
    </div>
</template>

<script>
import maps from '../../assets/icons/Info/onmap.vue'

    export default {
        name: 'Visit',
        props: {
            node: Object,
        },
        components: {
            maps
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>

</style>