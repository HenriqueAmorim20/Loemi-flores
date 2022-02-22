<template>
  <div class="main" :id="product.to">
    <v-row
      class="product"
      :style="product.position ? 'flex-direction: row-reverse !important;' : ''"
    >
      <v-col cols="6" class="product-img">
        <!-- Slider main container -->
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
      </v-col>
      <v-col cols="6" class="product-info">
        <div class="product-info-verbete">
          <span class="product-info-verbete-title">{{ product.name }}</span>
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
          <v-btn light class="product-info-verbete-btn">
            <span>Comprar</span>
          </v-btn>
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
  },
  data() {
    return {
      index: 0,
      img: null,
    };
  },
  mounted() {
    // Set current img to first image of product
    this.img = this.product.imgs[0];

    // Swipper init and options
    new Swiper(".swiper", {
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      speed: 1000,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        color: '#706063',
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
  methods: {
    // Change index of the current img
    changeImg(n) {
      this.index = this.index + n;
      this.img = this.product.imgs[this.index];
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
  top: 15px;
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
  width: 150px;
}

.product-info-verbete-btn span {
  color: #706063 !important;
  font-size: 1.2rem;
}

.product-info-verbete-btn:hover {
  background-color: #706063 !important;
  transition: 0.7s all ease !important;
}

.product-info-verbete-btn:hover span {
  color: #fff !important;
  transition: 0.7s all ease !important;
}
</style>

