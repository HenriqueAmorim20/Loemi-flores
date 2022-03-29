<template>
  <v-app class="app">
    <Navbar />
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./navbar.vue";
import Footer from "./footer.vue";

export default {
  name: "DefaultLayout",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
/* Global styles */
@font-face {
  font-family: "cormorantLight";
  src: url("~/assets/CormorantGaramond-Light.ttf") format("truetype");
}

@font-face {
  font-family: "cormorant";
  src: url("~/assets/CormorantGaramond-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "cormorantBold";
  src: url("~/assets/CormorantGaramond-Bold.ttf") format("truetype");
}

@font-face {
  font-family: "assinatura";
  src: url("~/assets/assinatura.ttf") format("truetype");
}

* {
  font-family: "cormorant";
  color: #706063;
}

html.sr .load-hidden {
  visibility: hidden;
}

body {
  overflow: hidden !important;
}

.app {
  background-color: #dbc9cc !important;
}
</style>
