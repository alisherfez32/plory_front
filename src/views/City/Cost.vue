<template>
    <div class="flex flex-col w-full justify-center items-center">
      <Citynav class="flex w-full"/>
        <p class="font-semibold md:w-3/5 m-1.5 text-center mb-2">General neccessities and prices you will find in Jakarta.</p>
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
            class="flex flex-row " v-for="(value, key) in EatingOut" :key="value">
              <p class="mt-2.5 w-4/5 text-lg text-gray-900 font-bold first-letter:text-7xl">
                {{Capitalize(key)}}
              </p>
              <p class="text-lg text-gray-900 font-medium">
                IDR {{value}} 
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:w-3/5 sm:w-4/5 w-5/6 m-2 px-3 py-2 shadow-xl">
          <div class="flex justify-end shadom-md">
            <div class="flex flex-row mb-3">
              <p class="bg-gray-300 px-2 py-0.5 h-6 text-sm rounded-xl">Groceries</p>
              <div class="ml-2 mt-3.5 cursor-pointer">
                <less @click="lessGrocery" v-show="isOpenGrocery"/>
                <more @click="lessGrocery" v-show="!isOpenGrocery"/>
              </div>
            </div>
          </div>
          <div v-show="isOpenGrocery" class="transition-transform">
            <div
            class="flex flex-row " v-for="(value, key) in Groceries" :key="value">
              <p class="mt-2.5 w-4/5 text-lg text-gray-900 font-bold first-letter:text-7xl">
                {{Capitalize(key)}}
              </p>
              <p class="text-lg text-gray-900 font-medium">
                IDR {{value}} 
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:w-3/5 sm:w-4/5 w-5/6 m-2 px-3 py-2 shadow-xl">
          <div class="flex justify-end shadom-md">
            <div class="flex flex-row mb-3">
              <p class="bg-gray-300 px-2 py-0.5 h-6 text-sm rounded-xl">Utilities</p>
              <div class="ml-2 mt-3.5 cursor-pointer">
                <less @click="lessUtility" v-show="isOpenUtility"/>
                <more @click="lessUtility" v-show="!isOpenUtility"/>
              </div>
            </div>
          </div>
          <div v-show="isOpenUtility" class="transition-transform">
            <div
            class="flex flex-row " v-for="(value, key) in Utilities" :key="value">
              <p class="mt-2.5 w-4/5 text-lg text-gray-900 font-bold first-letter:text-7xl">
                {{Capitalize(key)}}
              </p>
              <p class="text-lg text-gray-900 font-medium">
                IDR {{value}}
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
                isOpenGrocery: false,
                isOpenUtility: false,
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

                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error)
                })
                
                this.$store.commit("setIsLoading", false)
                
                document.title = 'Cost | ' + city_slug

            },
            less() {
                this.isOpen = !this.isOpen
            },
            lessGrocery(){
              this.isOpenGrocery = !this.isOpenGrocery
            },
            lessUtility(){
              this.isOpenUtility = !this.isOpenUtility
            },
            Capitalize(str){
              let str1 = str.charAt(0).toUpperCase() + str.slice(1) 
              return str1.replace(/_+/g, ' ')
            },
            
        },
        computed: {
          EatingOut(){
            return Object.fromEntries(Object.entries(this.node).slice(1, 11))
          },
          Groceries(){
            return Object.fromEntries(Object.entries(this.node).slice(11, 26))
          },
          Utilities(){
            return Object.fromEntries(Object.entries(this.node).slice(26, 34))
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>