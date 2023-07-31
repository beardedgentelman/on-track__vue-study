<script setup>
import { computed, inject } from 'vue'
import { formatSecond } from '../helpers/helpers'
import { isActivityValid } from '../validators/validators'
import { getTotalActivitiesSeconds } from '../helpers/timeline-items'

const props = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

const classes = computed(
  () =>
    `flex items-center rounded bg-purple-100 px-2 font-mono text-xl text-purple-600 ${colorClasses.value}`
)

const colorClasses = computed(() =>
  secondsDiff.value < 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
)

const seconds = computed(() => `${sign.value}${formatSecond(secondsDiff.value)}`)

const sign = computed(() => (secondsDiff.value >= 0 ? '+' : '-'))

const secondsDiff = computed(
  () => getTotalActivitiesSeconds(props.activity) - props.activity.secondsToComplete
)
</script>

<template>
  <div :class="classes">
    {{ seconds }}
  </div>
</template>

<style lang="scss" scoped></style>
