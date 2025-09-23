import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

// Handle static host redirects (e.g., GitHub Pages 404 redirect to /?redirect=/path)
try {
  const params = new URLSearchParams(window.location.search);
  const redirect = params.get("redirect");
  if (redirect && redirect.startsWith("/")) {
    const url = new URL(redirect, window.location.origin);
    window.history.replaceState({}, "", url.pathname + url.search + url.hash);
  }
} catch (_) {
  // no-op
}

createApp(App).use(router).mount("#app");
