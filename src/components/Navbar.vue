<template>
  <nav class="site-nav">
    <div class="container nav-inner">
      <router-link
        class="parham-container"
        to="/Parham"
      >
        <div>
          <span class="nav-title">Parham</span>
          <span class="nav-sub parham-hover-line">Go through</span>
        </div>
      </router-link>

      <router-link
        class="parsa-container"
        to="/Parsa"
      >
        <div>
          <span class="nav-title">Parsa</span>
          <span class="nav-sub parsa-hover-line">Go through</span>
        </div>
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
  .site-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9;
    background: linear-gradient(to bottom, var(--paper-bg) 60%, transparent);
    border-bottom: 2px dashed #212121;
  }

  .nav-inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1rem;
    padding-block: clamp(16px, 1vw, 32px);
  }

  /* Shared nav link styles */
  .parham-container,
  .parsa-container {
    position: relative;
    overflow: hidden;
  }

  .nav-title {
    font-size: clamp(24px, 6vw, 68px);
    font-weight: 200;
    line-height: 1.1;
    color: #606060;
    display: block;
    transition: color 0.5s cubic-bezier(0.22, 1, 0.36, 1), 
                transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .nav-sub {
    font-size: clamp(12px, 2.2vw, 16px);
    font-weight: 300;
    line-height: 1.2;
    display: block;
    color: #606060;
    transition: color 0.5s cubic-bezier(0.22, 1, 0.36, 1), 
                padding-left 0.6s cubic-bezier(0.22, 1, 0.36, 1), 
                opacity 0.4s ease;
  }

  /* Hover effects for Parham */
  .parham-container:hover .nav-title,
  .parham-container:hover .nav-sub {
    color: #212121;
    cursor: pointer;
  }

  .parham-container:hover .nav-title {
    transform: translateX(4px);
  }

  .parham-hover-line {
    position: relative;
    padding-left: 0;
  }

  .parham-hover-line::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 6px;
    width: 0%;
    height: 2px;
    background-color: #212121;
    transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .parham-container:hover .parham-hover-line::before {
    width: 50%;
  }

  .parham-container:hover .parham-hover-line {
    padding-left: clamp(4em, 12vw, 11.5em);
  }

  /* Hover effects for Parsa */
  .parsa-container:hover .nav-title,
  .parsa-container:hover .nav-sub {
    color: #212121;
    cursor: pointer;
  }

  .parsa-container:hover .nav-title {
    transform: translateX(-4px);
  }

  .parsa-hover-line {
    position: relative;
    padding-left: 0;
  }

  .parsa-hover-line::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 6px;
    width: 0%;
    height: 2px;
    background-color: #212121;
    transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .parsa-container:hover .parsa-hover-line::before {
    width: 45%;
  }

  .parsa-container:hover .parsa-hover-line {
    padding-left: clamp(3em, 8vw, 7.1em);
  }

  /* Active state */
  .router-link-active .nav-title {
    color: #212121;
  }

  .router-link-active .nav-sub {
    opacity: 0;
    pointer-events: none;
  }

  /* Mobile - simplified interactions */
  @media screen and (max-width: 1024px) {
    .nav-title,
    .nav-sub {
      transition: color 0.3s ease;
    }

    .parham-container:hover .nav-title,
    .parsa-container:hover .nav-title {
      transform: none;
    }

    .parham-hover-line::before,
    .parsa-hover-line::before {
      display: none;
    }

    .parham-container:hover .parham-hover-line,
    .parsa-container:hover .parsa-hover-line {
      padding-left: 0;
    }

    .nav-sub {
      font-size: clamp(10px, 2vw, 14px);
    }
  }

  @media screen and (max-width: 480px) {
    .nav-title {
      font-size: clamp(20px, 8vw, 32px);
    }

    .nav-sub {
      display: none;
    }
  }
</style>
