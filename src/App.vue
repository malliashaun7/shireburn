<template>

  <div class="bg-light">

    <div class="container">

      <header class="d-flex flex-wrap justify-content-center py-3 mb-4">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <span class="fs-4"><i class="fa-solid fa-house"></i> App</span>
        </a>

        <ul class="nav nav-pills">
          <li class="nav-item"><a href="/" class="nav-link active" aria-current="page">Home</a></li>
        </ul>
      </header>

    </div>
    
  </div>

  <main class="mt-5">
    <router-view></router-view>
  </main>

</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: rgba(0, 0, 0, .1);
}
</style>
