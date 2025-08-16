<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-indigo-200 via-white to-indigo-200 flex items-center justify-center p-4"
  >
    <div class="text-center space-y-8 max-w-2xl">
      <!-- Project Title -->
      <h1 class="text-4xl md:text-5xl font-bold text-indigo-900 tracking-tight">
        Lipack Frontend Task
      </h1>

      <!-- Description -->
      <p class="text-lg md:text-xl text-gray-600">
        Explore a responsive Nuxt 3 application showcasing user data from
        JSONPlaceholder API with search functionality and modern UI.
      </p>

      <!-- CTA Button -->
      <RouterLink to="/users">
        <BaseButton label="Users Page" class="mt-8" />
      </RouterLink>
    </div>
  </div>
</template>
