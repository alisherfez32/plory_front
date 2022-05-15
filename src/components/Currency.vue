<template>
<div class="flex flex-row">
    <div>
        <label>Choose the currency</label>
        <select v-model="first"
         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option disabled selected>Choose a currency</option>
          <option v-for="usd in currencies" :key="usd"
          :value="usd">{{ usd }}</option>
        </select>
    </div>
  <form>
    <div>
      <input v-model="number" 
      min="1" type="number" class="ml-2 mr-2 block py-2.5 px-0 w-20 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=""  />
  </div>
  </form>
  
    <div>
        <select v-model="second"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option disabled selected>Choose the curreny</option>
          <option v-for="usd in currencies" :key="usd"
          :value="usd">{{ usd }}</option>
        </select>
    </div>
    <div>
      <button @click="getCurrenry"
      type="button" class=" ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <span v-if="isLoading">
               <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span class="visually-hidden">💫</span>
              </div>
          </span>
          <span> Convert </span>
        </button>
  </div>
  <form>
      FROM {{first}} to {{second}} {{number}}
    Result: 
    <h1>{{result}}</h1>
  </form>
  </div>
</template>

<script>
import axios from 'axios'

const currencies = [
  'usd', 'rub',
    "ada" ,
    "aed", "afn",
    "algo", "all", "amd", "ang",
    "aoa", "ars", "atom",
    "aud","avax",
    "awg","azn", "bam", "bbd", "bch",
    "bdt", "bgn","bhd", "bif", "bmd",
    "bnb","bnd", "bob", "brl",
    "bsd","btc", "btn","busd", "bwp",
    "byn","byr",
    "bzd",
    "cad",
    "cdf",
    "chf", "chz", "clf",
    "clp",
    "cny",
    "cop",
    "crc",
    "cro",
    "cuc",
    "cup",
    "cve",
    "czk",
    "dai",
    "dkk",
    "doge",
    "dop",
    "dot","dzd",
    "egld", "egp","enj", "ern","kfa",
    "etb", "etc","eth","eur","fil","fjd",
    "fkp","ftt",
    "gbp","gel","ggp","ghs",
    "gip",  "gmd",  "gnf", "grt",
    "gtq",
    "gyd",    "hkd",    "hnl",    "hrk", "htg",  "huf",    "icp",
    "idr", "ils",
    "imp","inj",  "inr",
    "iqd",    "irr",
    "isk",
    "jep",
    "jmd",
    "jod",
    "jpy",
    "kes",   "kgs",  "khr",  "kmf",  "kpw",    "krw",    "ksm",
    "kwd",  "kyd", "lar",
    "kzt",
    "lak","lbp",
    "lkr",
    "lrd",
    "lsl",
    "ltc",
    "ltl",
    "luna",
    "lvl",  "lyd",  "mad",
    "matic",
    "mdl",
    "mga", "mkd",  "mmk",
    "mnt",  "mop", "mro",
    "mur", "mvr",   "mwk", "mxn",
    "myr",    "mzn",
    "nad",  "ngn", "nio",
    "nok",    "npr",   "nzd",
    "omr",   "one", 
    "pen",
    "pgk",
    "php",
    "pkr",
    "pln", "pyg", "ani",
    "qar","ron",    "rsd",
    "rub",
    "rwf",
    "sar",   "sbd",
    "scr",
    "sdg",  "sek", "sgd",   
    "shib",
    "shp",
    "sll",
    "sol",
    "sos",
    "srd",
    "std",
    "svc",
    "syp",
    "szl",
    "thb",
    "theta",
    "tjs",
    "tmt",
    "tnd",
    "top",
    "trx",
    "ttd",
    "twd",
    "tzs",
    "uah",
    "ugx",
    "uni",   
    "usd",,
    "usdc",
    "usdt", "uyu",
    "uzs",
    "vef",
    "vet", "vnd",
    "vuv",
    "wbtc",
    "wst",
    "xaf",
    "xag",
    "xau",
    "xcd",
    "xdr",
    "xlm",
    "xmr",
    "xpf",
    "xrp",
    "zar",
    "zmk",
    "zmw",
    "zwl",
]

export default {
    data(){
        return {
            currencies,
            first: "",
            second: "",
            isLoading: false,
            number: "",
            result: "",
        }
    },

    components: {
    },

    methods: {
        async getCurrenry(){
            this.isLoading = true
            const second = this.second

            await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${this.first}/${this.second}.json`).then(response => {
              this.result = response.data[second] * this.number
            })

            this.isLoading = false

        }
    }
}
</script>
