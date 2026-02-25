// Sidebar Component
window.components = window.components || {};

window.components.sidebar = {
    menuConfig: {
        guru: [
            { id: 'dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', label: 'Dashboard' },
            { id: 'materi', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', label: 'Materi' },
            { id: 'quiz', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01', label: 'Quiz/Tugas' },
            { id: 'nilai', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', label: 'Nilai' }
        ],
        siswa: [
            { id: 'dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', label: 'Dashboard' },
            { id: 'materi', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', label: 'Materi' },
            { id: 'quiz', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01', label: 'Quiz/Tugas' },
            { id: 'nilai', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', label: 'Nilai' }
        ]
    },

    render: function(user, currentPage = 'dashboard') {
        const menu = this.menuConfig[user.role];
        
        return `
            <aside id="sidebar" class="w-64 bg-white shadow-xl flex flex-col h-full flex-shrink-0">
                <!-- Logo -->
                <div class="p-6 border-b border-gray-100">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-gradient-to-br from-soft-blue to-accent-blue rounded-xl flex items-center justify-center">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <div>
                            <h2 class="font-bold text-deep-blue text-sm">E-Learning</h2>
                            <p class="text-xs text-gray-400">Desain Grafis</p>
                        </div>
                    </div>
                </div>
                
                <!-- Navigation -->
                <nav class="flex-1 py-4 overflow-y-auto">
                    <div class="px-4 mb-2">
                        <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Menu Utama</p>
                    </div>
                    <div id="nav-menu" class="space-y-1 px-3">
                        ${menu.map(item => `
                            <button onclick="app.navigateTo('${item.id}')" id="nav-${item.id}" 
                                class="sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-xl ${currentPage === item.id ? 'active text-accent-blue bg-accent-blue/5' : 'text-gray-600 hover:text-deep-blue'} transition-colors">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${item.icon}"/>
                                </svg>
                                <span class="font-medium">${item.label}</span>
                            </button>
                        `).join('')}
                    </div>
                </nav>
                
                <!-- User Profile -->
                <div class="p-4 border-t border-gray-100">
                    <div class="flex items-center gap-3 p-3 bg-light-grey rounded-xl">
                        <div id="user-avatar" class="w-10 h-10 bg-gradient-to-br from-accent-blue to-cyan-400 rounded-full flex items-center justify-center text-white font-bold">
                            ${user.avatar}
                        </div>
                        <div class="flex-1 min-w-0">
                            <p id="user-name" class="font-semibold text-deep-blue text-sm truncate">${user.name}</p>
                            <p id="user-role-display" class="text-xs text-gray-400">${user.role === 'guru' ? 'Guru' : 'Siswa'}</p>
                        </div>
                        <button onclick="auth.logout()" class="p-2 hover:bg-white rounded-lg transition-colors text-gray-400 hover:text-danger">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                        </button>
                    </div>
                </div>
            </aside>
        `;
    }
};