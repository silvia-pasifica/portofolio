<template>
  <div>
    <p class="text-5xl font-semibold py-4 bg-gray-300">Portofolio</p>
    <di class="">
      <div class="website py-4 container mx-auto">
        <p class="text-2xl font-semibold py-4 text-left">Website</p>
        <!-- <Box v-for="(project, index) in projects" :key="index" :image="project.image" :name="project.name" :tags="project.tags" /> -->
        <div class="relative">
          <div ref="carousel" class="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4">
            <Box v-for="(project, index) in projects" :key="index" :image="project.image" :name="project.name" :tags="project.tags" class="snap-center shrink-0 m-4 rounded-lg" />
          </div>
          <!-- Navigation buttons -->
          <button @click="scrollLeft" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">◀</button>
          <button @click="scrollRight" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">▶</button>
        </div>
      </div>
      <div class="application py-4 container mx-auto">
        <p class="text-2xl font-semibold py-4 text-left">Application</p>
        <!-- <Box v-for="(project, index) in projects" :key="index" :image="project.image" :name="project.name" :tags="project.tags" /> -->
        <div class="relative">
          <div ref="carousel" class="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4">
            <Box v-for="(project, index) in projects" :key="index" :image="project.image" :name="project.name" :tags="project.tags" class="snap-center shrink-0 m-4 rounded-lg" />
          </div>
          <!-- Navigation buttons -->
          <button @click="scrollLeft" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">◀</button>
          <button @click="scrollRight" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">▶</button>
        </div>
      </div>
      <div class="game py-4 container mx-auto">
        <p class="text-2xl font-semibold py-4 text-left">Game</p>
        <!-- <Box v-for="(project, index) in projects" :key="index" :image="project.image" :name="project.name" :tags="project.tags" /> -->
        <div class="relative">
          <div ref="carousel" class="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4">
            <Box v-for="(project, index) in projects" :key="index" :image="project.image" :name="project.name" :tags="project.tags" class="snap-center shrink-0 m-4 rounded-lg" />
          </div>
          <!-- Navigation buttons -->
          <button @click="scrollLeft" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">◀</button>
          <button @click="scrollRight" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">▶</button>
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
      projects: [
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
    };
  },
  components: {
    Box,
  },
  methods: {
    scrollLeft() {
      this.$refs.carousel.scrollBy({ left: -300, behavior: "smooth" });
    },
    scrollRight() {
      this.$refs.carousel.scrollBy({ left: 300, behavior: "smooth" });
    },
  },
};
</script>

<style></style>
