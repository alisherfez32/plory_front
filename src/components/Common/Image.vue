<template>
    <div class="rounded-2xl m-1 cursor-pointer transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-72 max-w-full bg-gray-200">
      <div class="w-full relative parent">
          <p class="bg-gray-200 child hidden rounded-lg px-2 h-6 ml-6 mt-3 z-10 absolute text-md font-bold">{{node.name}}</p>
          <figure class="overflow-hidden">
              <img class="rounded-2xl transform hover:scale-105 transition duration-700 ease-out" :src="node.get_image" alt="Course">
          </figure>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'Image',
        props: {
            node: Object,
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
.parent {
    &:hover .child{
        display: block
    }
}
</style>