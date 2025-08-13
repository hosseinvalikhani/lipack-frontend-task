// import { defineStore } from "pinia";

// interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//     geo: {
//       lat: string;
//       lng: string;
//     };
//   };
//   phone: string;
//   website: string;
//   company: {
//     name: string;
//     catchPhrase: string;
//     bs: string;
//   };
// }

// export const useUsersStore = defineStore("users", () => {
//   // state
//   const users = ref<User[]>([]);
//   const loading = ref(false);
//   const error = ref(null);

//   // actions
//   async function fetchUsers() {
//     loading.value = true;
//     error.value = null;
//     try {
//       const { data, status, error } = await useFetch<User[]>(
//         "https://jsonplaceholder.typicode.com/users"
//       );

//       if (error.value) throw error.value;
//       users.value = data.value || [];
//     } catch (err: any) {
//       error.value = err;
//     } finally {
//       loading.value = false;
//     }
//   }

//   return { users, loading, error, fetchUsers };
// });
