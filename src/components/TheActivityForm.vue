<script setup>
import { inject, nextTick, ref } from 'vue'
import { PlusIcon } from '@heroicons/vue/24/outline'
import { id } from '../helpers/helpers'
import { createActivityKey } from '../keys/keys'
import BaseBtn from './BaseBtn.vue'

const createActivity = inject(createActivityKey)

const name = ref('')

async function submit() {
  createActivity({
    id: id(),
    name: name.value,
    secondsToComplete: 0
  })

  name.value = ''

  await nextTick(() => {
    window.scrollTo(0, document.body.scrollHeight)
  })
}
</script>

<template>
  <form @submit.prevent="submit" class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4">
    <input
      type="text"
      v-model="name"
      class="w-full rounded border px-4 text-xl"
      placeholder="Activity name"
    />
    <BaseBtn :disabled="name.trim() === ''">
      <PlusIcon class="h-6" />
    </BaseBtn>
  </form>
</template>

<style lang="scss" scoped></style>
