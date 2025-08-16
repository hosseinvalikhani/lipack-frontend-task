<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "Label Text",
  },
});

const emit = defineEmits(["click"]);

function handleClick() {
  emit("click");
}
</script>
<template>
  <button
    class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-colors"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>
