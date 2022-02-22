<template>
  <div class="main" id="products">
    <ProductDesktop />
    <ProductMobile />
  </div>
</template>

<script>
import ProductDesktop from "~/components/product-desktop.vue";
import ProductMobile from "~/components/product-mobile.vue";

export default {
  name: "ProductsSection",
  components: {
    ProductDesktop,
    ProductMobile
  },
  props: {
    width: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
    };
  },
};
</script>
