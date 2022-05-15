<template>
    <div class="rounded-2xl m-1 cursor-pointer transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-72 max-w-full bg-gray-200">
      <div class="w-full relative">
          <p class="mt-10 text-white z-10 absolute text-xl font-bold">{{node.name}}</p>
          <p class="mt-16 text-white z-10 absolute text-xl font-bold">{{node.city}}</p>
          <div>
              <p class="mt-24 leading-4 absolute text-white text-sm z-10 overflow-hidden">
              {{node.notes}}
          </p>
          </div>
          <figure class="overflow-hidden">
              <img class="rounded-2xl transform hover:scale-105 transition duration-700 ease-out" :src="node.get_image" alt="Course">
          </figure>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'Images',
        props: {
            node: Object,
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>

</style>