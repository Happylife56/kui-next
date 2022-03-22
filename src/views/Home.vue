<template>
  <div class="home-text">
    <router-link to="/">
      Home
    </router-link>
    <router-link to="/about">
      About
    </router-link>
  </div>
</template>

<script>

</script>
<style lang="scss" scoped>
.home {
  @include flex-type(center, center);

  .about {
    color: #fff;
  }
}

</style>
