<template>
  <div id="nav-desktop">
    <v-app-bar
      class="nav-desktop"
      height="70px"
      :color="changeBg ? '#dbc9cc' : 'transparent'"
      flat
      fixed
    >
      <div class="nav-desktop-logo" @click="scroll('home')">
        <span>LOEMI</span>
      </div>
      <v-spacer class="nav-desktop-divider" />
      <div
        v-for="item in menu"
        :key="item"
        class="nav-desktop-transition"
        @click="scroll(item)"
      >
        <div class="nav-desktop-item">
          <span>{{ item }}</span>
        </div>
      </div>
      <div class="nav-desktop-icon">
        <v-img
          contain
          width="30"
          height="40"
          :src="require('~/static/favicon.png')"
        ></v-img>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavDesktopLayout",
  props: {
    menu: {
      type: Array,
      default: null,
    },
    changeBg: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    // call parent(navbar) function scroll
    scroll(to) {
      this.$emit("scroll", to);
    },
  },
};
</script>

<style scoped>
.nav-desktop {
  padding: 0 2% !important;
  transition: 1s all ease;
}

.nav-desktop-logo span {
  cursor: pointer;
  font-size: 4rem;
  font-family: "cormorantLight" !important;
}

.nav-desktop-divider {
  flex: 1 1 auto;
  /* border-bottom: 1px solid rgba(112, 96, 99, 0.219);
  margin: 0 20px 0 35px !important; */
}

.nav-desktop-transition {
  display: inline-block;
  width: fit-content;
  margin: 0 15px !important;
  cursor: pointer;
}

.nav-desktop-transition:after {
  display: flex;
  content: "";
  border-bottom: solid 1px #706063b0;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}
.nav-desktop-transition:hover:after {
  transform: scaleX(1);
}

.nav-desktop-item span {
  font-size: 1.4rem;
  text-transform: lowercase;
}

.nav-desktop-icon {
  margin: 0 0 0 20px !important;
}
</style>
