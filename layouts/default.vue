<template>
  <v-app class="background">
    <div class="logo">
      <span style="">LOEMI</span>
      <p>em breve...</p>
    </div>
    <!-- <Navbar />
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />-->
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
.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.logo span {
  font-size: 5rem;
}

.logo p {
  font-size: 2rem;
}

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
  margin: 0 !important;
  padding: 0 !important;
  font-family: "cormorant";
  color: #706063;
}

body {
  overflow: hidden !important;
}

.background {
  background-color: #dbc9cc !important;
}
</style>
