<script setup lang="ts">
import type { Theme } from '~/types/theme'
import config from '~/assets/config.json'

const { theme }: ThemeContext = inject('theme')
const hostname = ref(config.host || '')

watchEffect(() => {
  if (process.client)
    hostname.value = window.location.hostname
})
</script>

<template>
  <span :style="{ color: theme?.yellow }">me</span>
  <span :style="{ color: theme?.white }">@</span>
  <span :style="{ color: theme?.green }">{{ hostname }}</span>
  <span class="mr-3" :style="{ color: theme?.white }">:$ ~ </span>
</template>
