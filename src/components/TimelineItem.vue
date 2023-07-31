<script setup>
import { inject } from 'vue'
import { isTimelineItemValid, isUndefined } from '../validators/validators'
import { activitySelectOptionsKey, setTimelineItemActivityKey } from '../keys/keys'
import TimelineStopwatch from './TimelineStopwatch.vue'
import BaseSelect from './BaseSelect.vue'
import TimelineHour from './TimelineHour.vue'

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  }
})

const emit = defineEmits({
  scrollToHour: isUndefined()
})

const setTimelineItemActivity = inject(setTimelineItemActivityKey)
const activitySelectOptions = inject(activitySelectOptionsKey)
</script>
<template>
  <li class="relative flex flex-col gap-2 border-t border-gary-200 py-10 px-4">
    <TimelineHour :hour="timelineItem.hour" @click.prevent="emit('scrollToHour')" />
    <BaseSelect
      :selected="timelineItem.activityId"
      :options="activitySelectOptions"
      placeholder="Rest"
      @select="setTimelineItemActivity(timelineItem, $event)"
    />
    <TimelineStopwatch :timeline-item="timelineItem" />
  </li>
</template>

<style scoped></style>
