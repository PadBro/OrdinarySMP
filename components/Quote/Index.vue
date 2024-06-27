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
    <QuoteImage :class="{ 'xl:hidden': orientation === 'right' }" :src="src" />
    <QuoteText :text="text" :name="name" :title="title" />
    <QuoteImage
      :class="{ 'xl:hidden': orientation === 'left' }"
      class="hidden xl:block"
      :src="src"
    />
  </QuoteBase>
</template>
