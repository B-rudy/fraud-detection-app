import { logEvent, showNotification, validateEmail, validatePassword } from '.utils.js';

export function handleLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    if (validateEmail(email) && validatePassword(password)) {
        logEvent(`User logged in: ${email}`);
        showNotification('success', `Login Successful: ${email}`);
    } else {
        showNotification('error', 'Invalid credentials!');
    }
}

export function handleSignup() {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    if (!validateEmail(email) || !validatePassword(password)) {
        showNotification('error', 'Invalid email or password format.');
        return;
    }
    logEvent(`User signed up: ${name}`);
    showNotification('success', `Signup successful for ${name}`);
}