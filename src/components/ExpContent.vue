<template>
  <div class="pt-8">
    <div class="work-exp container mx-auto">
      <p class="pb-[24px] font-semibold text-3xl text-left">Work Experience</p>
      <div class="container flex gap-8 mx-auto p-4 overflow-hidden">
        <transition name="fade" type="animation">
          <img v-if="!showOdpDescription" @click="toggleDescription('odp')" class="rounded-xl w-1/2 object-cover h-[550px] cursor-pointer filter grayscale hover:grayscale-0 transition-opacity" alt="odp-mandiri" src="../assets/odp.jpeg" />
        </transition>
        <transition name="fade" type="animation">
          <div v-if="showOdpDescription" class="w-1/2 h-[550px] flex flex-col justify-center rounded-xl transition-opacity p-4" @click="toggleDescription('odp')">
            <p class="program text-2xl font-semibold pb-2 items-center text-center">Apple Developer Academy Cohor 6</p>
            <p class="timeline font-semibold items-center text-center">March 2023 - December 2023</p>
            <div class="py-8 pe-8">
              <ul class="list-outside text-left">
                <li>Designed applications based on Human Interface Guidelines using Sketch or Figma.</li>
                <li>Developed applications using SwiftUI as the primary programming language and Xcode as the IDE.</li>
                <li>Built a game using Unity and utilized SCRUM and Jira for project management.</li>
              </ul>
            </div>
          </div>
        </transition>

        <transition name="fade" type="animation">
          <img
            v-if="!showAppleDescription"
            @click="toggleDescription('apple')"
            class="rounded-xl w-1/2 object-cover h-[550px] cursor-pointer filter grayscale hover:grayscale-0 transition-opacity"
            alt="apple-dev"
            src="../assets/apple.jpg"
          />
        </transition>
        <transition name="fade" type="animation">
          <div v-if="showAppleDescription" class="w-1/2 h-[550px] flex flex-col justify-center p-4 transition-opacity" @click="toggleDescription('apple')">
            <p class="program text-2xl font-semibold pb-2 items-center text-center">Officer Development Program IT Bank Mandiri</p>
            <p class="font-semibold items-center text-center">July 2024 - Now</p>
            <div class="py-8 pe-8 text-left">
              <ul class="list-outside">
                <li>Designed applications based on Human Interface Guidelines using Sketch or Figma.</li>
                <li>Developed applications using SwiftUI as the primary programming language and Xcode as the IDE.</li>
                <li>Built a game using Unity and utilized SCRUM and Jira for project management.</li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="organization-exp container mx-auto">
      <p class="pt-12 pb-10 font-semibold text-3xl text-left">Organization Experience</p>
      <div class="container mx-auto grid grid-cols-2 gap-8">
        <img class="rounded-xl" alt="himti" src="../assets/odp.jpeg" />
        <img class="rounded-xl" alt="binus" src="../assets/odp.jpeg" />
        <img class="rounded-xl" alt="akademis" src="../assets/odp.jpeg" />
        <img class="rounded-xl" alt="collegacy" src="../assets/odp.jpeg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExpContent",
  data() {
    return {
      showOdpDescription: false,
      showAppleDescription: false,
    };
  },
  methods: {
    toggleDescription(image) {
      if (image === "odp") {
        this.showAppleDescription = !this.showAppleDescription;
        if (this.showAppleDescription) {
          this.showOdpDescription = false;
        }
      } else if (image === "apple") {
        this.showOdpDescription = !this.showOdpDescription;
        if (this.showOdpDescription) {
          this.showAppleDescription = false;
        }
      }
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 1.8s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
  margin-left: 20px;
}

li {
  list-style-type: disc;
}
</style>
