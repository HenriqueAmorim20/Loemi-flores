<template>
  <div>
    <!-- Navbar -->
    <v-app-bar class="navbar" height="60px" flat fixed :color="navbarColor">
      <!-- Logo do site -->
      <span class="navbar-logo load-hidden" @click="scrollTo('home')">
        loemi
      </span>
      <v-spacer></v-spacer>
      <!-- Menu de navegacao para desktop -->
      <div class="navbar-menu">
        <span
          v-for="(item, index) in menu"
          :key="index"
          @click="scrollTo(item)"
          class="navbar-menu-item load-hidden"
        >
          {{ item }}
        </span>
        <img src="/favicon.png" class="navbar-menu-img load-hidden" />
      </div>
      <!-- Icone de menu para mobile -->
      <div class="navbar-mobile load-hidden">
        <v-icon class="navbar-mobile-icon" @click.stop="drawer = !drawer">
          mdi-menu
        </v-icon>
      </div>
    </v-app-bar>

    <!-- Menu drawer para mobile -->
    <v-navigation-drawer
      v-model="drawer"
      fixed
      right
      width="425px"
      color="#dbc9cc"
    >
      <div class="drawer">
        <v-icon
          class="drawer-close-icon"
          @click.stop="drawer = !drawer"
          color="#706063"
        >
          mdi-close
        </v-icon>
        <div class="drawer-items">
          <span
            v-for="(item, index) in menu"
            :key="index"
            class="drawer-item"
            @click="
              scrollTo(item);
              drawer = false;
            "
          >
            {{ item }}
          </span>
        </div>
        <img src="/favicon.png" class="drawer-img" />
      </div>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "NavbarLayout",
  data() {
    return {
      menu: [
        "sobre",
        "monocroma",
        "surpris",
        "elegance",
        "bouquet",
        "caline",
        "papelaria",
      ],
      drawer: false,
      navbarColor: "transparent",
    };
  },
  mounted() {
    this.revealScroll();
    this.onScroll();

    // Add a listener to watch changes on the scroll
    this.$nextTick(() => {
      window.addEventListener("scroll", this.onScroll);
    });
  },

  // Remove listener before the component is destroyed
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    // Method called on scroll to set the navbar background color
    onScroll() {
      // Gets the element on about section
      const aboutElement = document.getElementById("sobre");
      const y = aboutElement?.getBoundingClientRect().top - 60;
      this.navbarColor = y > 0 ? "transparent" : "#dbc9cc";
    },

    // Scroll to element on page
    scrollTo(to) {
      const element = document.getElementById(to);
      const y = element?.getBoundingClientRect().top + window.pageYOffset - 60;
      window.scrollTo({ top: y, behavior: "smooth" });
    },

    revealScroll() {
      // Navbar desktop
      ScrollReveal().reveal(".navbar-logo", {
        delay: 0,
        duration: 2000,
        distance: "50px",
        origin: "top",
      });
      ScrollReveal().reveal(".navbar-menu-item", {
        delay: 100,
        duration: 2000,
        distance: "50px",
        origin: "top",
        interval: 100,
      });
      ScrollReveal().reveal(".navbar-menu-img", {
        delay: 900,
        duration: 2000,
        distance: "50px",
        origin: "top",
      });
      ScrollReveal().reveal(".navbar-mobile", {
        delay: 150,
        duration: 2000,
        distance: "50px",
        origin: "top",
      });
    },
  },
};
</script>
<style scoped>
/* Inicio navbar */
.navbar {
  padding: 0 min(1%, 2rem);
  transition: 0.7s ease;
}

.navbar-logo {
  cursor: pointer;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-family: "cormorantLight";
  text-transform: uppercase;
}

.navbar-menu {
  display: flex;
  align-items: center;
}

.navbar-menu-item {
  display: inline-block;
  width: fit-content;
  font-size: 1.4rem;
  text-transform: lowercase;
  margin: 0 1rem;
  cursor: pointer;
}

.navbar-menu-item:after {
  display: flex;
  content: "";
  border-bottom: solid 1px #706063b0;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}

.navbar-menu-item:hover:after {
  transform: scaleX(1);
}

.navbar-menu-img {
  width: 40px;
  margin: 0 0 0 1rem;
}

.navbar-mobile-icon {
  font-size: 2rem !important;
  color: #706063 !important;
}
/* Fim navbar */

/* Inicio drawer mobile */
.drawer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 1rem;
}

.drawer-close-icon {
  width: max-content;
  align-self: flex-end;
  font-size: 2.8rem !important;
}

.drawer-items {
  display: flex;
  flex-direction: column;
  margin-top: -5rem;
}

.drawer-item {
  margin: 0 1rem 0 0;
  font-size: 2rem;
}

.drawer-img {
  align-self: flex-end;
  width: 50px;
}
/* Fim drawer mobile */

/* Inicio media queries */
@media (min-width: 1050px) {
  .navbar-mobile-icon {
    display: none !important;
  }
}

@media (max-width: 1050px) {
  .navbar-menu {
    display: none !important;
  }
}
/* Fim media queries */
</style>
