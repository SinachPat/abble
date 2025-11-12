<script setup>
import logo from '@/assets/logo/Abble.png'
import { defineProps } from 'vue';

defineProps({
  // Define any props if needed in the future
  title: {
    type: String,
    default: 'Create a space for all your projects'
  },
  subtitle: {
    type: String,
    default: 'Let\'s set up the space where your projects will live.'
  }
});
</script>

<template>
    <section class="min-h-screen flex flex-col items-center flex-start pt-24 bg-gray-50">
      <!-- Logo -->
      <img v-bind:src="logo" alt="abble logo" class="w-auto h-6 mb-10" />
  
      <!-- Card -->
      <div class="flex flex-col items-center space-y-2 w-full max-w-lg">
  
        <!-- Workspace page title -->
        <h2 class="text-xl font-medium text-gray-800">
          {{ title }}
        </h2>
        <p class="text-gray-400">{{ subtitle }}</p>
      </div>
  
        <!-- Creation form -->
      <div class="flex flex-col items-center justify-center mt-6 bg-gray-50">
        <form action="" class="flex flex-col items-start gap-2">
          <label for="workspace" class="flex flex-col items-start text-sm font-medium text-gray-700">Workspace name</label>
          <input type="text" placeholder="Enter workspace name" class="w-80 border border-gray-300 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"/>
          <label for="teammates" class="flex flex-col items-start text-sm font-medium text-gray-700">Invite teammates (optional)</label>
          <input type="text" placeholder="Enter their email address" class="w-80 border border-gray-300 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"/>
          <button type="submit" class="w-80 flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-lg font-medium transition hover:border-sky-400 hover:border-2 border border-sky-300">Create workspace</button>
        </form>
      </div>
    </section>
</template>
  