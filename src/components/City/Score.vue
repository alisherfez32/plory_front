<template>
    <div class="flex flex-col">
      <div class="overflow-hidden">
        <table class="min-w-full text-center">
          <thead class="border-b bg-yellow-500">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                Name
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                Score 1 to 10
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b bg-green-200 border-green-300" v-for="(value, key) in node" :key="value">
              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                {{key}}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {{value}}
              </td>
            </tr>
          </tbody>
        </table>
    </div>
</div>
</template>

<script>
    export default {
      props: {
        node: Object,
      }
    }
</script>

<style lang="scss" scoped>

</style>