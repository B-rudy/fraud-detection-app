export function logEvent(message) {
    const logEntry = `[LOG]: ${new Date().toISOString()} - ${message}`;
    console.log(logEntry);
}

export function generateUniqueId() {
    return `ID-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export function validatePassword(password) {
    return password.length >= 8;
}

export function showNotification(type, message) {
    alert(`[${type.toUpperCase()}] ${message}`);
}

export function loadPage(page) {
    let html = '';
    switch (page) {
        case 'home':
            html = `<div class='card p-4'><h2>Home Page</h2><p>Welcome to the Fraud Detection Platform.</p></div>`;
            break;
        case 'analytics':
            renderFraudAnalyticsChart();
            return;
        default:
            html = `<div class='card p-4'><h2>Error</h2><p>Page Not Found.</p></div>`;
    }
    document.getElementById('content').innerHTML = html;
}