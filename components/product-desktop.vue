<template>
  <div class="main" :id="product.name">
    <v-row
      class="product"
      :style="invert ? 'flex-direction: row-reverse !important;' : ''"
    >
      <v-col cols="6" class="product-img">
        <!-- Slider main container -->
        <div class="swiper">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div v-for="index in 4" :key="index" class="swiper-slide">
              <v-img
                :src="require(`~/static/${product.name}/${index}.png`)"
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
      </v-col>
      <v-col cols="6" class="product-info">
        <div class="product-info-verbete">
          <span class="product-info-verbete-title">{{ product.title }}</span>
          <span class="product-info-verbete-about">
            {{ product.about }}
          </span>
          <div class="product-info-verbete-desc">
            <span v-for="desc in product.desc" :key="desc">
              {{ desc }}
            </span>
          </div>
          <div class="product-info-verbete-dimension">
            <span v-for="dimension in product.dimensions" :key="dimension">
              {{ dimension }}
            </span>
          </div>
          <span class="product-info-verbete-price"
            >R$ {{ product.price }},00</span
          >
          <a
            :href="'https://wa.me/5561981771264?text=' + getMessage()"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-btn class="product-info-verbete-btn">
              <span>Comprar</span>
            </v-btn>
          </a>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Icon from "~/components/icon.vue";

export default {
  name: "ProductDesktopComponent",
  components: {
    Icon,
  },
  props: {
    product: {
      type: Object,
      default: null,
      required: true,
    },
    invert: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.revealScroll();

    // Swipper init and options
    new Swiper(".swiper", {
      // autoplay: {
      //   delay: 10000,
      //   disableOnInteraction: false,
      // },
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
        this.product.name +
        ". Gostaria de mais informações :)"
      );
    },

    revealScroll() {
      // Products
      ScrollReveal().reveal(".product-info-verbete-title", {
        delay: 0,
        duration: 2500,
        distance: "100px",
        origin: "bottom",
        reset: true,
      });
      ScrollReveal().reveal(".product-info-verbete-about", {
        delay: 150,
        duration: 2500,
        distance: "100px",
        origin: "bottom",
        reset: true
      });
      ScrollReveal().reveal(".product-info-verbete-desc", {
        delay: 300,
        duration: 2500,
        distance: "100px",
        origin: "bottom",
        reset: true
      });
      ScrollReveal().reveal(".product-info-verbete-dimension", {
        delay: 450,
        duration: 2500,
        distance: "100px",
        origin: "bottom",
        reset: true
      });
      ScrollReveal().reveal(".product-info-verbete-price", {
        delay: 600,
        duration: 2500,
        distance: "100px",
        origin: "bottom",
        reset: true
      });
      ScrollReveal().reveal(".product-info-verbete-btn", {
        delay: 600,
        duration: 2500,
        distance: "100px",
        origin: "bottom",
        reset: true
      });
    },
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-pagination {
  position: absolute;
  top: 10px;
}

.swiper-pagination >>> .swiper-pagination-bullet {
    margin: 0 5px !important;
    width: 10px !important;
    height: 10px !important;
}

.swiper-pagination >>> .swiper-pagination-bullet-active {
    background-color: #706063;
}

.product {
  width: 100%;
  height: 85vh;
}

.product-info {
  background-color: #dbc9cc;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-info-verbete {
  display: flex;
  flex-direction: column;
  padding: 0 70px 0 50px !important;
}

.product-info-verbete-title {
  font-size: 3.5rem;
  color: #706063 !important;
}

.product-info-verbete-about {
  font-size: 1.5rem;
  color: #706063 !important;
}

.product-info-verbete-desc {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 40px !important;
  font-size: 1.3rem;
}

.product-info-verbete-desc span {
  color: #706063 !important;
  widows: "fit-content" !important;
  margin: 0 20px 0 0 !important;
}

.product-info-verbete-dimension {
  display: flex;
  flex-wrap: wrap;
}

.product-info-verbete-dimension span {
  font-size: 1.3rem;
  color: #706063 !important;
  margin-right: 15px !important;
}

.product-info-verbete-price {
  font-size: 2rem;
  color: #706063 !important;
}

.product-info-verbete-btn {
  background: transparent !important;
  border: 1px solid #706063;
  color: #706063 !important;
  margin: 50px 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  min-width: 100px !important;
}

a {
  text-decoration: none !important;
}

.product-info-verbete-btn span {
  color: #706063 !important;
  font-size: 1.2rem;
  padding: 5px 30px !important;
}

.product-info-verbete-btn:hover {
  background-color: #706063 !important;
}

.product-info-verbete-btn:hover span {
  color: #fff !important;
}
</style>

