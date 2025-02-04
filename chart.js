// Import Chart.js library (if using a module system)
// If not using modules, include Chart.js via CDN in your HTML file.

// Function to render a fraud analytics chart
export function renderFraudAnalyticsChart() {
    const ctx = document.createElement('canvas');
    document.getElementById('content').innerHTML = '';
    document.getElementById('content').appendChild(ctx);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
                {
                    label: 'Fraud Cases',
                    data: [5, 10, 12, 7, 15, 20, 18],
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2
                },
                {
                    label: 'Resolved Cases',
                    data: [3, 7, 9, 5, 12, 15, 14],
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Function to render a pie chart for fraud severity
export function renderFraudSeverityPieChart() {
    const ctx = document.createElement('canvas');
    document.getElementById('content').innerHTML = '';
    document.getElementById('content').appendChild(ctx);

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Low', 'Medium', 'High'],
            datasets: [
                {
                    label: 'Fraud Severity',
                    data: [20, 30, 50],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true
        }
    });
}