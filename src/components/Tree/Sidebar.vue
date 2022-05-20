<template>
	<div>
		<!--Sidebar with Dimmer -->
		<div class="flex top-10 absolute h-full">
			<!-- Sidebar -->
			<div class="flex top-6  h-full z-20">
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
		this.$store.dispatch("getTree")
    },
	computed: {
		root(){
			return this.$store.state.node
		}
	},
	methods: {
	// async getTree() {
    //     await axios
    //       .get('/api/v1/country-tree')
    //       .then(response => {
    //         console.log(response);
    //         this.root = response.data
    //       })
    //       .catch(error => {
    //         console.log("ERROR", error)
    //       })
    //   }
	}
};
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
