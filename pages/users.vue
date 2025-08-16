<script setup>
import { useUsersStore } from "~/store/userStore";
import { storeToRefs } from "pinia";

const userStore = useUsersStore();
const { loading, error, searchedUsers, searchTerm } = storeToRefs(userStore);

// SSR-friendly fetch with callOnce to avoid duplicates and side-effect issues
await useAsyncData("users", () =>
  callOnce("fetch-users", () => userStore.fetchUsers())
);
</script>

<template>
  <div class="min-h-screen">
    <div class="p-8 max-w-7xl xl:mx-auto">
      <h1 class="text-2xl font-bold mb-4">Users List</h1>
      <!-- Search input -->
      <BaseInput v-model="searchTerm" placeholder="Search User..." />

      <!-- Loading -->
      <div
        v-if="loading"
        class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <BaseCardLoading v-for="item in 12" :key="item" />
      </div>

      <div
        v-else-if="error"
        class="min-h-[calc(100vh-12rem)] flex items-center justify-center"
      >
        <UsersErrorView />
        <!-- Pass error if component supports: :message="error" -->
      </div>

      <!-- User list -->
      <div v-else>
        <div
          v-if="searchedUsers.length === 0"
          class="min-h-[calc(100vh-12rem)] flex items-center justify-center"
        >
          <UsersEmptySearchView />
        </div>
        <ul v-else class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li v-for="user in searchedUsers" :key="user.id">
            <BaseCard
              :name="user.name"
              :email="user.email"
              :company-name="user.company.name"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
