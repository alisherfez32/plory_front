<template>
    <div class="rounded-2xl m-1 cursor-pointer transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-72 max-w-full bg-gray-200">
      <div class="w-full relative flex flex-col justify-center items-center">
          <div class="">
              <p class="bg-green-500 mt-10 p-0.5 absolute font-bold text-white text-sm z-10 overflow-hidden">
              {{node.status}}
              </p>
          </div>
          <figure class="overflow-hidden">
              <img class="w-80 h-50 rounded-2xl transform hover:scale-105 transition duration-700 ease-out" :src="node.get_image" alt="Course">
          </figure>
          <p class="text-xl font-bold">{{node.name}}</p>
          <a class="text-sm font-bold" :href="node.book">You can book here</a>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'Transport',
        props: {
            node: Object
        }
    }
</script>

<style lang="scss" scoped>

</style>