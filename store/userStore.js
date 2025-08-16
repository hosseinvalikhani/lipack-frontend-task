import { defineStore } from "pinia";
import { useUsersApi } from "~/composables/useUsersApi";

export const useUsersStore = defineStore("users", () => {
  // State
  const users = ref([]);
  const error = ref(null);
  const loading = ref(false);
  const searchTerm = ref("");

  // Actions
  const { getAllUsers } = useUsersApi();

  async function fetchUsers() {
    loading.value = true;
    error.value = null;
    try {
      const data = await getAllUsers();
      users.value = data || [];
      return data;
    } catch (err) {
      error.value = err.message;
      console.error("Fetch error:", err);
    } finally {
      loading.value = false;
    }
  }

  // Getter (computed)
  const searchedUsers = computed(() => {
    if (!searchTerm.value.trim()) return users.value;
    const term = searchTerm.value.trim().toLowerCase();
    return users.value.filter((user) => user.name.toLowerCase().includes(term));
  });

  return {
    users,
    error,
    loading,
    searchTerm,
    searchedUsers,
    fetchUsers,
  };
});
