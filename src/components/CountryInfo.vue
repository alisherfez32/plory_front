<template>
  <div class="flex md:flex-row flex-col mt-4 m-1">
    <div class="flex md:flex-col flex-row m-1">
      <p class="font-bold md:text-xl text-lg text-center">
        <id_flag />Selamat Datang
      </p>
      <div
        class="mx-2 md:mt-20 h-16 w-44 md:h-20 bg-gray-200 flex flex-row rounded-2xl p-1 justify-around items-center"
      >
        <p class="text-white font-black sm:text-lg text-2xl m-1">31°C</p>
        <div class="text-xs flex flex-col justify-center m-0.5">
          <p class="font-semibold">Humadity 79%</p>
          <p class="font-semibold">UV Index 6</p>
        </div>
      </div>
      <div
        class="md:mt-20 text-center md:h-20 h-16 w-40 flex flex-col rounded-xl justify-center items-center font-bold bg-gray-300"
      >
        <p>UTC+7, 2:04 PM,</p>
        <p>Friday 15 April</p>
      </div>
    </div>
    <div class="md:ml-20 sm:ml-10 flex flex-col">
      <div class="flex flex-row">
        <div class="mr-2"><book /></div>
        <div class="flex flex-col">
          <div class="">
            <p class="">Main Language</p>
            <p class="font-semibold">Bahasa Indonesia</p>
          </div>
          <div class="mt-6">
            <p>Popluar foreign languages</p>
            <p class="font-semibold">English, Chinese, Arabic</p>
          </div>
        </div>
        <div class="flex flex-col ml-8">
          <div class="">
            <p>Population</p>
            <p class="font-semibold">273mln</p>
          </div>

          <div class="mt-6">
            <p># of foreigners</p>
            <p class="font-semibold">350 000</p>
          </div>
        </div>
      </div>
      <div class="flex flex-row mt-10">
        <div class="mr-2"><airplane /></div>
        <div class="flex flex-col">
          <div>
            <p>International Arrival Airports</p>
            <div class="flex flex-col font-semibold">
              <p>Soekarno Hatta International Airport</p>
              <p>Ngurah rai International Airport</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row mt-10">
        <div class="mr-2"><climate /></div>
        <div class="flex flex-col">
          <div class="">
            <p>Climate</p>
            <p class="font-semibold">
              Hot, humid, and rainy. Average temperature is 22.8 ~ 30.2*C
            </p>
          </div>
          <div class="mt-6">
            <p>Seasons</p>
            <p class="font-semibold">Dry (April to October)</p>
            <p class="font-semibold">Rainy (November to March)</p>
          </div>
        </div>
      </div>
      <div class="flex flex-row mt-10">
        <div class="mr-2"><maps /></div>
        <div class="flex flex-col">
          <div class="">
            <p>President</p>
            <p class="font-semibold">Joko Wldodo</p>
          </div>
          <div class="mt-6">
            <p>Capital City</p>
            <p class="font-semibold">Jakarta</p>
          </div>
          <div class="mt-6">
            <p>Religien City</p>
            <p class="font-semibold">Muslims 87%</p>
            <p class="font-semibold">Hindu 1.74%</p>
            <p class="font-semibold">Buddhist 0.72%</p>
            <p class="font-semibold">Others 0.72%</p>
          </div>
        </div>
        <div class="flex flex-col ml-8">
          <div class="">
            <p>Independence</p>
            <p class="font-semibold">August 17, 1945</p>
          </div>
          <div class="mt-6">
            <p># of States / Provinces</p>
            <p class="font-semibold">34 provinces</p>
          </div>
          <div class="mt-6">
            <p>Life expectency</p>
            <p class="font-semibold">73 years</p>
          </div>

          <div class="mt-6">
            <p>Literacy rate</p>
            <p class="font-semibold">96%</p>
          </div>
        </div>
      </div>
      <div class="flex flex-row mt-10">
        <div class="mr-2"><review /></div>
        <div class="flex flex-col">
          <div>
            <p>Foreigner friendly name</p>
            <p class="font-semibold">YES</p>
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
export default {
  name: "INFO",
  components: {
    book,
    airplane,
    climate,
    maps,
    review,
    id_flag,
  },
};
</script>

<style scoped></style>
