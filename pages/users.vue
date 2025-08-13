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

getUsers();
</script>

<template>
  <div class="p-6">
    <div>
      <input placeholder="write name" v-model="userStore.searchTerm" />
    </div>
    <h1 class="text-2xl font-bold mb-4">Users</h1>
    <!-- Loading -->
    <div v-if="loading">Loading users...</div>

    <div v-else-if="userStore.errors">
      error
      <code>
        {{ userStore.errors }}
      </code>
    </div>

    <!-- User list -->
    <ul v-else>
      <li
        v-for="user in userStore.filteredUsers"
        :key="user.id"
        class="border p-3 mb-2 rounded"
      >
        <p class="font-semibold">{{ user.name }}</p>
        <p class="text-sm text-gray-500">{{ user.email }}</p>
      </li>
    </ul>
  </div>
</template>

<!-- loading -->

<!-- error -->

<!-- user list -->
<!-- empty user -->
<!-- list of user -->
