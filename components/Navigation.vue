<template>
    <div>
        <header>
            <nav class=" py-3.5 px-6 md:flex justify-between items-center">
                <!-- Logo -->
                <a href="#" class="flex items-center">
                    <img src="@/src/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="loopstudio Logo" />
                </a>

                <!-- Mobile -->
                <span @click="MenuOpen" class="absolute md:hidden text-gray-500 right-6 top-7 cursor-pointer text-4xl">
                    <i  :class="open ? 'bi bi-x' : 'bi bi-filter-left'"></i>
                </span>
                <!-- NavList -->
                <ul 
                class="md:flex md:items-center md:px-0 px-3 md:pb-0 pb-10 
                md:static absolute max-sm:shadow max-sm:mt-3 md:w-auto 
                w-full top-25"
                :class="[open ? 'left-0' : 'left-[-100%]']"
                >
                    <li 
                        class="md:mx-4 md:my-0 my-2 text-white hover:border-b-4 active:border-b-4 hover:scale-110 duration-300"
                        v-for="({ text, link}, index) in navList"
                        @click="setActive(index)"
                        :key="index"
                        >
                        <NuxtLink to='#'>
                        <!-- <div 
                            class="p-3 flex justify-start items-center gap-3 cursor-pointer"
                            :class="{'font-bold text-blue-500 ': active === index}"
                        > -->
                                <span>{{ text }}</span> 
                        <!-- </div> -->
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script setup>

import {ref} from "vue";

  const active = ref(0);

  console.log (active);

  const setActive = (index) => active.value = index;

  const open = ref(false);

  const MenuOpen = () =>  { open.value = !open.value};

  const navList = [
      { text: "About", link: "#" },
      { text: "Careers", link: "#careers" },
      { text: "Events", link: "#" },
      { text: "Products", link: "#" },
      { text: "Support", link: "#" }
  ]
</script>