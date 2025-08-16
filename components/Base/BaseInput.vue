<script setup>
const modelValue = defineModel(); // v-model binding
defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
});
</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    v-model="modelValue"
    class="w-full sm:max-w-sm px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none"
  />
</template>
