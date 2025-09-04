// Split bill and learning screens

function getSplitBillScreenHTML() {
    return `
        <div class="split-bill-screen">
            <div class="screen-header">
                <button class="btn-back" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2>Split Bill</h2>
                <button class="btn-save" onclick="saveSplitBill()">Save</button>
            </div>

            <div class="bill-amount">
                <div class="amount-input">
                    <div class="currency-symbol">$</div>
                    <input type="number" placeholder="0.00" class="amount-field" id="bill-amount">
                </div>
                <div class="amount-label">Total Bill Amount</div>
            </div>

            <div class="bill-details">
                <div class="form-section">
                    <label>Description</label>
                    <input type="text" placeholder="What was this bill for?" id="bill-description">
                </div>

                <div class="form-section">
                    <label>Group</label>
                    <div class="group-selector">
                        <div class="group-option active">
                            <div class="group-avatar">🍽️</div>
                            <span>Dinner with Friends</span>
                        </div>
                        <div class="group-option">
                            <div class="group-avatar">🏠</div>
                            <span>Apartment Expenses</span>
                        </div>
                        <div class="group-option">
                            <div class="group-avatar">+</div>
                            <span>Create New Group</span>
                        </div>
                    </div>
                </div>

                <div class="form-section">
                    <label>Split Method</label>
                    <div class="split-methods">
                        <div class="split-method active">
                            <i class="fas fa-equals"></i>
                            <span>Split Equally</span>
                        </div>
                        <div class="split-method">
                            <i class="fas fa-percentage"></i>
                            <span>By Percentage</span>
                        </div>
                        <div class="split-method" onclick="showScreen('itemize-bill')">
                            <i class="fas fa-list"></i>
                            <span>Itemize</span>
                        </div>
                    </div>
                </div>

                <div class="split-preview">
                    <h3>Split Preview</h3>
                    <div class="split-breakdown">
                        <div class="split-item">
                            <div class="split-person">
                                <div class="person-avatar">A</div>
                                <span>Alex (You)</span>
                            </div>
                            <div class="split-amount">$30.00</div>
                        </div>
                        <div class="split-item">
                            <div class="split-person">
                                <div class="person-avatar">S</div>
                                <span>Sarah</span>
                            </div>
                            <div class="split-amount">$30.00</div>
                        </div>
                        <div class="split-item">
                            <div class="split-person">
                                <div class="person-avatar">M</div>
                                <span>Mike</span>
                            </div>
                            <div class="split-amount">$30.00</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getItemizeBillScreenHTML() {
    return `
        <div class="itemize-bill-screen">
            <div class="screen-header">
                <button class="btn-back" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2>Itemize Bill</h2>
                <button class="btn-icon" onclick="addBillItem()">
                    <i class="fas fa-plus"></i>
                </button>
            </div>

            <div class="bill-info">
                <div class="bill-title">Mario's Restaurant</div>
                <div class="bill-total">Total: $90.00</div>
            </div>

            <div class="bill-items">
                <div class="bill-item">
                    <div class="item-details">
                        <div class="item-name">Margherita Pizza</div>
                        <div class="item-price">$18.50</div>
                    </div>
                    <div class="item-split">
                        <div class="split-people">
                            <div class="person-chip active">A</div>
                            <div class="person-chip active">S</div>
                            <div class="person-chip">M</div>
                        </div>
                        <div class="split-cost">$9.25 each</div>
                    </div>
                </div>

                <div class="bill-item">
                    <div class="item-details">
                        <div class="item-name">Caesar Salad</div>
                        <div class="item-price">$12.00</div>
                    </div>
                    <div class="item-split">
                        <div class="split-people">
                            <div class="person-chip active">S</div>
                            <div class="person-chip">A</div>
                            <div class="person-chip">M</div>
                        </div>
                        <div class="split-cost">$12.00</div>
                    </div>
                </div>
            </div>

            <div class="itemize-summary">
                <h3>Summary</h3>
                <div class="person-summary">
                    <div class="summary-item">
                        <div class="summary-person">
                            <div class="person-avatar">A</div>
                            <span>Alex (You)</span>
                        </div>
                        <div class="summary-amount">$29.08</div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-person">
                            <div class="person-avatar">S</div>
                            <span>Sarah</span>
                        </div>
                        <div class="summary-amount">$40.08</div>
                    </div>
                </div>
            </div>

            <div class="itemize-actions">
                <button class="btn-primary" onclick="saveItemizedBill()">
                    Save Split
                </button>
            </div>
        </div>
    `;
}

function getSettleUpScreenHTML() {
    return `
        <div class="settle-up-screen">
            <div class="screen-header">
                <button class="btn-back" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2>Settle Up</h2>
            </div>

            <div class="settle-summary">
                <div class="settle-group">
                    <div class="group-avatar large">🍽️</div>
                    <h3>Dinner with Friends</h3>
                    <p>3 people</p>
                </div>
            </div>

            <div class="settlement-options">
                <h3>How would you like to settle?</h3>
                
                <div class="settle-option">
                    <div class="settle-method">
                        <div class="method-icon">
                            <i class="fas fa-handshake"></i>
                        </div>
                        <div class="method-details">
                            <div class="method-title">Record Cash Payment</div>
                            <div class="method-desc">Someone paid cash to settle up</div>
                        </div>
                    </div>
                </div>

                <div class="settle-option">
                    <div class="settle-method">
                        <div class="method-icon">
                            <i class="fas fa-mobile-alt"></i>
                        </div>
                        <div class="method-details">
                            <div class="method-title">Send Payment Request</div>
                            <div class="method-desc">Send a payment request via Venmo, PayPal, etc.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="current-balances">
                <h3>Current Balances</h3>
                <div class="balance-list">
                    <div class="balance-item">
                        <div class="balance-person">
                            <div class="person-avatar">S</div>
                            <span>Sarah</span>
                        </div>
                        <div class="balance-arrow">
                            <i class="fas fa-arrow-right"></i>
                        </div>
                        <div class="balance-person">
                            <div class="person-avatar">A</div>
                            <span>You</span>
                        </div>
                        <div class="balance-amount">$15.00</div>
                    </div>
                </div>
            </div>

            <div class="settle-actions">
                <button class="btn-primary" onclick="recordSettlement()">
                    Record Settlement
                </button>
            </div>
        </div>
    `;
}

function getLessonDetailScreenHTML() {
    return `
        <div class="lesson-detail-screen">
            <div class="screen-header">
                <button class="btn-back" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <div class="lesson-progress-header">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 60%"></div>
                    </div>
                    <span class="progress-text">60% complete</span>
                </div>
                <button class="btn-icon" onclick="bookmarkLesson()">
                    <i class="fas fa-bookmark"></i>
                </button>
            </div>

            <div class="lesson-content">
                <div class="lesson-header">
                    <div class="lesson-icon large">📊</div>
                    <h1>Investment Fundamentals</h1>
                    <div class="lesson-meta">
                        <span class="lesson-duration">
                            <i class="fas fa-clock"></i>
                            7 min read
                        </span>
                        <span class="lesson-level">
                            <i class="fas fa-signal"></i>
                            Beginner
                        </span>
                    </div>
                </div>

                <div class="lesson-body">
                    <div class="lesson-section">
                        <h2>What is Investing?</h2>
                        <p>Investing is the act of putting money into financial schemes, shares, property, or a commercial venture with the expectation of achieving a profit.</p>
                        
                        <div class="key-point">
                            <div class="key-point-icon">💡</div>
                            <div class="key-point-text">
                                <strong>Key Point:</strong> The goal of investing is to put your money to work in one or more types of investment vehicles in the hopes of growing your money over time.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lesson-actions">
                    <button class="btn-secondary" onclick="showScreen('quiz')">
                        <i class="fas fa-question-circle"></i>
                        Take Quiz
                    </button>
                    <button class="btn-primary" onclick="completeLesson()">
                        Mark Complete
                    </button>
                </div>
            </div>
        </div>
    `;
}

function getQuizScreenHTML() {
    return `
        <div class="quiz-screen">
            <div class="screen-header">
                <button class="btn-back" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2>Investment Quiz</h2>
                <div class="quiz-progress">
                    <span>1 of 3</span>
                </div>
            </div>

            <div class="quiz-content">
                <div class="question-card">
                    <div class="question-number">Question 1</div>
                    <h3 class="question-text">What is the main goal of investing?</h3>
                    
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="selectOption(this, false)">
                            <div class="option-letter">A</div>
                            <div class="option-text">To keep money safe</div>
                        </div>
                        <div class="quiz-option" onclick="selectOption(this, true)">
                            <div class="option-letter">B</div>
                            <div class="option-text">To grow money over time</div>
                        </div>
                        <div class="quiz-option" onclick="selectOption(this, false)">
                            <div class="option-letter">C</div>
                            <div class="option-text">To spend money immediately</div>
                        </div>
                        <div class="quiz-option" onclick="selectOption(this, false)">
                            <div class="option-letter">D</div>
                            <div class="option-text">To avoid all financial risk</div>
                        </div>
                    </div>
                </div>

                <div class="quiz-explanation" id="quiz-explanation" style="display: none;">
                    <div class="explanation-icon">✅</div>
                    <div class="explanation-text">
                        <strong>Correct!</strong> The main goal of investing is to grow your money over time by putting it to work in various investment vehicles.
                    </div>
                </div>

                <div class="quiz-actions">
                    <button class="btn-primary" id="quiz-next" onclick="nextQuestion()" disabled>
                        Next Question
                    </button>
                </div>
            </div>
        </div>
    `;
}
