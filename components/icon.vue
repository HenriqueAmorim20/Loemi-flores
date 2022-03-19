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
      v-if="icon === 'wpp'"
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
        d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977c0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162l-2.824.741l.753-2.753l-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188a7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73c-.205-.075-.354-.112-.504.112s-.58.729-.711.879s-.262.168-.486.056s-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393c.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666c-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008a.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387c.536.231.954.369 1.279.473c.537.171 1.026.146 1.413.089c.431-.064 1.327-.542 1.514-1.066c.187-.524.187-.973.131-1.067c-.056-.094-.207-.151-.43-.263"
        clip-rule="evenodd"
      />
    </svg>
    <svg
      v-if="icon === 'insta'"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      :width="width"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 1024 1024"
    >
      <path
        :fill="color"
        d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1S717.1 625.5 717.1 512S625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7S645.3 438.6 645.3 512S585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9s47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8c-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1c-18.2-7.3-31.8-16.1-45.8-30.2c-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9c7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2c14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"
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
