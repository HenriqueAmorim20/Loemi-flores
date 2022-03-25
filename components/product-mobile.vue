<template>
  <div class="main" :id="product.name">
    <div class="product-img">
      <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div
            v-for="index in product.qtdImgs"
            :key="index"
            class="swiper-slide"
          >
            <img
              :src="`/${product.name}/${index}.png`"
              class="img"
            />
          </div>
        </div>
        <!-- pagination -->
        <div class="swiper-pagination"></div>

        <!-- navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
    <div class="product-verbete">
      <div class="product-verbete-info">
        <span class="product-verbete-title">{{ product.title }}</span>
        <span class="product-verbete-about">
          {{ product.about }}
        </span>
        <div class="product-verbete-desc">
          <span v-for="desc in product.desc" :key="desc">
            {{ desc }}
          </span>
        </div>
        <div class="product-verbete-dimension">
          <span v-for="dimension in product.dimensions" :key="dimension">
            {{ dimension }}
          </span>
        </div>
        <span class="product-verbete-price">R$ {{ product.price }},00</span>
        <a
          :href="'https://wa.me/5561981771264?text=' + getMessage()"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-btn class="product-verbete-btn"> <span>Comprar</span> </v-btn>
        </a>
      </div>
    </div>
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
  mounted() {
    // Swipper init and options
    new Swiper(".swiper", {
      speed: 1500,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    this.revealScroll();
  },
  methods: {
    revealScroll() {
      // Products
      ScrollReveal().reveal(".product-verbete-info", {
        delay: 100,
        duration: 1500,
        distance: "100px",
        origin: "bottom",
      });
    },
    // Returns message to send to whatsapp chat
    getMessage() {
      return (
        "Olá, tudo bem? Tenho interesse no produto " +
        this.product.name +
        ". Gostaria de mais informações :)"
      );
    },
  },
};
</script>

<style scoped>
.main {
  position: relative;
  padding: 0 !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto !important;
}

.product-img {
  position: relative;
  width: 100%;
  max-width: 400px !important;
  width: calc(100vw - 50px) !important;
  margin-left: -30px !important;
  aspect-ratio: 1 / 1.5 !important;
  box-shadow: 6px 6px 10px rgb(173, 173, 173);
}

.img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-pagination {
  position: absolute;
  top: 15px;
}

.swiper-pagination >>> .swiper-pagination-bullet {
  margin: 0 5px !important;
  width: 10px !important;
  height: 10px !important;
}

.swiper-pagination >>> .swiper-pagination-bullet-active {
  background-color: #706063;
}

.product-verbete {
  position: relative;
  padding: 0 15px !important;
  background-color: #b69ca1;
  box-shadow: 6px 6px 10px rgb(173, 173, 173);
  max-width: 400px !important;
  width: calc(100vw - 50px) !important;
  z-index: 1;
  margin: -30px -30px 0 0 !important;
}

.product-verbete-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-verbete-title {
  font-size: calc(3vw + 2rem);
  color: #fff !important;
}

.product-verbete-about {
  font-size: 1.3rem;
  color: #fff !important;
}

.product-verbete-desc {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 40px !important;
  font-size: 1.2rem;
}

.product-verbete-desc span {
  color: #fff !important;
  widows: "fit-content" !important;
  margin: 0 10px 0 0 !important;
}

.product-verbete-price {
  font-size: 2rem;
  color: #fff !important;
}

.product-verbete-dimension {
  display: flex;
  flex-wrap: wrap;
}

.product-verbete-dimension span {
  font-size: 1.2rem;
  color: #fff !important;
  margin-right: 15px !important;
}

a {
  text-decoration: none !important;
}

.product-verbete-btn {
  background: transparent !important;
  border: 1px solid #fff;
  color: #fff !important;
  margin: 50px 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  width: 150px;
}

.product-verbete-btn span {
  color: #fff !important;
  font-size: 1.2rem;
}
</style>
