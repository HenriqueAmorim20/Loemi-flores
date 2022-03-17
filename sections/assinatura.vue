<template>
  <div class="assinatura">
    <aside class="left">
      <v-img class="img" :src="require('@/static/slide/3.jpg')" />
    </aside>
    <section class="content">
      <h1>Assinatura floral</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
        adipisci repellendus iusto ad impedit, enim dolore earum, quaerat nam
        assumenda quis accusantium quos neque error dolorem consectetur sapiente
        eligendi recusandae.
      </p>
    </section>
    <aside class="right">
      <v-img class="img" :src="require('@/static/slide/2.jpg')" />
    </aside>
  </div>
</template>
<script>
export default {
  name: "AssinaturaSection",
};
</script>
<style scoped>
.assinatura {
  display: flex;
}

.img {
  max-width: 30vw !important;
  aspect-ratio: 1.5 !important;
}

.content {
  padding: 2rem !important;
}

.content h1 {
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-bottom: 1rem !important;
  letter-spacing: 4px;
}
.content p {
}
</style>
