<script setup>
import { currentPage, navigate } from '../router/router'
import { computed } from 'vue'
import { isNavItemValid } from '../validators/validators'

const props = defineProps({
  navItem: {
    required: true,
    type: Object,
    validator: isNavItemValid
  }
})

const classes = computed(() => [
  'flex flex-col items-center p-2 text-xs capitalize',
  { 'bg-gray-200 pointer-events-none': props.navItem.page === currentPage.value }
])
</script>

<template>
  <li class="flex-1">
    <a :href="`#${props.navItem.page}`" :class="classes" @click="navigate(props.navItem.page)">
      <component :is="props.navItem.icon" class="h-6 w-6" /> {{ props.navItem.page }}
    </a>
  </li>
</template>

<style scoped></style>
