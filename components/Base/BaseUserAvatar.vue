<script setup>
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

// Compute the initials from the name
const initialsAvatar = computed(() =>
  props.name
    ? props.name
        .split(" ")
        .map((n) => n[0].toUpperCase())
        .slice(0, 2)
        .join("")
    : ""
);
</script>

<template>
  <div
    class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-white font-bold text-lg"
  >
    <p class="text-neutral-700">{{ initialsAvatar }}</p>
  </div>
</template>
