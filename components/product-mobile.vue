<template>
  <div class="main" :id="product.to">
    <div class="product-img">
      <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div v-for="img in product.imgs" :key="img" class="swiper-slide">
            <v-img
              :src="require(`~/static/${img}`)"
              position="center"
              width="100%"
              height="100%"
            ></v-img>
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
      <span class="product-verbete-title">{{ product.name }}</span>
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
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      speed: 1500,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      effect: "fade",
    });
  },
  methods: {

    // Returns message to send to whatsapp chat
    getMessage() {
      return (
        "Olá, tudo bem? Tenho interesse no produto " +
        this.product.to +
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

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-pagination {
  position: absolute;
  top: 15px;
}

.product-verbete {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px !important;
  background-color: #b69ca1;
  box-shadow: 6px 6px 10px rgb(173, 173, 173);
  max-width: 400px !important;
  width: calc(100vw - 50px) !important;
  z-index: 1;
  margin: -30px -30px 0 0 !important;
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
