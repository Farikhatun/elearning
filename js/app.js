// Main Application
window.app = {
    currentUser: null,
    currentPage: 'dashboard',

    init: function() {
        // Initialize auth
        auth.init();
        
        // Setup event listeners
        this.setupEventListeners();
    },

    setupEventListeners: function() {
        // Handle navigation
        window.addEventListener('popstate', (e) => {
            if (this.currentUser) {
                this.navigateTo(e.state?.page || 'dashboard');
            }
        });
    },

    showMainApp: function(user) {
        this.currentUser = user;
        
        const app = document.getElementById('app');
        app.innerHTML = this.getMainLayout();
        
        // Render initial page
        this.navigateTo('dashboard');
    },

    getMainLayout: function() {
        return `
            <div id="main-app" class="h-full w-full">
                <div class="flex h-full">
                    ${window.components.sidebar.render(this.currentUser, this.currentPage)}
                    <main class="flex-1 overflow-y-auto bg-light-grey">
                        <div id="content-area" class="p-6"></div>
                    </main>
                </div>
            </div>
        `;
    },

    navigateTo: function(page) {
        this.currentPage = page;
        
        // Update URL without reload
        history.pushState({ page }, '', `#${page}`);
        
        // Update active menu
        document.querySelectorAll('.sidebar-item').forEach(item => {
            item.classList.remove('active', 'text-accent-blue', 'bg-accent-blue/5');
            item.classList.add('text-gray-600');
        });
        
        const activeNav = document.getElementById(`nav-${page}`);
        if (activeNav) {
            activeNav.classList.add('active', 'text-accent-blue', 'bg-accent-blue/5');
            activeNav.classList.remove('text-gray-600');
        }
        
        // Render content based on role
        if (this.currentUser.role === 'guru') {
            teacher.renderContent(page);
        } else {
            student.renderContent(page);
        }
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});