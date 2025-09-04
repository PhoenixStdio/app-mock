// Additional screen functions for dynamic navigation
function getFriendsScreenHTML() {
    return `
        <div class="friends-screen">
            <div class="screen-header">
                <button class="btn-back" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2>Friends</h2>
                <button class="btn-icon" onclick="addFriend()">
                    <i class="fas fa-user-plus"></i>
                </button>
            </div>
            <div class="friends-content">
                <div class="friends-list">
                    <div class="friend-item">
                        <div class="friend-avatar">A</div>
                        <div class="friend-details">
                            <div class="friend-name">Alex Johnson</div>
                            <div class="friend-status">owes you $25.50</div>
                        </div>
                        <div class="friend-balance positive">+$25.50</div>
                    </div>
                    <div class="friend-item">
                        <div class="friend-avatar">S</div>
                        <div class="friend-details">
                            <div class="friend-name">Sarah Wilson</div>
                            <div class="friend-status">you owe $18.75</div>
                        </div>
                        <div class="friend-balance negative">-$18.75</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getAnalyticsScreenHTML() {
    return `
        <div class="analytics-screen">
            <div class="screen-header">
                <button class="btn-back" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2>Analytics</h2>
                <button class="btn-icon" onclick="showScreen('ai-insights')">
                    <i class="fas fa-lightbulb"></i>
                </button>
            </div>

            <!-- Time Period Selector -->
            <div class="period-selector">
                <div class="period-tab active">This Month</div>
                <div class="period-tab">3 Months</div>
                <div class="period-tab">Year</div>
            </div>

            <!-- Key Metrics -->
            <div class="analytics-metrics">
                <div class="metric-card">
                    <div class="metric-icon income">💰</div>
                    <div class="metric-info">
                        <div class="metric-value">$4,200</div>
                        <div class="metric-label">Total Income</div>
                        <div class="metric-change positive">+8.5%</div>
                    </div>
                </div>
                <div class="metric-card">
                    <div class="metric-icon expense">💸</div>
                    <div class="metric-info">
                        <div class="metric-value">$3,411</div>
                        <div class="metric-label">Total Expenses</div>
                        <div class="metric-change negative">+12.3%</div>
                    </div>
                </div>
                <div class="metric-card">
                    <div class="metric-icon savings">🏦</div>
                    <div class="metric-info">
                        <div class="metric-value">$789</div>
                        <div class="metric-label">Net Savings</div>
                        <div class="metric-change positive">-2.1%</div>
                    </div>
                </div>
            </div>

            <!-- Spending by Category Chart -->
            <div class="chart-section">
                <h3>Spending by Category</h3>
                <div class="category-chart">
                    <div class="chart-container">
                        <div class="donut-chart">
                            <div class="chart-center">
                                <div class="center-amount">$3,411</div>
                                <div class="center-label">Total</div>
                            </div>
                        </div>
                    </div>
                    <div class="chart-legend">
                        <div class="legend-item">
                            <div class="legend-color food"></div>
                            <div class="legend-info">
                                <span class="legend-label">Food & Dining</span>
                                <span class="legend-amount">$1,245 (36%)</span>
                            </div>
                        </div>
                        <div class="legend-item">
                            <div class="legend-color transport"></div>
                            <div class="legend-info">
                                <span class="legend-label">Transportation</span>
                                <span class="legend-amount">$680 (20%)</span>
                            </div>
                        </div>
                        <div class="legend-item">
                            <div class="legend-color shopping"></div>
                            <div class="legend-info">
                                <span class="legend-label">Shopping</span>
                                <span class="legend-amount">$512 (15%)</span>
                            </div>
                        </div>
                        <div class="legend-item">
                            <div class="legend-color entertainment"></div>
                            <div class="legend-info">
                                <span class="legend-label">Entertainment</span>
                                <span class="legend-amount">$425 (12%)</span>
                            </div>
                        </div>
                        <div class="legend-item">
                            <div class="legend-color utilities"></div>
                            <div class="legend-info">
                                <span class="legend-label">Bills & Utilities</span>
                                <span class="legend-amount">$380 (11%)</span>
                            </div>
                        </div>
                        <div class="legend-item">
                            <div class="legend-color other"></div>
                            <div class="legend-info">
                                <span class="legend-label">Other</span>
                                <span class="legend-amount">$169 (6%)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Monthly Trend -->
            <div class="chart-section">
                <h3>Monthly Trend</h3>
                <div class="trend-chart">
                    <div class="trend-bars">
                        <div class="trend-month">
                            <div class="trend-bar">
                                <div class="bar-income" style="height: 60%"></div>
                                <div class="bar-expense" style="height: 45%"></div>
                            </div>
                            <div class="month-label">Aug</div>
                        </div>
                        <div class="trend-month">
                            <div class="trend-bar">
                                <div class="bar-income" style="height: 70%"></div>
                                <div class="bar-expense" style="height: 55%"></div>
                            </div>
                            <div class="month-label">Sep</div>
                        </div>
                        <div class="trend-month">
                            <div class="trend-bar">
                                <div class="bar-income" style="height: 80%"></div>
                                <div class="bar-expense" style="height: 65%"></div>
                            </div>
                            <div class="month-label">Oct</div>
                        </div>
                        <div class="trend-month active">
                            <div class="trend-bar">
                                <div class="bar-income" style="height: 85%"></div>
                                <div class="bar-expense" style="height: 70%"></div>
                            </div>
                            <div class="month-label">Nov</div>
                        </div>
                    </div>
                    <div class="trend-legend">
                        <div class="trend-legend-item">
                            <div class="legend-color income-bar"></div>
                            <span>Income</span>
                        </div>
                        <div class="trend-legend-item">
                            <div class="legend-color expense-bar"></div>
                            <span>Expenses</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Quick Insights -->
            <div class="quick-insights">
                <h3>Quick Insights</h3>
                <div class="insight-item">
                    <div class="insight-icon">📈</div>
                    <div class="insight-text">
                        <div class="insight-title">Spending increased by 12%</div>
                        <div class="insight-desc">Mainly due to higher food expenses this month</div>
                    </div>
                </div>
                <div class="insight-item">
                    <div class="insight-icon">🎯</div>
                    <div class="insight-text">
                        <div class="insight-title">Budget performance</div>
                        <div class="insight-desc">You're 68% through your monthly budget</div>
                    </div>
                </div>
                <div class="insight-item">
                    <div class="insight-icon">💡</div>
                    <div class="insight-text">
                        <div class="insight-title">Savings opportunity</div>
                        <div class="insight-desc">Consider reducing dining out to save $200/month</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getCategoriesScreenHTML() {
    return `
        <div class="categories-screen">
            <div class="screen-header">
                <button class="btn-back" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2>Categories</h2>
                <button class="btn-icon" onclick="addCategory()">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
            <div class="categories-content">
                <div class="category-list">
                    <div class="category-item">
                        <span class="category-icon">🍽️</span>
                        <span class="category-name">Food & Dining</span>
                        <span class="category-amount">$650</span>
                    </div>
                    <div class="category-item">
                        <span class="category-icon">🚗</span>
                        <span class="category-name">Transportation</span>
                        <span class="category-amount">$180</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getAIInsightsScreenHTML() {
    return `
        <div class="ai-insights-screen">
            <div class="screen-header">
                <button class="btn-back" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2>AI Insights</h2>
            </div>
            <div class="insights-content">
                <div class="insight-card">
                    <div class="insight-icon">💡</div>
                    <div class="insight-text">
                        <div class="insight-title">Spending Pattern</div>
                        <div class="insight-desc">You spend 20% more on weekends. Consider setting weekend budgets.</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getChatHistoryScreenHTML() {
    return `
        <div class="chat-history-screen">
            <div class="screen-header">
                <button class="btn-back" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2>Chat History</h2>
            </div>
            <div class="history-content">
                <div class="history-item">
                    <div class="history-date">Today</div>
                    <div class="history-preview">How much did I spend on food last month?</div>
                </div>
                <div class="history-item">
                    <div class="history-date">Yesterday</div>
                    <div class="history-preview">Can I afford that $200 dinner tonight?</div>
                </div>
            </div>
        </div>
    `;
}

function getNotificationsScreenHTML() {
    return `
        <div class="notifications-screen">
            <div class="screen-header">
                <button class="btn-back" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2>Notifications</h2>
                <button class="btn-icon" onclick="markAllRead()">
                    <i class="fas fa-check-double"></i>
                </button>
            </div>

            <div class="notifications-content">
                <div class="notification-filters">
                    <div class="filter-tab active">All</div>
                    <div class="filter-tab">Unread</div>
                    <div class="filter-tab">Important</div>
                </div>

                <div class="notifications-list">
                    <div class="notification-item unread">
                        <div class="notification-icon budget">
                            <i class="fas fa-exclamation-triangle"></i>
                        </div>
                        <div class="notification-content">
                            <div class="notification-title">Budget Alert</div>
                            <div class="notification-message">You've spent 85% of your Bills budget this month</div>
                            <div class="notification-time">2 hours ago</div>
                        </div>
                        <div class="notification-dot"></div>
                    </div>

                    <div class="notification-item">
                        <div class="notification-icon success">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="notification-content">
                            <div class="notification-title">Payment Received</div>
                            <div class="notification-message">Sarah paid you $15.00 for dinner</div>
                            <div class="notification-time">1 day ago</div>
                        </div>
                    </div>

                    <div class="notification-item">
                        <div class="notification-icon info">
                            <i class="fas fa-lightbulb"></i>
                        </div>
                        <div class="notification-content">
                            <div class="notification-title">AI Insight</div>
                            <div class="notification-message">You're spending 20% less on food this month. Great job!</div>
                            <div class="notification-time">2 days ago</div>
                        </div>
                    </div>

                    <div class="notification-item">
                        <div class="notification-icon learning">
                            <i class="fas fa-graduation-cap"></i>
                        </div>
                        <div class="notification-content">
                            <div class="notification-title">New Lesson Available</div>
                            <div class="notification-message">Tax Optimization lesson is now unlocked</div>
                            <div class="notification-time">3 days ago</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getHelpScreenHTML() {
    return `
        <div class="help-screen">
            <div class="screen-header">
                <button class="btn-back" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2>Help & Support</h2>
            </div>

            <div class="help-content">
                <div class="help-search">
                    <div class="search-box">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Search for help...">
                    </div>
                </div>

                <div class="help-categories">
                    <div class="help-category">
                        <div class="category-icon">
                            <i class="fas fa-rocket"></i>
                        </div>
                        <div class="category-content">
                            <h3>Getting Started</h3>
                            <p>Learn the basics of using φhinance</p>
                        </div>
                        <i class="fas fa-chevron-right"></i>
                    </div>

                    <div class="help-category">
                        <div class="category-icon">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <div class="category-content">
                            <h3>Expense Tracking</h3>
                            <p>How to track and categorize your expenses</p>
                        </div>
                        <i class="fas fa-chevron-right"></i>
                    </div>

                    <div class="help-category">
                        <div class="category-icon">
                            <i class="fas fa-users"></i>
                        </div>
                        <div class="category-content">
                            <h3>Splitting Bills</h3>
                            <p>Share expenses with friends and family</p>
                        </div>
                        <i class="fas fa-chevron-right"></i>
                    </div>

                    <div class="help-category">
                        <div class="category-icon">
                            <i class="fas fa-robot"></i>
                        </div>
                        <div class="category-content">
                            <h3>AI Copilot</h3>
                            <p>Get the most out of your AI assistant</p>
                        </div>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </div>

                <div class="help-contact">
                    <h3>Still need help?</h3>
                    <div class="contact-options">
                        <button class="contact-option">
                            <i class="fas fa-envelope"></i>
                            <span>Email Support</span>
                        </button>
                        <button class="contact-option">
                            <i class="fas fa-comments"></i>
                            <span>Live Chat</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getActivitiesScreenHTML() {
    return `
        <div class="activities-screen">
            <div class="screen-header">
                <button class="btn-back" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2>All Activities</h2>
                <button class="btn-icon" onclick="showScreen('notifications')">
                    <i class="fas fa-bell"></i>
                </button>
            </div>

            <!-- Activity Summary -->
            <div class="activity-summary">
                <div class="summary-stats">
                    <div class="stat-item">
                        <div class="stat-number">47</div>
                        <div class="stat-label">This Month</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">$3,411</div>
                        <div class="stat-label">Total Amount</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">8</div>
                        <div class="stat-label">Categories</div>
                    </div>
                </div>
            </div>

            <!-- Activity Filters -->
            <div class="activity-filters">
                <div class="filter-tabs">
                    <div class="filter-tab active">All</div>
                    <div class="filter-tab">Expenses</div>
                    <div class="filter-tab">Income</div>
                    <div class="filter-tab">Splits</div>
                </div>
                <div class="filter-actions">
                    <button class="filter-btn" onclick="showActivityFilters()">
                        <i class="fas fa-filter"></i>
                    </button>
                    <button class="filter-btn" onclick="showActivitySearch()">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>

            <!-- Activities List -->
            <div class="activities-list">
                <!-- Today -->
                <div class="activity-date-group">
                    <div class="date-header">
                        <h3>Today</h3>
                        <div class="date-total">-$63.73</div>
                    </div>
                    <div class="activities-group">
                        <div class="activity-item" onclick="showScreen('transaction-detail')">
                            <div class="activity-icon expense">🛒</div>
                            <div class="activity-details">
                                <div class="activity-title">Whole Foods Market</div>
                                <div class="activity-subtitle">Food & Dining • 2:30 PM</div>
                                <div class="activity-location">📍 Downtown Store</div>
                            </div>
                            <div class="activity-amount negative">-$45.23</div>
                        </div>
                        <div class="activity-item">
                            <div class="activity-icon expense">🚗</div>
                            <div class="activity-details">
                                <div class="activity-title">Uber Ride</div>
                                <div class="activity-subtitle">Transportation • 10:15 AM</div>
                                <div class="activity-location">📍 Home → Office</div>
                            </div>
                            <div class="activity-amount negative">-$18.50</div>
                        </div>
                    </div>
                </div>

                <!-- Yesterday -->
                <div class="activity-date-group">
                    <div class="date-header">
                        <h3>Yesterday</h3>
                        <div class="date-total">+$1,875.00</div>
                    </div>
                    <div class="activities-group">
                        <div class="activity-item">
                            <div class="activity-icon income">💰</div>
                            <div class="activity-details">
                                <div class="activity-title">Salary Deposit</div>
                                <div class="activity-subtitle">Income • 9:00 AM</div>
                                <div class="activity-location">💼 TechCorp Inc.</div>
                            </div>
                            <div class="activity-amount positive">+$2,000.00</div>
                        </div>
                        <div class="activity-item">
                            <div class="activity-icon split">🍽️</div>
                            <div class="activity-details">
                                <div class="activity-title">Dinner Split Settled</div>
                                <div class="activity-subtitle">Split • 8:45 PM</div>
                                <div class="activity-location">👥 Sarah paid you</div>
                            </div>
                            <div class="activity-amount positive">+$25.00</div>
                        </div>
                        <div class="activity-item">
                            <div class="activity-icon expense">🎬</div>
                            <div class="activity-details">
                                <div class="activity-title">Movie Tickets</div>
                                <div class="activity-subtitle">Entertainment • 7:30 PM</div>
                                <div class="activity-location">📍 AMC Theater</div>
                            </div>
                            <div class="activity-amount negative">-$28.00</div>
                        </div>
                        <div class="activity-item">
                            <div class="activity-icon expense">☕</div>
                            <div class="activity-details">
                                <div class="activity-title">Starbucks</div>
                                <div class="activity-subtitle">Food & Dining • 2:15 PM</div>
                                <div class="activity-location">📍 Main Street</div>
                            </div>
                            <div class="activity-amount negative">-$6.75</div>
                        </div>
                        <div class="activity-item">
                            <div class="activity-icon expense">⛽</div>
                            <div class="activity-details">
                                <div class="activity-title">Shell Gas Station</div>
                                <div class="activity-subtitle">Transportation • 11:30 AM</div>
                                <div class="activity-location">📍 Highway 101</div>
                            </div>
                            <div class="activity-amount negative">-$65.25</div>
                        </div>
                    </div>
                </div>

                <!-- This Week -->
                <div class="activity-date-group">
                    <div class="date-header">
                        <h3>Earlier This Week</h3>
                        <div class="date-total">-$287.45</div>
                    </div>
                    <div class="activities-group">
                        <div class="activity-item">
                            <div class="activity-icon expense">💡</div>
                            <div class="activity-details">
                                <div class="activity-title">Electric Bill</div>
                                <div class="activity-subtitle">Bills & Utilities • Nov 15</div>
                                <div class="activity-location">🏠 Monthly Bill</div>
                            </div>
                            <div class="activity-amount negative">-$120.00</div>
                        </div>
                        <div class="activity-item">
                            <div class="activity-icon split">🏠</div>
                            <div class="activity-details">
                                <div class="activity-title">Rent Split</div>
                                <div class="activity-subtitle">Split • Nov 14</div>
                                <div class="activity-location">👥 Apartment Expenses</div>
                            </div>
                            <div class="activity-amount negative">-$125.50</div>
                        </div>
                        <div class="activity-item">
                            <div class="activity-icon expense">🛍️</div>
                            <div class="activity-details">
                                <div class="activity-title">Amazon Purchase</div>
                                <div class="activity-subtitle">Shopping • Nov 13</div>
                                <div class="activity-location">📦 Online Order</div>
                            </div>
                            <div class="activity-amount negative">-$41.95</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Load More Button -->
            <div class="load-more-section">
                <button class="btn-secondary" onclick="loadMoreActivities()">
                    <i class="fas fa-chevron-down"></i>
                    Load More Activities
                </button>
            </div>
        </div>
    `;
}

function getSplitActivityScreenHTML() {
    return `
        <div class="split-activity-screen">
            <div class="screen-header">
                <button class="btn-back" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2>Split Activity</h2>
            </div>

            <!-- Split Summary -->
            <div class="split-summary-card">
                <div class="summary-item">
                    <div class="summary-label">You are owed</div>
                    <div class="summary-amount positive">+$49.25</div>
                </div>
                <div class="summary-item">
                    <div class="summary-label">You owe</div>
                    <div class="summary-amount negative">-$18.75</div>
                </div>
                <div class="summary-item">
                    <div class="summary-label">Net balance</div>
                    <div class="summary-amount positive">+$30.50</div>
                </div>
            </div>

            <!-- Recent Split Activities -->
            <div class="split-activities-list">
                <div class="activity-date-group">
                    <div class="date-header">
                        <h3>Recent</h3>
                    </div>
                    <div class="activities-group">
                        <div class="split-activity-item">
                            <div class="activity-icon split">🍽️</div>
                            <div class="activity-details">
                                <div class="activity-title">Dinner with Friends</div>
                                <div class="activity-subtitle">Sarah paid you • 2 hours ago</div>
                                <div class="activity-members">👥 3 people</div>
                            </div>
                            <div class="activity-amount positive">+$25.00</div>
                        </div>
                        <div class="split-activity-item">
                            <div class="activity-icon split">🏠</div>
                            <div class="activity-details">
                                <div class="activity-title">Apartment Expenses</div>
                                <div class="activity-subtitle">You paid rent • Yesterday</div>
                                <div class="activity-members">👥 4 people</div>
                            </div>
                            <div class="activity-amount negative">-$125.50</div>
                        </div>
                        <div class="split-activity-item">
                            <div class="activity-icon split">✈️</div>
                            <div class="activity-details">
                                <div class="activity-title">Weekend Trip</div>
                                <div class="activity-subtitle">Mike owes you • 3 days ago</div>
                                <div class="activity-members">👥 5 people</div>
                            </div>
                            <div class="activity-amount positive">+$15.75</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getNotFoundScreenHTML() {
    return `
        <div class="not-found-screen">
            <div class="screen-header">
                <button class="btn-back" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2>Oops!</h2>
            </div>

            <div class="not-found-content">
                <div class="not-found-icon">🤔</div>
                <h3>Screen Not Found</h3>
                <p>This screen is still under development. Check back soon!</p>
                <button class="btn-primary" onclick="showScreen('home')">
                    Go to Home
                </button>
            </div>
        </div>
    `;
}
