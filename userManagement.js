import { logEvent, showNotification, generateUniqueId } from '.utils.js';

const userData = [];

export function createUser(name, email, password, role = 'user') {
    const user = {
        id: generateUniqueId(),
        name,
        email,
        password,
        role,
        createdAt: new Date(),
        lastLogin: null,
        isActive: true
    };
    userData.push(user);
    logEvent(`User created: ${name}`);
    showNotification('success', `User created: ${name}`);
}

export function listAllUsers() {
    return userData.map(u => `${u.name} (${u.email}) - Role: ${u.role}`).join('\n');
}