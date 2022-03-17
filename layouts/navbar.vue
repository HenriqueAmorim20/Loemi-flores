<template>
  <div id="navbar">
    <NavDesktop v-show="width > 950" :menu="menu" :change-bg="changeBg" @scroll="scroll" />
    <NavMobile v-show="width <= 950" :menu="menu" :change-bg="changeBg" @scroll="scroll" />
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
      changeBg: false,
      menu: ["sobre", "monocroma", "caline", "surpris", "elegance", "bouquet"],
    };
  },
  mounted() {
    this.revealScroll()

    // Gets the device width and add a listener to watch changes on the width
    this.width = window.innerWidth;
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
      window.addEventListener("scroll", this.onScroll);
    });
  },

  //Remove listener before the component is destroyed
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    // Method called everytime window is resized
    onResize() {
      this.width = window.innerWidth;
    },

    // Method called everytime window scroll changes
    onScroll() {
      const element = document.getElementById("sobre");
      const y =
        element?.getBoundingClientRect().top - (this.width <= 950 ? 56 : 71);
      this.changeBg = y <= 0
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

    revealScroll() {
      // Navbar desktop
      ScrollReveal().reveal(".nav-desktop-logo", {
        delay: 0,
        duration: 1500,
        distance: "100px",
        origin: "top",
      });
      ScrollReveal().reveal(".nav-desktop-transition", {
        delay: 150,
        duration: 1500,
        distance: "100px",
        origin: "top",
        interval: 150
      });
      ScrollReveal().reveal(".nav-desktop-icon", {
        delay: 900,
        duration: 1500,
        distance: "100px",
        origin: "top",
      });

      // Navbar mobile
      ScrollReveal().reveal(".nav-mobile-logo", {
        delay: 0,
        duration: 1500,
        distance: "100px",
        origin: "top",
      });
      ScrollReveal().reveal(".nav-mobile-icon", {
        delay: 150,
        duration: 1500,
        distance: "100px",
        origin: "top",
      });
    }
  },
};
</script>
