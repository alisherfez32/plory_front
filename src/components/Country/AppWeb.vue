<template>
        <div class="my-4 bg-gray-00 rounded-2xl px-3 mx-2 cursor-pointer transform transition-all duration-200 ease hover:-translate-y-1 shadow-md w-72 max-h-80">
        <div class="w-full">
            <figure class="flex justify-center w-full mt-2">
              <img class="max-h-24 rounded-2xl transform hover:scale-105 transition duration-700 ease-out" :src="node.get_image" alt="Course">
          </figure>
            <p class="font-pop font-bold text-2xl">{{node.name}}</p>
            <p class="font-pop font-semibold text-lg h-20 overflow-hidden">{{node.description}} ...</p>
            <div class="flex flex-row justify-evenly items-center my-2">
                <p class="border-2 border-[#484343] py-1 px-5 rounded-xl" v-show="node.ios_url"><a target="_self" :href="node.ios_url"><ios /></a></p>
                <p class="border-2 border-[#484343] py-1 px-5 rounded-xl" v-show="node.url"><a target="_self" :href="node.url">Url</a></p>
                <p class="border-2 border-[#484343] px-5 py-1 rounded-xl" v-show="node.android_url"><a target="_self" :href="node.android_url"><android /></a></p>
            </div>
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