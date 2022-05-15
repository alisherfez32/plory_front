<template>
    <div class="flex flex-col items-center">
        <p class="font-bold text-xl">{{node.name}}</p>
        <div class="">
            <img class="h-96" :src="node.get_image" alt="">
        </div>
        <p class="font-bold text-sm">{{node.description}}</p>
        <div class="flex flex-row">
            <p class="font-bold text-lg p-1">Medium cost of Living: {{node.cost_of_living}} </p>
            <p class="p-1 underline" @click="getToCost(node.citi_main_slug)">Click here for more Cost of Livings</p>
        </div>
        <div class="flex flex-row">
            <p class="font-bold text-lg p-1">Status: {{node.status}} </p>
            <p class="p-1 underline" @click="getToScore(node.citi_main_slug)">Click here for more Scores</p>
        </div>
        
    </div>
</template>

<script>
    export default {
        props: {
            node: Object
        },
        methods: {
            getToCost(e){
                this.$router.push({name:'Cost Of Living', params:{city_slug: e}})
            },
            getToScore(e){
                this.$router.push({name: 'Score', params:{city_slug: e}})
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>