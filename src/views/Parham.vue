<template>
  <div>
    <main class="container profile">
      <h1 class="visually-hidden">Parham Saeednia – Backend Engineer</h1>
      <section>
        <router-link to="/">
          <span> &lt;&lt;back home </span>
        </router-link>
        <p>
          Seasoned Backend Engineer adept at designing and implementing <b>scalable</b> server <b>architectures</b>. Skilled in
          <b>Node JS</b>, database management, and <b>API development</b> to ensure optimal <b>performance</b> and reliability. A
          results-oriented professional committed to delivering efficient backend solutions for complex applications.
        </p>
        <h3>Technologies:</h3>
        <h6>Nest.js</h6>
        <h6>Docker</h6>
        <h6>Git</h6>
        <h6>Microservices</h6>
        <h3>Full CV:</h3>
        <a
          href="../../ParhamSaeednia.pdf"
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
          href="https://github.com/parhamsaeednia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>Github</li>
        </a>
        <a
          href="https://www.linkedin.com/in/parham-saeednia-a88a30196/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>linkedin</li>
        </a>
        <a
          href="mailto:saeedniaparham@gmail.com"
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
    gap: clamp(16px, 3vw, 32px);
    padding-block: 0;
    background: transparent;
    z-index: 2;
  }

  .image-container {
    padding-right: 56px;
  }

  section {
    display: flex;
    flex-direction: column;
    border-left: 2px dashed #212121;
    padding-left: clamp(16px, 2vw, 40px);
  }

  p {
    text-align: justify;
  }

  span {
    line-height: 4em;
    font-weight: 500;
  }

  span:hover {
    cursor: pointer;
  }

  h3 {
    font-size: clamp(18px, 2.2vw, 26px);
    font-weight: 200;
    margin: 1em 0;
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
