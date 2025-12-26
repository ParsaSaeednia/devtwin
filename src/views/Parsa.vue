<template>
  <div>
    <main class="container profile">
      <h1 class="visually-hidden">Parsa Saeednia – Frontend Engineer</h1>
      <section>
        <router-link to="/" class="back-link animate-item" style="--delay: 0">
          <span class="back-arrow">&larr;</span>
          <span class="back-text">Back Home</span>
        </router-link>
        <p class="animate-item" style="--delay: 1">
          Results-driven Frontend Engineer with a passion for crafting seamless user interfaces for <b>+4 years</b>. Proficient in
          modern web technologies Such as <b>Vue.JS</b> & <b>ReactJS</b> to obtain the best looking platforms while maintaining
          the fastest performance
        </p>
        <h3 class="animate-item" style="--delay: 2">Technologies:</h3>
        <div class="tech-list">
          <h6 class="animate-item" style="--delay: 3">Vue.js</h6>
          <h6 class="animate-item" style="--delay: 4">Next.js</h6>
          <h6 class="animate-item" style="--delay: 5">Typescript</h6>
          <h6 class="animate-item" style="--delay: 6">TailwindCSS</h6>
          <h6 class="animate-item" style="--delay: 7">Git</h6>
        </div>
        <h3 class="animate-item" style="--delay: 8">Full CV:</h3>
        <a
          href="../../ParsaSaeednia.pdf"
          class="button animate-item"
          style="--delay: 9"
          target="_blank"
          rel="noopener"
          >Download</a
        >
      </section>
    </main>
    <footer class="animate-footer">
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

  section {
    display: flex;
    flex-direction: column;
    border-right: 2px dashed #212121;
    padding-right: clamp(16px, 2vw, 40px);
  }

  /* Staggered entrance animations */
  .animate-item {
    opacity: 0;
    transform: translateY(20px);
    animation: slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    animation-delay: calc(var(--delay) * 0.08s + 0.1s);
  }

  @keyframes slideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Back link styling */
  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    margin-bottom: 1em;
    transition: gap 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .back-link:hover {
    gap: 12px;
  }

  .back-arrow {
    display: inline-block;
    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .back-link:hover .back-arrow {
    transform: translateX(-4px);
  }

  .back-text {
    position: relative;
  }

  .back-text::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 1px;
    background-color: #212121;
    transition: width 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .back-link:hover .back-text::after {
    width: 100%;
  }

  p {
    margin: 0.5em 2em 1.5em 0;
    text-align: justify;
    line-height: 1.7;
  }

  h3 {
    font-size: clamp(18px, 2.2vw, 26px);
    font-weight: 200;
    margin: 0.5em 0;
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 16px;
    margin-bottom: 1em;
  }

  h6 {
    font-size: clamp(14px, 1.6vw, 16px);
    position: relative;
    padding-left: 12px;
  }

  h6::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    background-color: #212121;
    border-radius: 50%;
    opacity: 0.5;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  h6:hover::before {
    opacity: 1;
    transform: translateY(-50%) scale(1.5);
  }

  /* Button with smooth hover */
  a.button {
    border: 1px solid #212121;
    padding: 10px 20px;
    background-color: #fafafa;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    width: fit-content;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    transition: color 0.3s ease, background-color 0.3s ease, transform 0.2s ease;
  }

  a.button::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: #212121;
    transition: left 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    z-index: -1;
  }

  a.button:hover {
    color: #fafafa;
  }

  a.button:hover::before {
    left: 0;
  }

  a.button:active {
    transform: scale(0.97);
  }

  /* Footer animations */
  .animate-footer {
    opacity: 0;
    animation: fadeIn 0.5s ease forwards;
    animation-delay: 1s;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
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
    gap: 8px;
  }

  footer a {
    position: relative;
  }

  li {
    list-style: none;
    padding: 8px 20px;
    font-size: clamp(14px, 1.6vw, 16px);
    font-weight: 300;
    transition: font-weight 0.2s ease, transform 0.2s ease;
  }

  footer a::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 4px;
    width: 0;
    height: 1px;
    background-color: #212121;
    transition: width 0.3s ease, left 0.3s ease;
  }

  footer a:hover::after {
    width: 60%;
    left: 20%;
  }

  footer a:hover li {
    font-weight: 500;
    transform: translateY(-2px);
  }

  @media screen and (max-width: 1024px) {
    section {
      border-right: none;
      padding-right: 0;
    }

    p {
      font-size: 14px;
      margin-right: 0;
    }

    a.button {
      font-size: 14px;
      padding: 8px 16px;
    }

    .tech-list {
      gap: 4px 12px;
    }

    footer {
      position: relative;
      margin-top: 2em;
    }

    ul {
      flex-wrap: wrap;
    }

    li {
      padding: 8px 16px;
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
