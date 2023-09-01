<script>

export default{
  data() {
    return {
      links: [
        {
          route:'home',
          name:'Home'
        },
        {
          route:'projects.index',
          name:'List projects'
        },
      ]
    }
  },
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mb-5">
  <div class="container">
      <div class="d-flex justify-content-around">
        <a class="navbar-brand" href="#">Vite-Boolfolio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav d-flex align-items-center">
          <li class="nav-item mx-2" v-for="link in links">
            <router-link class="text-decoration-none" :to="{ name: link.route }">
              {{ link.name }}
            </router-link>
          </li>
          <form class="d-flex ms-5" role="search">
               <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
               <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </ul>
      </div>
  </div>
</nav>
</template>

<style lang="scss" scoped>
</style>
