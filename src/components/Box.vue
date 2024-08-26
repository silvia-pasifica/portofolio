<template>
  <div class="w-80">
    <img class="rounded-xl w-auto" :src="image" alt="box-image" />
    <p class="text-xl font-semibold text-left py-2">{{ name }}</p>
    <div class="flex justify-start">
      <span v-for="(tag, index) in tags" :key="index" class="bg-blue-200 text-gray-700 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full">
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxTemplate",
  data() {
    return {};
  },
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
  },
};
</script>
