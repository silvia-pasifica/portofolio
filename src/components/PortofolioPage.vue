<template>
  <div>
    <p class="text-5xl font-semibold py-4 bg-gray-300">Portofolio</p>
    <div>
      <div class="website">
        <p>Website</p>
        <div>
          <Box />
        </div>
      </div>
      <div class="website">
        <p>Website</p>
      </div>
      <div class="website">
        <p>Website</p>
      </div>
    </div>
  </div>
</template>

<script>
import Box from "./Box.vue";
export default {
  name: "PortofolioPage",
  data() {
    return {};
  },
  components: {
    Box,
  },
};
</script>

<style></style>
