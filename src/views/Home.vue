<template>
  <div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: {
      
    },
    data() {
      return {
      }
    },
    mounted() {
      this.$store.dispatch("getTree")
    },
    created() {
    },
    computed: {
    },
    methods: {
      goToItem(id){
        
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>