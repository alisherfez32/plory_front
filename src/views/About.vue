<template>
  <div class="about">
    <h1>This is an about page {{data}}</h1>

    <Head>
      <title>{{title}}</title>
      <meta name="description" :content="title" />
      <html lang="en-US" class="theme-dark" />
    </Head>

  </div>
</template>

<script>
import { Head } from '@vueuse/head'

export default {
  data(){
  return {
      title: 'Hello World'
    }
  },
  components: {
    Head
  },
  mounted() {
    
  }
}
</script>
