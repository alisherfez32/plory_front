<template>
    <div>
        <h1>Search</h1>
        
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: 'Search',
        data(){
            return {
                search: [],
                query: ''
            }
        },
        mounted() {
            document.title = "Search | Plory"

            let url = window.location.search.substring(1)
            let params = new URLSearchParams(url)
            let query = params.get("query")

            if(query){
                this.query = query

                this.perfomSearch()
            }
        },
        methods: {
            async perfomSearch(){
                this.$store.commit("setIsLoading", true)

                await axios
                    .post('/api/v1/search/', {'query': this.query})
                    .then(response => {
                        this.search = response.data
                    })
                    .catch(err => console.log(err))


                this.$store.commit("setIsLoading", false)
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>