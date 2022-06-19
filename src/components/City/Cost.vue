<template>
  <div class="flex flex-col w-64 m-2 px-3 py-2 shadow-md">
    <div class="flex justify-end shadom-md">
      <div class="flex flex-row">
        <p class="bg-gray-300 m-1 px-2 py-0.5 h-6 text-sm rounded-xl" v-for="item in node.filter_by" :key="item.id">{{ item.name }}</p>
      </div>
     </div>
      <div class="flex flex-row justify-between">
      <p class="text-lg text-gray-900 font-bold first-letter:text-7xl">
        {{node.name}}
      </p>
      <p class="text-lg text-gray-900 font-medium">
        IDR {{ node.price }}
      </p>
    </div>

  </div>
</template>

<script>
import less from '../../assets/icons/Info/less.vue'
import more from '../../assets/icons/Info/more.vue'
import dollar from '../../assets/icons/Info/dollar.vue'
import axios from 'axios'


    export default {
      props: {
        node: Object,
      },
      components: {
        less, more, dollar
      },
      dada(){
        return {

          costs: [],
        }
      },
  mounted() {      
    console.log(this.node)
  },
  methods: {
      }
    }
</script>

<style lang="scss" scoped>

</style>