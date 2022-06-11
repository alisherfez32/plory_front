<template>
  <div>
    <Head>
      <title>{{title}}</title>
      <meta name="description" :content="content" />
      <html lang="en-US" class="theme-dark" />
    </Head>

    <Navigation />
    <Sidebar v-show="isSlidebar" />
    <Loader v-show="isLoading" />
    <div class="flex flex-row">
      <div class="m-2 h-full hidden sm:flex">
        <TreeLeft class="flex flex-col" />
      </div>
      <div class="w-full flex justify-center items-center">
        <router-view />
      </div>
    </div>
    <Model v-show="isImage" />
    <!-- <Footer /> -->
  </div>
</template>

<script>

import Navigation from '@/components/header/nav.vue'
import Footer from '@/components/footer/footer.vue'
import Loader from '@/components/Tools/Spinner.vue'
import Sidebar from '@/components/Tree/Sidebar.vue'
import TreeLeft from '@/components/Tree/TreeLeft.vue'

import Model from './components/Tools/ImageModel.vue'

import { Head } from '@vueuse/head'
import axios from 'axios'
  export default {
    data(){
      return {
        title: 'Quick guide into Indonesia - 2022',
        content: 'Are you moving to or living in Indonesia? Our website will save you tons of time. Discover cost of living, food, transportation, apps and more!'
      }
    },
    components: {
      Navigation,
      Footer,
      Sidebar,
      TreeLeft,
      Loader,
      Model, Head
    },
    mounted() {
      this.getTree()
    },
    watch: {
      $route(to, from) {
        if (to.name == 'City') {
          this.getMeta('Cities')
        } else if (to.name == 'Country') {
          this.getMeta('Countries')
        } else if (to.name == 'Food') {
          this.getMeta('Foods')
        } else if (to.name == 'Transport') {
          this.getMeta('Transport')
        } else if (to.name == 'Webs') {
          this.getMeta('Apps')
        } else if (to.name == 'Cost Of Living') {
          this.getMeta('Costofliving')
        } else if (to.name == 'See') {
          this.getMeta('Visit')
        } else if (to.name == 'Stay') {
          this.getMeta('Rent')
        } else if (to.component == 'Image') {
          this.getMeta('Images')
        } else if (to.name == 'Eatplace') {
          this.getMeta('Eatplace')
        }
      }
    },
    computed: {
      isLoading() {
        return this.$store.state.isLoading
      },
      isSlidebar(){
        return this.$store.state.isSlidebar
      },
      isImage(){
        return this.$store.state.isImage
      },
    },
    methods: {
      Toast(){
        this.$toast.info("My toast content")
        this.$toast("My toast content")
        this.$toast.success('This is my favorite toasts plugin.')
        this.$toast.warning('This is my favorite toasts plugin.')
        this.$toast.error('This is my favorite toasts plugin.')
      },
      async getTree() {
        await axios
          .get('/api/v1/country-tree')
          .then(response => {
            this.$store.commit("setRoot", response.data)
            console.log(response.data);
          })
          .catch(error => {
            console.log("ERROR", error)
          })
      },
      async getMeta(name) {
        await axios.get(`/api/v1/meta/${name}`).then(response => {
          this.title = response.data[0].title
          this.content = response.data[0].content
          // console.log(response.data, this.title, this.content);
        })
      }
    }
  }
</script>

<style>

</style>
