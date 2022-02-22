<template>
  <div class="main" id="product-mobile">
    {{ product.name }}
  </div>
</template>

<script>
export default {
  name: "ProductMobileComponent",
  props: {
    product: {
      type: Object,
      default: null,
      required: true,
    },
  },
};
</script>
