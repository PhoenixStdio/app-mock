// Navigation configurations for each section
const navigationConfigs = {
    home: [
        { icon: 'fas fa-home', label: 'Home', action: 'home', screen: 'home' },
        { icon: 'fas fa-chart-line', label: 'Track', action: 'track', screen: 'track' },
        { icon: 'fas fa-users', label: 'Split', action: 'split', screen: 'split' },
        { icon: 'fas fa-graduation-cap', label: 'Learn', action: 'learn', screen: 'learn' },
        { icon: 'fas fa-robot', label: 'AI Copilot', action: 'ai-chat', screen: 'ai-chat' }
    ],
    track: [
        { icon: 'fas fa-arrow-left', label: 'Home', action: 'back-home', screen: 'home' },
        { icon: 'fas fa-plus', label: 'Add', action: 'add-expense', screen: 'add-expense' },
        { icon: 'fas fa-chart-pie', label: 'Budgets', action: 'budgets', screen: 'budgets' },
        { icon: 'fas fa-chart-bar', label: 'Analytics', action: 'analytics', screen: 'analytics' },
        { icon: 'fas fa-tags', label: 'Categories', action: 'categories', screen: 'categories' }
    ],
    split: [
        { icon: 'fas fa-arrow-left', label: 'Home', action: 'back-home', screen: 'home' },
        { icon: 'fas fa-layer-group', label: 'Groups', action: 'groups', screen: 'split' },
        { icon: 'fas fa-user-friends', label: 'Friends', action: 'friends', screen: 'friends' },
        { icon: 'fas fa-receipt', label: 'Bills', action: 'bills', screen: 'split-bill' },
        { icon: 'fas fa-history', label: 'Activity', action: 'activity', screen: 'split-activity' }
    ],
    learn: [
        { icon: 'fas fa-arrow-left', label: 'Home', action: 'back-home', screen: 'home' },
        { icon: 'fas fa-book-open', label: 'Lessons', action: 'lessons', screen: 'learn' },
        { icon: 'fas fa-question-circle', label: 'Quiz', action: 'quiz', screen: 'quiz' },
        { icon: 'fas fa-trophy', label: 'Progress', action: 'progress', screen: 'learn-progress' },
        { icon: 'fas fa-bookmark', label: 'Saved', action: 'saved', screen: 'saved-lessons' }
    ],
    'ai-chat': [
        { icon: 'fas fa-arrow-left', label: 'Home', action: 'back-home', screen: 'home' },
        { icon: 'fas fa-comments', label: 'Chat', action: 'chat', screen: 'ai-chat' },
        { icon: 'fas fa-lightbulb', label: 'Insights', action: 'insights', screen: 'ai-insights' },
        { icon: 'fas fa-cog', label: 'Settings', action: 'ai-settings', screen: 'ai-settings' },
        { icon: 'fas fa-history', label: 'History', action: 'chat-history', screen: 'chat-history' }
    ]
};

// Navigation setup
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            const screenId = this.getAttribute('data-screen');
            
            if (action === 'back-home') {
                currentSection = 'home';
                showScreen('home');
            } else {
                handleNavAction(action, screenId);
            }
        });
    });
}

// Update navigation active state
function updateNavigation(activeScreen) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-screen') === activeScreen) {
            item.classList.add('active');
        }
    });
    currentNavTab = activeScreen;
}

// Handle navigation actions
function handleNavAction(action, screenId) {
    // Update current section if it's a main section
    const mainSections = ['home', 'track', 'split', 'learn', 'ai-chat'];
    if (mainSections.includes(action)) {
        currentSection = action;
    }
    
    showScreen(screenId);
}

// Update dynamic navigation based on current section
function updateDynamicNavigation(screenId) {
    // Determine which section we're in
    let section = currentSection;
    const mainSections = ['home', 'track', 'split', 'learn', 'ai-chat'];
    
    if (mainSections.includes(screenId)) {
        section = screenId;
        currentSection = section;
    }
    
    // Get navigation config for current section
    const config = navigationConfigs[section] || navigationConfigs.home;
    
    // Update navigation items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
        if (config[index]) {
            const navConfig = config[index];
            const icon = item.querySelector('i');
            const label = item.querySelector('span');
            
            // Update icon
            icon.className = navConfig.icon;
            
            // Update label
            label.textContent = navConfig.label;
            
            // Update data attributes
            item.setAttribute('data-action', navConfig.action);
            item.setAttribute('data-screen', navConfig.screen);
            
            // Update active state
            item.classList.remove('active');
            if (navConfig.screen === screenId || (navConfig.action === section && screenId === section)) {
                item.classList.add('active');
            }
        }
    });
    
    currentNavTab = screenId;
}

// Enhanced back navigation with stack
function goBack() {
    if (navigationStack.length > 0) {
        const previousScreen = navigationStack.pop();
        showScreen(previousScreen, false); // false = don't add to stack
    } else {
        // Fallback behavior
        if (currentScreen.includes('detail') || currentScreen.includes('add') || currentScreen.includes('create')) {
            showScreen(currentNavTab);
        } else if (currentScreen === 'home' && !hasCompletedOnboarding) {
            return;
        } else {
            showScreen('home');
        }
    }
}

function goBackFromAuth() {
    if (hasCompletedOnboarding) {
        showScreen('home');
    } else {
        showScreen('intro-3');
    }
}

// Make functions globally available
window.goBackFromAuth = goBackFromAuth;

// Add screen to navigation stack
function addToNavigationStack(screenId) {
    // Don't add the same screen twice in a row
    if (navigationStack.length === 0 || navigationStack[navigationStack.length - 1] !== screenId) {
        navigationStack.push(screenId);
        
        // Limit stack size to prevent memory issues
        if (navigationStack.length > 10) {
            navigationStack.shift();
        }
    }
}
