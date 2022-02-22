<template>
  <div id="navbar">
    <NavDesktop v-show="width > 950" :menu="menu" @scroll="scroll" />
    <NavMobile />
  </div>
</template>

<script>
import NavDesktop from "./nav-desktop.vue";
import NavMobile from "./nav-mobile.vue";

export default {
  name: "NavbarLayout",
  components: {
    NavDesktop,
    NavMobile,
  },
  data() {
    return {
      width: null,
      menu: ["sobre", "monocroma", "caline", "surpris", "elegance", "bouquet"],
    };
  },
  mounted() {
    // Gets the device width and add a listener to watch changes on the width
    this.width = window.innerWidth;
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  //Remove listener before the component is destroyed
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    // Method called everytime window is resized
    onResize() {
      this.width = window.innerWidth;
    },

    // Scroll to element on page
    scroll(to) {
      const element = document.getElementById(to);
      const y =
        element?.getBoundingClientRect().top +
        window.pageYOffset -
        (this.width <= 950 ? 60 : 70);
      window.scrollTo({ top: y, behavior: "smooth" });
    },
  },
};
</script>
