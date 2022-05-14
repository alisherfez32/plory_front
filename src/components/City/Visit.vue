<template>
    <div class="rounded-2xl m-1 cursor-pointer transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-72 max-w-full bg-gray-200">
      <div class="w-full">
            <figure class="overflow-hidden">
                <img class="rounded-2xl transform hover:scale-105 transition duration-700 ease-out" src="http://127.0.0.1:8000/media/uploads/borsh_EltQitj.jpg" alt="Course">
            </figure>
      </div>
      <div class="flex-col">
          <div class="flex flex-row w-full justify-between">
              <p class="text-lg bold">Name of Place</p>
              <p class="text-sm bold">567$</p>
          </div>
          <div class="w-full">
              <p class="text-sm">Description for this place ...</p>
              <p class="text-sm">Best time to go is ...</p>
          </div>
          <div class="flex flex-row justify-between">
              <p class="text-blue-300 text-lg underline"><a href="https://maps.google.com">On Mape</a></p>
              <p class="text-sm bold">567$</p>
          </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: 'Visit',
        props: ['node'],
        mounted() {
            console.log(this.node);
        }
    }
</script>

<style lang="scss" scoped>

</style>