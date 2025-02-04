import { logEvent, generateUniqueId } from './utils.js';

const fraudPatterns = ['High-Risk Zone', 'Unknown Location'];

export function detectFraud(transaction) {
    const { amount, location, time, userId } = transaction;
    let riskScore = 0;
    if (amount > 10000) riskScore += 50;
    if (fraudPatterns.includes(location)) riskScore += 30;
    if (new Date(time).getHours() < 3) riskScore += 20;
    if (riskScore > 50) {
        logEvent(`High fraud risk detected for user ${userId}`);
    }
}