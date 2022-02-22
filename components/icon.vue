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
    <svg
      v-if="icon === 'arrow-down'"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      :width="width"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <g fill="none">
        <path
          d="M4 9l8 8l8-8"
          :stroke="color"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
    <svg
      v-if="icon === 'arrow-right'"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      :width="width"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m8 4l8 8l-8 8"
      />
    </svg>
    <svg
      v-if="icon === 'arrow-left'"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      :width="width"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m15 4l-8 8l8 8"
      />
    </svg>
    <svg
      v-if="icon === 'insta'"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      :width="width"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 20 20"
    >
      <path
        :fill="color"
        d="M16.8 5.7C14.4 2 9.5.9 5.7 3.2C2 5.5.8 10.5 3.2 14.2l.2.3l-.8 3l3-.8l.3.2c1.3.7 2.7 1.1 4.1 1.1c1.5 0 3-.4 4.3-1.2c3.7-2.4 4.8-7.3 2.5-11.1zm-2.1 7.7c-.4.6-.9 1-1.6 1.1c-.4 0-.9.2-2.9-.6c-1.7-.8-3.1-2.1-4.1-3.6c-.6-.7-.9-1.6-1-2.5c0-.8.3-1.5.8-2c.2-.2.4-.3.6-.3H7c.2 0 .4 0 .5.4c.2.5.7 1.7.7 1.8c.1.1.1.3 0 .4c.1.2 0 .4-.1.5c-.1.1-.2.3-.3.4c-.2.1-.3.3-.2.5c.4.6.9 1.2 1.4 1.7c.6.5 1.2.9 1.9 1.2c.2.1.4.1.5-.1s.6-.7.8-.9c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.5.3c.1.3.1.7-.1 1z"
      />
    </svg>
    <svg
      v-if="icon === 'wpp'"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      :width="width"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 1024 1024"
    >
      <path
        :fill="color"
        d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"
      />
    </svg>
    <svg
      v-if="icon === 'linkedin'"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      :width="width"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        :fill="color"
        fill-rule="evenodd"
        d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4V8.969ZM2.57 21.83h4V8.799h-4V21.83ZM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.573 2.573 0 0 1-1.82.748a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747c.482.478.753 1.126.753 1.803Z"
        clip-rule="evenodd"
      />
    </svg>
    <svg
      v-if="icon === 'github'"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      :width="width"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        :fill="color"
        d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822c0 5.277-3.002 6.824-5.823 7.279c.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187c0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185c0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728a.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092c-.455-.546-.819-1.001-1.274-1.092c-.09-.091-.364-.455-.273-.819c.091-.364.455-.637.82-.455c.91.182 1.455.91 2 1.547c.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093c-2.73-.546-5.914-2.093-5.914-7.279c0-1.456.455-2.73 1.365-3.822c-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"
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
