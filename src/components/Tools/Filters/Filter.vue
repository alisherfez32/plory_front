<template>
    <div class="flex flex-col ml-2">
        <div class="flex p-2 flex-row cursor-pointer" @click="putFilter">
            <div>
                <Heavy v-show="isFilterd" />
                <Light v-show="!isFilterd" />
            </div>
            <p class="ml-3">Make a Filter</p>
        </div>
        <div>
            <!-- <Buttons v-for="item in filter" :key="item.id"
            v-show="isFilterd" /> -->
            <button v-for="item in filter" :key="item.name"
                :class="{ 'underline text-red-500 border-red-300 font-bold' : item.used}" v-show="isFilterd"
                @click="getFilter(item)"
                class="shadow-md rounded-3xl mx-1 py-2 px-3 border border-[#484343]">{{Capitalize(item.name)}}</button>
        </div>
    </div>
</template>

<script>
import Heavy from '../../../assets/icons/help/filter.vue'
import Light from '../../../assets/icons/help/filter_light.vue'

// import Buttons from './Buttons.vue'
export default {
    name: "Filter",
    props: {
        filter: Array,
    },
    components: {
        Heavy, Light, 
    },
    data() {
        return {
            isFilterd: true,
            filters: []
        }
    },
    async mounted() {
        let filters = this.$route.query.filter_by

        if (filters !== undefined) {
            const UNIQUE = new Set(filters.split('-and-'))
            this.filters = Array.from(UNIQUE)

            this.$props.filter.find(el => {
                const name = el.name.toLowerCase()
                el.used = UNIQUE.has(name)
            })

        } else {
            this.filters = []
        }   
    },
    methods: {
        putFilter() {
            this.isFilterd = !this.isFilterd
        },
        getFilter(item) {
            let e = item.name.toLowerCase()
            
            const UniqueValues = new Set(this.filters)
            if (UniqueValues.has(e)) {
                UniqueValues.delete(e)
                if (UniqueValues.size === 0) {

                    this.filters = []
                    const country_slug = this.$route.params.country_slug
                    const name = this.$route.name
                    
                    return this.$router.push({ name: name, params: { country_slug: country_slug } })
                }

            } else {
                UniqueValues.add(e)
            }

            this.filters = Array.from(UniqueValues)
            const stringify = JSON.stringify(this.filters)
            const cleaned = stringify.replace(/,/g, '-and-').replace(/[[\]""]/g, "")

            this.$router.push({ name: this.$route.name, query: { filter_by: cleaned } })
        },
        Capitalize(str) {
            return str.replace(/_+/g, ' ')
        }
    },
    computed: {
    }
}
</script>

<style lang="scss" scoped>

</style>