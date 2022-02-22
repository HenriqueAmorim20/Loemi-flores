<template>
  <v-app>
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
  }
};
</script>
