<script setup>
const { data, status, error } = await useFetch(
  "https://jsonplaceholder.typicode.com/users"
);

console.log(data.value, status.value, error.value);
</script>

<template>
  <div class="p-4">
    <h1 class="text-3xl text-sec font-bold w-fit mb-4">Users List</h1>
  </div>
</template>
