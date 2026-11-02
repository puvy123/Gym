<script setup lang="ts">
import ProgramCard from './cards/ProgramCard.vue'
defineProps<{ number: string; title: string; description: string; tag: string; image: string }>()
</script>
<template><ProgramCard v-bind="$props" /></template>
