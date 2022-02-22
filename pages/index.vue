<template>
  <div id="index">
    <Home :width="width"/>
    <About />
    <Products :width="width"/>
  </div>
</template>

<script>
import Home from "~/sections/home.vue";
import About from "~/sections/about.vue";
import Products from "~/sections/products.vue";

export default {
  name: 'IndexPage',
  components: {
    Home,
    About,
    Products
  },
  data() {
    return {
      width: null,
    }
  },
  mounted() {
    this.revealScroll()

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
        duration: 2500,
        distance: "300px",
        origin: "bottom",
      });
      ScrollReveal().reveal(".home-verbete-desc", {
        delay: 150,
        duration: 2500,
        distance: "300px",
        origin: "bottom",
      });
      ScrollReveal().reveal(".home-icon", {
        delay: 300,
        duration: 2500,
        distance: "300px",
        origin: "bottom",
      });

      // Sobre
      ScrollReveal().reveal(".about-logo", {
        delay: 0,
        duration: 2500,
        distance: "150px",
        origin: "left",
      });
      ScrollReveal().reveal(".about-line", {
        delay: 150,
        duration: 2500,
        distance: "150px",
        origin: "left",
        inteval: 50
      });
      ScrollReveal().reveal(".about-name", {
        delay: 450,
        duration: 2500,
        distance: "150px",
        origin: "left",
      });
    }
  }
}
</script>
