<template>
  <div id="nav-mobile">
    <v-app-bar
      class="nav-mobile"
      height="55px"
      :color="changeBg ? '#dbc9cc' : 'transparent'"
      flat
      fixed
    >
      <div class="nav-mobile-logo" @click="scroll('home')">
        <span>LOEMI</span>
      </div>
      <v-spacer />
      <div class="nav-mobile-icon" @click="drawer = !drawer">
        <Icon :icon="'menu'" />
      </div>
    </v-app-bar>
    <v-navigation-drawer
      color="#dbc9cc"
      width="425"
      v-model="drawer"
      right
      fixed
      class="nav-drawer"
    >
      <div class="nav-drawer-close">
        <div class="nav-mobile-icon" @click="drawer = !drawer">
          <Icon :icon="'close'" :width="50" />
        </div>
      </div>
      <div
        v-for="item in menu"
        :key="item"
        @click="scroll(item)"
        class="nav-drawer-item"
      >
        <span>{{ item }}</span>
      </div>
      <v-img
        class="nav-drawer-bottom"
        contain
        width="50"
        height="60"
        :src="require('~/static/favicon.png')"
      />
    </v-navigation-drawer>
  </div>
</template>

<script>
import Icon from "~/components/icon.vue";

export default {
  name: "NavMobileLayout",
  components: {
    Icon,
  },
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
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    // call parent(navbar) function scroll
    scroll(to) {
      this.drawer = false;
      setTimeout(() => {
        this.$emit("scroll", to);
      }, 300);
    },
  },
};
</script>

<style scoped>
.nav-mobile {
  padding: 0 5% !important;
  transition: 1s all ease;
}

.nav-mobile-logo span {
  cursor: pointer;
  font-size: 2.8rem;
}

.nav-mobile-icon {
  display: flex;
  align-items: center;
}

.nav-drawer {
  z-index: 10;
  padding: 10px 10px 10px 15px !important;
}

.nav-drawer-close {
  display: flex;
  justify-content: flex-end;
  margin: 0 0 20% !important;
}

.nav-drawer-close-icon {
  cursor: pointer;
  font-size: 3rem;
}

.nav-drawer-item {
  font-size: 2rem;
  text-transform: lowercase;
  margin: 3px 0 0 !important;
}

.nav-drawer-bottom {
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: flex;
  align-items: center;
}
</style>
