<template>
    <div class="flex flex-col md:w-3/5 sm:w-4/5 w-5/6 m-2 px-3 py-2 shadow-xl">
          <div class="flex justify-end shadom-md">
            <div class="flex flex-row mb-3">
              <p class="bg-gray-300 px-2 py-0.5 h-6 text-sm rounded-xl">Eating out</p>
              <div class="ml-2 mt-3.5 cursor-pointer">
                <less  @click="less" class="" v-if="opened"/>
                <more @click="more" v-else/>
              </div>
            </div>
          </div>
          <div>
            <div
            class="flex flex-row " v-for="(value, key) in node" :key="value">
              <p class="mt-2.5 w-4/5 text-lg text-gray-900 font-bold">
                {{key}}
              </p>
              <p class="text-lg text-gray-900 font-medium">
                {{value}} $
              </p>
            </div>
          </div>
      </div>
</template>

<script>
import less from '../../assets/icons/Info/less.vue'
import more from '../../assets/icons/Info/more.vue'

    export default {
      props: {
        node: Object,
      },
      components: {
        less, more
      },
      dada(){
        return {
          opened: true,
        }
      },
      methods: {
        less() {
          console.log('jasdhg');
          this.opened = false;
        },
        more() {
          console.log('jhg');
          this.opened = true
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>