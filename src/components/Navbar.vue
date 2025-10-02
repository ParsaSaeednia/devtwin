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
    background: transparent;
    border-bottom: 2px dashed #212121;
  }

  .nav-inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1rem;
    padding-block: clamp(16px, 1vw, 32px);
  }

  .nav-title {
    font-size: clamp(24px, 6vw, 68px);
    font-weight: 200;
    line-height: 1.1;
    color: #606060;
    display: block;
  }

  .nav-sub {
    font-size: clamp(12px, 2.2vw, 16px);
    font-weight: 300;
    line-height: 1.2;
    display: block;
    transition: color 1s ease, padding-left 1s ease, opacity 0.4s ease;
  }
  .parham-container {
    position: relative;
    overflow: hidden;
  }

  .parham-container:hover .nav-title,
  .parham-container:hover .nav-sub {
    transition: 1s ease;
    color: #212121;
    cursor: pointer;
  }

  .parham-container .nav-title,
  .parham-container .nav-sub {
    transition: color 1s ease, padding-left 1s ease, opacity 0.4s ease;
  }

  .parham-hover-line {
    position: relative;
    padding-left: 0em;
    transition: color 1s ease, padding-left 1s ease;
  }

  .parham-hover-line::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 8px;
    width: 0%;
    height: 2px;
    background-color: #212121;
    transition: width 1s ease;
  }

  .parham-container:hover .parham-hover-line::before {
    width: 55%;
  }

  .parham-container:hover .parham-hover-line {
    padding-left: 11.5em;
  }
  .parsa-container {
    position: relative;
    overflow: hidden;
  }

  .parsa-container:hover .nav-title,
  .parsa-container:hover .nav-sub {
    transition: 1s ease;
    color: #212121;
    cursor: pointer;
  }

  .parsa-container .nav-title,
  .parsa-container .nav-sub {
    transition: color 1s ease, padding-left 1s ease, opacity 0.4s ease;
  }

  .parsa-hover-line {
    position: relative;
    padding-left: 0em;
    transition: color 1s ease, padding-left 1s ease;
  }

  .parsa-hover-line::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 8px;
    width: 0%;
    height: 2px;
    background-color: #212121;
    transition: width 1s ease;
  }

  .parsa-container:hover .parsa-hover-line::before {
    width: 45%;
  }

  .parsa-container:hover .parsa-hover-line {
    padding-left: 7.1em;
  }

  .router-link-active .nav-title {
    color: #212121;
  }

  .router-link-active .nav-sub {
    opacity: 0;
  }

  @media screen and (max-width: 1024px) {
    .parham-container:hover .nav-title,
    .parham-container:hover .nav-sub {
      transition: none;
      color: #212121;
      cursor: pointer;
    }

    .parham-container .nav-title,
    .parham-container .nav-sub {
      transition: none;
    }

    .parham-hover-line {
      position: relative;
      transition: none;
    }

    .parham-hover-line::before {
      transition: none;
    }

    .parham-container:hover .parham-hover-line::before {
      width: 0%;
    }

    .parham-container:hover .parham-hover-line {
      padding-left: 0;
    }

    .parsa-container:hover .nav-title,
    .parsa-container:hover .nav-sub {
      transition: none;
      color: #212121;
      cursor: pointer;
    }

    .parsa-container .nav-title,
    .parsa-container .nav-sub {
      transition: none;
    }

    .parsa-hover-line {
      position: relative;
      transition: none;
    }

    .parsa-hover-line::before {
      transition: none;
    }

    .parsa-container:hover .parsa-hover-line::before {
      width: 0%;
    }

    .parsa-container:hover .parsa-hover-line {
      padding-left: 0;
    }
  }
</style>
