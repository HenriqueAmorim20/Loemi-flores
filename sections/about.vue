<template>
  <div class="main" id="sobre">
    <v-row justify="center" align="center">
      <v-col class="about">
        <span class="about-logo">
          LOEMI
        </span>
        <span class="about-line">
          Minha mãe, Minha inspiração!
        </span>
        <span class="about-line">
          Ter uma mãe que exala charme, estilo e talento foi a melhor escola da minha vida.
        </span>
        <span class="about-line">
          E para criar uma
          marca tão sonhada, idealizada para exprimir beleza e arte, nada
          poderia ser diferente dela.
        </span>
        <span class="about-line">
          Loemi não é só meu ateliê de design
          floral, mas sim a minha alma, a minha arte e o meu cuidado em todos os
          detalhes.
        </span>
        <span class="about-line">
          Uma marca para florescer.
        </span>
        <span class="about-line">
           Nascemos juntas como mãe e filha,
          há 43 anos, e agora renasço com ela e quero cobrir de flores, de
          brilho e de beleza quem a receba.
        </span>
        <span class="about-name">
         Amanda Azevedo
        </span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "AboutSection",
};

</script>

<style scoped>
.main {
  background-color: #b69ca1;
}
.about {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px !important;
}

.about span {
  font-size: 1.2rem;
  color: #fff !important;
}

.about-line {
  margin-top: 20px !important;
}

.about-logo {
  font-size: 3rem !important;
  font-family: "cormorantLight" !important;
}

.about-name {
  margin-top: 10px !important;
  font-family: "assinatura" !important;
  font-size: 4.5rem !important;
}
</style>
