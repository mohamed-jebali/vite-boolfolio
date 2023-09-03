<script>

export default{
  data() {
    return {
      links: [
        {
          route:'home',
          name:'Vite'
        },
        {
          route:'projects.index',
          name:'List projects'
        },
        {
          route: 'home',
          name:'Home'
        },
      ],
  }
}
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mb-5">
  <div class="container">
      <div class="d-flex justify-content-around py-3">
        <div class="wrapper-link"  v-for="link in links">
          <router-link class="navbar-brand text-decoration-none text-white" :to="{ name: link.route['home'] }">
              {{ link.name['Vite'] }}
          </router-link>
        </div>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav d-flex align-items-center">
          <li class="nav-item mx-2" v-for="link in links">
            <router-link class="text-decoration-none" :to="{ name: link.route }">
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>
  </div>
</nav>
</template>

<style lang="scss" scoped>
</style>
