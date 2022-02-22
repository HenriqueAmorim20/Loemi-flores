<template>
  <footer id="footer">
    <v-row class="footer" justify="center">
      <v-col class="footer-logo" cols="4">
        <span>LOEMI</span>
        <div class="footer-logo-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Icon :icon="'insta'" :width="30" :color="'#706063'" />
            <span>(61) 99999-99999</span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Icon :icon="'wpp'" :width="30" :color="'#706063'" />
            <span>@loemiflores</span>
          </a>
        </div>
      </v-col>
      <v-col class="footer-text" cols="4">
        <span> All rights reserved &copy; {{ new Date().getFullYear() }} </span>
      </v-col>
      <v-col class="footer-creator" cols="4">
        <v-spacer></v-spacer>
        <span>Created By: <b>Henrique Melo</b></span>
        <div class="footer-creator-icons">
          <a
            href="https://www.linkedin.com/in/henriqueamorim20/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon :icon="'linkedin'" :width="25" :color="'#706063'" />
          </a>
          <a
            href="https://github.com/HenriqueAmorim20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon :icon="'github'" :width="25" :color="'#706063'" />
          </a>
        </div>
      </v-col>
    </v-row>
  </footer>
</template>

<script>
import Icon from "~/components/icon.vue";

export default {
  name: "FooterLayout",
  components: {
    Icon,
  },
};
</script>

<style scoped>
.footer {
  /* background-color: #b69ca1 !important; */
  padding: 0 2% 15px 5% !important;
}

span {
  color: #706063 !important;
}

a {
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 2px !important;
  margin: 0 0 0 10px !important;
  transition: 0.7s all ease;
}

a:hover {
  transform: translate(0, -10px);
  transition: 0.7s all ease;
}

.footer-logo {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-width: 300px;
  margin: 20px 0 0 !important;
}

.footer-logo span {
  font-size: 3rem;
  margin-right: 20px !important;
}

.footer-logo-icons {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.footer-logo-icons span {
  font-size: 1.1rem !important;
  margin-left: 5px !important;
}

.footer-text {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  min-width: 300px !important;
  margin: 20px 0 0 !important;
}

.footer-text span {
  font-size: 1.3rem;
  margin-right: 0px !important;
}

.footer-creator {
  display: flex;
  align-items: center;
  /* justify-content: flex-end; */
  flex-wrap: wrap;
  min-width: 300px;
  margin: 20px 0 0 !important;
}

.footer-creator span {
  display: flex;
  align-items: center;
  margin: 5px 20px 0 0 !important;
}

.footer-creator b {
  margin: 0 0 0 10px !important;
}

.footer-creator-icons {
  display: flex;
  align-items: center;
}
</style>
