import { ChartBarIcon, ClockIcon, ListBulletIcon } from '@heroicons/vue/24/outline'

export const PAGE_TIMELINE = 'timeline'
export const PAGE_ACTIVITIES = 'activities'
export const PAGE_PROGRESS = 'progress'

export const NAV_ITEMS = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon
}
export const BTN_TYPE_PRIMARY = 'primary'
export const BTN_TYPE_NEUTRAL = 'neutral'
export const BTN_TYPE_SUCCESS = 'success'
export const BTN_TYPE_DANGER = 'danger'
export const BTN_TYPE_WARNING = 'warning'

export const BTN_TYPES = [
  BTN_TYPE_DANGER,
  BTN_TYPE_NEUTRAL,
  BTN_TYPE_PRIMARY,
  BTN_TYPE_SUCCESS,
  BTN_TYPE_WARNING
]
export const HOURS_IN_DAY = 24
export const MINUTES_IN_HOUR = 60
export const SECONDS_IN_MINUTE = 60
export const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * MINUTES_IN_HOUR
export const MILLISECONDS_IN_SECOND = 1000

export const MIDNIGHT_HOUR = 0
