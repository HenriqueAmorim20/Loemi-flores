<template>
  <footer id="footer" class="footer">
    <!-- Informacoes e links da Loemi -->
    <section class="footer-info">
      <a
        class="footer-info-link"
        :href="'https://wa.me/5561981771264?text=' + message"
        target="_blank"
        rel="noopener noreferrer"
      >
        <v-icon class="footer-info-link-icon" color="#706063">
          mdi-whatsapp
        </v-icon>
        <span class="footer-info-link-text">(61) 98177-1264</span>
      </a>
      <a
        class="footer-info-link"
        href="https://www.instagram.com/loemiflores/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <v-icon class="footer-info-link-icon" color="#706063">
          mdi-instagram
        </v-icon>
        <span class="footer-info-link-text">@loemiflores</span>
      </a>
    </section>

    <!-- Informacoes de direitos autorais -->
    <section class="footer-copyright">
      All rights reserved LOEMI &copy; {{ new Date().getFullYear() }}
    </section>

    <!-- Informacoes sobre o desenvolvedor do site -->
    <section class="footer-creator">
      <a
        class="footer-creator-link"
        href="http://melohenrique.com"
        target="_blank"
        rel="noopener noreferrer"
        >Created By: Henrique Melo
      </a>
      <a
        class="footer-creator-link"
        href="https://www.linkedin.com/in/henriqueamorim20/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <v-icon class="footer-creator-link-icon" color="#706063">
          mdi-linkedin
        </v-icon>
      </a>
      <a
        class="footer-creator-link"
        href="https://github.com/HenriqueAmorim20"
        target="_blank"
        rel="noopener noreferrer"
      >
        <v-icon class="footer-creator-link-icon" color="#706063">
          mdi-github
        </v-icon>
      </a>
    </section>
  </footer>
</template>
<script>
export default {
  name: "FooterLayout",
  data() {
    return {
      message: "Olá, tudo bem? Gostaria de tirar umas dúvidas com você :)",
    };
  },
};
</script>
<style scoped>
/* Inicio footer */
.footer {
  display: grid;
  grid-template-areas: "info copy creator";
  gap: 1.5rem;
  padding: 1rem 2rem 2rem;
}

.footer-info,
.footer-copyright,
.footer-creator,
a {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.footer-info {
  grid-area: info;
}

.footer-copyright {
  grid-area: copy;
  justify-content: center;
}

.footer-creator {
  grid-area: creator;
  justify-content: flex-end;
}

.footer-creator-link {
  margin: 0 0 0 1rem;
  color: #706063;
}

.footer-info-link {
  margin: 0 1rem 0 0;
}

.footer-info-link-icon {
  margin: 0 0.5rem 0 0;
}
/* Fim footer */

/* Inicio media queries */
@media (max-width: 850px) {
  .footer {
    grid-template-areas:
      "info copy"
      "none creator";
  }

  .footer-copyright {
    justify-content: flex-end;
  }
}

@media (max-width: 600px) {
  .footer {
    grid-template-areas:
      "info"
      "copy"
      "creator";
    padding: 1rem 1rem 2rem;
  }

  .footer-copyright,
  .footer-info,
  .footer-creator {
    justify-content: center;
  }
}
/* Fim media queries */
</style>
