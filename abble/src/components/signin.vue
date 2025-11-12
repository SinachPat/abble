<script setup>
import logo from '@/assets/logo/Abble.png'
</script>
<template>
    <section class="min-h-screen flex flex-col items-center flex-start pt-24 bg-gray-50">
      <!-- Logo -->
      <img v-bind:src="logo" alt="abble logo" class="w-auto h-6 mb-10" />
  
      <!-- Card -->
      <div class="flex flex-col items-center space-y-4 w-full max-w-sm">
  
        <!-- Login title -->
        <h2 class="text-xl font-medium text-gray-800 mb-2">
          Log in to Abble
        </h2>
  
        <!-- Google button -->
        <button
          class="w-80 flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-lg font-medium transition hover:border-sky-400 hover:border-2 border border-sky-300"
        > <span class="pi pi-google text-white"></span>
          Continue with Google
        </button>
  
        <!-- Small note -->
        <p class="text-sm text-gray-500">
          You used Google to sign in the last time
        </p>
  
        <!-- GitHub button -->
        <button
          class="group w-80 bg-white flex items-center justify-center gap-2 border border-gray-800 hover:bg-gray-100 hover:text-gray-900 py-2 rounded-lg font-medium transition text-gray-800"
        >
          <i class="pi pi-github text-gray-800 group-hover:text-gray-900"></i>
          Continue with GitHub
        </button>
      </div>
    </section>
  </template>
  