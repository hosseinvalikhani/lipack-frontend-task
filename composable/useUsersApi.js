export function useUsersApi() {
  const config = useRuntimeConfig();

  async function getAllUsers() {
    const { data, error } = await useFetch(`${config.public.apiBaseUrl}/users`);
    if (error.value) {
      throw new Error(error.value.message || "Failed to fetch users");
    }
    return data.value;
  }

  return { getAllUsers };
}
