<template>
  <section>
    <div class="videoContainer">
      <video autoplay muted loop width="100%" height="100%"  poster="/video/monkey.png">
        <source src="/video/monkey.mp4"  type="video/mp4" />
        <source src="/video/monkey.webm"  type="video/webm" />
        <source src="/video/monkey.ogv"  type="video/ogg" />
        <object  width="100%" height="100%" type="application/x-shockwave-flash" data="assets/player.swf">
          <param name="movie" value="/video/player.swf" />
          <param name="flashvars" value="autostart=true&amp;controlbar=over&amp;image=__POSTER__.JPG&amp;file=/monkey.mp4" />
          <img src="/video/monkey.png" width="100%" height="100%" />
        </object>
      </video>
      <div class="overflow"></div>
    </div>
    <div>
      <logo/>
      <h1 class="title">
        rhm
      </h1>
      <h2 class="subtitle">
        {{ $t('home.introduction') }}
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
      <nuxt-link to="/about">About page</nuxt-link>

    </div>
  </section>
</template>

<!--<style lang="scss" src="~/assets/csindex.scss"></style>
<script src="~/assets/js/index.js"></script>-->
