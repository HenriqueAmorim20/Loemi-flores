<template>
  <div class="main" id="products">
    <div v-if="width > 950">
      <ProductDesktop
        v-for="product in products"
        :key="product.name"
        :product="product"
      />
    </div>
    <div v-if="width <= 950">
      <ProductMobile
        v-for="product in products"
        :key="product.name"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductDesktop from "~/components/product-desktop.vue";
import ProductMobile from "~/components/product-mobile.vue";

export default {
  name: "ProductsSection",
  components: {
    ProductDesktop,
    ProductMobile,
  },
  props: {
    width: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      products: [
        {
          name: "mo.no.cro.ma",
          about: "monocromática; colorida; astral; moderna.",
          desc: ["caixa redonda;"],
          dimensions: ["12x12x12;"],
          price: 147,
          position: false,
          to: "monocroma",
          imgs: [
            "flower-1.png",
            "flower-2.png",
            "flower-3.png",
            "flower-4.png",
            "flower-5.png",
          ],
        },
        {
          name: "ca.li.ne",
          about: "carinhosa; alcoólica; romântica; sutil.",
          desc: [
            "caixa quadrada;",
            "creme;",
            "mini buquê;",
            "mini espumante;",
            "as flores variam de acordo com a disponibilidade;",
          ],
          dimensions: ["15x15x12;"],
          price: 280,
          position: true,
          to: "caline",
          imgs: [
            "flower-5.png",
            "flower-2.png",
            "flower-3.png",
            "flower-4.png",
            "flower-1.png",
          ],
        },
        {
          name: "sur.pris",
          about: "surpreendente; encantada; sofisticada; inesperada.",
          desc: [
            "caixa surpresa;",
            "contém uma caixa quadrada em seu interior para ser retirada;",
          ],
          dimensions: [
            "25x25x35 (caixa surpresa);",
            "14x14x11 (caixa quadrada);",
          ],
          price: 350,
          position: false,
          to: "surpris",
          imgs: [
            "flower-2.png",
            "flower-1.png",
            "flower-3.png",
            "flower-4.png",
            "flower-5.png",
          ],
        },
        {
          name: "e.le.gan.ce",
          about: "elegante; nobre; única; pura arte.",
          desc: [
            "caixa redonda;",
            "consultar cores disponíveis;",
            "as flores variam de acordo com a disponibilidade;",
          ],
          dimensions: ["15x15x12;"],
          price: 240,
          position: true,
          to: "elegance",
          imgs: [
            "flower-3.png",
            "flower-2.png",
            "flower-1.png",
            "flower-4.png",
            "flower-5.png",
          ],
        },
        {
          name: "bou.quet",
          about: "clássico; espontâneo; memorável; não precisa de ocasião.",
          desc: ["aproximadamente 20 hastes;"],
          dimensions: [],
          price: 250,
          position: false,
          to: "bouquet",
          imgs: [
            "flower-4.png",
            "flower-2.png",
            "flower-3.png",
            "flower-1.png",
            "flower-5.png",
          ],
        },
      ],
    };
  },
};
</script>
