<template>

  <nav class="navbar sticky-top navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand text-primary" href="/"><span class="fs-4"><i class="fa-solid fa-house"></i> App</span></a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse text-right" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

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
  font-size: 1rem;
  font-weight:300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: rgba(0, 0, 0, .1);
}
</style>
