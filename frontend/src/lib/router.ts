import { createRouter } from 'sv-router';
import Home from '../pages/Home.svelte';
import SignUp from '../pages/SignUp.svelte';
import Login from '../pages/Login.svelte';

export const { p, navigate, isActive, route } = createRouter({
	'/': Home,
	'/sign-up': SignUp,
	'/login': Login
});