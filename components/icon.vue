<template>
  <div class="icon-div">
    <svg
      v-if="icon === 'menu'"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      :width="width"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 36 36"
    >
      <path
        :fill="color"
        d="M32 29H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2Z"
        class="clr-i-outline clr-i-outline-path-1"
      />
      <path
        :fill="color"
        d="M32 19H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2Z"
        class="clr-i-outline clr-i-outline-path-2"
      />
      <path
        :fill="color"
        d="M32 9H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2Z"
        class="clr-i-outline clr-i-outline-path-3"
      />
      <path fill="none" d="M0 0h36v36H0z" />
    </svg>
    <svg
      v-if="icon === 'close'"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      :width="width"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 50 50"
    >
      <path
        :fill="color"
        d="m37.304 11.282l1.414 1.414l-26.022 26.02l-1.414-1.413z"
      />
      <path
        :fill="color"
        d="m12.696 11.282l26.022 26.02l-1.414 1.415l-26.022-26.02z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "IconComponent",
  props: {
    icon: {
      type: String,
      default: null,
      required: true,
    },
    width: {
      type: Number,
      default: 35,
    },
    color: {
      type: String,
      default: "#706063",
    },
  },
};
</script>

<style scoped>
.icon-div {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
</style>
