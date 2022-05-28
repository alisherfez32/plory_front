<template>
    <div class="rounded-2xl m-1 cursor-pointer transform transition-all duration-200 ease hover:-translate-y-1 shadow-xl max-h-80 w-72">
      <div class="px-3 flex flex-col justify-center items-center">
          <div class="px-4 my-2 w-full flex flex-row justify-between">
              <p class="text-xl font-bold">{{node.name}}</p>
              <p class="bg-gray-200 p-1 rounded-xl text-sm">{{node.status}}</p>
          </div>
          <figure class="flex justify-center w-full mb-2">
              <img class="max-h-44 rounded-2xl transform hover:scale-105 transition duration-700 ease-out" :src="node.get_image" alt="Course">
          </figure>
          
          <!-- <div class="overflow-hidden">
              <p class="max-h-16 text-sm overflow-hidden">
              {{node.description}} ...
              </p>
          </div> -->
          <!-- <a class="my-2 text-sm font-bold" :href="node.book">You can book here</a> -->
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