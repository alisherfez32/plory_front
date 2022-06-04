<template>
<div>
  <Disclosure as="nav" class="bg-gray-100" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="inline-flex items-center justify-center p-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" @click="slideBar" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else @click="unSlideBar" class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center cursor-pointer">
            <img class="block lg:hidden h-10 w-auto" src="../../assets/images/logo.png" alt="Logo" />
            <img class="hidden lg:block h-10 w-auto" src="../../assets/images/logo.png" alt="LOGO" />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <Search />
            <!-- <div class="flex space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div> -->
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
         <!-- <p @click="postJob" class="text-white font-semibold	cursor-pointer">Recruit</p> -->
          <!-- Profile dropdown -->
          <!-- <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" src="" alt="Avatar" />
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <a href="#" @click="openMySpace" :class="[active ? 'bg-gray-100' : '', 'font-pop block px-4 py-2 text-sm text-gray-700']">My Profile</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu> -->
        </div>
      </div>
      </div>
      </Disclosure>
  </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import Search from '../Search.vue'
import Sidebar from '@/components/Tree/Sidebar.vue'
import TreeLeft from '@/components/Tree/TreeLeft.vue'
const navigation = [
  { name: 'Github', href: 'https://github.com/alisherfez32',},
  // { name: 'Gigs', href: '#', current: false, value: 'ContentB' },
  // { name: 'Freelance', href: '#', current: false, value: 'ContentC'},
  // { name: 'Quick Jobs', href: '#', current: false, value: 'ContentD'},
]
const root = []
export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    MenuIcon,
    XIcon,
    Sidebar,
    TreeLeft,
    Search,
  },
  emits: ['component'],
  mounted() {
  },
  methods: {
    openMySpace(){
      this.$router.push({ path: "/"})
    },
    postJob(){
      this.$router.push({ path: "/"})
    },
    slideBar() {
      this.$store.commit("setSlidebar", true)
    },
    unSlideBar() {
      this.$store.commit("setSlidebar", false)
    },
  },
  setup() {
    return {
      navigation,
      root
    }
  },
}
</script>