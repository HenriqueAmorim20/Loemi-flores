<template>
  <div id="index">
    <Home :width="width" />
    <About />
    <Products :width="width" />
    <Papelaria />
    <!-- <Assinatura /> -->
  </div>
</template>

<script>
import Home from "~/sections/home.vue";
import About from "~/sections/about.vue";
import Products from "~/sections/products.vue";
import Papelaria from "~/sections/papelaria.vue";
// import Assinatura from "~/sections/assinatura.vue";

export default {
  name: "IndexPage",
  components: {
    Home,
    About,
    Products,
    Papelaria,
    // Assinatura,
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
        duration: 1500,
        distance: "150px",
        origin: "bottom",
      });
      ScrollReveal().reveal(".home-verbete-desc", {
        delay: 150,
        duration: 1500,
        distance: "150px",
        origin: "bottom",
      });
      ScrollReveal().reveal(".home-icon", {
        delay: 300,
        duration: 1500,
        distance: "150px",
        origin: "bottom",
      });

      // Sobre
      ScrollReveal().reveal(".about", {
        delay: 0,
        duration: 1500,
        distance: "200px",
        origin: "bottom",
      });

      // Papelaria
      ScrollReveal().reveal(".papelaria-title", {
        delay: 0,
        duration: 1500,
        distance: "100px",
        origin: "bottom",
      });
      ScrollReveal().reveal(".papelaria-img", {
        delay: 100,
        duration: 1500,
        distance: "100px",
        origin: "bottom",
        interval: 100,
      });
    },

  },
};
</script>
