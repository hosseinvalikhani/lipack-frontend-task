<script setup>
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
    </div>

    <div
      v-else-if="userStore.errors"
      class="min-h-[calc(100vh-12rem)] flex items-center justify-center"
    >
      <UsersErrorView />
    </div>

    <!-- User list -->
    <div v-else>
      <div
        v-if="userStore.users.length === 0"
        class="min-h-[calc(100vh-12rem)] flex items-center justify-center"
      >
        <UsersEmptyUsersView />
      </div>
      <div
        v-else-if="userStore.filteredUsers.length === 0"
        class="min-h-[calc(100vh-12rem)] flex items-center justify-center"
      >
        <UsersEmptySearchView />
      </div>
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
  </div>
</template>
