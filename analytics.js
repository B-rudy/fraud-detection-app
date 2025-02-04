export function renderFraudAnalyticsChart() {
    const ctx = document.createElement('canvas');
    document.getElementById('content').innerHTML = '';
    document.getElementById('content').appendChild(ctx);
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Fraud Cases',
                data: [5, 10, 12, 7, 15],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
        }
    });
}