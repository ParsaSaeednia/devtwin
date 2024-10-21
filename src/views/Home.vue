<template>
  <main>
    <p>We are <span>Backend</span> & <span>Frontend</span> Developers with Exprience developing web-based platforms</p>
  </main>
</template>

<style scoped>
  main {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 70vh;
    padding: 46px 208px;
  }

  p {
    position: absolute;
    bottom: 0;
    color: var(--color-21, #212121);
    /* Helvetica Neue/26px: Light */
    font-size: 26px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }

  span {
    font-weight: bold;
  }

  @media screen and (max-width: 1024px) {
    main {
      padding-left: 3em;
      padding-right: 3em;
    }
  }
</style>
