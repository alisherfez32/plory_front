<template>
  <div>
    <Currency />
  </div>
</template>

<script>
import Currency from '../components/Currency.vue'
  export default {
    name: 'Home',
    components: {
      Currency
    },
    data() {
      return {
      }
    },
    mounted() {
      this.$store.dispatch("getTree")
      this.$router.push("/indonesia")
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