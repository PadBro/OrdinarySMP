<template>
  <div class="bg-white">
    <main>
      <!-- Hero section -->
      <div
        class="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20"
      >
        <img
          src="~/assets/image.png"
          alt=""
          class="absolute inset-0 -z-10 size-full object-cover"
        />
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div class="hidden sm:mb-8 sm:flex sm:justify-center">
              <div
                class="relative rounded-full bg-gray-200/80 px-3 py-1 text-sm leading-6 text-black ring-1 ring-white/10 hover:ring-white/20 cursor-pointer"
                @click="copy"
              >
                Join at {{ serverSubdomain }}.{{ domain }}.
              </div>
            </div>
            <div class="text-center">
              <h1
                class="text-4xl font-bold tracking-tight text-white sm:text-6xl"
              >
                Ordinary SMP
              </h1>
              <p class="mt-6 text-lg leading-8 text-gray-300">
                Ordinary SMP is a Vanilla Whitelisted SMP with a diverse Player
                base from all arround the World.
              </p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >Join our Discord</a
                >
                <a href="#" class="text-sm font-semibold leading-6 text-white"
                  >Learn more <span aria-hidden="true">→</span></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Feature section -->
      <SectionFeature />

      <!-- Testimonial section -->
      <Quote
        orientation="left"
        text="Gravida quam mi erat tortor neque molestie. Auctor aliquet at
                  porttitor a enim nunc suscipit tincidunt nunc. Et non lorem
                  tortor posuere. Nunc eu scelerisque interdum eget tellus non
                  nibh scelerisque bibendum."
        name="PadBro"
        title="Moderator"
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
      />

      <!-- FAQ section -->
      <SectionFaq />
    </main>
  </div>
</template>

<script setup>
const domain = useRuntimeConfig().public.domain;
const serverSubdomain = useRuntimeConfig().public.serverSubdomain;

const copy = () => {
  navigator.clipboard.writeText(`${serverSubdomain}.${domain}`);
};
</script>
