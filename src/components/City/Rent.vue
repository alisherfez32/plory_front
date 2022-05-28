<template>
    <div class="px-3 m-1 rounded-2xl cursor-pointer transform transition-all duration-200 ease hover:-translate-y-1 shadow-md w-72 h-80">
      <div class="w-full my-4">
            <figure class="flex justify-center w-full">
                <img class="max-h-28 rounded-2xl transform hover:scale-105 transition duration-700 ease-out" :src="node.get_image" alt="Course">
            </figure>
      </div>
      <div class="flex flex-col justify-center items-center">
          <p class="">✅English availble</p>
          <div class="flex flex-wrap w-4/5 mt-8 justify-center items-center">
              <p v-if="node.hotel.length" class="bg-gray-200 px-3  my-2 mx-1.5 broder-gray-2 rounded-xl h-6 underline transform transition-all duration-200 ease hover:-translate-y-1 hover:shadow-xl shadow-md"><a class="hovers" :href="node.hotel">Hotel</a></p>
              <p class="bg-gray-200 px-3  my-2 mx-1.5 broder-gray-2 rounded-xl h-6 underline transform transition-all duration-200 ease hover:-translate-y-1 hover:shadow-xl shadow-md"><a class="hovers" :href="node.hotel">Guest House</a></p>
              <p v-if="node.apartment.length" class="bg-gray-200 px-3  my-2 mx-1.5 broder-gray-2 rounded-xl h-6 underline transform transition-all duration-200 ease hover:-translate-y-1 hover:shadow-xl shadow-md"><a class="hovers" :href="node.apartment">Apartment</a></p>
              <p v-if="node.house.length" class="bg-gray-200 px-3  my-2 mx-1.5 broder-gray-2 rounded-xl h-6 underline transform transition-all duration-200 ease hover:-translate-y-1 hover:shadow-xl shadow-md"><a class="hovers" :href="node.house">House</a></p>
          </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'Rent',
        props: ['node'],
    }
</script>

<style lang="scss" scoped>
.hovers{
    &:hover {
      font-weight: 700;
    }
}
</style>