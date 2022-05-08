<template>
    <div>
        <Countrynav />
        <h1>Apps and Websites</h1>
        {{app}}
        <hr class="h-6">

        <hr>
        <table>
            <thead>
                <th>apps_and_websites</th>
            </thead>
            <tr v-for="item in apps_and_websites" :key="item.id">
                <td>
                    {{item}}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import Countrynav from '@/components/header/Countrynav.vue'
import axios from 'axios';
    export default {
        name: 'Apps',
        components: {
            Countrynav
        },
        data(){
            return {
                app: {
                },
                apps_and_websites: []
            }
        },
        mounted() {
            this.getAppAndWebsites()
        },
        methods: {
            async getAppAndWebsites() {
                this.$store.commit("setIsLoading", true)

                const country_slug = this.$route.params.country_slug
                
                await axios.get(`/api/v1/apps/country/${country_slug}/`).then(response => {
                    this.app = response.data
                })
                .catch(error => {
                    console.log(error)
                })
                
                this.$store.commit("setIsLoading", false)
                
                document.title = 'Apps | ' + country_slug
            },

        },
        computed: {
            apps_and_websites(){
                let array = []
                let has = Object.keys(this.app).length
                if(has > 0){
                    this.app.forEach(el => {
                    array = el.apps_and_websites
                }) 
                return { array }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>