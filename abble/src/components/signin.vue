<script setup>
import logo from '@/assets/logo/Abble.png'
</script>
<template>
    <section class="min-h-screen flex flex-col items-center flex-start pt-24 bg-gray-100">
      <!-- Logo -->
      <img v-bind:src="logo" alt="abble logo" class="w-auto h-8 mb-10" />
  
      <!-- Card -->
      <div class="flex flex-col items-center space-y-4 w-full max-w-sm">
  
        <!-- Login title -->
        <h2 class="text-xl font-medium text-gray-900 mb-2">
          Log in to Abble
        </h2>
  
        <!-- Google button -->
        <button
          class="w-80 flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-lg font-medium transition"
        >
          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFFFFF"
              d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C33 6.5 28.7 4.5 24 4.5 13.8 4.5 5.5 12.8 5.5 23S13.8 41.5 24 41.5 42.5 33.2 42.5 23c0-1-.1-2-.3-2.9z"
            />
            <path
              fill="#FFFFFF"
              d="M6.3 14.7l6.6 4.8C14.5 15 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C33 6.5 28.7 4.5 24 4.5 16.1 4.5 9.2 8.9 6.3 14.7z"
            />
            <path
              fill="#FFFFFF"
              d="M24 41.5c5.2 0 9.9-2 13.3-5.3l-6.2-4.8c-2 1.8-4.7 3-7.6 3-5.3 0-9.7-3.4-11.3-8l-6.6 5C9.2 37.1 16.1 41.5 24 41.5z"
            />
            <path
              fill="#FFFFFF"
              d="M43.6 20.5H42V20H24v8h11.3c-.7 2.1-2.1 4.1-4.1 5.6l6.2 4.8C39.4 34.9 42.5 29.5 42.5 23c0-1-.1-2-.3-2.9z"
            />
          </svg>
          Continue with Google
        </button>
  
        <!-- Small note -->
        <p class="text-sm text-gray-500">
          You used Google to sign in the last time
        </p>
  
        <!-- GitHub button -->
        <button
          class="w-80 flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 py-2 rounded-lg font-medium transition"
        >
          <svg
            class="w-5 h-5 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.012c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 
              0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.109-1.464-1.109-1.464-.908-.62.069-.608.069-.608 
              1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 
              0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 
              1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 
              1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 
              0 1.339-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.019 10.019 0 0 0 
              22 12.012C22 6.484 17.523 2 12 2z"
              clip-rule="evenodd"
            />
          </svg>
          Continue with GitHub
        </button>
      </div>
    </section>
  </template>
  