<template>
  <div class="my-20 flex items-center justify-center">
    <div class="timeline-container flex items-start">
      <!-- First event -->
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content text-center">
          <p class="year">2017 - 2020</p>
          <p class="location">SMA Santa Ursula Jakarta</p>
          <p class="degree">Science</p>
        </div>
      </div>
      <!-- Line between -->
      <div class="timeline-line"></div>
      <!-- Second event -->
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content text-center">
          <p class="year">2020 - 2024</p>
          <p class="location">BINUS University</p>
          <p class="degree">Computer Science</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EduContent",
  data() {
    return {};
  },
};
</script>

<style scoped>
.timeline-container {
  @apply flex items-center justify-center space-x-12;
}

.timeline-item {
  @apply relative flex flex-col items-center;
}

.timeline-marker {
  @apply bg-blue-500 rounded-full h-12 w-12 mb-2;
  border: 4px solid #a2c1ff;
}

.timeline-line {
  @apply h-1 bg-blue-500 w-40;
}

.timeline-content {
  @apply mt-2;
}

.year {
  @apply text-2xl font-bold text-gray-700;
}

.location,
.degree {
  @apply text-lg font-semibold text-gray-500;
}
</style>
