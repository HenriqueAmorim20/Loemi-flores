<template>
  <div id="navbar">
    <NavDesktop />
    <NavMobile />
  </div>
</template>

<script>
import NavDesktop from "./nav-desktop.vue";
import NavMobile from "./nav-mobile.vue";

export default {
  name: 'NavbarLayout',
  components: {
    NavDesktop,
    NavMobile,
  }
}
</script>
