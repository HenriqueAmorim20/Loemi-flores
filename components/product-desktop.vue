<template>
  <div class="main" id="product-desktop">{{ product.name }}</div>
</template>

<script>
export default {
  name: "ProductDesktopComponent",
  props: {
    product: {
      type: Object,
      default: null,
      required: true,
    },
  },
};
</script>
