<template>
<div class="flex flex-col">
    <div class="border-l-2 border-dashed flex flex-row"
    :style="{'margin-left': `${depth * 20}px`}"
    >
    <span  v-if="hasChildren" class="mt-2 cursor-pointer" @click="isExpanded()">
         <bottom v-if="expanded"/>
         <right v-else/>
    </span>
    <span v-else class="mt-2.5 mr-1" ><circlet /></span>
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
import right from '../../assets/icons/nav/right.vue'
import bottom from '../../assets/icons/nav/bottom.vue'
import circlet from '../../assets/icons/nav/circle.vue'

export default {
    name: 'TreeBrowser',
    props: {
        node: Object,
        depth: {
            type: Number,
            default: 0
        }
    },
    components: {
        right, bottom, circlet
    },
    data(){
        return {
            expanded: true,
        }
    },
    mounted() {
    },
    methods:{
        getCountry(e){
            if(this.hasChildren) {
              console.log(e)
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