<template>
  <div class="products">
    <!-- Iteracao de produtos -->
    <div
      class="product"
      v-for="(product, index) in products"
      :key="index"
      :style="reverseRow(product)"
      :id="product.name"
    >
      <!-- Slide de imagens do produto -->
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
              class="swiper-slide-img"
            />
          </div>
        </div>
        <!-- pagination -->
        <div class="swiper-pagination"></div>

        <!-- navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>

      <!-- Informacoes sobre o produto -->
      <div class="information">
        <span class="information-title">{{ product.title }}</span>
        <span class="information-about">
          {{ product.about }}
        </span>
        <div class="information-desc">
          <span
            class="information-desc-text"
            v-for="desc in product.desc"
            :key="desc"
          >
            {{ desc }}
          </span>
        </div>
        <div class="information-dimension">
          <span
            class="information-dimension-text"
            v-for="dimension in product.dimensions"
            :key="dimension"
          >
            {{ dimension }}
          </span>
        </div>
        <div
          v-for="(price, index) of product.prices"
          :key="index"
          class="information-price"
        >
          <span class="information-price-value">R$ {{ price.value }},00</span>
          <span class="information-price-desc">{{ price.desc }}</span>
        </div>
        <a
          class="information-btn"
          :href="'https://wa.me/5561981771264?text=' + getMessage(product.name)"
          target="_blank"
          rel="noopener noreferrer"
        >
          Comprar
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductsSection",
  data() {
    return {
      products: [
        {
          name: "monocroma",
          title: "mo.no.cro.ma",
          about: "monocromática; colorida; astral; moderna.",
          desc: ["caixa redonda;"],
          dimensions: ["12x12x12;"],
          prices: [
            {
              value: 197,
              desc: null,
            },
          ],
          qtdImgs: 6,
        },
        {
          name: "surpris",
          title: "sur.pris",
          about: "surpreendente; encantada; sofisticada; inesperada.",
          desc: [
            "caixa surpresa;",
            "contém uma caixa quadrada em seu interior para ser retirada;",
            "finalizada com uma linda fita artesanal;",
            "as flores e cores podem variar dependendo das flores disponíveis no dia;",
          ],
          dimensions: [
            "25x25x35 (caixa surpresa);",
            "14x14x11 (caixa quadrada);",
          ],
          prices: [
            {
              value: 385,
              desc: null,
            },
          ],
          qtdImgs: 5,
        },
        {
          name: "elegance",
          title: "e.le.gan.ce",
          about: "elegante; nobre; única; pura arte.",
          desc: [
            "caixa redonda;",
            "as flores e cores podem variar dependendo das flores disponíveis no dia;",
          ],
          dimensions: ["15x15x12;"],
          prices: [
            {
              value: 320,
              desc: null,
            },
          ],
          qtdImgs: 5,
        },
        {
          name: "bouquet",
          title: "bou.quet",
          about: "clássico; espontâneo; memorável; não precisa de ocasião.",
          desc: [
            "embalados num mix de papéis de seda e tecido;",
            "lindamente finalizado com a leveza de uma fita artesanal;",
            "as flores e cores podem variar dependendo das flores disponíveis no dia;",
          ],
          dimensions: [],
          prices: [
            {
              value: 450,
              desc: "(aprox. 25 hastes)",
            },
          ],
          qtdImgs: 4,
        },
        {
          name: "caline",
          title: "ca.li.ne",
          about: "carinhosa; alcoólica; romântica; sutil.",
          desc: [
            "caixa quadrada;",
            "Acompanha um mini buquê e uma mini espumante;",
            "As flores e cores podem variar dependendo das flores disponíveis no dia;",
          ],
          dimensions: ["15x15x12;"],
          prices: [
            {
              value: 347,
              desc: null,
            },
          ],
          qtdImgs: 4,
        },
      ],
    };
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
  },
  methods: {
    // Methods that reverse odd columns
    reverseRow(product) {
      return this.products.indexOf(product) % 2 !== 0
        ? "flex-direction: row-reverse"
        : "";
    },

    // Returns message to send to whatsapp chat
    getMessage(name) {
      return (
        "Olá, tudo bem? Tenho interesse no produto " +
        name +
        ". Gostaria de mais informações :)"
      );
    },
  },
};
</script>
<style scoped>
/* Inicio produto */
.product {
  display: flex;
  max-height: 85vh;
  max-width: 1920px;
  margin: 0 auto;
}
/* Fim produto */

/* Inicio slide de imagens */
.swiper {
  width: 50%;
}

.swiper-slide-img {
  width: 100%;
  aspect-ratio: 1;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.swiper-pagination {
  position: absolute;
  top: 10px;
}

.swiper-pagination >>> .swiper-pagination-bullet {
  margin: 0 5px;
  width: 10px;
  height: 10px;
}

.swiper-pagination >>> .swiper-pagination-bullet-active {
  background-color: #706063;
}
/* Fim slide de imagens */

/* Inicio informacoes do produto */
.information {
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 2rem;
  margin: auto 0;
}

.information-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
}

.information-about {
  font-size: clamp(1.1rem, 2vw, 1.7rem);
}

.information-desc,
.information-dimension {
  display: flex;
  flex-wrap: wrap;
  font-size: clamp(0.9rem, 1.8vw, 1.2rem);
}

.information-desc {
  margin-top: 1.5rem;
}

.information-desc-text,
.information-dimension-text {
  margin-right: 0.5rem;
}

.information-price-value {
  font-size: clamp(1.5rem, 3vw, 2rem);
}

.information-price-desc {
  font-size: clamp(0.9rem, 2vw, 1.2rem);
}

.information-btn {
  border: 1px solid #7060636e;
  color: #706063;
  text-decoration: none;
  width: fit-content;
  padding: 0rem 1rem;
  margin: 1.5rem 0 0;
  text-transform: uppercase;
  transition: 0.3s ease;
  font-size: clamp(1.1rem, 2vw, 1.5rem);
}

.information-btn:hover {
  background-color: #706063;
  color: #fff;
}
/* Fim informacoes do produto */

/* Inicio media query para mobile */
@media (max-width: 700px) {
  .product {
    margin: 2rem auto;
    padding: 0 1rem;
    flex-direction: column !important;
    max-width: 400px;
    max-height: unset;
  }

  .swiper {
    width: 95%;
    margin-left: -0.5rem;
  }
  .swiper-slide-img {
    aspect-ratio: 0.65;
    object-fit: cover;
    object-position: center;
    box-shadow: 6px 6px 10px rgb(173, 173, 173);
  }

  .information {
    width: 95%;
    padding: 0 0.5rem 1rem 1rem;
    padding-bottom: 1rem;
    margin: -1.5rem 0 0 1.4rem;
    z-index: 2;
    background-color: #b69ca1;
    color: #fff;
    box-shadow: 6px 6px 10px rgb(173, 173, 173);
  }

  .information * {
    color: #fff;
  }

  .information-btn {
    border: 1px solid rgba(255, 255, 255, 0.493);
  }

  .information-btn:hover {
    background-color: transparent;
    color: #706063;
  }
}
/* Fim media query para mobile */
</style>
