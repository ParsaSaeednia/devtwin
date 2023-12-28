// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Parsa from "../views/Parsa.vue";
import Parham from "../views/Parham.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/Parsa",
		name: "Parsa",
		component: Parsa,
	},
	{
		path: "/Parham",
		name: "Parham",
		component: Parham,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
