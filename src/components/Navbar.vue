<template>
  <div class="navbar container mx-auto flex justify-between pb-6">
    <h1 class="font-extrabold text-xl">
      <router-link to="/">{{ name }}</router-link>
    </h1>
    <div class="flex">
      <div><router-link to="/experience">Experience & Education</router-link></div>
      <div class="px-[24px]"><router-link to="/portofolio">Portofolio</router-link></div>
      <div><router-link to="/contact">Contact</router-link></div>

      <!-- dark mode -->
      <button class="ps-[16px]">Download CV</button>
      <!-- action untuk download cv -->
    </div>
  </div>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      name: "SILVIA PASIFICA",
    };
  },
};
</script>

<style></style>
