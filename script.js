const content = document.getElementById('content');

// Function to load different pages dynamically
function loadPage(page) {
    let html = '';
    switch (page) {
        case 'home':
            html = `<div class="card"><h2>Welcome!</h2><p>Explore the Fraud Detection App.</p></div>`;
            break;
        case 'caseManagement':
            html = `
                <div class="card">
                    <h2>Manage Fraud Cases</h2>
                    <button class="btn btn-primary" onclick="loadPage('createCase')">Create Case</button>
                    <button class="btn btn-warning" onclick="loadPage('updateCase')">Update Case</button>
                    <button class="btn btn-danger" onclick="deleteCase()">Delete Case</button>
                </div>`;
            break;
        case 'createCase':
            html = `
                <div class="card">
                    <h2>Create New Case</h2>
                    <label for="caseTitle">Case Title:</label>
                    <input type="text" class="form-control" id="caseTitle">
                    <label for="caseDescription">Case Description:</label>
                    <textarea id="caseDescription" class="form-control" rows="4"></textarea>
                    <br>
                    <button class="btn btn-success" onclick="createCase()">Create Case</button>
                    <button class="btn btn-secondary" onclick="goBack()">Back</button>
                </div>`;
            break;
        case 'alerts':
            html = `
                <div class="card">
                    <h2>Fraud Alerts</h2>
                    <button class="btn btn-info" onclick="filterAlerts('Low')">Low</button>
                    <button class="btn btn-warning" onclick="filterAlerts('Medium')">Medium</button>
                    <button class="btn btn-danger" onclick="filterAlerts('High')">High</button>
                </div>`;
            break;
        case 'analytics':
            html = `
                <div class="card">
                    <h2>Fraud Analytics</h2>
                    <canvas id="fraudChart"></canvas>
                </div>`;
            setTimeout(renderChart, 100);
            break;
        case 'settings':
            html = `
                <div class="card">
                    <h2>Settings</h2>
                    <label for="language">Language:</label>
                    <select id="language" class="form-select">
                        <option>English</option>
                        <option>Spanish</option>
                    </select>
                    <br>
                    <label for="notifications">Notifications:</label>
                    <input type="checkbox" id="notifications" checked>
                </div>`;
            break;
        default:
            html = `<div class="card"><h2>Error</h2><p>Page not found.</p></div>`;
    }
    content.innerHTML = html;
}

// Additional functions
function createCase() {
    const title = document.getElementById('caseTitle').value;
    const desc = document.getElementById('caseDescription').value;
    alert(`Case Created:\n${title}\n${desc}`);
}

function deleteCase() {
    alert('Case Deleted!');
}

function filterAlerts(level) {
    alert(`Showing ${level} Alerts`);
}

function goBack() {
    loadPage('caseManagement');
}

// Chart.js Example for Analytics
function renderChart() {
    const ctx = document.getElementById('fraudChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Fraud Cases',
                data: [5, 12, 8, 15, 10],
                backgroundColor: ['blue', 'green', 'orange', 'red', 'purple']
            }]
        }
    });
}
