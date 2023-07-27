<script setup>
import BaseBtn from './BaseBtn.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import {
  isSelectValueValid,
  isUndefinedOrNull,
  validateSelectOptions
} from '../validators/validators'
import { computed } from 'vue'
import { BTN_TYPE_NEUTRAL } from '../constants/constants'
import { normalizeSelectValue } from '../helpers/helpers'

const props = defineProps({
  selected: [String, Number],
  options: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  },
  placeholder: {
    required: true,
    default: 'Rest',
    type: String
  }
})

const emit = defineEmits({
  select: isSelectValueValid
})

const isNotSelected = computed(() => {
  return isUndefinedOrNull(props.selected)
})

function select(value) {
  emit('select', normalizeSelectValue(value))
}
</script>

<template>
  <div class="flex gap-2">
    <BaseBtn @click="select(null)" :type="BTN_TYPE_NEUTRAL">
      <XMarkIcon class="h-8" />
    </BaseBtn>
    <select
      class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl"
      @change="select($event.target.value)"
    >
      <option :selected="isNotSelected" disabled value="">
        {{ placeholder }}
      </option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped></style>
