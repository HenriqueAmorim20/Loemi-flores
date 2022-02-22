<template>
  <div class="main" id="home">
    <v-img
      :src="require('~/static/background.png')"
      class="home-background"
    ></v-img>
    <div class="home-verbete">
      <span class="home-verbete-title">flo.res.ça</span>
      <span class="home-verbete-desc">
        cobrir(-se) de flores; dar ou fazer brotar flores; prosperar; brilhar;
        distinguir.
      </span>
    </div>
    <div
      class="home-icon"
      @mouseover="color = '#fff'"
      @mouseleave="color = '#706163'"
      @click="scroll()"
    >
      <Icon :icon="'arrow-down'" :color="color" :width="40" />
    </div>
  </div>
</template>

<script>
import Icon from "~/components/icon.vue";

export default {
  name: "HomeSection",
  components: {
    Icon,
  },
  props: {
    width: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      color: "#706063",
    };
  },
  methods: {
    scroll() {
      const element = document.getElementById("sobre");
      const y =
        element?.getBoundingClientRect().top +
        window.pageYOffset -
        (this.width > 950 ? 70 : 55);
      window.scrollTo({ top: y, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
}

.home-background {
  position: absolute;
  top: 0;
  height: calc(100vh);
  background-position: center;
  opacity: 0.15;
}

.home-verbete {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  text-align: left;
}

.home-verbete-title {
  font-size: 5rem;
}

.home-verbete-desc {
  font-size: 1.5rem;
}

.home-icon {
  position: absolute;
  bottom: 20px;
  left: calc(50% - 24px);
  font-size: 3rem;
  cursor: pointer;
  animation: bounce 1s infinite alternate;
  -webkit-animation: bounce 1s infinite alternate;
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
</style>
