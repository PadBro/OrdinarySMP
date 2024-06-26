<script lang="ts" setup>
defineProps<{ text: string; name: string; title: string }>();
</script>

<template>
  <div class="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
    <figure class="relative isolate pt-6 sm:pt-12">
      <IconsQuotes />
      <blockquote
        class="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9"
      >
        <p>{{ text }}</p>
      </blockquote>
      <figcaption class="mt-8 text-base">
        <div class="font-semibold text-white">{{ name }}</div>
        <div class="mt-1 text-gray-400">{{ title }}</div>
      </figcaption>
    </figure>
  </div>
</template>
