<script setup>
import osinachi from '@/assets/logo/osinachi.png'
</script>
<template>
<div id="card" class="border border-gray-300 rounded-md p-4 mt-4 bg-white w-[98%] h-[520px] mx-2">
          <div id="header" class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <h2 class="text-xl font-medium mr-2">QuickPoll: Calendar connection lagging</h2>
              <a href="" class="underline text-sky-500 text-sm"><span class="pi pi-box mr-1 text-sky-500"></span>Meetwith</a>
            </div>
            <div class="flex items-center gap-2">
              <a href="" class="bg-sky-100 p-1.5 text-sm rounded-3xl">quickpoll</a>
              <i class="pi pi-github text-xl text-white bg-black p-1 rounded-2xl"></i>
            </div>
          </div>
          <div id="poster-details" class="flex items-center mt-4 mb-3">
            <img v-bind:src="osinachi" alt="poster profile picture" class="w-8 h-8 rounded-full border border-gray-300 mr-2"/>
            <div class="flex flex-row items-center">
              <p class="font-medium">Osinachi</p>
              <p class="text-sm text-gray-500 ml-4">Posted Changes 2 hours ago</p>
            </div>
          </div>
          <hr>
          <p class="mt-4 mb-4 text-gray-600">
            <span class="font-medium text-lg">🚀 Deployment Update Summary</span> <br>
            We’ve shipped a new version packed with usability improvements, UI polish, and a brand-new engagement feature designed to make collaboration and scheduling on Meetwith even smoother.This release focuses on interaction, clarity, and control — so you can spend less time managing meetings and more time making them meaningful.
            <br><br><span class="font-medium">🗳️ 1. Introducing Quick Polls</span><br>
            Now you can instantly gather input from participants without leaving Meetwith. Quick Polls make it easy to: <span><a href="" class="underline text-sky-500">Read more</a></span>
          </p>
          <hr>
          <div id="reactions" class="flex items-center justify-start gap-4 mt-1">
            <div id="comment" class="flex items-center justify-center mt-4 border border-gray-400 p-1 rounded-3xl w-[135px] hover:bg-gray-100 cursor-pointer">
              <i class="pi pi-comment text-lg"></i>
              <a href="" class="ml-2"><span class="mr-2">1</span>Comment</a>
            </div>
            <div id="smiley" class="flex items-center justify-center mt-4 border border-gray-400 p-1 rounded-3xl w-10 hover:bg-gray-100 cursor-pointer">
              <i class="pi pi-face-smile text-lg"></i>
            </div>
          </div>
          <div id="source-link" class="mt-6 flex flex-col">
            <p class="text-sm font-medium text-gray-800">Click on the repo and commit directory to learn more:</p>
            <div class="flex items-center gap-2 mt-2">
              <a href="" id="source-name" class="text-white text-sm bg-slate-400 p-1.5 rounded-2xl w-[90px] text-center">github.com</a>
              <a href="" id="pr-code" class="text-green-900 text-sm bg-green-300 p-1.5 rounded-2xl w-[70px] text-center">#43dh4</a>
            </div>
          </div>
         </div>
</template>