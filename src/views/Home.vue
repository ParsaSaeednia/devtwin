<template>
  <main class="container home">
    <h1 class="visually-hidden">DevTw.in – Parham & Parsa Saeednia</h1>
    <p class="animate-in">
      We are <span class="highlight backend">Backend</span> & 
      <span class="highlight frontend">Frontend</span> Developers 
      with Experience developing web-based platforms
    </p>
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
    line-height: 1.8;
    max-width: 680px;
  }

  /* Staggered entrance animation */
  .animate-in {
    animation: slideInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    animation-delay: 0.15s;
    opacity: 0;
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Highlighted text with underline animation */
  .highlight {
    font-weight: 700;
    position: relative;
    display: inline-block;
  }

  .highlight::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 0;
    height: 2px;
    background-color: #212121;
    transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .highlight:hover::after {
    width: 100%;
  }

  .backend {
    animation: fadeHighlight 0.6s ease forwards;
    animation-delay: 0.6s;
    opacity: 0.7;
  }

  .frontend {
    animation: fadeHighlight 0.6s ease forwards;
    animation-delay: 0.75s;
    opacity: 0.7;
  }

  @keyframes fadeHighlight {
    to {
      opacity: 1;
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
