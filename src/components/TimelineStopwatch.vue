<script setup>
import {
  BTN_TYPE_DANGER,
  BTN_TYPE_SUCCESS,
  BTN_TYPE_WARNING,
  MILLISECONDS_IN_SECOND
} from '../constants/constants'
import { inject, ref } from 'vue'
import { ArrowPathIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/outline'
import { isTimelineItemValid } from '../validators/validators'
import { currentHour, formatSecond } from '../helpers/helpers'
import { updateTimelineItemActivitySecondsKey } from '../keys/keys'
import BaseBtn from './BaseBtn.vue'

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  }
})

const updateTimelineItemActivitySeconds = inject(updateTimelineItemActivitySecondsKey)

const seconds = ref(props.timelineItem.activitySeconds)
const isRunning = ref(false)

const isStartBtnDisabled = props.timelineItem.hour !== currentHour()

function start() {
  isRunning.value = setInterval(() => {
    updateTimelineItemActivitySeconds(props.timelineItem, 1)

    seconds.value++
  }, MILLISECONDS_IN_SECOND)
}
function stop() {
  clearInterval(isRunning.value)

  isRunning.value = false
}
function reset() {
  stop()

  updateTimelineItemActivitySeconds(props.timelineItem, -seconds.value)

  seconds.value = 0
}
</script>

<template>
  <div class="flex w-full gap-2">
    <BaseBtn :type="BTN_TYPE_DANGER" :disabled="!seconds" @click="reset">
      <ArrowPathIcon class="h-8" />
    </BaseBtn>
    <div class="flex flex-grow items-center rounded bg-gray-100 px-2 font-mono text-3xl">
      {{ formatSecond(seconds) }}
    </div>
    <BaseBtn v-if="isRunning" :type="BTN_TYPE_WARNING" @click="stop">
      <PauseIcon class="h-8" />
    </BaseBtn>
    <BaseBtn v-else :type="BTN_TYPE_SUCCESS" :disabled="isStartBtnDisabled" @click="start">
      <PlayIcon class="h-8" />
    </BaseBtn>
  </div>
</template>

<style lang="scss" scoped></style>
