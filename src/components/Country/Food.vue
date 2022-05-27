<template>
    <div class="rounded-2xl px-3 m-1 cursor-pointer transform transition-all duration-200 ease hover:-translate-y-1 shadow-xl w-72 h-80">
      <div class="">
          <div class="px-4 my-2 w-full flex flex-row justify-between">
              <p class="my-2 text-xl font-bold">{{node.name}}</p>
              <p class="bg-gray-200 p-1 rounded-xl text-sm h-8">{{node.status}}</p>
          </div>
          <figure class="flex justify-center w-full">
              <img class="max-h-44 rounded-2xl transform hover:scale-105 transition duration-700 ease-out" :src="node.get_image" @click="showImage(node.get_image)" alt="Course">
          </figure>
           <div class="overflow-hidden">
              <p class="max-h-16 text-sm overflow-hidden">
              {{node.description}} ...
              </p>
          </div>
          <p class="mb-2 text-xl font-bold">{{node.price}}$</p>
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
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>