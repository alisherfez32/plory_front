<template>
        <div class="md:container 
    flex flex-row
    md:mx-auto mt-2 
    rounded-lg border-2"
    >
        <div class="p-1 h-32 w-32 cursor-pointer">
            <img class="
            max-h-32 max-w-10
             rounded-lg"
            :src="node.get_image" alt="LOGO">
        </div> 
        <div class="w-full pr-2">
            <div class="flex flex-col cursor-pointer">
                <p class="font-pop font-bold text-2xl">{{node.name}}</p>
                <p class="font-pop font-semibold text-xl">{{node.description}}</p>
                <a :href="node.url" class="text-blue-500 text-lg underline">URL</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Apps and Wensites',
        props: {
            node: Object,
        }
    }
</script>

<style lang="scss" scoped>

</style>