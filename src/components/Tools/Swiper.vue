<template>
    <div>
        <div class="relative">
          <p class="mt-10 text-white z-10 absolute text-xl font-bold">{{node.name}}</p>
          <p class="mt-16 text-white z-10 absolute text-xl font-bold">{{node.city}}</p>
          <div>
              <p class="mt-24 leading-4 absolute text-white text-sm z-10 overflow-hidden">
              {{node.notes}}
          </p>
          </div>
          <figure class="overflow-hidden">
              <img :src="node.get_image" alt="Course">
          </figure>
      </div>
    </div>
</template>

<script>
    export default {
        props: {
            node: Object
        }
    }
</script>

<style lang="scss" scoped>

</style>