<template>
    <div>
        <div class="transform transition-all pin flex justify-center items-center fixed top-10 right-10 bottom-10 left-10 bg-slate-800 bg-opacity-50">
          <div class="bg-gray-400 rounded-md text-center ">
            <div class="flex justify-end">
              <XIcon @click="quitImage" aria-hidden="true" class="block h-6 w-6 cursor-pointer"/>
            </div>
            <img :src="src" alt="" class="w-full">
            <button class="bg-indigo-500 px-4 py-2 rounded-md text-md text-white" @click="quitImage">Quit</button>
          </div>
        </div>
    </div>
</template>

<script>
import { XIcon } from '@heroicons/vue/outline'

    export default {
        name: 'ModelImage',
        components: {
          XIcon
        },
        methods: {
          quitImage(){
            this.$store.commit("setIsImage", false);
          }
        },
        computed: {
          src(){
            return this.$store.state.imageSrc
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>