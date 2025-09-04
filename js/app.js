// Global state
let currentScreen = 'intro-1';
let currentNavTab = 'home';
let hasCompletedOnboarding = false;
let currentSection = 'home'; // Track current section for dynamic nav
let navigationStack = []; // Track navigation history for back button
let currentTheme = 'light'; // Track current theme - defaults to light mode

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initializeTheme();

    // Check if onboarding was already completed
    const onboardingComplete = localStorage.getItem('φhinance_onboarding_complete');

    if (onboardingComplete === 'true') {
        hasCompletedOnboarding = true;
        showScreen('home');
    } else {
        // Show intro screens for first-time users
        showScreen('intro-1');
    }

    setupNavigation();

    // Add mobile enhancements
    addTouchInteractions();
    enableSmoothScrolling();
    preventZoomOnInput();
    addLoadingStates();
});

// Screen management - make it globally available
function showScreen(screenId, addToStack = true) {
    // Define screen categories
    const introScreens = ['intro-1', 'intro-2', 'intro-3', 'signup', 'login'];
    const mainScreens = ['home', 'track', 'split', 'learn', 'ai-chat'];

    // Prevent navigation to intro screens after onboarding is complete
    if (hasCompletedOnboarding && ['intro-1', 'intro-2', 'intro-3'].includes(screenId)) {
        // Redirect to home instead
        screenId = 'home';
    }

    // Add current screen to navigation stack before switching
    if (addToStack && currentScreen && currentScreen !== screenId) {
        addToNavigationStack(currentScreen);
    }

    // Load screen content if it doesn't exist FIRST
    loadScreenContent(screenId);

    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });

    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        currentScreen = screenId;
    } else {
        console.error(`Screen ${screenId} not found`);
        return;
    }

    // Show/hide bottom navigation, app header, and FAB based on screen
    const bottomNav = document.getElementById('bottom-nav');
    const appHeader = document.getElementById('app-header');
    const fab = document.getElementById('fab');
    const phoneContainer = document.querySelector('.phone-container');

    if (mainScreens.includes(screenId)) {
        bottomNav.style.display = 'flex';
        appHeader.style.display = 'flex';
        updateDynamicNavigation(screenId);

        // Show FAB on main screens
        if (phoneContainer) {
            phoneContainer.classList.add('show-fab');
        }
        if (fab) {
            fab.classList.add('animate-in');
            setTimeout(() => fab.classList.remove('animate-in'), 300);
        }
    } else if (introScreens.includes(screenId)) {
        bottomNav.style.display = 'none';
        appHeader.style.display = 'none';

        // Hide FAB on intro screens
        if (phoneContainer) {
            phoneContainer.classList.remove('show-fab');
        }
    } else {
        bottomNav.style.display = 'none';
        appHeader.style.display = 'flex';

        // Hide FAB on detail screens
        if (phoneContainer) {
            phoneContainer.classList.remove('show-fab');
        }
    }
}

// Make showScreen globally available
window.showScreen = showScreen;

// Load screen content if it doesn't exist
function loadScreenContent(screenId) {
    const screen = document.getElementById(screenId);
    if (!screen) {
        createScreen(screenId);
    }
}

// Create screen elements
function createScreen(screenId) {
    const appContent = document.getElementById('app-content');
    const screen = document.createElement('div');
    screen.className = 'screen';
    screen.id = screenId;

    switch (screenId) {
        case 'home':
            screen.innerHTML = getHomeScreenHTML();
            break;
        case 'track':
            screen.innerHTML = getTrackScreenHTML();
            break;
        case 'split':
            screen.innerHTML = getSplitScreenHTML();
            break;
        case 'learn':
            screen.innerHTML = getLearnScreenHTML();
            break;
        case 'profile':
            screen.innerHTML = getProfileScreenHTML();
            break;
        case 'add-expense':
            screen.innerHTML = getAddExpenseScreenHTML();
            break;
        case 'ai-chat':
            screen.innerHTML = getAIChatScreenHTML();
            break;
        case 'group-detail':
            screen.innerHTML = getGroupDetailScreenHTML();
            break;
        case 'budgets':
            screen.innerHTML = getBudgetsScreenHTML();
            break;
        case 'transaction-detail':
            screen.innerHTML = getTransactionDetailScreenHTML();
            break;
        case 'split-bill':
            screen.innerHTML = getSplitBillScreenHTML();
            break;
        case 'itemize-bill':
            screen.innerHTML = getItemizeBillScreenHTML();
            break;
        case 'settle-up':
            screen.innerHTML = getSettleUpScreenHTML();
            break;
        case 'lesson-detail':
            screen.innerHTML = getLessonDetailScreenHTML();
            break;
        case 'quiz':
            screen.innerHTML = getQuizScreenHTML();
            break;
        case 'connected-accounts':
            screen.innerHTML = getConnectedAccountsScreenHTML();
            break;
        case 'ai-settings':
            screen.innerHTML = getAISettingsScreenHTML();
            break;
        case 'notifications':
            screen.innerHTML = getNotificationsScreenHTML();
            break;
        case 'help':
            screen.innerHTML = getHelpScreenHTML();
            break;
        case 'friends':
            screen.innerHTML = getFriendsScreenHTML();
            break;
        case 'analytics':
            screen.innerHTML = getAnalyticsScreenHTML();
            break;
        case 'categories':
            screen.innerHTML = getCategoriesScreenHTML();
            break;
        case 'ai-insights':
            screen.innerHTML = getAIInsightsScreenHTML();
            break;
        case 'chat-history':
            screen.innerHTML = getChatHistoryScreenHTML();
            break;
        case 'activities':
            screen.innerHTML = getActivitiesScreenHTML();
            break;
        case 'split-activity':
            screen.innerHTML = getSplitActivityScreenHTML();
            break;
        default:
            screen.innerHTML = getNotFoundScreenHTML();
    }

    appContent.appendChild(screen);
    
    // Add event listeners for interactive elements
    addScreenEventListeners(screenId);
}

// Add event listeners for screen interactions
function addScreenEventListeners(screenId) {
    if (screenId === 'add-expense') {
        // Category selection
        const categoryItems = document.querySelectorAll('.category-item');
        categoryItems.forEach(item => {
            item.addEventListener('click', function() {
                categoryItems.forEach(cat => cat.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Payment method selection
        const paymentItems = document.querySelectorAll('.payment-item');
        paymentItems.forEach(item => {
            item.addEventListener('click', function() {
                paymentItems.forEach(pay => pay.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    if (screenId === 'track') {
        // Filter tabs
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    if (screenId === 'ai-chat') {
        // Enter key for chat input
        const chatInput = document.getElementById('chat-input');
        if (chatInput) {
            chatInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });
        }
    }

    if (screenId === 'analytics') {
        // Period selector tabs
        const periodTabs = document.querySelectorAll('.period-tab');
        periodTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                periodTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                // Here you could update the charts based on selected period
                updateAnalyticsData(this.textContent);
            });
        });
    }

    if (screenId === 'activities') {
        // Activity filter tabs
        const filterTabs = document.querySelectorAll('.filter-tab');
        filterTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                filterTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                filterActivities(this.textContent);
            });
        });
    }
}

// Enhanced mobile interactions
function addTouchInteractions() {
    // Add touchable class to interactive elements
    const touchableElements = document.querySelectorAll(`
        .btn-primary, .btn-secondary, .btn-icon, .nav-item,
        .category-item, .payment-item, .quiz-option, .action-item,
        .expense-item, .group-item, .friend-item, .lesson-item,
        .account-item, .ai-tool, .preference-item, .fab
    `);

    touchableElements.forEach(element => {
        element.classList.add('touchable');

        // Add touch feedback
        element.addEventListener('touchstart', function() {
            if (this.classList.contains('fab')) {
                this.style.transform = 'scale(0.9)';
            } else {
                this.style.transform = 'scale(0.98)';
            }
        });

        element.addEventListener('touchend', function() {
            this.style.transform = '';
        });

        element.addEventListener('touchcancel', function() {
            this.style.transform = '';
        });
    });
}

// Smooth scrolling for better mobile experience
function enableSmoothScrolling() {
    const scrollableElements = document.querySelectorAll('.app-content, .screen');
    scrollableElements.forEach(element => {
        element.style.scrollBehavior = 'smooth';
        element.style.webkitOverflowScrolling = 'touch';
    });
}

// Prevent zoom on input focus (mobile)
function preventZoomOnInput() {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            const viewport = document.querySelector('meta[name=viewport]');
            if (viewport) {
                viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
            }
        });
        
        input.addEventListener('blur', function() {
            const viewport = document.querySelector('meta[name=viewport]');
            if (viewport) {
                viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
            }
        });
    });
}

// Add loading states to buttons
function addLoadingStates() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('loading')) {
                this.classList.add('loading');
                setTimeout(() => {
                    this.classList.remove('loading');
                }, 1000);
            }
        });
    });
}

// Theme Management Functions
function initializeTheme() {
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('φhinance_theme');

    // Always default to light mode if no preference is saved
    currentTheme = savedTheme || 'light';

    applyTheme(currentTheme);
    updateThemeIcon();
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
    updateThemeIcon();

    // Save theme preference
    localStorage.setItem('φhinance_theme', currentTheme);

    // Add a subtle animation feedback
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        toggleButton.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            toggleButton.style.transform = '';
        }, 300);
    }
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

function updateThemeIcon() {
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        if (currentTheme === 'dark') {
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
    }
}

// Make theme functions globally available
window.toggleTheme = toggleTheme;
