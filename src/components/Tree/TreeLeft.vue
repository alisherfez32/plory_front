<template>
    <div class="">
        <TreeBrowser
         v-for="root in node" :key="root.name"
        :node="root" />
    </div>
</template>

<script>
import TreeBrowser from './TreeBrowser.vue'

export default {
    components: {
        TreeBrowser
    },
    data(){
    },
    mounted() {
    },
    computed: {
    node(){
        return this.$store.state.node
      }
    }
}
</script>

<style lang="scss" scoped>

</style>