<script setup>
import { inject } from 'vue'
import { TrashIcon } from '@heroicons/vue/24/outline'
import { BTN_TYPE_DANGER } from '../constants/constants'
import { isActivityValid } from '../validators/validators'
import {
  deleteActivityKey,
  periodSelectOptionsKey,
  setActivitySecondsToCompleteKey
} from '../keys/keys'
import BaseSelect from './BaseSelect.vue'
import BaseBtn from './BaseBtn.vue'
import ActivitySecondsToComplete from './ActivitySecondsToComplete.vue'

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

const setActivitySecondsToComplete = inject(setActivitySecondsToCompleteKey)
const periodSelectOptions = inject(periodSelectOptionsKey)
const deleteActivity = inject(deleteActivityKey)
</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseBtn :type="BTN_TYPE_DANGER" @click="deleteActivity(activity)">
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
        @select="setActivitySecondsToComplete(activity, $event)"
      />
      <ActivitySecondsToComplete v-if="activity.secondsToComplete" :activity="activity" />
    </div>
  </li>
</template>

<style scoped></style>
