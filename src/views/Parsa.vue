<template>
  <div>
    <main class="container profile">
      <h1 class="visually-hidden">Parsa Saeednia – Frontend Engineer</h1>
      <section>
        <router-link to="/">
          <span> &lt;&lt; Back Home</span>
        </router-link>
        <p>
          Results-driven Frontend Engineer with a passion for crafting seamless user interfaces for <b>+4 years</b>. Proficient in
          modern web technologies Such as <b>Vue.JS</b> & <b>ReactJS</b> to obtain the best looking platforms while maintaining
          the fastest performance
        </p>
        <h3>Technologies:</h3>
        <h6>Vue.js</h6>
        <h6>Nex t.js</h6>
        <h6>Typescript</h6>
        <h6>TailwindCSS</h6>
        <h6>Git</h6>
        <h3>Full CV:</h3>
        <a
          href="../../ParsaSaeednia.pdf"
          class="button"
          target="_blank"
          rel="noopener"
          >Download</a
        >
      </section>
    </main>
    <footer>
      <ul>
        <a
          href="https://github.com/parsasaeednia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>Github</li>
        </a>
        <a
          href="https://www.linkedin.com/in/parsa-saeednia-5a11a6174/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>linkedin</li>
        </a>
        <a
          href="mailto:p.parsa31@gmail.com"
          target="_blank"
          rel="noopener"
        >
          <li>mail</li>
        </a>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
  div {
    position: relative;
  }

  .profile {
    min-height: calc(100dvh - var(--nav-space) - 64px);
    display: grid;
    align-items: center;
    grid-template-columns: 1fr;
    gap: clamp(16px, 1vw, 32px);
    padding-block: 0;
    background: transparent;
    z-index: 2;
  }

  .image-container {
    padding-left: 56px;
  }

  section {
    display: flex;
    flex-direction: column;
    border-right: 2px dashed #212121;
    padding-right: clamp(16px, 2vw, 40px);
  }

  span {
    line-height: 2em;
    font-weight: 500;
  }

  p {
    margin: 1em 2em 1em 0;
    text-align: justify;
  }

  h3 {
    font-size: clamp(18px, 2.2vw, 26px);
    font-weight: 200;
    margin: 0.5em 0;
  }

  h6 {
    font-size: clamp(14px, 1.6vw, 16px);
  }

  a.button {
    border: 1px solid #212121;
    padding: 6px;
    background-color: #fafafa;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-transform: uppercase;
    width: fit-content;
    font-weight: 500;
  }

  footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 9;
    height: 64px;
    background: transparent;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li {
    list-style: none;
    padding: 0 24px;
    font-size: clamp(14px, 1.6vw, 16px);
    font-weight: 300;
  }

  li:hover {
    font-weight: 500;
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    img {
      width: 100px;
    }

    .image-container {
      display: none;
    }

    span {
      font-size: small;
    }

    p {
      font-size: 12px;
    }

    a.button {
      font-size: small;
    }
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
