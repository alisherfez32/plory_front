<template>
    <div
        class="rounded-2xl m-1 cursor-pointer transform transition-all duration-200 ease hover:-translate-y-1 shadow-md max-h-80 w-72">
        <div class="px-3 flex flex-col justify-center items-center">
            <div class="px-4 my-2 w-full flex flex-row justify-between">
                <p class="text-xl font-bold">{{node.name}}</p>

                <div class="flex flex-wrap justify-center">
                    <p v-for="item in node.filter_by" :key="item.id"
                        class="m-0.5 overlov-hidden bg-gray-200 p-1 rounded-xl text-sm h-8">{{item.name}}</p>
                </div>
            </div>
            <figure class="flex justify-center w-full mb-2">
                <img class="max-h-44 rounded-2xl transform hover:scale-105 transition duration-700 ease-out"
                    :src="node.get_image" alt="Course" width="256" height="160">
            </figure>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Transport',
        props: {
            node: Object
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>

</style>