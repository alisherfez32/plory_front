<template>
    <div class="flex md:flex-row flex-col m-1 justify-center">
        <div class="flex md:flex-col flex-row m-1 items-center md:justify-start justify-center">
            <div class="w-44 h-20 bg-gray-200 flex flex-row rounded-2xl p-1 m-1 justify-center items-center">
                <p class="text-white font-bold text-2xl m-1">31*C</p>
                <div class="text-xs flex flex-col justify-center m-0.5">
                    <p class="font-semibold">Humadity 79%</p>
                    <p class="font-semibold">UV Index 6</p>
                </div>
            </div>
            <div class="md:mt-20 text-center h-20 w-40 flex flex-col rounded-xl justify-center items-center font-bold bg-gray-300">
                <p>UTC+7, 2:04 PM,</p>
                <p>Friday 15 April</p>
            </div>
        </div>
        <div class="md:ml-20 sm:ml-10 flex flex-col">
            <div class="flex flex-row">
                <div class=""><smile /></div>
                <div class="flex flex-col">
                    <div class="">
                        <p class="">Cost of living / month</p>
                        <p class="font-semibold">$713/month</p>
                    </div>
                    <div class="mt-6">
                        <p>Internet speed</p>
                        <p class="font-semibold">Download speed: 25 Mb/s</p>
                        <p class="font-semibold">Upload speed: 12 Mb/s</p>
                    </div>
                    <div class="mt-6">
                        <p>Free wifi</p>
                        <p class="font-semibold">Easy to find</p>
                    </div>
                </div>
                <div class="flex flex-row sm:ml-6 ml-4">
                    <div class=""><review /></div>
                    <div class="flex flex-col ml-2">
                        <div class="">
                            <p>Foreigner friendly</p>
                            <p class="font-semibold">YES</p>
                        </div>
                        <div class="mt-6">
                            <p>English speaking</p>
                            <p class="font-semibold">GOOD</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-row mt-10">
                <div class="h-full"><airplane /></div>

                <div class="flex flex-col">
                    <div>
                        <p>Airports</p>
                        <div class="flex flex-col font-semibold">
                            <p>Soekarno Hatta International Airport</p>
                        </div>
                    </div>
                </div>

                <div class="flex flex-row sm:ml-6 ml-4">
                <div class="h-full"><crime /></div>
                <div class="flex flex-col ml-2">
                    <div class="">
                        <p>Crime rate</p>
                        <p class="font-semibold">54.62% (MODERATE)</p>
                    </div>
                </div>
            </div>
            </div>

            <div class="flex flex-row mt-10">
                <div class="h-full"><maps /></div>
                <div class="flex flex-col ml-2">
                    <div class="">
                        <p>Governor</p>
                        <p class="font-semibold">Joko Wldodo</p>
                    </div>
                    <div class="mt-6">
                        <p>Population</p>
                        <p class="font-semibold">11,074,811</p>
                    </div>
                    <div class="mt-6">
                        <p>Area</p>
                        <p class="font-semibold">664,01km<sup>2</sup></p>
                    </div>
                </div>
                <div class="flex flex-col sm:ml-6 ml-4">
                    <div>
                        <p>Districts</p>
                        <div class="font-semibold">
                            <p>Central Jakarta</p>
                            <p>North Jakarta</p>
                        </div>               
                    </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import smile from '../assets/icons/Info/smile.vue'
import airplane from '../assets/icons/Info/airplane.vue'
import maps from '../assets/icons/Info/map.vue'
import review from '../assets/icons/Info/review.vue'
import crime from '../assets/icons/Info/crime.vue'

    export default {
        props: {
            node: Object
        },
        components: {
            smile, airplane, maps, review, crime
        },
        methods: {
            getToCost(e){
                this.$router.push({name:'Cost Of Living', params:{city_slug: e}})
            },
            getToScore(e){
                this.$router.push({name: 'Score', params:{city_slug: e}})
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>