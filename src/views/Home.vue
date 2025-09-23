<template>
  <main class="container home">
    <h1 class="visually-hidden">DevTw.in – Parham & Parsa Saeednia</h1>
    <p>We are <span>Backend</span> & <span>Frontend</span> Developers with Exprience developing web-based platforms</p>
  </main>
</template>

<style scoped>
  .home {
    display: grid;
    min-height: 60vh;
    align-content: end;
    padding-block: clamp(24px, 6vh, 64px);
    background: transparent;
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

  .visually-hidden {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
  }
</style>
