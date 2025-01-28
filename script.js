const content = document.getElementById('content');

function loadPage(page) {
    let html = '';
    switch (page) {
        case 'home':
            html = `<div class="card">
                <h2>Welcome!</h2>
                <p>Explore enhanced fraud detection features.</p>
            </div>`;
            break;
        case 'caseManagement':
            html = `<div class="card">
                <h2>Manage Fraud Cases</h2>
                <button class="btn" onclick="createCase()">Create Case</button>
                <button class="btn" onclick="updateCase()">Update Case</button>
                <button class="btn" onclick="deleteCase()">Delete Case</button>
            </div>`;
            break;
        case 'alerts':
            html = `<div class="card">
                <h2>Fraud Alerts</h2>
                <p>Filter alerts by severity:</p>
                <button class="btn" onclick="filterAlerts('Low')">Low</button>
                <button class="btn" onclick="filterAlerts('Medium')">Medium</button>
                <button class="btn" onclick="filterAlerts('High')">High</button>
            </div>`;
            break;
        case 'analytics':
            html = `<div class="card">
                <h2>Analytics</h2>
                <canvas id="fraudChart" width="400" height="200"></canvas>
            </div>`;
            setTimeout(renderChart, 100);
            break;
        case 'settings':
            html = `<div class="card">
                <h2>Settings</h2>
                <p>Configure user preferences here.</p>
            </div>`;
            break;
        case 'fraudReports':
            html = `<div class="card">
                <h2>Fraud Reports</h2>
                <p>Review and download detailed fraud case reports.</p>
            </div>`;
            break;
        case 'policyGuidelines':
            html = `<div class="card">
                <h2>Policy Guidelines</h2>
                <p>Access compliance and fraud prevention policies.</p>
            </div>`;
            break;
        case 'help':
            html = `<div class="card">
                <h2>Help & Support</h2>
                <p>Get assistance or contact support.</p>
            </div>`;
            break;
        default:
            html = `<div class="card">
                <h2>Error</h2>
                <p>Page not found.</p>
            </div>`;
    }
    content.innerHTML = html;
}

function renderChart() {
    const ctx = document.getElementById('fraudChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Fraud Cases Trend',
                data: [5, 12, 8, 15, 10],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2
            }]
        }
    });
}

function createCase() { alert('Creating a new case...'); }
function updateCase() { alert('Updating an existing case...'); }
function deleteCase() { alert('Deleting a case...'); }
function filterAlerts(level) { alert(`Filtering by ${level} severity alerts...`); }
