import { logEvent, generateUniqueId } from '.utils.js';

const alertLogs = [];

export function createAlert(message, severity) {
    const newAlert = {
        id: generateUniqueId(),
        message,
        severity,
        time: new Date()
    };
    alertLogs.push(newAlert);
    logEvent(`New alert created: ${message}`);
}

export function getAlertsBySeverity(severity) {
    return alertLogs.filter(alert => alert.severity === severity);
}
