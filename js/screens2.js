function getLearnScreenHTML() {
    return `
        <div class="learn-screen">
            <div class="screen-header">
                <button class="btn-back" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2>Learn</h2>
                <div class="level-badge">Level 2</div>
            </div>

            <div class="progress-card">
                <div class="progress-header">
                    <span>Overall Progress</span>
                    <span>7/12 completed</span>
                </div>
                <div class="progress-bar large">
                    <div class="progress-fill" style="width: 58%"></div>
                </div>
            </div>

            <div class="section">
                <h3>Continue Learning</h3>
                <div class="lesson-card current" onclick="showScreen('lesson-detail')">
                    <div class="lesson-icon">📊</div>
                    <div class="lesson-content">
                        <div class="lesson-title">Investment Fundamentals</div>
                        <div class="lesson-duration">7 min read</div>
                        <div class="lesson-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 60%"></div>
                            </div>
                            <span>60% complete</span>
                        </div>
                    </div>
                    <button class="btn-continue" onclick="event.stopPropagation(); showScreen('lesson-detail')">Continue</button>
                </div>
            </div>

            <div class="section">
                <h3>Learning Path</h3>
                <div class="lessons-list">
                    <div class="lesson-item completed">
                        <div class="lesson-status">✓</div>
                        <div class="lesson-info">
                            <div class="lesson-title">Budgeting Basics</div>
                            <div class="lesson-meta">5 min read • 100%</div>
                        </div>
                    </div>
                    <div class="lesson-item current">
                        <div class="lesson-status">▶</div>
                        <div class="lesson-info">
                            <div class="lesson-title">Investment Fundamentals</div>
                            <div class="lesson-meta">7 min read • 60%</div>
                        </div>
                    </div>
                    <div class="lesson-item locked">
                        <div class="lesson-status">🔒</div>
                        <div class="lesson-info">
                            <div class="lesson-title">Tax Optimization</div>
                            <div class="lesson-meta">6 min read • Locked</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="achievement-card">
                <div class="achievement-icon">🏆</div>
                <div class="achievement-text">
                    <div class="achievement-title">Achievement Unlocked!</div>
                    <div class="achievement-desc">Budget Master - Created your first budget</div>
                </div>
            </div>
        </div>
    `;
}

function getProfileScreenHTML() {
    return `
        <div class="profile-screen">
            <div class="screen-header">
                <button class="btn-back" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2>Profile</h2>
            </div>

            <div class="profile-header">
                <div class="profile-avatar large">
                    <i class="fas fa-user"></i>
                </div>
                <h2>Alex Johnson</h2>
                <p>alex.johnson@email.com</p>
            </div>

            <div class="profile-stats">
                <div class="stat-item">
                    <div class="stat-number">$5,200</div>
                    <div class="stat-label">Total Balance</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">127</div>
                    <div class="stat-label">Transactions</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">5</div>
                    <div class="stat-label">Friends</div>
                </div>
            </div>

            <div class="profile-menu">
                <div class="menu-item" onclick="showScreen('connected-accounts')">
                    <div class="menu-icon">
                        <i class="fas fa-link"></i>
                    </div>
                    <span>Connected Accounts</span>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div class="menu-item" onclick="showScreen('ai-settings')">
                    <div class="menu-icon">
                        <i class="fas fa-robot"></i>
                    </div>
                    <span>AI Copilot Settings</span>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div class="menu-item" onclick="showScreen('notifications')">
                    <div class="menu-icon">
                        <i class="fas fa-bell"></i>
                    </div>
                    <span>Notifications</span>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div class="menu-item" onclick="showPrivacySettings()">
                    <div class="menu-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <span>Privacy & Security</span>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div class="menu-item" onclick="showScreen('help')">
                    <div class="menu-icon">
                        <i class="fas fa-question-circle"></i>
                    </div>
                    <span>Help & Support</span>
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>

            <div class="profile-footer">
                <button class="btn-logout">
                    <i class="fas fa-sign-out-alt"></i>
                    Sign Out
                </button>
            </div>
        </div>
    `;
}

function getAddExpenseScreenHTML() {
    return `
        <div class="add-expense-screen">
            <div class="screen-header">
                <button class="btn-back" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2>Add Expense</h2>
                <button class="btn-save" onclick="saveExpense()">Save</button>
            </div>

            <div class="expense-form">
                <div class="amount-input">
                    <div class="currency-symbol">$</div>
                    <input type="number" placeholder="0.00" class="amount-field" id="expense-amount">
                </div>

                <div class="form-section">
                    <label>Description</label>
                    <input type="text" placeholder="What did you buy?" id="expense-description">
                </div>

                <div class="form-section">
                    <label>Category</label>
                    <div class="category-grid">
                        <div class="category-item active" data-category="food">
                            <span class="category-icon">🍽️</span>
                            <span>Food</span>
                        </div>
                        <div class="category-item" data-category="transport">
                            <span class="category-icon">🚗</span>
                            <span>Transport</span>
                        </div>
                        <div class="category-item" data-category="shopping">
                            <span class="category-icon">🛍️</span>
                            <span>Shopping</span>
                        </div>
                        <div class="category-item" data-category="bills">
                            <span class="category-icon">💡</span>
                            <span>Bills</span>
                        </div>
                        <div class="category-item" data-category="entertainment">
                            <span class="category-icon">🎬</span>
                            <span>Fun</span>
                        </div>
                        <div class="category-item" data-category="health">
                            <span class="category-icon">🏥</span>
                            <span>Health</span>
                        </div>
                    </div>
                </div>

                <div class="form-section">
                    <label>Payment Method</label>
                    <div class="payment-methods">
                        <div class="payment-item active">
                            <i class="fas fa-credit-card"></i>
                            <span>Credit Card</span>
                        </div>
                        <div class="payment-item">
                            <i class="fas fa-university"></i>
                            <span>Debit Card</span>
                        </div>
                        <div class="payment-item">
                            <i class="fas fa-money-bill"></i>
                            <span>Cash</span>
                        </div>
                    </div>
                </div>

                <div class="form-section">
                    <label>Date</label>
                    <input type="date" value="${new Date().toISOString().split('T')[0]}">
                </div>
            </div>
        </div>
    `;
}

function getAIChatScreenHTML() {
    return `
        <div class="ai-chat-screen">
            <div class="screen-header">
                <button class="btn-back" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <div class="chat-title">
                    <h2>AI Copilot</h2>
                    <div class="online-status">
                        <div class="status-dot"></div>
                        <span>Online</span>
                    </div>
                </div>
            </div>

            <div class="chat-messages" id="chat-messages">
                <div class="message ai-message">
                    <div class="message-avatar">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="message-content">
                        <div class="message-text">Hi! I'm your financial copilot. How can I help you today?</div>
                        <div class="message-time">Just now</div>
                    </div>
                </div>
                
                <div class="quick-questions">
                    <div class="quick-question" onclick="askQuestion('How much did I spend on food last month?')">
                        How much did I spend on food last month?
                    </div>
                    <div class="quick-question" onclick="askQuestion('Can I afford that $200 dinner tonight?')">
                        Can I afford that $200 dinner tonight?
                    </div>
                    <div class="quick-question" onclick="askQuestion('Show me my budget status')">
                        Show me my budget status
                    </div>
                </div>
            </div>

            <div class="chat-input">
                <input type="text" placeholder="Ask about spending, budgets, or financial goals..." id="chat-input">
                <button class="btn-send" onclick="sendMessage()">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
    `;
}
