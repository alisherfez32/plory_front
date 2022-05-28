<template>
    <div class="px-2 py-1.5 rounded-2xl m-1 cursor-pointer transform transition-all duration-200 ease hover:-translate-y-1 shadow-md w-72 h-80">
      <div class="w-full">
            <figure class="flex justify-center w-full">
                <img class="max-h-50 rounded-2xl transform hover:scale-105 transition duration-700 ease-out" :src="node.get_image" alt="Course">
            </figure>
      </div>
      <div class="flex-col">
          <div class="flex flex-row w-full justify-between">
              <p class="text-lg font-bold">{{node.name}}</p>
              <p class="text-sm font-bold">IDR {{Entryfee(node.entry_fee)}}</p>
          </div>
          <div class="w-full">
              <p class="text-sm">{{node.description}}</p>
              <!-- <p class="text-sm">{{node.best_time_togo}}</p> -->
          </div>
          <div class="flex flex-row justify-between mt-2">
              <div class="flex flex-row text-gray-500 text-lg underline">
                  <maps class="mr-1"/>
                  <a :href="node.url_on_map">{{node.district}}</a>
               </div>
          </div>
      </div>

    </div>
</template>
<script>
import maps from '../../assets/icons/Info/onmap.vue'

    export default {
        name: 'Visit',
        props: ['node'],
        components: {
            maps
        },
        mounted() {
        },
        methods: {
            Entryfee(e){
                console.log(e);
                if(e == 0){
                    return 'FREE'
                } else{
                    return e
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>