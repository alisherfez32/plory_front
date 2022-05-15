<template>
    <div class="flex flex-col w-full justify-center items-center">
        <Countrynav />
        <p class="font-bold text-lg ">{{why}}</p>
        <hr class="h-6">
        <div class="w-3/5 flex flex-wrap justify-center items-center">
            <AppsAndWebsites :node="app" v-for="app in apps_and_websites" :key="app.id"/>
        </div>
    </div>
    
</template>

<script>
import Countrynav from '@/components/header/Countrynav.vue'
import AppsAndWebsites from '../../components/Country/AppWeb.vue'

import axios from 'axios';
    export default {
        name: 'Apps',
        components: {
            Countrynav,
            AppsAndWebsites
        },
        data(){
            return {
                app: {
                },
                why: '',
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
                    this.Apps()
                })
                .catch(error => {
                    console.log(error)
                })
                
                this.$store.commit("setIsLoading", false)
                
                document.title = 'Apps | ' + country_slug
            },
            Apps(){
                let has = Object.keys(this.app).length
                if(has > 0){
                    this.app.forEach(el => {
                    this.apps_and_websites = el.apps_and_websites
                    this.why = el.apps_for_what
                }) 
                }
            }

        },
        computed: {
        }
    }
</script>

<style lang="scss" scoped>

</style>