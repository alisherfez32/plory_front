<template>
    <div class="flex flex-col w-full justify-center items-center">

        <Citynav class="flex w-full"/>
        <!-- <div class="flex w-full justify-center items-center">
            <Costs :node="cost" />
        </div> -->
        <div class="flex flex-col md:w-3/5 sm:w-4/5 w-5/6 m-2 px-3 py-2 shadow-xl">
          <div class="flex justify-end shadom-md">
            <div class="flex flex-row mb-3">
              <p class="bg-gray-300 px-2 py-0.5 h-6 text-sm rounded-xl">Eating out</p>
              <div class="ml-2 mt-3.5 cursor-pointer">
                <less @click="less" v-show="isOpen"/>
                <more @click="less" v-show="!isOpen"/>
              </div>
            </div>
          </div>
          <div v-show="isOpen" class="transition-transform">
            <div
            class="flex flex-row " v-for="(value, key) in node" :key="value">
              <p class="mt-2.5 w-4/5 text-lg text-gray-900 font-bold">
                {{key}}
              </p>
              <p class="text-lg text-gray-900 font-medium">
                ${{value}} 
              </p>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
import Citynav from '../../components/header/Citynav.vue';
// import Costs from '../../components/City/Cost.vue'

import more from '../../assets/icons/Info/more.vue'
import less from '../../assets/icons/Info/less.vue'
import dollar from '../../assets/icons/Info/dollar.vue'

import axios from 'axios';
    export default {
        name: 'Cost',
        components: {
            Citynav,
            // Costs, 
            more, less, dollar
        },
        data(){
            return {
                node: {},
                isOpen: true,
            }
        },
        mounted() {
            this.getCost()
        },
        methods: {
            async getCost() {
                this.$store.commit("setIsLoading", true)

                const city_slug = this.$route.params.city_slug
                
                await axios.get(`/api/v1/costs/city/${city_slug}/`).then(response => {
                    this.node = response.data
                })
                .catch(error => {
                    console.log(error)
                })
                
                this.$store.commit("setIsLoading", false)
                
                document.title = 'Cost | ' + city_slug

            },
            less() {
                this.isOpen = !this.isOpen
            }
        },
        computed: {
        }
    }
</script>

<style lang="scss" scoped>

</style>