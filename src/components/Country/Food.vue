<template>
    <div
        class="rounded-2xl px-3 m-1 cursor-pointer transform transition-all duration-200 ease hover:-translate-y-1 shadow-md w-72 h-80">
        <div class="">
            <div class="px-4 my-2 w-full flex flex-row justify-between">
                <p class="text-xl font-bold">{{node.name}}</p>
                <div class="flex flex-wrap justify-center">
                    <p v-for="item in node.filter_by" :key="item.id"
                        class="m-0.5 overlov-hidden bg-gray-200 p-1 rounded-xl text-sm h-8">{{item.name}}</p>
                </div>
            </div>
            <figure class="flex justify-center w-full">
                <img class="max-h-44 rounded-2xl transform hover:scale-105 transition duration-700 ease-out"
                    :src="node.get_image" @click="showImage(node.get_image)" width="256" height="160"  alt="Course">
            </figure>
            <div class="overflow-hidden mt-1">
                <p class="max-h-16 text-sm overflow-hidden">
                    {{node.description}} ...
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Visit',
        props: {
            node: Object,
            // idx: Number,
        },
        mounted() {
        },
        methods: {
            showImage(src){
                this.$store.commit("setIsImage", true)
                
                this.$store.state.imageSrc = src;
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>