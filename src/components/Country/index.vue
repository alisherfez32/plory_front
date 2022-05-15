<template>
    <div class="border-2 p-2 rounded-2xl m-1 cursor-pointer transform transition-all duration-200 ease hover:-translate-y-1 shadow-sm w-72 max-w-full bg-gray-200" >
        <div class="flex flex-col">
            <p class="text-lg font-bold">Country: {{node.name}}</p>
            <p class="text-lg font-bold">Population: {{node.population}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Country',
        props: {
            node: Object,
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>

</style>