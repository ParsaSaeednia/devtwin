<template>
  <main class="container home">
    <p>We are <span>Backend</span> & <span>Frontend</span> Developers with Exprience developing web-based platforms</p>
  </main>
</template>

<style scoped>
  .home {
    display: grid;
    min-height: 60vh;
    align-content: end;
    padding-block: clamp(24px, 6vh, 64px);
  }

  p {
    color: var(--color-21, #212121);
    font-size: clamp(18px, 2.2vw, 26px);
    font-style: normal;
    font-weight: 300;
  }

  span {
    font-weight: bold;
  }

  @media screen and (max-width: 1024px) {
  }
</style>
