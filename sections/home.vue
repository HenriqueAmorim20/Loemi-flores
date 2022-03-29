<template>
  <div class="home" id="home">
    <!-- Mascara de cor com opacidade -->
    <div class="home-opacity" />

    <!-- Verbete -->
    <div class="home-verbete">
      <span class="home-verbete-title load-hidden">flo.res.ça</span>
      <span class="home-verbete-desc load-hidden">
        cobrir(-se) de flores; dar ou fazer brotar flores; prosperar; brilhar;
        distinguir.
      </span>
    </div>

    <!-- Seta para baixo com animacao -->
    <div class="home-arrow load-hidden">
      <v-icon class="home-arrow-icon" color="#706063" @click="scrollToAbout()">
        mdi-chevron-down
      </v-icon>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeSection",
  methods: {
    // Method that scrolls to about section
    scrollToAbout() {
      const element = document.getElementById("sobre");
      const y = element?.getBoundingClientRect().top + window.pageYOffset - 60;
      window.scrollTo({ top: y, behavior: "smooth" });
    },
  },
};
</script>
<style scoped>
/* Inicio home */
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url("@/static/background-desktop.png");
  background-size: cover;
  background-position: center 20%;
  height: 100vh;
}
/* Fim home */

/* Inicio Mascara de cor para home */
.home-opacity {
  position: absolute;
  background-color: #dbc9cc;
  width: 100vw;
  height: 100vh;
  opacity: 0.7;
}
/* Fim Mascara de cor para home */

/* Inicio verbete */
.home-verbete {
  max-width: 300px;
  text-align: left;
  z-index: 2;
}

.home-verbete-title {
  font-size: 5rem;
}

.home-verbete-desc {
  font-size: 1.5rem;
}
/* Fim verbete */

/* Inicio Icone seta */
.home-arrow {
  position: absolute;
  bottom: 60px;
  left: calc(50% - 20px);
  cursor: pointer;
  animation: bounce 1s infinite alternate;
  -webkit-animation: bounce 1s infinite alternate;
}

.home-arrow-icon {
  font-size: 4rem;
}

.home-arrow-icon:hover {
  color: #fff !important;
}

@keyframes bounce {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-15px);
  }
}

@-webkit-keyframes bounce {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-15px);
  }
}
/* Fim Icone seta */

/* Inicio media query para mobile */
@media (max-width: 700px) {
  .home {
    background-image: url("@/static/background-mobile.png");
    background-position: 90% center;
  }
  .home-verbete {
    align-items: center;
    text-align: center;
  }
}
/* Fim media query para mobile */
</style>
