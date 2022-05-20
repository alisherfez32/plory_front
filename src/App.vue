<template>
  <div>
    <Navigation />
    <Sidebar v-show="isSlidebar"/>
    <Loader v-show="isLoading"/>
    <div class="flex flex-row">
      <div class="m-2 h-full hidden sm:flex">
        <TreeLeft class="flex flex-col"/>
      </div>
      <div class="w-full flex justify-center items-center">
        <router-view />
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>

import Navigation from '@/components/header/nav.vue'
import Footer from '@/components/footer/footer.vue'
import Loader from '@/components/Spinner.vue'
import Sidebar from '@/components/Tree/Sidebar.vue'
import TreeLeft from '@/components/Tree/TreeLeft.vue'
  export default {
    data(){
      return {
      }
    },
    components: {
      Navigation,
      Footer,
      Sidebar,
      TreeLeft,
      Loader
    },
    beforeCreate() {
    },
    mounted() {
    },
    computed: {
      isLoading() {
        return this.$store.state.isLoading
      },
      isSlidebar(){
        return this.$store.state.isSlidebar
      },
      isCity(){
      }
    },
    methods: {
      Toast(){
        this.$toast.info("My toast content")
        this.$toast("My toast content")
        this.$toast.success('This is my favorite toasts plugin.')
        this.$toast.warning('This is my favorite toasts plugin.')
        this.$toast.error('This is my favorite toasts plugin.')
      }
    }
  }
</script>

<style>

</style>
