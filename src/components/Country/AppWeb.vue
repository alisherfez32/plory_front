<template>
    <div
        class="my-4 bg-gray-00 rounded-2xl px-3 mx-2 cursor-pointer transform transition-all duration-200 ease hover:-translate-y-1 shadow-md w-72 max-h-80">
        <figure class="flex justify-center w-full mt-2">
            <img class="max-h-24 rounded-2xl transform hover:scale-105 transition duration-700 ease-out"
                :src="node.get_image" alt="Course">
        </figure>
        <p class="font-pop font-bold text-2xl">{{node.name}}</p>
        <div class="flex justify-center items-center h-20 overflow-hidden">
            <div class="flex flex-wrap justify-center">
                <p v-for="filter in node.filter_by" :key="filter.id"
                    class="bg-gray-200 px-1.5  my-2 mx-2 broder-gray-2 rounded-xl h-6 transform transition-all duration-200 ease hover:-translate-y-1 hover:shadow-xl shadow-md">
                    {{filter.name}}
                </p>
            </div>
        </div>
        <div class="flex flex-row justify-evenly items-center my-2">
            <p class="border-2 border-[#484343] py-1 px-5 rounded-xl" v-show="node.ios_url"><a target="_self"
                    :href="node.ios_url">
                    <ios />
                </a></p>
            <p class="border-2 border-[#484343] py-1 px-5 rounded-xl" v-show="node.url"><a target="_self"
                    :href="node.url">Url</a></p>
            <p class="border-2 border-[#484343] px-5 py-1 rounded-xl" v-show="node.android_url"><a target="_self"
                    :href="node.android_url">
                    <android />
                </a></p>
        </div>
    </div>
</template>

<script>
import ios from '../../assets/icons/Info/ios.vue'
import android from '../../assets/icons/Info/android.vue'

    export default {
        name: 'Apps and Wensites',
        props: {
            node: Object,
        },
        mounted(){
            // console.log(this.node);
        },
        components: {
            ios, android
        }
    }
</script>

<style lang="scss" scoped>

</style>