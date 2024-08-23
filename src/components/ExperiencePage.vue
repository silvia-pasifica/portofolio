<template>
  <div>
    <div class="flex justify-center gap-4">
      <button class="bg-[#a2c1ff] rounded-lg px-6 py-2 mb-4 inline-block" @click="currentContent = 'experience'">Experience</button>
      <button class="bg-[#a2c1ff] rounded-lg px-6 py-2 mb-4 inline-block" @click="currentContent = 'education'">Education</button>
    </div>

    <div>
      <div v-if="currentContent === 'experience'">
        <ExpContent />
      </div>
      <div v-else>
        <EduContent />
      </div>
    </div>
  </div>
</template>

<script>
import ExpContent from "./ExpContent.vue";
import EduContent from "./EduContent.vue";
export default {
  name: "ExperiencePage",
  data() {
    return {
      currentContent: "experience",
    };
  },
  components: {
    ExpContent,
    EduContent,
  },
};
</script>

<style></style>
