<template>
  <div class="papelaria">
    <h1 class="papelaria-title">nossa papelaria</h1>
    <v-img
      class="papelaria-img"
      v-for="index in 7"
      :key="index"
      :src="require(`@/static/papelaria/${index}.png`)"
    />
  </div>
</template>
<script>
export default {
  name: "PapelariaSection",
};
</script>
<style scoped>
.papelaria {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
  padding: 0.75rem !important;
}

.papelaria-title {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b69ca1;
  color: #fff;
  text-transform: uppercase;
  font-weight: normal;
  font-size: clamp(1.4rem, 2rem, 2.5rem);
  text-align: center;
  margin: 0 auto !important;
  width: 100%;
  padding: 1rem !important;
}
.papelaria-img {
  aspect-ratio: 1;
}

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
</style>
