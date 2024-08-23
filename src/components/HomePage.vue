<template>
  <HeaderHome />
  <div class="content bg-[#F9FAFB] py-[96px] px-[80px]">
    <div class="bg-[#E5E7EB] rounded-full px-6 py-2 mb-4 inline-block">
      <p>about me</p>
    </div>
    <div class="flex pt-[48px]">
      <div class="w-1/2">
        <img class="w-[400px]" alt="profile-picture" src="../assets/profile-picture.jpg" />
      </div>
      <div class="w-1/2 text-left">
        <p class="pb-[24px] font-semibold text-3xl">title</p>
        <p>
          I am a software engineer with a passion for crafting engaging and user-friendly digital experiences. With experience in web development, mobile application development, game development, and UI design, I am a versatile and skilled
          developer capable of tackling diverse digital challenges.
        </p>
        <br />
        <p>
          My journey began as an Awardee of My Digital Academy Batch 2 by Bank Mandiri, where I contributed to the "E-Integrity Bite" mobile app, designing the UI with Material 3 and Figma, and developing it using Service Studio. Further
          honing my skills, I completed a 10-month iOS Developer Internship at Apple Developer Academy, where I designed apps based on Human Interface Guidelines, built apps with Swift and Xcode, developed games using Unity, and implemented
          SCRUM and Jira for project management.
        </p>
        <br />
        <p>
          Driven by a thirst for learning and innovation, I am eager to collaborate with clients and contribute to meaningful digital projects. If you seek a creative, adaptable, and passionate developer to create exceptional digital
          experiences, look no further.
        </p>
      </div>
    </div>
  </div>
  <ContactPage />
</template>

<script>
import HeaderHome from "./Header.vue";
import ContactPage from "./ContactPage.vue";
export default {
  name: "HomePage",
  data() {
    return {};
  },
  components: {
    HeaderHome,
    ContactPage,
  },
};
</script>

<style></style>
