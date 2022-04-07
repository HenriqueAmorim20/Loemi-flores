<template>
  <div class="papelaria" id="papelaria">
    <!-- Galeria de fotos da papelaria -->
    <div class="papelaria-title">
      <span class="papelaria-title-name">nossa papelaria</span>
      <span class="papelaria-title-desc">
        Todos os nossos produtos acompanham uma plaquinha escrita a mão que
        expressa o desejo que acompanhará as flores, e um cartão em papel
        especial, também escrito à mão, cuidadosamente lacrado com fita
        artesanal e lacre de cera.
      </span>
    </div>
    <img
      class="papelaria-img"
      v-for="index in 7"
      :key="index"
      :src="`/papelaria/${index}.png`"
    />
  </div>
</template>
<script>
export default {
  name: "PapelariaSection",
};
</script>
<style scoped>
/* Inicio papelaria */
.papelaria {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
  padding: 0.75rem;
  max-width: 1920px;
  margin: 0 auto;
}

.papelaria-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #b69ca1;
  text-align: center;
  padding: 1rem;
}

.papelaria-title-name {
  color: #fff;
  text-transform: uppercase;
  font-size: 2.2rem;
  /* font-size: clamp(1.5rem, 2vw, 2rem); */
}

.papelaria-title-desc {
  color: #fff;
  font-size: 1.2rem;
}

.papelaria-img {
  aspect-ratio: 1;
  width: 100%;
  object-position: center;
  object-fit: cover;
}
/* Fim papelaria */

/* Inicio media queries */
@media (max-width: 1420px) {
  .papelaria-title-name {
    font-size: 2rem;
  }
  .papelaria-title-desc {
    font-size: 1.1rem;
  }
}
@media (max-width: 1300px) {
  .papelaria-title-name {
    font-size: 1.8rem;
  }
  .papelaria-title-desc {
    font-size: 1rem;
  }
}
@media (max-width: 1200px) {
  .papelaria-title-name {
    font-size: 1.5rem;
  }
  .papelaria-title-desc {
    font-size: 0.9rem;
  }
}
@media (max-width: 1050px) {
  .papelaria {
    grid-template-columns: repeat(2, 1fr);
  }

  .papelaria-title-name {
    font-size: 2rem;
  }
  .papelaria-title-desc {
    font-size: 1.3rem;
  }
}

@media (max-width: 700px) {
  .papelaria-title-name {
    font-size: 1.7rem;
  }
  .papelaria-title-desc {
    font-size: 1rem;
  }
}

@media (max-width: 575px) {
  .papelaria {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 1fr;
  }
  .papelaria-title-name {
    font-size: 1.8rem;
  }
  .papelaria-title-desc {
    font-size: 1.1rem;
  }
}
/* Fim media queries */
</style>
