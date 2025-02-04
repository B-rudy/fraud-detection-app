import { loadPage } from '.utils.js';
import { handleLogin, handleSignup } from '.auth.js';

// Initialize the platform
loadPage('home');

// Example event listeners
document.getElementById('loginButton')?.addEventListener('click', handleLogin);
document.getElementById('signupButton')?.addEventListener('click', handleSignup);