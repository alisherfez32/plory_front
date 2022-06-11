<template>
  <div>
    <div
      class="transform transition-all pin flex justify-center items-center fixed top-10 right-10 bottom-10 left-10 bg-slate-800 bg-opacity-50">
      <div class="bg-gray-400 rounded-md text-center">
        <div class="flex justify-end">
          <XIcon @click="quitImage" aria-hidden="true" class="sm:mt-4 sm:mr-4 mt-2 mr-2 absolute cursor-pointer" />
        </div>
        <img class="max-w-lg max-h-96" :src="src" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import XIcon from '../../assets/icons/help/x.vue'
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