<template>
    <div class="flex flex-col w-full justify-center items-center">
        <Countrynav class="flex w-full"/>
        <p class="font-semibold md:w-4/5 m-1.5 text-center">Useful apps you need to download before coming to Indonesia. Hint: e-wallet, food delivery & ride-hailing will be your best friend.</p>
        <hr class="h-6">
        <div class="flex flex-wrap w-full justify-center items-center">
            <AppsAndWebsites :node="apps" v-for="apps in apps_and_websites" :key="apps.id"/>
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
                app: {},
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
                    this.Apps(response.data)
                })
                .catch(error => {
                    console.log(error)
                })
                
                this.$store.commit("setIsLoading", false)
                
                document.title = 'Apps | ' + country_slug
            },
            Apps(obj){
                // console.log('obj', obj);
                // let has = Object.keys(obj)
                // if(has > 0){
                    obj.forEach(el => {
                    this.apps_and_websites = el.apps_and_websites
                    // this.why = el.apps_for_what
                }) 
                // }
            }

        },
        computed: {
        }
    }
</script>

<style lang="scss" scoped>

</style>