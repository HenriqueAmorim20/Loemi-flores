<template>
  <div class="about" id="sobre">
    <!-- Texto sobre -->
    <div class="about-text">
      <span class="about-text-logo"> LOEMI </span>
      <span class="about-text-line"> Minha mãe, Minha inspiração! </span>
      <span class="about-text-line">
        Ter uma mãe que exala charme, estilo e talento foi a melhor escola da
        minha vida.
      </span>
      <span class="about-text-line">
        E para criar uma marca tão sonhada, idealizada para exprimir beleza e
        arte, nada poderia ser diferente dela.
      </span>
      <span class="about-text-line">
        Loemi não é só meu ateliê de design floral, mas sim a minha alma, a
        minha arte, o meu cuidado e todo o meu bem querer em cada
        detalhe.
      </span>
      <span class="about-text-line"> Uma marca para florescer. </span>
      <span class="about-text-line">
        Nascemos juntas como mãe e filha, há 43 anos, e agora renasço com ela e
        quero cobrir de flores, de brilho e de beleza quem a receba.
      </span>
      <span class="about-text-name"> Amanda Azevedo </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutSection",
};
</script>
<style scoped>
/* Inicio sobre */
.about {
  background-color: #b69ca1;
}

.about-text {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 0 auto;
}

.about-text-line {
  margin-top: 1rem;
}

.about-text-logo {
  font-size: clamp(2.5rem, 5vw, 3rem);
  font-family: "cormorantLight";
}

.about-text-name {
  font-family: "assinatura";
  font-size: clamp(3rem, 6vw, 4rem);
}

span {
  color: #fff;
  font-size: clamp(1rem, 2vw, 1.2rem);
}
/* Fim sobre */
</style>
