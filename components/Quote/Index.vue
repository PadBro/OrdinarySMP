<script lang="ts" setup>
defineProps<{
  src: string;
  text: string;
  name: string;
  title: string;
  orientation: "left" | "right";
}>();
</script>

<template>
  <QuoteBase>
    <QuoteImage v-if="orientation === 'left'" :src="src" />
    <QuoteText :text="text" :name="name" :title="title" />
    <QuoteImage v-if="orientation === 'right'" :src="src" />
  </QuoteBase>
</template>
