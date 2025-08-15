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
    <button
      class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      @click="resetSearch"
    >
      Reset Search
    </button>
  </div>
</template>
