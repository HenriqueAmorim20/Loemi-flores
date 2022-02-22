<template>
  <div class="main">
    <span>
      Oops... Algo deu errado!
    </span>
    <NuxtLink to="/">
     <p>Voltar para a tela Inicial</p>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
}
span {
  font-size: 3rem;
  color: #706063 !important;
  text-align: center;
}

a {
  font-size: 1.5rem;
  color: #706063 !important;
  text-decoration-color: #706063 !important;
}
</style>
