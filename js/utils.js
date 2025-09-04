// Utility functions
function completeOnboarding() {
    hasCompletedOnboarding = true;
    // Store in localStorage to persist across sessions
    localStorage.setItem('φhinance_onboarding_complete', 'true');
}

// Make functions globally available
window.completeOnboarding = completeOnboarding;

function saveExpense() {
    // Simulate saving expense
    alert('Expense saved successfully!');
    goBack();
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (message) {
        addUserMessage(message);
        input.value = '';
        // Simulate AI response
        setTimeout(() => {
            addAIResponse(message);
        }, 1000);
    }
}

function askQuestion(question) {
    addUserMessage(question);
    setTimeout(() => {
        addAIResponse(question);
    }, 1000);
}

function addUserMessage(message) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message';
    messageDiv.innerHTML = `
        <div class="message-content">
            <div class="message-text">${message}</div>
            <div class="message-time">Just now</div>
        </div>
    `;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function addAIResponse(userMessage) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ai-message';
    
    let response = "I'm here to help with your finances!";
    if (userMessage.toLowerCase().includes('food')) {
        response = "You spent $420 on food last month. That's 15% under your $500 budget! 🎉";
    } else if (userMessage.toLowerCase().includes('dinner') || userMessage.toLowerCase().includes('200')) {
        response = "Based on your current budget, you have $350 left for dining this month. A $200 dinner would use 57% of that remaining budget. Consider if this aligns with your financial goals.";
    } else if (userMessage.toLowerCase().includes('budget')) {
        response = "Your budget status: Food 65% ($650/$1000), Fun 40% ($200/$500), Bills 85% ($850/$1000). You're doing well overall!";
    }
    
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
            <div class="message-text">${response}</div>
            <div class="message-time">Just now</div>
        </div>
    `;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Split bill utility functions
function saveSplitBill() {
    alert('Bill split saved successfully!');
    showScreen('split');
}

function saveItemizedBill() {
    alert('Itemized bill saved successfully!');
    showScreen('group-detail');
}

function recordSettlement() {
    alert('Settlement recorded successfully!');
    showScreen('split');
}

function addBillItem() {
    alert('Add new bill item functionality would be implemented here');
}

function editTransaction() {
    alert('Edit transaction functionality would be implemented here');
}

function duplicateTransaction() {
    alert('Transaction duplicated successfully!');
    showScreen('track');
}

function deleteTransaction() {
    if (confirm('Are you sure you want to delete this transaction?')) {
        alert('Transaction deleted successfully!');
        showScreen('track');
    }
}

// Learning utility functions
function bookmarkLesson() {
    alert('Lesson bookmarked!');
}

function completeLesson() {
    alert('Lesson completed! Great job!');
    showScreen('learn');
}

function selectOption(element, isCorrect) {
    // Remove active class from all options
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => opt.classList.remove('active', 'correct', 'incorrect'));
    
    // Add appropriate class to selected option
    element.classList.add('active');
    if (isCorrect) {
        element.classList.add('correct');
        document.getElementById('quiz-explanation').style.display = 'block';
        document.getElementById('quiz-next').disabled = false;
    } else {
        element.classList.add('incorrect');
        // Show correct answer
        options.forEach(opt => {
            if (opt.onclick.toString().includes('true')) {
                opt.classList.add('correct');
            }
        });
        document.getElementById('quiz-explanation').innerHTML = `
            <div class="explanation-icon">❌</div>
            <div class="explanation-text">
                <strong>Incorrect.</strong> The correct answer is B. The main goal of investing is to grow your money over time.
            </div>
        `;
        document.getElementById('quiz-explanation').style.display = 'block';
        document.getElementById('quiz-next').disabled = false;
    }
}

function nextQuestion() {
    alert('Quiz completed! You scored 1/1. Great job!');
    showScreen('learn');
}

// Profile utility functions
function addAccount() {
    alert('Add account functionality would be implemented here');
}

function addBankAccount() {
    alert('Connect bank account functionality would be implemented here');
}

function addCreditCard() {
    alert('Connect credit card functionality would be implemented here');
}

function addInvestmentAccount() {
    alert('Connect investment account functionality would be implemented here');
}

function manualSync() {
    alert('Syncing accounts... This may take a moment.');
}

function toggleAITool(element) {
    element.classList.toggle('active');
    const toolName = element.closest('.ai-tool').querySelector('.tool-name').textContent;
    const isActive = element.classList.contains('active');
    alert(`${toolName} ${isActive ? 'connected' : 'disconnected'}`);
}

function togglePreference(element) {
    element.classList.toggle('active');
    const prefName = element.closest('.preference-item').querySelector('.preference-title').textContent;
    const isActive = element.classList.contains('active');
    alert(`${prefName} ${isActive ? 'enabled' : 'disabled'}`);
}

function togglePrivacy(element) {
    element.classList.toggle('active');
    const privacyName = element.closest('.privacy-item').querySelector('.privacy-title').textContent;
    const isActive = element.classList.contains('active');
    alert(`${privacyName} ${isActive ? 'enabled' : 'disabled'}`);
}

function showPrivacySettings() {
    alert('Privacy & Security settings would be implemented here');
}

function markAllRead() {
    const unreadItems = document.querySelectorAll('.notification-item.unread');
    unreadItems.forEach(item => {
        item.classList.remove('unread');
        const dot = item.querySelector('.notification-dot');
        if (dot) dot.remove();
    });
    alert('All notifications marked as read');
}

// Additional utility functions for new screens
function addFriend() {
    alert('Add friend functionality would be implemented here');
}

function addCategory() {
    alert('Add category functionality would be implemented here');
}

// Development helper function to reset onboarding (for testing)
function resetOnboarding() {
    hasCompletedOnboarding = false;
    localStorage.removeItem('φhinance_onboarding_complete');
    showScreen('intro-1');
    console.log('Onboarding reset - refresh page to see intro screens again');
}

// Analytics utility functions
function updateAnalyticsData(period) {
    // Simulate updating analytics data based on selected period
    console.log(`Updating analytics for period: ${period}`);

    // In a real app, this would fetch new data from an API
    // For now, we'll just add a visual feedback
    const metrics = document.querySelectorAll('.metric-card');
    metrics.forEach(metric => {
        metric.style.transform = 'scale(0.98)';
        setTimeout(() => {
            metric.style.transform = '';
        }, 150);
    });

    // Update metric values based on period (simulated)
    const metricValues = document.querySelectorAll('.metric-value');
    if (metricValues.length >= 3) {
        switch(period) {
            case 'This Month':
                metricValues[0].textContent = '$4,200';
                metricValues[1].textContent = '$3,411';
                metricValues[2].textContent = '$789';
                break;
            case '3 Months':
                metricValues[0].textContent = '$12,600';
                metricValues[1].textContent = '$10,233';
                metricValues[2].textContent = '$2,367';
                break;
            case 'Year':
                metricValues[0].textContent = '$50,400';
                metricValues[1].textContent = '$40,932';
                metricValues[2].textContent = '$9,468';
                break;
        }
    }

    // Update center amount in donut chart
    const centerAmount = document.querySelector('.center-amount');
    if (centerAmount) {
        switch(period) {
            case 'This Month':
                centerAmount.textContent = '$3,411';
                break;
            case '3 Months':
                centerAmount.textContent = '$10,233';
                break;
            case 'Year':
                centerAmount.textContent = '$40,932';
                break;
        }
    }
}

// Activities utility functions
function filterActivities(filterType) {
    console.log(`Filtering activities by: ${filterType}`);

    // Add visual feedback
    const activities = document.querySelectorAll('.activity-item');
    activities.forEach(activity => {
        activity.style.opacity = '0.5';
        setTimeout(() => {
            activity.style.opacity = '';
        }, 200);
    });

    // In a real app, this would filter the activities based on type
    // For now, we'll just show a console message
    const filterMessage = {
        'All': 'Showing all activities',
        'Expenses': 'Showing only expenses',
        'Income': 'Showing only income',
        'Splits': 'Showing only split activities'
    };

    console.log(filterMessage[filterType] || 'Unknown filter');
}

function showActivityFilters() {
    console.log('Opening advanced filters');
    // In a real app, this would show a filter modal
    alert('Advanced filters coming soon!');
}

function showActivitySearch() {
    console.log('Opening activity search');
    // In a real app, this would show a search interface
    alert('Activity search coming soon!');
}

function loadMoreActivities() {
    console.log('Loading more activities');

    // Add loading state to button
    const loadBtn = document.querySelector('.load-more-section .btn-secondary');
    if (loadBtn) {
        const originalText = loadBtn.innerHTML;
        loadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        loadBtn.disabled = true;

        // Simulate loading delay
        setTimeout(() => {
            loadBtn.innerHTML = originalText;
            loadBtn.disabled = false;

            // In a real app, this would load more activities from the server
            console.log('More activities loaded');
        }, 1500);
    }
}

// Make all functions globally available
window.saveExpense = saveExpense;
window.sendMessage = sendMessage;
window.askQuestion = askQuestion;
window.addUserMessage = addUserMessage;
window.addAIResponse = addAIResponse;
window.saveSplitBill = saveSplitBill;
window.saveItemizedBill = saveItemizedBill;
window.recordSettlement = recordSettlement;
window.addBillItem = addBillItem;
window.editTransaction = editTransaction;
window.duplicateTransaction = duplicateTransaction;
window.deleteTransaction = deleteTransaction;
window.bookmarkLesson = bookmarkLesson;
window.completeLesson = completeLesson;
window.selectOption = selectOption;
window.nextQuestion = nextQuestion;
window.addAccount = addAccount;
window.addBankAccount = addBankAccount;
window.addCreditCard = addCreditCard;
window.addInvestmentAccount = addInvestmentAccount;
window.manualSync = manualSync;
window.toggleAITool = toggleAITool;
window.togglePreference = togglePreference;
window.togglePrivacy = togglePrivacy;
window.showPrivacySettings = showPrivacySettings;
window.markAllRead = markAllRead;
window.addFriend = addFriend;
window.addCategory = addCategory;
window.resetOnboarding = resetOnboarding;
window.updateAnalyticsData = updateAnalyticsData;
window.filterActivities = filterActivities;
window.showActivityFilters = showActivityFilters;
window.showActivitySearch = showActivitySearch;
window.loadMoreActivities = loadMoreActivities;
