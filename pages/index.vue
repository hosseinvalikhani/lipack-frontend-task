<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="h-screen flex items-center justify-center">
    <RouterLink to="/users">
      <button
        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Go to Users Page
      </button>
    </RouterLink>
  </div>
</template>
