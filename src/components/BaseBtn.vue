<script>
import { BTN_TYPE_DANGER, BTN_TYPE_NEUTRAL, BTN_TYPE_PRIMARY } from '../constants/constants'

const typeClasses = {
  [BTN_TYPE_PRIMARY]: 'bg-purple-500 p-3 enabled:hover:bg-purple-600 text-white',
  [BTN_TYPE_DANGER]: 'bg-red-500 p-3 enabled:hover:bg-red-600 text-white',
  [BTN_TYPE_NEUTRAL]: 'bg-gray-100 p-3 enabled:hover:bg-gray-200'
}
</script>

<script setup>
import { isBtnTypeValid } from '../validators/validators'
import { BTN_TYPE_PRIMARY } from '../constants/constants'

defineProps({
  type: {
    default: BTN_TYPE_PRIMARY,
    type: String,
    validator: isBtnTypeValid
  }
})
</script>

<template>
  <button :class="`${typeClasses[type]} rounded :disabled:cursor-not-allowed disabled:opacity-50`">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped></style>
