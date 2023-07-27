import { ChartBarIcon, ClockIcon, ListBulletIcon } from '@heroicons/vue/24/outline'

export const BTN_TYPE_PRIMARY = 'primary'
export const BTN_TYPE_DANGER = 'danger'
export const BTN_TYPE_NEUTRAL = 'neutral'

export const BTN_TYPES = [BTN_TYPE_DANGER, BTN_TYPE_NEUTRAL, BTN_TYPE_PRIMARY]
export const PAGE_TIMELINE = 'timeline'
export const PAGE_ACTIVITIES = 'activities'
export const PAGE_PROGRESS = 'progress'

export const HOURS_IN_DAY = 24
export const SECONDS_IN_HOUR = 3600
export const MIDNIGHT_HOUR = 0

export const NAV_ITEMS = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon
}

export const PERIOD_SELECT_OPTIONS = [
  {
    value: 15 * 60,
    label: '0:15'
  },
  {
    value: 30 * 60,
    label: '0:30'
  },
  {
    value: 45 * 60,
    label: '0:45'
  }
]
