<template>
  <div class="papelaria" id="papelaria">
    <!-- Galeria de fotos da papelaria -->
    <span class="papelaria-title">nossa papelaria</span>
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
}

.papelaria-title {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b69ca1;
  color: #fff;
  text-transform: uppercase;
  font-size: clamp(1.5rem, 2vw, 2rem);
  text-align: center;
  padding: 1rem;
}

.papelaria-img {
  aspect-ratio: 1;
  width: 100%;
  object-position: center;
  object-fit: cover;
}
/* Fim papelaria */

/* Inicio media queries */
@media (max-width: 900px) {
  .papelaria {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 450px) {
  .papelaria {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 1fr;
  }
}
/* Fim media queries */
</style>
