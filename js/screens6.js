// Profile and settings screens

function getConnectedAccountsScreenHTML() {
    return `
        <div class="connected-accounts-screen">
            <div class="screen-header">
                <button class="btn-back" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2>Connected Accounts</h2>
                <button class="btn-icon" onclick="addAccount()">
                    <i class="fas fa-plus"></i>
                </button>
            </div>

            <div class="accounts-content">
                <div class="section">
                    <h3>Bank Accounts</h3>
                    <div class="account-list">
                        <div class="account-item connected">
                            <div class="account-icon">
                                <i class="fas fa-university"></i>
                            </div>
                            <div class="account-details">
                                <div class="account-name">Chase Checking</div>
                                <div class="account-info">****1234 • Last sync: 2 min ago</div>
                            </div>
                            <div class="account-status">
                                <div class="status-dot connected"></div>
                                <span>Connected</span>
                            </div>
                        </div>
                        
                        <div class="account-item connected">
                            <div class="account-icon">
                                <i class="fas fa-credit-card"></i>
                            </div>
                            <div class="account-details">
                                <div class="account-name">Chase Freedom</div>
                                <div class="account-info">****5678 • Last sync: 5 min ago</div>
                            </div>
                            <div class="account-status">
                                <div class="status-dot connected"></div>
                                <span>Connected</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <h3>Add New Account</h3>
                    <div class="add-account-options">
                        <div class="add-option" onclick="addBankAccount()">
                            <div class="add-icon">
                                <i class="fas fa-university"></i>
                            </div>
                            <span>Bank Account</span>
                        </div>
                        <div class="add-option" onclick="addCreditCard()">
                            <div class="add-icon">
                                <i class="fas fa-credit-card"></i>
                            </div>
                            <span>Credit Card</span>
                        </div>
                        <div class="add-option" onclick="addInvestmentAccount()">
                            <div class="add-icon">
                                <i class="fas fa-chart-line"></i>
                            </div>
                            <span>Investment</span>
                        </div>
                    </div>
                </div>

                <div class="sync-info">
                    <div class="sync-card">
                        <div class="sync-icon">
                            <i class="fas fa-sync-alt"></i>
                        </div>
                        <div class="sync-details">
                            <div class="sync-title">Auto-sync enabled</div>
                            <div class="sync-desc">Your accounts sync every 4 hours to keep your data up to date.</div>
                        </div>
                        <button class="btn-sync" onclick="manualSync()">Sync Now</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getAISettingsScreenHTML() {
    return `
        <div class="ai-settings-screen">
            <div class="screen-header">
                <button class="btn-back" onclick="goBack()">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h2>AI Copilot Settings</h2>
            </div>

            <div class="ai-settings-content">
                <div class="ai-status-card">
                    <div class="ai-avatar">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="ai-info">
                        <h3>Your AI Copilot</h3>
                        <p>Powered by advanced AI to help you make better financial decisions</p>
                        <div class="ai-status">
                            <div class="status-dot connected"></div>
                            <span>Active</span>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <h3>Connected AI Tools</h3>
                    <div class="ai-tools-list">
                        <div class="ai-tool connected">
                            <div class="tool-icon">
                                <i class="fas fa-comments"></i>
                            </div>
                            <div class="tool-details">
                                <div class="tool-name">ChatGPT</div>
                                <div class="tool-desc">OpenAI's conversational AI</div>
                                <div class="tool-status">Last sync: 2 min ago</div>
                            </div>
                            <div class="tool-toggle">
                                <div class="toggle-switch active" onclick="toggleAITool(this)">
                                    <div class="toggle-slider"></div>
                                </div>
                            </div>
                        </div>

                        <div class="ai-tool connected">
                            <div class="tool-icon">
                                <i class="fas fa-brain"></i>
                            </div>
                            <div class="tool-details">
                                <div class="tool-name">Claude</div>
                                <div class="tool-desc">Anthropic's AI assistant</div>
                                <div class="tool-status">Last sync: 5 min ago</div>
                            </div>
                            <div class="tool-toggle">
                                <div class="toggle-switch active" onclick="toggleAITool(this)">
                                    <div class="toggle-slider"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <h3>AI Preferences</h3>
                    <div class="preferences-list">
                        <div class="preference-item">
                            <div class="preference-info">
                                <div class="preference-title">Smart Notifications</div>
                                <div class="preference-desc">Get AI-powered insights about your spending</div>
                            </div>
                            <div class="preference-toggle">
                                <div class="toggle-switch active" onclick="togglePreference(this)">
                                    <div class="toggle-slider"></div>
                                </div>
                            </div>
                        </div>

                        <div class="preference-item">
                            <div class="preference-info">
                                <div class="preference-title">Budget Alerts</div>
                                <div class="preference-desc">Receive warnings when approaching budget limits</div>
                            </div>
                            <div class="preference-toggle">
                                <div class="toggle-switch active" onclick="togglePreference(this)">
                                    <div class="toggle-slider"></div>
                                </div>
                            </div>
                        </div>

                        <div class="preference-item">
                            <div class="preference-info">
                                <div class="preference-title">Investment Suggestions</div>
                                <div class="preference-desc">Get personalized investment recommendations</div>
                            </div>
                            <div class="preference-toggle">
                                <div class="toggle-switch" onclick="togglePreference(this)">
                                    <div class="toggle-slider"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <h3>Data & Privacy</h3>
                    <div class="privacy-options">
                        <div class="privacy-item">
                            <div class="privacy-icon">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <div class="privacy-details">
                                <div class="privacy-title">Data Encryption</div>
                                <div class="privacy-desc">All your data is encrypted end-to-end</div>
                            </div>
                            <div class="privacy-status">
                                <i class="fas fa-check-circle"></i>
                                <span>Enabled</span>
                            </div>
                        </div>

                        <div class="privacy-item">
                            <div class="privacy-icon">
                                <i class="fas fa-user-secret"></i>
                            </div>
                            <div class="privacy-details">
                                <div class="privacy-title">Anonymous Analytics</div>
                                <div class="privacy-desc">Help improve AI without sharing personal data</div>
                            </div>
                            <div class="privacy-toggle">
                                <div class="toggle-switch active" onclick="togglePrivacy(this)">
                                    <div class="toggle-slider"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
