<template>
  <div id="index">
    <Home />
    <About />
    <Products />
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
  mounted() {
    this.revealScroll();
  },
  methods: {
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
      ScrollReveal().reveal(".about-text", {
        delay: 0,
        duration: 2000,
        distance: "50px",
        origin: "bottom",
      });

      // Produtos
      ScrollReveal().reveal(".information", {
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
