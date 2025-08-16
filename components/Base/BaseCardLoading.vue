<script setup>
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
  <div class="w-full h-full bg-white/70 rounded-2xl p-6 border border-gray-200">
    <!-- Avatar -->
    <div class="flex justify-center mb-4">
      <base-skeleton-loading :name="name" class="w-20 h-20" />
    </div>

    <!-- User Info -->
    <div class="flex flex-col gap-3 items-start mx-auto w-fit max-w-80">
      <base-skeleton-loading v-for="item in 3" class="w-48 h-5" />
    </div>
  </div>
</template>
