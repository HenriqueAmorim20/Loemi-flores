<template>
  <div id="index">
    <Home />
    <About />
    <Products :width="width" />
    <Papelaria />
  </div>
</template>

<script>
import Home from "~/sections/home.vue";
import About from "~/sections/about.vue";
import Products from "~/sections/products.vue";
import Papelaria from "~/sections/papelaria.vue";

export default {
  name: "IndexPage",
  components: {
    Home,
    About,
    Products,
    Papelaria,
  },
  data() {
    return {
      width: null,
    };
  },
  mounted() {
    this.revealScroll();

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

    revealScroll() {
      // Home
      ScrollReveal().reveal(".home-verbete-title", {
        delay: 0,
        duration: 2000,
        distance: "100px",
        origin: "bottom",
      });
      ScrollReveal().reveal(".home-verbete-desc", {
        delay: 100,
        duration: 2000,
        distance: "100px",
        origin: "bottom",
      });
      ScrollReveal().reveal(".home-arrow", {
        delay: 300,
        duration: 2000,
        distance: "100px",
        origin: "bottom",
      });

      // Sobre
      ScrollReveal().reveal(".about", {
        delay: 0,
        duration: 2000,
        distance: "50px",
        origin: "bottom",
      });

      // Papelaria
      ScrollReveal().reveal(".papelaria-title", {
        delay: 0,
        duration: 2000,
        distance: "50px",
        origin: "bottom",
      });
      ScrollReveal().reveal(".papelaria-img", {
        delay: 100,
        duration: 2000,
        distance: "50px",
        origin: "bottom",
        interval: 100,
      });
    },

  },
};
</script>
