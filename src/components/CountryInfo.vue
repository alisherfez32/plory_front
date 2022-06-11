<template>
  <div class="flex md:flex-row flex-col mt-4 m-1 mb-10">
    <div class="flex md:flex-col lg:mr-28 md:mr-20 flex-row md:mb-0 mb-8">
      <div class="flex flex-row h-16 md:w-44 w-24 sm:mr-4">
        <img :src="node.get_flag_image" alt="flag" height="36" width="37">
        <p class="font-bold md:text-xl sm:text-lg text-sm">{{ node.text_near_flag}}</p>
      </div>
      <div
        class=" bg-gray-300 p-1 sm:mr-3 mr-1.5 md:mt-20 h-16 md:w-44 md:h-20 flex flex-row rounded-2xl justify-around items-center">
        <p class=" font-black text-sm sm:text-2xl">{{temp.toFixed(1)}}°C</p>
        <div class="text-xs flex flex-col justify-center m-0.5">
          <p class="md:font-semibold">Humidity: {{weather.humidity}}%</p>
          <p class="md:font-semibold">Pressure: {{weather.pressure}}hPa</p>
        </div>
      </div>
      <div
        class="md:text-lg text-xs text-center md:mt-20 md:h-20 h-16 w-32 md:w-44 flex flex-col rounded-xl justify-center items-center font-bold bg-gray-300">
        <p class="uppercase">{{time}}</p>
        <p>{{date}}</p>
      </div>
    </div>
    <div class="md:ml-20 sm:ml-10 flex flex-col m-1">
      <div class="flex flex-row">
        <div class="mr-2">
          <book />
        </div>
        <div class="flex flex-col">
          <div class="">
            <p class="">Main Language</p>
            <p class="font-semibold">{{ node.main_language}}</p>
          </div>
          <div class="mt-6">
            <p>Popular foreign languages</p>
            <p class="font-semibold">{{node.popular_foreign_langs}}</p>
          </div>
        </div>
        <div class="flex flex-col ml-8">
          <div class="">
            <p>Population</p>
            <p class="font-semibold">{{node.population}}</p>
          </div>

          <div class="mt-6">
            <p># of foreigners</p>
            <p class="font-semibold">{{ node.number_of_foreigners}}</p>
          </div>
        </div>
      </div>
      <div class="flex flex-row mt-10">
        <div class="mr-2">
          <airplane />
        </div>
        <div class="flex flex-col">
          <div>
            <p>International Arrival Airports</p>
            <div class="flex flex-col font-semibold">
              <p v-for="value in node.airports" :key="value.id">{{value.name}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row mt-10">
        <div class="mr-2">
          <climate />
        </div>
        <div class="flex flex-col">
          <div class="">
            <p>Climate</p>
            <p class="font-semibold">
              {{ node.climate}}
            </p>
          </div>
          <div class="mt-6">
            <p>Seasons</p>
            <p v-for="value in node.seasons" :key="value.id" class="font-semibold">{{value.name}}</p>
          </div>
        </div>
      </div>
      <div class="flex flex-row mt-10">
        <div class="mr-2">
          <maps />
        </div>
        <div class="flex flex-col">
          <div class="">
            <p>President</p>
            <p class="font-semibold">{{node.president}}</p>
          </div>
          <div class="mt-6">
            <p>Capital City</p>
            <p class="font-semibold">{{ node.capital}}</p>
          </div>
          <div class="mt-6">
            <p>Religions</p>
            <p class="font-semibold">Muslims 87%</p>
            <p class="font-semibold">Christians 9.82%</p>
            <p class="font-semibold">Hindu 1.74%</p>
            <p class="font-semibold">Buddhist 0.72%</p>
            <p class="font-semibold">Others 0.72%</p>
          </div>
        </div>
        <div class="flex flex-col ml-8">
          <div class="">
            <p>Independence</p>
            <p class="font-semibold">{{ node.independence_day}}</p>
          </div>
          <div class="mt-6">
            <p># of States / Provinces</p>
            <p class="font-semibold">{{ node.number_of_state}}</p>
          </div>
          <div class="mt-6">
            <p>Life expectency</p>
            <p class="font-semibold">{{ node.life_expectency}} years</p>
          </div>

          <div class="mt-6">
            <p>Literacy rate</p>
            <p class="font-semibold">{{ node.literacy_rate}}%</p>
          </div>
        </div>
      </div>
      <div class="flex flex-row mt-10">
        <div class="mr-2">
          <review />
        </div>
        <div class="flex flex-col">
          <div>
            <p>Foreigner friendly</p>
            <p class="font-semibold">{{node.foreign_friendly}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// ICONS
import book from "@/assets/icons/Info/book.vue";
import airplane from "@/assets/icons/Info/airplane.vue";
import climate from "@/assets/icons/Info/climate.vue";
import maps from "@/assets/icons/Info/map.vue";
import review from "@/assets/icons/Info/review.vue";
import id_flag from "@/assets/icons/flags/id.vue";

import dayjs from 'dayjs'
// import utc from 'dayjs/plugin/utc'
// dayjs.extend(utc)

export default {
  name: "INFO",
  props: {
    time: String,
    weather: Object,
    node: Object,
  },
  mounted() {

  },
  components: {
    book,
    airplane,
    climate,
    maps,
    review,
    id_flag,
  },
  computed: {
    temp(){
      return this.weather.temp - 273
    },
    time(){
      return dayjs(this.time).format("h:mm a")
    },
    date(){
      return dayjs(this.time).format("dddd, MMMM D")
    }
  }

};
</script>

<style scoped>
.isSmall{
  max-width: 400px;
}

</style>
