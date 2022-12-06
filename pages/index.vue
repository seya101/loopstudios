<template>
  <section class="h-1/2 bg-hero-desktop bg-no-repeat bg-center bg-cover px-20 py-16">

    <Navigation />

    <div class="p-5 h-fit sm:mt-[225px] sm:p-12 sm:w-[630px] leading-none grid col-start-1 row-start-1 sm:justify-self-start sm:self-auto self-center justify-self-center border-white border-2">
        <h1 class=" uppercase text-[2.5rem] text-white sm:text-6xl">Immersive experiences that deliver</h1>
    </div>
  </section>

  <!--"Interactive" Section-->
  <section id="careers" class="h-1/2">
    <div class="mx-6 sm:mx-[190px] sm:mt-48 my-24 grid gap-12 sm:grid-flow-col sm:text-left">

      <img class="hidden sm:inline-block w-fit sm:col-start-1 sm:row-start-1" src="@/src/images/desktop/image-interactive.jpg" alt="image-interactive">

      <div class="mx-6 grid gap-6 sm:m-0 sm:self-end sm:justify-self-end sm:pr-6 pl-24 pt-24 w-1/2 sm:h-fit sm:col-start-1 sm:row-start-1 sm:bg-white">

        <h2 class="uppercase text-[2rem] sm:text-[3rem] leading-none">The leader in interactive VR</h2>

          <p class="text-dark-gray">Founded in 2011, Loopstudios has been producing world-class virtual reality
            projects for some of the best companies around the globe. Our award-winning
            creations have transformed businesses through digital experiences that bind
            to their brand.
          </p>

      </div>
    </div>
  </section>
  <!--Creations-->
  <section class="flex justify-between items-center align-middle px-20 py-16" >
    <!--Creations Title-->
    <div class="">
          <h2 class="uppercase text-[2rem] sm:text-[3rem] sm:text-left text-center mb-5 sm:m-0">Our Creations</h2>
    </div>

    <div>
      <button class="bg-black text-white px-16 py-2 tracking-widest">SEE ALL</button>
    </div>
  </section>
  <!--Creations Gallery-->
  <section class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 px-20 py-16">
    <div class="relative"
          v-for="({ text, img}, index) in creationsList"
          :key="index"
    >
      <img class="rounded-sm w-full" :src="img"  />
      <h1 class="absolute uppercase left-[30px] right-[30px] top-3/4 text-white font-medium text-4xl tracking-widest w-auto">{{ text }}</h1>
    </div>
  </section>

  <!--Footer-->
  <footer>
    <div class="bg-black text-white grid justify-center text-center mt-24 sm:mt-0 sm:text-left sm:grid-cols-2 sm:px-[150px] pt-12">
      <div class="justify-self-center sm:justify-self-start">
        <img class="h-[24px]" src="../src/images/logo.svg" alt="logo">
      </div>
      <ul class="grid gap-6 my-8 leading-none sm:flex sm:row-start-2 sm:m-0">
        <li><a href="#">About</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Support</a></li>
      </ul>
      <div class="flex gap-4 py-4 justify-self-center sm:justify-self-end">
        <img src="../src/images/icon-facebook.svg" alt="icon-facebook">
        <img src="../src/images/icon-twitter.svg" alt="icon-twitter">
        <img src="../src/images/icon-pinterest.svg" alt="icon-pinterest">
        <img src="../src/images/icon-instagram.svg" alt="icon-instagram">
      </div>
      <div class="sm:justify-self-end">
        <p class="text-dark-gray">© 2022 Loopstudios. All rights reserved.</p>
      </div>
      <div class="text-xs py-6">
        Challenge by <a class="text-indigo-500 underline" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a class="text-indigo-500 underline" href="#">Hosea Patricia Corpuz</a>.
      </div>
    </div>
  </footer>


</template>

<script setup>

const creationsList = [
      { text: "Deep Earth", img: '../src/images/desktop/image-deep-earth.jpg'},
      { text: "Night Arcade", img: '../src/images/desktop/image-night-arcade.jpg'},
      { text: "Soccer Team VR", img: '../src/images/desktop/image-soccer-team.jpg'},
      { text: "The Grid", img: '../src/images/desktop/image-grid.jpg'},
      { text: "From UP Above VR", img: '../src/images/desktop/image-from-above.jpg'},
      { text: "Pocket Borealis", img: '../src/images/desktop/image-pocket-borealis.jpg'},
      { text: "The Curiosity", img: '../src/images/desktop/image-curiosity.jpg'},
      { text: "Make It Fisheye", img: '../src/images/desktop/image-fisheye.jpg'},
  ]
</script>