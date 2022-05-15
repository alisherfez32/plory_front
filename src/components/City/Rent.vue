<template>
    <div class="rounded-2xl m-1 cursor-pointer transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-72 max-w-full bg-gray-200">
      <div class="w-full">
            <figure class="overflow-hidden">
                <img class="rounded-2xl transform hover:scale-105 transition duration-700 ease-out" :src="node.get_image" alt="Course">
            </figure>
      </div>
      <div class="flex-col">
          <div class="flex flex-row w-full justify-between">
              <p class="text-lg font-bold">{{node.status}}</p>
              <p class="text-lg font-bold">{{node.name}}</p>
              <p class="text-lg font-bold">From {{node.company}}</p>
          </div>
          <div class="w-full">
              <p class="text-sm">{{node.notes}}</p>
          </div>
          <div class="flex flex-row justify-between">
              <p class="text-red-500 text-lg underline font-bold"><a href="https://maps.google.com">Book</a></p>
              <p class="text-sm bold">📍{{node.city}}</p>
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

</style>