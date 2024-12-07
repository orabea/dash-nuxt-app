<template>
  <div class="w-full h-screen bg-black">
    <div class="container mx-auto pt-10">
      <div class="m-auto border shadow-lg shadow-sky-500 rounded-sm p-28">
        <h1 class="text-slate-700 flex justify-center mb-8 pb-4 text-3xl">
          Welcome to the homepage
        </h1>
        <div class="flex justify-center mb-8 pb-4 gap-1">
          <NuxtLink to="/login">
            <button
              class="text-white py-4 px-12 border shadow shadow-sky-500 hover:shadow-none rounded-sm hover:bg-blue-400 hover:text-white">
              login
            </button>
          </NuxtLink>
          <NuxtLink to="/register">
            <button
              class="text-white py-4 px-12 border shadow shadow-sky-500 hover:shadow-none rounded-sm hover:bg-blue-400 hover:text-white">
              Register
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup>


</script>
