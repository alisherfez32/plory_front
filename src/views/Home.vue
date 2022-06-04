<template>
  <div>
    <Currency />
  </div>
</template>

<script>
import Currency from '../components/Currency.vue'

import axios from 'axios'

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
      this.getTree()
      // this.$router.push("/indonesia")
    },
    created() {
    },
    computed: {
    },
    methods: {
      async getTree() {
        await axios
          .get('/api/v1/country-tree')
          .then(response => {
            this.$store.commit("setRoot", response.data)
            
            document.title = 'Stepbook'
          })
          .catch(error => {
            console.log("ERROR", error)
          })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>