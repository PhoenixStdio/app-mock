// Additional complex screens

function getGroupDetailScreenHTML() {
    return `
        <div class="group-detail-screen">
            <div class="screen-header">
                <button class="btn-back" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2>Dinner with Friends</h2>
                <button class="btn-icon" onclick="showScreen('add-group-expense')">
                    <i class="fas fa-plus"></i>
                </button>
            </div>

            <div class="group-summary">
                <div class="group-info">
                    <div class="group-avatar large">🍽️</div>
                    <div class="group-details">
                        <h3>Dinner with Friends</h3>
                        <p>3 people • Created 2 days ago</p>
                    </div>
                </div>
                <div class="group-balance">
                    <div class="balance-label">Your share</div>
                    <div class="balance-amount positive">+$30.00</div>
                </div>
            </div>

            <div class="group-members">
                <h3>Members</h3>
                <div class="members-list">
                    <div class="member-item">
                        <div class="member-avatar">A</div>
                        <div class="member-info">
                            <div class="member-name">Alex (You)</div>
                            <div class="member-balance positive">gets back $30.00</div>
                        </div>
                    </div>
                    <div class="member-item">
                        <div class="member-avatar">S</div>
                        <div class="member-info">
                            <div class="member-name">Sarah</div>
                            <div class="member-balance negative">owes $15.00</div>
                        </div>
                    </div>
                    <div class="member-item">
                        <div class="member-avatar">M</div>
                        <div class="member-info">
                            <div class="member-name">Mike</div>
                            <div class="member-balance negative">owes $15.00</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="group-expenses">
                <h3>Expenses</h3>
                <div class="expenses-list">
                    <div class="expense-item">
                        <div class="expense-icon">🍝</div>
                        <div class="expense-details">
                            <div class="expense-title">Mario's Restaurant</div>
                            <div class="expense-subtitle">Paid by Alex • Split 3 ways</div>
                            <div class="expense-date">2 days ago</div>
                        </div>
                        <div class="expense-amount">$90.00</div>
                    </div>
                </div>
            </div>

            <div class="group-actions">
                <button class="btn-primary" onclick="showScreen('settle-up')">
                    <i class="fas fa-handshake"></i>
                    Settle Up
                </button>
            </div>
        </div>
    `;
}

function getBudgetsScreenHTML() {
    return `
        <div class="budgets-screen">
            <div class="screen-header">
                <button class="btn-back" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2>Budgets</h2>
                <button class="btn-icon" onclick="showScreen('add-budget')">
                    <i class="fas fa-plus"></i>
                </button>
            </div>

            <div class="budget-overview">
                <div class="overview-card">
                    <div class="overview-title">This Month</div>
                    <div class="overview-spent">$1,700 of $2,500</div>
                    <div class="overview-progress">
                        <div class="progress-bar large">
                            <div class="progress-fill" style="width: 68%"></div>
                        </div>
                        <span class="progress-label">68% used</span>
                    </div>
                </div>
            </div>

            <div class="budget-categories">
                <div class="budget-category-item">
                    <div class="category-header">
                        <div class="category-info">
                            <div class="category-icon">🍽️</div>
                            <div class="category-details">
                                <div class="category-name">Food & Dining</div>
                                <div class="category-spent">$650 of $1,000</div>
                            </div>
                        </div>
                        <div class="category-status good">65%</div>
                    </div>
                    <div class="category-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 65%"></div>
                        </div>
                    </div>
                </div>

                <div class="budget-category-item">
                    <div class="category-header">
                        <div class="category-info">
                            <div class="category-icon">🎬</div>
                            <div class="category-details">
                                <div class="category-name">Entertainment</div>
                                <div class="category-spent">$200 of $500</div>
                            </div>
                        </div>
                        <div class="category-status good">40%</div>
                    </div>
                    <div class="category-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 40%"></div>
                        </div>
                    </div>
                </div>

                <div class="budget-category-item">
                    <div class="category-header">
                        <div class="category-info">
                            <div class="category-icon">💡</div>
                            <div class="category-details">
                                <div class="category-name">Bills & Utilities</div>
                                <div class="category-spent">$850 of $1,000</div>
                            </div>
                        </div>
                        <div class="category-status warning">85%</div>
                    </div>
                    <div class="category-progress">
                        <div class="progress-bar">
                            <div class="progress-fill warning" style="width: 85%"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="budget-insights">
                <h3>Insights</h3>
                <div class="insight-card">
                    <div class="insight-icon">💡</div>
                    <div class="insight-text">
                        <div class="insight-title">Bills Alert</div>
                        <div class="insight-desc">You're at 85% of your bills budget. Consider reviewing upcoming expenses.</div>
                    </div>
                </div>
                <div class="insight-card">
                    <div class="insight-icon">🎉</div>
                    <div class="insight-text">
                        <div class="insight-title">Great Job!</div>
                        <div class="insight-desc">You're 15% under budget for food this month. Keep it up!</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getTransactionDetailScreenHTML() {
    return `
        <div class="transaction-detail-screen">
            <div class="screen-header">
                <button class="btn-back" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2>Transaction Details</h2>
                <button class="btn-icon" onclick="editTransaction()">
                    <i class="fas fa-edit"></i>
                </button>
            </div>

            <div class="transaction-card">
                <div class="transaction-icon large">🛒</div>
                <div class="transaction-info">
                    <h3>Whole Foods</h3>
                    <div class="transaction-amount">-$45.23</div>
                    <div class="transaction-date">Today, 2:30 PM</div>
                </div>
            </div>

            <div class="transaction-details">
                <div class="detail-row">
                    <span class="detail-label">Category</span>
                    <span class="detail-value">Food & Dining</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Payment Method</span>
                    <span class="detail-value">
                        <i class="fas fa-credit-card"></i>
                        Credit Card ****1234
                    </span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Location</span>
                    <span class="detail-value">
                        <i class="fas fa-map-marker-alt"></i>
                        Downtown Store
                    </span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Notes</span>
                    <span class="detail-value">Weekly grocery shopping</span>
                </div>
            </div>

            <div class="transaction-receipt">
                <h3>Receipt Items</h3>
                <div class="receipt-items">
                    <div class="receipt-item">
                        <span class="item-name">Organic Bananas</span>
                        <span class="item-price">$3.99</span>
                    </div>
                    <div class="receipt-item">
                        <span class="item-name">Whole Milk</span>
                        <span class="item-price">$4.50</span>
                    </div>
                    <div class="receipt-item">
                        <span class="item-name">Bread</span>
                        <span class="item-price">$2.99</span>
                    </div>
                    <div class="receipt-item">
                        <span class="item-name">Other items</span>
                        <span class="item-price">$33.75</span>
                    </div>
                </div>
                <div class="receipt-total">
                    <span class="total-label">Total</span>
                    <span class="total-amount">$45.23</span>
                </div>
            </div>

            <div class="transaction-actions">
                <button class="btn-secondary" onclick="duplicateTransaction()">
                    <i class="fas fa-copy"></i>
                    Duplicate
                </button>
                <button class="btn-danger" onclick="deleteTransaction()">
                    <i class="fas fa-trash"></i>
                    Delete
                </button>
            </div>
        </div>
    `;
}
