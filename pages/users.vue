<script setup>
import ErrorIcon from "~/components/icons/ErrorIcon.vue";
import { useUsersStore } from "~/store/userStore";

const userStore = useUsersStore();

const loading = ref(true);

async function getUsers() {
  try {
    loading.value = true;
    await userStore.fetchUsers();
  } finally {
    loading.value = false;
  }
}

await getUsers();
</script>

<!-- user list -->
<!-- empty user -->

<!-- create router link to route to the users page -->
<template>
  <div class="p-8 max-w-7xl xl:mx-auto">
    <h1 class="text-2xl font-bold mb-4">Users List</h1>
    <!-- search input -->
    <input
      type="text"
      placeholder="Search User..."
      v-model="userStore.searchTerm"
      class="w-full sm:max-w-sm px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none"
    />
    <!-- Loading -->
    <div
      v-if="loading"
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      <BaseCardLoading v-for="item in 12" />
      <!-- <p class="absloute left-1/2 top-1/2">Loading users...</p> -->
    </div>

    <div
      v-else-if="userStore.errors"
      class="min-h-[calc(100vh-10rem)] flex items-center justify-center"
    >
      <div class="flex flex-col items-start max-w-3xl text-center sm:text-left">
        <ErrorIcon class="w-40 h-40 text-gray-500 mb-4" />
        <p class="mb-3 text-gray-800">
          We couldn’t complete your request due to a network or server issue.
          Please check your internet connection or try again in a few minutes.
        </p>
        <p class="bg-gray-100 p-2 rounded text-sm text-red-600 overflow-x-auto">
          {{ userStore.errors }}
        </p>
      </div>
    </div>

    <!-- User list -->
    <ul v-else class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="user in userStore.filteredUsers" :key="user.id">
        <BaseCard
          :name="user.name"
          :email="user.email"
          :company-name="user.company.name"
        />
      </li>
    </ul>
  </div>
</template>
