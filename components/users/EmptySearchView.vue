<script setup>
import { useUsersStore } from "~/store/userStore";
const userStore = useUsersStore();

function resetSearch() {
  userStore.searchTerm = "";
}
</script>
<template>
  <div class="flex flex-col items-start max-w-3xl text-center sm:text-left">
    <icons-empty-search-icon class="w-40 h-40 text-gray-500 mb-4" />
    <h2 class="text-xl text-gray-900">No matching users found</h2>
    <p class="mb-3 text-gray-800">Try a different search term.</p>
    <BaseButton label="Reset Search" @click="resetSearch" />
  </div>
</template>
