import { defineStore } from "pinia";
export const useUsersStore = defineStore("users", () => {
  // state
  const users = ref();
  const errors = ref();
  const searchTerm = ref("");

  // actions
  async function fetchUsers() {
    const { data, status, error } = await useFetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (error.value) errors.value = error.value;
    console.log("error:", error.value);

    users.value = data.value;
  }
  // getter (computed)
  const filteredUsers = computed(() => {
    if (!searchTerm.value.trim()) return users.value;
    const term = searchTerm.value.toLowerCase();
    return users.value.filter((user) => user.name.toLowerCase().includes(term));
  });

  return {
    users,
    errors,
    fetchUsers,
    searchTerm,
    filteredUsers,
  };
});
