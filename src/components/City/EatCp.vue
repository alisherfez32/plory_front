<template>
    <div class="rounded-2xl px-5 m-1 my-2 cursor-pointer transform transition-all duration-200 ease hover:-translate-y-1 shadow-md w-72 h-72">
      <div class="">
          <figure class="flex justify-center w-full">
              <img class="max-h-44 rounded-2xl transform hover:scale-105 transition duration-700 ease-out" :src="node.get_image" alt="Course">
          </figure>
          <p class="mt-3 text-2xl font-semibold">{{node.name}}</p>
           <!-- <div class="">
              <p class="max-h-16 font-semibold text-lg">
              $ {{node.price}} /person </p>
          </div> -->
          <div class="flex flex-row justify-between mt-2">
            <p class="flex flex-row text-gray-500 ">
                <maps />
                <a class="underline ml-1 text-xl font-medium" :href="node.url">{{node.district}}</a>
            </p>
          </div>
      </div>
    </div>
</template>

<script>
import maps from '../../assets/icons/Info/onmap.vue'

    export default {
        name: 'Visit',
        props: {
            node: Object,
        },
        components: {
            maps
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>

</style>