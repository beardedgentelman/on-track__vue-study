<script setup>
import { provide, readonly } from 'vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants/constants'
import { generatePeriodSelectOptions } from './helpers/helpers'
import { currentPage, timelineRef } from './router/router'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import * as keys from './keys/keys'
import {
  activitySelectOptions,
  createActivity,
  deleteActivity,
  setActivitySecondsToComplete
} from './helpers/activities'
import {
  resetTimelineItemActivities,
  setTimelineItemActivity,
  updateTimelineItemActivitySeconds
} from './helpers/timeline-items'

provide(keys.updateTimelineItemActivitySecondsKey, updateTimelineItemActivitySeconds)
provide(keys.setActivitySecondsToCompleteKey, setActivitySecondsToComplete)
provide(keys.setTimelineItemActivityKey, setTimelineItemActivity)
provide(keys.createActivityKey, createActivity)
provide(keys.deleteActivityKey, (activity) => {
  resetTimelineItemActivities(activity)
  deleteActivity(activity)
})
provide(keys.activitySelectOptionsKey, readonly(activitySelectOptions))
provide(keys.periodSelectOptionsKey, readonly(generatePeriodSelectOptions()))
</script>

<template>
  <TheHeader />

  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" ref="timelineRef" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav />
</template>

<style scoped></style>
