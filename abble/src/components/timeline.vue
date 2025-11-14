<script setup>
import abbleicon from '@/assets/logo/logo-mark.png'
import meetwith from '@/assets/logo/meetwith.png'
import laasify from '@/assets/logo/laasify.png'
import hngtech from '@/assets/logo/hngtechlogo.jpeg'
import linear from '@/assets/logo/linear.png'
import osinachi from '@/assets/logo/osinachi.png'
import sidebar from '@/assets/logo/sidebar-expand.png'
import jira from '@/assets/logo/jira.png'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const open = ref(false);

const workspaceOptions = [
  { name: "Meetwith", icon: meetwith },
  { name: "Abble", icon: abbleicon },
  { name: "Laasify", icon: laasify },
  { name: "HNG Internship", icon: hngtech },
];
const selected = ref(workspaceOptions[0]);

const toggleDropdown = () => {
  open.value = !open.value;
};

const selectOption = (option) => {
  selected.value = option;
  open.value = false;
};

const profileOpen = ref(false);

const profileSettingOption = [
  { title: "Profile", titleIcon: osinachi },
  { title: "Settings", titleIcon: "pi pi-cog" },
  { title: "Logout", titleIcon: "pi pi-sign-out" },
];

const profileSelected = ref(profileSettingOption[0]);

const toggleProfileDropdown = () => {
  profileOpen.value = !profileOpen.value;
};

const selectProfileOption = (optionProfile) => {
  profileSelected.value = optionProfile;
  profileOpen.value = false;
};

const dropdownRef = ref(null);
const workspacedropdownRef = ref(null);

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    profileOpen.value = false
  }
  if (workspacedropdownRef.value && !workspacedropdownRef.value.contains(event.target)) {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside)
})

</script>

<template>
  <div class="min-h-screen flex bg-gray-100 text-gray-800">

    <!-- Left Sidebar -->
    <aside class="w-64 border-r border-gray-300 bg-gray-100 flex flex-col">
      <!-- Placeholder for workspace switcher and connectors -->
      <div class="p-4 border-b border-gray-100">
        <div class="flex flex-row items-start gap-2">
            <img v-bind:src="abbleicon" alt="abble icon" class="w-10 h-10 mb-2 rounded-md"/>
            <div ref="workspacedropdownRef" class="relative">
                <button @click="toggleDropdown" class="w-[177px] flex justify-between items-center gap-2 text-gray-700 bg-white p-2 hover:bg-gray-50 rounded-md border border-gray-300">
                    <div class="flex items-center gap-1">
                        <img :src="selected.icon" alt="" class="w-6 h-6 rounded" />
                        <span class="font-medium">{{ selected.name }}</span>
                    </div>
                    <div>
                        <i class="pi pi-chevron-down ml-8"></i>
                    </div>
                </button>
                <div v-if="open" class="absolute mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                    <ul>
                        <li v-for="option in workspaceOptions" :key="option.name" @click="selectOption(option)" class="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
                            <img v-bind:src="option.icon" alt="option icon" class="w-6 h-6 rounded-md"/>
                            <span>{{ option.name }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
      
      <div class="flex-1 p-4">
        <div>
        <a href="" class="flex items-center gap-2 text-gray-700 bg-white p-2 hover:bg-gray-50 rounded-md border border-gray-300">
            <i class="pi pi-play text-xl"></i>
            Stories
        </a>
        </div>
        <div class="flex items-center justify-between mt-12 mb-2 text-gray-500">
            <p>PROJECTS</p>
            <a href="#"><i class="pi pi-plus"></i></a>
        </div>
        <div class="flex items-center justify-between mt-4 mb-2 text-gray-950 border-l-4 border-orange-500 pl-2">
            <div class="flex items-center gap-2 ml-2">
                <i class="pi pi-box text-xl"></i>
                <p>Meetwith</p>
            </div>
            <a href="#"><i class="pi pi-ellipsis-h"></i></a>
        </div>
        <div class="flex items-center justify-between mt-[380px] mb-2 text-gray-500">
            <p>CONNTECTORS</p>
            <a href="#"><i class="pi pi-plus"></i></a>
        </div>
        <div id="connector-github" class="flex items-center justify-between mt-4 mb-2 text-gray-950">
            <div class="flex items-center gap-2">
                <i class="pi pi-github text-xl text-white bg-black p-1 rounded-2xl"></i>
                <p>GitHub <span class="text-sm bg-green-200 text-green-950 p-[6px] rounded-2xl">Connected</span></p>

            </div>
            <a href="#"><i class="pi pi-ellipsis-h"></i></a>
        </div>
        <div id="connector-linear" class="flex items-center justify-between mt-4 mb-2 text-gray-950">
            <div class="flex items-center gap-2">
                <img v-bind:src="linear" alt="using linear as image instead of pi icon" class="w-7 h-7"/>
                <p>Linear <a href="" class="text-sm text-sky-500 p-[6px] underline">Connect</a></p>

            </div>
            <a href="#"><i class="pi pi-ellipsis-h"></i></a>
        </div>
        <div ref="dropdownRef" class="relative w-[160px]">
            <!-- Profile dropdown button -->
        <button
            @click="toggleProfileDropdown"
            class="w-[225px] border border-gray-300 rounded py-2 px-3 flex items-center justify-between hover:bg-gray-50 transition"
            >
        <div class="flex items-center gap-2">
        <i :class="profileSelected.titleIcon"></i>
        <span>{{ profileSelected.title }}</span>
        </div>
            <i class="pi pi-chevron-down text-gray-500"></i>
        </button>

        <!-- Dropdown list -->
    <div
      v-if="profileOpen"
      class="absolute bottom-10 left-16 z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg"
    >
      <div
        v-for="optionProfile in profileSettingOption"
        :key="optionProfile.title"
        @click="selectProfileOption(optionProfile)"
        class="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer transition"
      >
        <i :class="optionProfile.titleIcon"></i>
        <span>{{ optionProfile.title }}</span>
      </div>
    </div>
  </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 border rounded-md m-2 border-gray-300 bg-white">
      <!-- Topbar / filters -->
      <div class="p-2 border-b border-gray-300">
        <div class="flex items-center">
          <div class="flex items-center gap-6">
            <img :src="sidebar" alt="sidebar expand icon" class="w-6 h-6"/>
            <h2 class="text-md">Stories <i class="pi pi-chevron-down"></i></h2>
          </div>
          <div class="flex flex-1 items-center ml-2">
            <h1 class="ml-40">Connectors</h1>
            <i class="pi pi-github text-lg text-white bg-black p-1 rounded-2xl ml-2"></i>
            <img :src="linear" alt="adding linear icon next to github" class="w-7 h-7 -ml-3"/>
            <img :src="jira" alt="adding jira icon next to linear" class="w-7 h-7 -ml-3 border border-gray-200 rounded-2xl"/>
            <a href="" class="ml-2 text-sky-500 text-sm underline">Learn more <span class="pi pi-arrow-right"></span></a>
          </div>
          <div>
            <button class="bg-sky-500 text-white px-3.5 py-1.5 rounded-md hover:bg-sky-600 transition">
              Share
            </button>
            <a href=""><i class="pi pi-sparkles text-xl ml-6 mt-1 bg-sky-200 px-2 py-2 rounded-md"></i></a>
          </div>
        </div>
      </div>
      <div class="">


      </div>
      <!-- Main content scrollable -->
      <div class="p-6 overflow-y-auto h-[calc(100vh-64px)]">
        <!-- Main body content goes here -->
      </div>
    </main>

    <!-- Right Sidebar -->
    <aside class="w-96 border rounded-md mt-2 mr-2 mb-2 bg-white">
      <div class="p-4 border-b border-gray-300">
        <h3 class="text-lg font-medium">QuickPoll Feature Chat</h3>
      </div>
      <div class="p-6 overflow-y-auto h-[calc(100vh-64px)]">
        <!-- Chat or details content -->
      </div>
    </aside>

</div>
</template>