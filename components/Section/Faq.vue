<script lang="ts" setup>
import { ref } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

const faqs = ref([
  {
    question: "How can i get whitelisted?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Where do i find the Server Adress?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Do i need any mods?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]);
</script>
<template>
  <div class="mx-auto my-16 max-w-7xl px-6 sm:my-28 lg:px-8">
    <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
      <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">
        Frequently asked questions
      </h2>
      <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
        <Disclosure
          v-for="faq in faqs"
          :key="faq.question"
          v-slot="{ open }"
          as="div"
          class="pt-6"
        >
          <dt>
            <DisclosureButton
              class="flex w-full items-start justify-between text-left text-gray-900"
            >
              <span class="text-base font-semibold leading-7">{{
                faq.question
              }}</span>
              <span class="ml-6 flex h-7 items-center">
                <PlusSmallIcon v-if="!open" class="size-6" aria-hidden="true" />
                <MinusSmallIcon v-else class="size-6" aria-hidden="true" />
              </span>
            </DisclosureButton>
          </dt>
          <DisclosurePanel as="dd" class="mt-2 pr-12">
            <p class="text-base leading-7 text-gray-600">
              {{ faq.answer }}
            </p>
          </DisclosurePanel>
        </Disclosure>
      </dl>
    </div>
  </div>
</template>
