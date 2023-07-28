<script setup>
import BaseSelect from './BaseSelect.vue'
import BaseBtn from './BaseBtn.vue'
import { TrashIcon } from '@heroicons/vue/24/outline'
import { BTN_TYPE_DANGER } from '../constants/constants'
import { isActivityValid, isNumber, isUndefined } from '../validators/validators'
import ActivitySecondsToComplete from './ActivitySecondsToComplete.vue'
import { inject } from 'vue'

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

const emit = defineEmits({
  delete: isUndefined,
  setSecondsToComplete: isNumber
})

const periodSelectOptions = inject('periodSelectOptions')
</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseBtn :type="BTN_TYPE_DANGER" @click="emit('delete')">
        <TrashIcon class="h-8" />
      </BaseBtn>
      <span class="truncate text-xl">{{ activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        class="font-mono grow"
        placeholder="hh:mm"
        :selected="activity.secondsToComplete || null"
        :options="periodSelectOptions"
        @select="emit('setSecondsToComplete', $event || 0)"
      />
      <ActivitySecondsToComplete v-if="activity.secondsToComplete" :activity="activity" />
    </div>
  </li>
</template>

<style scoped></style>
