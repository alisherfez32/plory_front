<template>
	<div>
		<!--Sidebar with Dimmer -->
		<div class="flex absolute h-screen">
			<!-- Sidebar -->
			<div class="flex">
				<!-- Sidebar Content -->
				<div ref="content" class="transition-all duration-700 bg-gray-200 overflow-hidden">
					<Search />
					<div class="w-64 font-bold text-xl">
                        <TreeBrowser v-for="root in root" :key="root.name"
                        :node="root"/>
                    </div>
					<slot></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import TreeBrowser from './TreeBrowser.vue'
import Search from '../Search.vue'

import axios from 'axios'

export default {
    components: {
     TreeBrowser,
	 Search
    },
	data() {
		return {
		}
	},
    mounted() {
		this.getTree()
    },
	computed: {
		root(){
			return this.$store.state.node
		}
	},
	methods: {
	async getTree() {
        await axios
          .get('/api/v1/country-tree')
          .then(response => {
            this.$store.commit("setRoot", response.data)
          })
          .catch(error => {
            console.log("ERROR", error)
          })
         }      
	}
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 1s ease-out;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
