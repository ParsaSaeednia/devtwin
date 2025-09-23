import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Parsa from "../views/Parsa.vue";
import Parham from "../views/Parham.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "DevTw.in – Home",
      description: "Parham & Parsa Saeednia – Backend and Frontend developers building performant web platforms.",
      canonical: "https://devtw.in/",
    },
  },
  {
    path: "/Parsa",
    name: "Parsa",
    component: Parsa,
    meta: {
      title: "Parsa Saeednia – Frontend Engineer | DevTw.in",
      description: "Frontend Engineer skilled in Vue.js, Next.js, TypeScript, and TailwindCSS.",
      canonical: "https://devtw.in/Parsa",
    },
  },
  {
    path: "/Parham",
    name: "Parham",
    component: Parham,
    meta: {
      title: "Parham Saeednia – Backend Engineer | DevTw.in",
      description: "Backend Engineer specialized in scalable architectures, Nest.js, Docker, and Microservices.",
      canonical: "https://devtw.in/Parham",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  const meta = to.meta || {};
  if (meta.title) document.title = meta.title;

  if (meta.description) {
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", meta.description);
  }

  if (meta.canonical) {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", meta.canonical);
  }

  // JSON-LD structured data
  // Remove old
  document.querySelectorAll('script[type="application/ld+json"]').forEach((n) => n.remove());
  // Add Organization
  const addLd = (data) => {
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.text = JSON.stringify(data);
    document.head.appendChild(s);
  };
  addLd({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DevTw.in",
    url: meta.canonical || "https://devtw.in/",
    logo: "https://devtw.in/logo.jpg",
  });
  if (to.name === "Parsa") {
    addLd({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Parsa Saeednia",
      jobTitle: "Frontend Engineer",
      url: "https://devtw.in/Parsa",
      sameAs: ["https://github.com/parsasaeednia", "https://www.linkedin.com/in/parsa-saeednia-5a11a6174/"],
    });
  } else if (to.name === "Parham") {
    addLd({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Parham Saeednia",
      jobTitle: "Backend Engineer",
      url: "https://devtw.in/Parham",
      sameAs: ["https://github.com/parhamsaeednia", "https://www.linkedin.com/in/parham-saeednia-a88a30196/"],
    });
  }
});

export default router;
