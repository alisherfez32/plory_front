<template>
    <div>
        <div class="transition-transform">
      <div class="flex flex-row">
        <p class="mt-2.5 w-4/5 text-lg text-gray-900 font-bold first-letter:text-7xl">
          {{node.name}}
        </p>
        <p class="text-lg text-gray-900 font-medium">
          IDR {{ node.cost }}
        </p>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
    name: 'help cost',
    props: {
        node: Object
    },
    mounted() {
        console.log("DId you got it?", this.$props.node);
    }
    }
</script>

<style lang="scss" scoped>

</style>