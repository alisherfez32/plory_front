<template>
<div class="flex flex-col">
    <div class="border-l-2 border-dashed flex flex-row"
    :style="{'margin-left': `${depth * 20}px`}"
    @click="isExpanded(node)">
    <span v-if="hasChildren" class="type">{{expanded ? '&#9660;' : '&#9658;'}}</span>
    <span v-else>&#9671;</span>
    <h1 @click="getCountry(node.get_absolute_url)" class="text-lg font-bold">{{node.name}}</h1>
    </div>
    <TreeBrowser class=""
      v-show="expanded"
      @click="getCity(node.get_absolute_url, child.get_absolute_url)"
      v-for="child in node.list_cities"
      :key="child.name"
      :node="child"
      :depth = "depth + 1"
    />
</div>
</template>

<script>
export default {
    name: 'TreeBrowser',
    props: {
        node: Object,
        depth: {
            type: Number,
            default: 0
        }
    },
    data(){
        return {
            expanded: false,
        }
    },
    mounted() {
    },
    methods:{
        getCountry(e){
            if(this.hasChildren) {
              this.$router.push(e)
            }
        },
        getCity(b, e){
            if(this.hasChildren) {
               this.$router.push(b+e)
            }
        },
        isExpanded(){
            this.expanded = !this.expanded
        }
    },
    computed: {
        hasChildren(){
            return this.node.list_cities && this.node.list_cities.length
        }
    }
}
</script>

<style scoped>

</style>