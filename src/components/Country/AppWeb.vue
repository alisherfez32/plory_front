<template>
        <div class="my-4 bg-gray-00 rounded-2xl px-3 cursor-pointer transform transition-all duration-200 ease hover:-translate-y-1 shadow-xl w-72 max-h-80">
        <div class="w-full">
            <figure class="flex justify-center w-full mt-2">
              <img class="max-h-24 rounded-2xl transform hover:scale-105 transition duration-700 ease-out" :src="node.get_image" alt="Course">
          </figure>
            <p class="font-pop font-bold text-2xl">{{node.name}}</p>
            <p class="font-pop font-semibold text-lg h-20 overflow-hidden">{{node.description}} ...</p>
            <div class="flex flex-row justify-evenly items-center my-2">
                <p class="bg-gray-200 py-1 px-3 rounded-xl text-sm"><ios /></p>
                <a :href="node.url" class="text-blue-500 text-lg underline">URL</a>
                <p class="bg-gray-200 px-3 py-1 rounded-xl text-sm"><android /></p>
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
        components: {
            ios, android
        }
    }
</script>

<style lang="scss" scoped>

</style>