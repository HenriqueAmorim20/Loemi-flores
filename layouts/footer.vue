<template>
  <footer id="footer" class="footer">
    <section class="one">
      <a
        :href="'https://wa.me/5561981771264?text=' + getMessage()"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon class="icon" :icon="'wpp'" :width="25" :color="'#706063'" />
        <p>(61) 98177-1264</p>
      </a>
      <a
        href="https://www.instagram.com/loemiflores/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon class="icon" :icon="'insta'" :width="25" :color="'#706063'" />
        <p>@loemiflores</p>
      </a>
    </section>
    <section class="two">
      <span>
        All rights reserved LOEMI &copy; {{ new Date().getFullYear() }}
      </span>
    </section>
    <section class="three">
      <a
        href="http://melohenrique.com"
        target="_blank"
        rel="noopener noreferrer"
        >Created By: Henrique Melo
      </a>
      <a
        href="https://www.linkedin.com/in/henriqueamorim20/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon class="icon" :icon="'linkedin'" :width="20" :color="'#706063'" />
      </a>
      <a
        href="https://github.com/HenriqueAmorim20"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon class="icon" :icon="'github'" :width="20" :color="'#706063'" />
      </a>
    </section>
  </footer>
</template>

<script>
import Icon from "~/components/icon.vue";

export default {
  name: "FooterLayout",
  components: {
    Icon,
  },
  methods: {
    //Scrolls to the top of the page
    scroll() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },

    // Returns the message to sent in whatsapp chat
    getMessage() {
      return "Olá, tudo bem? Gostaria de tirar umas dúvidas com você :)";
    },
  },
};
</script>

<style scoped>
.footer {
  display: grid;
  grid-template-areas: "one two three";
  gap: 2rem;
  padding: 0.5rem 2rem !important;
  background-color: #ebebeb;
}

.one {
  grid-area: one;
  display: flex;
  align-items: center;
}

.one span {
  font-size: clamp(2rem, 3vw, 2.5rem);
  margin-right: 1rem !important;
}

.one a {
  display: flex;
  margin: 0 0.5rem !important;
  text-decoration: none;
}

.one p {
  margin-left: 0.5rem !important;
}

.two {
  grid-area: two;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}

.three {
  grid-area: three;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.three a {
  text-decoration: none;
  font-size: 1.1rem;
  color: #706063;
  margin: 0 0.5rem !important;
}

.icon {
  transition: transform 0.7s ease;
}

.icon:hover {
  transform: translateY(-5px);
}

@media (max-width: 950px) {
  .footer {
    grid-template-areas:
      "one"
      "two"
      "three";
    padding: 1rem !important;
  }

  .one,
  .two,
  .three {
    justify-content: flex-start;
  }
  .three a,
  .one a {
    margin: 0 0.5rem 0 0 !important;
  }
}
</style>
