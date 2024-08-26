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
      <div class="container flex gap-4 mx-auto p-4 overflow-hidden">
        <transition name="fade" type="animation">
          <img v-if="!showBinusDescription" @click="toggleDescription('himti')" class="rounded-xl md:w-1/2 object-cover h-[550px] cursor-pointer filter grayscale hover:grayscale-0 transition-opacity" alt="himti" src="../assets/HIMTI.jpg" />
        </transition>

        <transition name="fade" type="animation">
          <div v-if="showBinusDescription" class="w-1/2 h-[550px] flex flex-col justify-center rounded-xl transition-opacity p-4" @click="toggleDescription('himti')">
            <p class="program text-2xl font-semibold pb-2 items-center text-center">Freshmen Partner of Binusian 2025</p>
            <p class="timeline font-semibold items-center text-center">BINUS University</p>
            <p class="timeline font-semibold items-center text-center">July 2021 - July 2022</p>
            <div class="py-8 pe-8">
              <ul class="list-outside text-left">
                <li>Empowered 12 new college students to successfully navigate their first two semesters of college through the First Year Program (FYP).</li>
                <li>Provided mentorship and guidance on academic and personal development topics, helping freshmen set and achieve their future goals.</li>
                <li>Enhanced student engagement by fostering a supportive and inclusive environment that promoted a sense of belonging within the Binusian community.</li>
              </ul>
            </div>
          </div>
        </transition>

        <transition name="fade" type="animation">
          <img v-if="!showHimtiDescription" @click="toggleDescription('binus')" class="rounded-xl md:w-1/2 object-cover h-[550px] cursor-pointer filter grayscale hover:grayscale-0 transition-opacity" alt="binus" src="../assets/binus.jpg" />
        </transition>
        <transition name="fade" type="animation">
          <div v-if="showHimtiDescription" class="w-1/2 h-[550px] flex flex-col justify-center rounded-xl transition-opacity p-4" @click="toggleDescription('binus')">
            <p class="program text-2xl font-semibold pb-2 items-center text-center">President of Alam Sutera</p>
            <p class="timeline font-semibold items-center text-center">Himpunan Teknik Informatika</p>
            <p class="timeline font-semibold items-center text-center">January 2022 - February 2023</p>
            <div class="py-8 pe-8">
              <ul class="list-outside text-left">
                <li>Led team-wide meetings, assigned tasks, and fostered collaboration among 176 members.</li>
                <li>Monitored and evaluated the performance of 6 divisions within the organization.</li>
                <li>Monitored and evaluated the performance of 4 internal events and 3 external events.</li>
                <li>Initiated and conducted monthly meetings with Education, Relation Expansion, and Research and Development Commission.</li>
                <li>Assisted the chairman in leading.</li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
      <div class="container flex gap-4 mx-auto p-4 overflow-hidden">
        <transition name="fade" type="animation">
          <img
            v-if="!showCollegacyDescription"
            @click="toggleDescription('akademis')"
            class="rounded-xl md:w-1/2 object-cover h-[550px] cursor-pointer filter grayscale hover:grayscale-0 transition-opacity"
            alt="akademis"
            src="../assets/akademis.jpg"
          />
        </transition>
        <transition name="fade" type="animation">
          <div v-if="showCollegacyDescription" class="w-1/2 h-[550px] flex flex-col justify-center rounded-xl transition-opacity p-4" @click="toggleDescription('akademis')">
            <p class="program text-2xl font-semibold pb-2 items-center text-center">Collegacy</p>
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
            v-if="!showAkademisDescription"
            @click="toggleDescription('collegacy')"
            class="rounded-xl md:w-1/2 object-cover h-[550px] cursor-pointer filter grayscale hover:grayscale-0 transition-opacity"
            alt="collegacy"
            src="../assets/collegacy.jpg"
          />
        </transition>
        <transition name="fade" type="animation">
          <div v-if="showAkademisDescription" class="w-1/2 h-[550px] flex flex-col justify-center rounded-xl transition-opacity p-4" @click="toggleDescription('collegacy')">
            <p class="program text-2xl font-semibold pb-2 items-center text-center">Frontend Developer Intern</p>
            <p class="timeline font-semibold items-center text-center">Akademis</p>
            <p class="timeline font-semibold items-center text-center">March 2023 - December 2023</p>
            <div class="py-8 pe-8">
              <ul class="list-outside text-left">
                <li>Improved the web application user experience through redesign.</li>
                <li>Contributed 21 packages of questions for tryouts.</li>
                <li>The best intern of the month of September and November from the IT Division and Best of the best team AFLIP Batch 3.</li>
              </ul>
            </div>
          </div>
        </transition>
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
      showHimtiDescription: false,
      showBinusDescription: false,
      showAkademisDescription: false,
      showCollegacyDescription: false,
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
      } else if (image === "himti") {
        this.showHimtiDescription = !this.showHimtiDescription;
        if (this.showHimtiDescription) {
          this.showBinusDescription = false;
        }
      } else if (image === "binus") {
        this.showBinusDescription = !this.showBinusDescription;
        if (this.showBinusDescription) {
          this.showHimtiDescription = false;
        }
      } else if (image === "akademis") {
        this.showAkademisDescription = !this.showAkademisDescription;
        if (this.showAkademisDescription) {
          this.showCollegacyDescription = false;
        }
      } else if (image === "collegacy") {
        this.showCollegacyDescription = !this.showCollegacyDescription;
        if (this.showCollegacyDescription) {
          this.showAkademisDescription = false;
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
