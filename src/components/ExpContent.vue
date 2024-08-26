<template>
  <div class="pt-8">
    <div class="work-exp container mx-auto">
      <p class="pb-[24px] font-semibold text-3xl text-left">Work Experience</p>
      <div class="container flex gap-8 mx-auto p-4 overflow-hidden">
        <img class="rounded-xl w-1/2 object-cover h-[550px] filter grayscale hover:grayscale-0" alt="odp-mandiri" src="../assets/odp.jpeg" />
        <img class="rounded-xl w-1/2 object-cover h-[550px] filter grayscale hover:grayscale-0" alt="apple-dev" src="../assets/apple.jpg" />
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
    return {};
  },
};
</script>
