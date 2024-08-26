<template>
  <div class="bg-slate-200">
    <p class="text-5xl font-semibold py-4 bg-slate-200">Portofolio</p>
    <di class="">
      <div class="website py-4 container mx-auto">
        <p class="text-2xl font-semibold py-4 text-left">Website</p>
        <div class="relative">
          <div ref="websiteCarousel" class="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4">
            <Box v-for="(website, index) in websites" :key="index" :image="website.image" :name="website.name" :tags="website.tags" class="snap-center shrink-0 m-4 rounded-lg" />
          </div>
          <!-- Navigation buttons -->
          <button @click="scrollLeft('websiteCarousel')" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">◀</button>
          <button @click="scrollRight('websiteCarousel')" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">▶</button>
        </div>
      </div>
      <div class="website py-4 container mx-auto">
        <p class="text-2xl font-semibold py-4 text-left">Application</p>
        <!-- <Box v-for="(project, index) in projects" :key="index" :image="project.image" :name="project.name" :tags="project.tags" /> -->
        <div class="relative">
          <div ref="applicationCarousel" class="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4">
            <Box v-for="(application, index) in applications" :key="index" :image="application.image" :name="application.name" :tags="application.tags" class="snap-center shrink-0 m-4 rounded-lg" />
          </div>
          <!-- Navigation buttons -->
          <button @click="scrollLeft('applicationCarousel')" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">◀</button>
          <button @click="scrollRight('applicationCarousel')" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">▶</button>
        </div>
      </div>

      <div class="game py-4 container mx-auto">
        <p class="text-2xl font-semibold py-4 text-left">Game</p>
        <div class="flex gap-4">
          <Box v-for="(game, index) in games" :key="index" :image="game.image" :name="game.name" :tags="game.tags" class="snap-center shrink-0 m-4 rounded-lg" />
        </div>
      </div>
    </di>
  </div>
</template>

<script>
import Box from "./Box.vue";
export default {
  name: "PortofolioPage",
  data() {
    return {
      websites: [
        {
          image: require("@/assets/odp.jpeg"),
          name: "Project A",
          tags: ["UI/UX", "Web Design"],
        },
        {
          image: require("@/assets/odp.jpeg"),
          name: "Project B",
          tags: ["Mobile App", "React Native"],
        },
        {
          image: require("@/assets/odp.jpeg"),
          name: "Project C",
          tags: ["Backend", "Node.js"],
        },
        {
          image: require("@/assets/odp.jpeg"),
          name: "Project C",
          tags: ["Backend", "Node.js"],
        },
        {
          image: require("@/assets/odp.jpeg"),
          name: "Project C",
          tags: ["Backend", "Node.js"],
        },
      ],
      applications: [
        {
          image: require("@/assets/Blub.png"),
          name: "Blub",
          tags: ["UI/UX"],
        },
        {
          image: require("@/assets/MRTJ.png"),
          name: "MRTJ Pin Priority",
          tags: ["Frontend", "UI/UX", "SwiftUI"],
        },
        {
          image: require("@/assets/Syncro.png"),
          name: "Syncro",
          tags: ["Frontend", "SwiftUI", "CoreML"],
        },
        {
          image: require("@/assets/Caraplanta.png"),
          name: "Caraplanta",
          tags: ["SwiftUI", "iOS Dev"],
        },
      ],
      games: [
        {
          image: require("@/assets/SightlessEcho.png"),
          name: "Sightless Echo",
          tags: ["Mobile Game", "Game Dev", "Sprite Kit"],
        },
        {
          image: require("@/assets/picoTerra.png"),
          name: "Pico Terra",
          tags: ["Mobile Game", "Game Dev", "Unity"],
        },
      ],
    };
  },
  components: {
    Box,
  },
  methods: {
    scrollLeft(refName) {
      this.$refs[refName].scrollBy({ left: -300, behavior: "smooth" });
    },
    scrollRight(refName) {
      this.$refs[refName].scrollBy({ left: 300, behavior: "smooth" });
    },
  },
};
</script>

<style></style>
