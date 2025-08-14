<script setup>
import { defineProps } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="w-full h-full rounded-2xl p-6 border border-gray-200 hover:border-gray-900 duration-300 hover:shadow-lg hover:bg-blue-100"
  >
    <!-- Avatar -->
    <div class="flex justify-center mb-4">
      <base-user-avatar :name="name" class="w-20 h-20" />
    </div>

    <!-- User Info -->
    <div class="flex flex-col gap-3 items-start mx-auto w-fit max-w-80">
      <p class="text-gray-900">
        <span class="font-semibold text-gray-700">Name: </span>{{ name }}
      </p>
      <p class="text-gray-700">
        <span class="font-semibold">Email: </span>{{ email }}
      </p>
      <p class="text-gray-500">
        <span class="font-semibold text-gray-700">Company: </span
        >{{ companyName }}
      </p>
    </div>
  </div>
</template>
