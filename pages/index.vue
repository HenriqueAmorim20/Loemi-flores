<template>
  <div id="index">
    <Home :width="width"/>
    <About />
  </div>
</template>

<script>
import Home from "~/sections/home.vue";
import About from "~/sections/about.vue";

export default {
  name: 'IndexPage',
  components: {
    Home,
    About,
  },
  data() {
    return {
      width: null,
    }
  },
  mounted() {
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
  }
}
</script>
