import { BTN_TYPES, HOURS_IN_DAY, MIDNIGHT_HOUR, NAV_ITEMS } from '../constants/constants'

export function isPageValid(page) {
  // return Object.keys(NAV_ITEMS).includes(page)
  return NAV_ITEMS.some((navItem) => navItem.page === page)
}

export function isNavItemValid(navItem) {
  return NAV_ITEMS.includes(navItem)
}

export function isBtnTypeValid(page) {
  return BTN_TYPES.includes(page)
}

export function validateTimelineItems(timelineItems) {
  return timelineItems.every(isTimelineItemValid)
}

export function isHourValid(hour) {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
}

export function isTimelineItemValid({ hour }) {
  return isHourValid(hour)
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}

export function isUndefined(value) {
  return value === undefined
}

export function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value)
}

export function isSelectValueValid(value) {
  return isNotEmptyString(value) || isNumberOrNull(value)
}

export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
}

export function isActivityValid({ id, name, secondsToComplete }) {
  if (isNull(id)) {
    return true
  }
  return [isNotEmptyString(id), isNotEmptyString(name), isNumber(secondsToComplete)].every(Boolean)
}

export function validateActivities(activities) {
  return activities.every(isActivityValid)
}

export function isNull(value) {
  return value === null
}

export function isNumber(value) {
  return typeof value === 'number'
}

function isNotEmptyString(value) {
  return isString(value) && value.length > 0
}

function isSelectOptionValid({ value, label }) {
  return (isNumber(value) || isNotEmptyString(value)) && isNotEmptyString(label)
}

function isBetween(value, start, end) {
  return value >= start && value <= end
}

function isString(value) {
  return typeof value === 'string'
}
