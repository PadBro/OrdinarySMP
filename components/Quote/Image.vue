<script lang="ts" setup>
defineProps<{ src: string }>();
</script>

<template>
  <div class="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
    <div class="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
      <img
        class="absolute inset-0 size-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
        :src="src"
        alt=""
      />
    </div>
  </div>
</template>
