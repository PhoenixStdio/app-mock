// Screen HTML generators
function getHomeScreenHTML() {
    return `
        <div class="home-screen">
            <div class="home-header">
                <div class="greeting">
                    <h2>Good morning, Alex</h2>
                    <p>Here's your financial overview</p>
                </div>
            </div>

            <div class="balance-card">
                <div class="balance-header">
                    <span>Total Balance</span>
                    <i class="fas fa-eye"></i>
                </div>
                <div class="balance-amount">$5,200.45</div>
                <div class="balance-change positive">
                    <i class="fas fa-arrow-up"></i>
                    <span>+$124.32 (+2.4%) this month</span>
                </div>
            </div>

            <div class="quick-actions">
                <div class="action-item" onclick="showScreen('add-expense')">
                    <div class="action-icon">
                        <i class="fas fa-plus"></i>
                    </div>
                    <span>Add Expense</span>
                </div>
                <div class="action-item" onclick="showScreen('split-bill')">
                    <div class="action-icon">
                        <i class="fas fa-receipt"></i>
                    </div>
                    <span>Split Bill</span>
                </div>
                <div class="action-item" onclick="showScreen('ai-chat')">
                    <div class="action-icon">
                        <i class="fas fa-robot"></i>
                    </div>
                    <span>AI Chat</span>
                </div>
            </div>

            <div class="section">
                <div class="section-header">
                    <h3>Recent Activity</h3>
                    <a href="#" onclick="showScreen('track')">View All</a>
                </div>
                <div class="activity-list">
                    <div class="activity-item">
                        <div class="activity-icon grocery">🛒</div>
                        <div class="activity-details">
                            <div class="activity-title">Groceries</div>
                            <div class="activity-subtitle">2h ago • Food & Dining</div>
                        </div>
                        <div class="activity-amount negative">-$45.23</div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-icon salary">💰</div>
                        <div class="activity-details">
                            <div class="activity-title">Salary Deposit</div>
                            <div class="activity-subtitle">1d ago • Income</div>
                        </div>
                        <div class="activity-amount positive">+$2,000.00</div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-icon bill">💡</div>
                        <div class="activity-details">
                            <div class="activity-title">Electric Bill</div>
                            <div class="activity-subtitle">3d ago • Utilities</div>
                        </div>
                        <div class="activity-amount negative">-$120.00</div>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="section-header">
                    <h3>Budget Overview</h3>
                    <span class="budget-period">This month</span>
                </div>
                <div class="budget-summary">
                    <div class="budget-item">
                        <div class="budget-info">
                            <span class="budget-category">Food</span>
                            <span class="budget-amount">$650 of $1,000</span>
                        </div>
                        <div class="budget-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 65%"></div>
                            </div>
                            <span class="progress-percent">65%</span>
                        </div>
                    </div>
                    <div class="budget-item">
                        <div class="budget-info">
                            <span class="budget-category">Fun</span>
                            <span class="budget-amount">$200 of $500</span>
                        </div>
                        <div class="budget-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 40%"></div>
                            </div>
                            <span class="progress-percent">40%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getTrackScreenHTML() {
    return `
        <div class="track-screen">
            <div class="screen-header">
                <button class="btn-back" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2>Track Expenses</h2>
                <button class="btn-icon" onclick="showScreen('add-expense')">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
            
            <div class="track-summary">
                <div class="summary-card">
                    <div class="summary-amount">$3,411</div>
                    <div class="summary-label">Total This Month</div>
                    <div class="summary-change">+12% vs last month</div>
                </div>
            </div>

            <div class="track-actions">
                <div class="action-button" onclick="showScreen('budgets')">
                    <i class="fas fa-chart-pie"></i>
                    <span>Budgets</span>
                </div>
                <div class="action-button" onclick="showScreen('analytics')">
                    <i class="fas fa-chart-bar"></i>
                    <span>Analytics</span>
                </div>
                <div class="action-button" onclick="showScreen('categories')">
                    <i class="fas fa-tags"></i>
                    <span>Categories</span>
                </div>
            </div>

            <div class="filter-tabs">
                <div class="tab active">All</div>
                <div class="tab">Income</div>
                <div class="tab">Expenses</div>
            </div>

            <div class="expense-list">
                <div class="expense-item" onclick="showScreen('transaction-detail')">
                    <div class="expense-icon">🛒</div>
                    <div class="expense-details">
                        <div class="expense-title">Whole Foods</div>
                        <div class="expense-category">Food & Dining</div>
                        <div class="expense-time">Today, 2:30 PM</div>
                    </div>
                    <div class="expense-amount">-$45.23</div>
                </div>
                <div class="expense-item">
                    <div class="expense-icon">🚗</div>
                    <div class="expense-details">
                        <div class="expense-title">Uber</div>
                        <div class="expense-category">Transport</div>
                        <div class="expense-time">Today, 10:15 AM</div>
                    </div>
                    <div class="expense-amount">-$18.50</div>
                </div>
                <div class="expense-item">
                    <div class="expense-icon">☕</div>
                    <div class="expense-details">
                        <div class="expense-title">Starbucks</div>
                        <div class="expense-category">Food & Dining</div>
                        <div class="expense-time">Yesterday, 8:45 AM</div>
                    </div>
                    <div class="expense-amount">-$5.75</div>
                </div>
                <div class="expense-item">
                    <div class="expense-icon">💰</div>
                    <div class="expense-details">
                        <div class="expense-title">Salary Deposit</div>
                        <div class="expense-category">Income</div>
                        <div class="expense-time">3 days ago</div>
                    </div>
                    <div class="expense-amount positive">+$2,000.00</div>
                </div>
                <div class="expense-item">
                    <div class="expense-icon">💡</div>
                    <div class="expense-details">
                        <div class="expense-title">Electric Bill</div>
                        <div class="expense-category">Utilities</div>
                        <div class="expense-time">5 days ago</div>
                    </div>
                    <div class="expense-amount">-$120.00</div>
                </div>
            </div>
        </div>
    `;
}

function getSplitScreenHTML() {
    return `
        <div class="split-screen">
            <div class="screen-header">
                <button class="btn-back" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2>Split Expenses</h2>
                <button class="btn-icon" onclick="showScreen('create-group')">
                    <i class="fas fa-plus"></i>
                </button>
            </div>

            <div class="balance-summary">
                <div class="balance-item positive">
                    <div class="balance-label">You are owed</div>
                    <div class="balance-amount">+$49.25</div>
                </div>
            </div>

            <div class="section">
                <h3>Groups</h3>
                <div class="group-list">
                    <div class="group-item" onclick="showScreen('group-detail')">
                        <div class="group-avatar">
                            <span>🍽️</span>
                        </div>
                        <div class="group-details">
                            <div class="group-name">Dinner with Friends</div>
                            <div class="group-members">3 people</div>
                        </div>
                        <div class="group-balance positive">+$30.00</div>
                    </div>
                    <div class="group-item">
                        <div class="group-avatar">
                            <span>🏠</span>
                        </div>
                        <div class="group-details">
                            <div class="group-name">Apartment Expenses</div>
                            <div class="group-members">4 people</div>
                        </div>
                        <div class="group-balance negative">-$125.50</div>
                    </div>
                    <div class="group-item">
                        <div class="group-avatar">
                            <span>✈️</span>
                        </div>
                        <div class="group-details">
                            <div class="group-name">Weekend Trip</div>
                            <div class="group-members">5 people</div>
                        </div>
                        <div class="group-balance positive">+$15.75</div>
                    </div>
                    <div class="group-item">
                        <div class="group-avatar">
                            <span>🎬</span>
                        </div>
                        <div class="group-details">
                            <div class="group-name">Movie Night</div>
                            <div class="group-members">2 people</div>
                        </div>
                        <div class="group-balance negative">-$12.00</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
