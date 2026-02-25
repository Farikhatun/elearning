// Authentication Functions
window.auth = {
    currentUser: null,

    init: function() {
        auth.setupEventListeners();
        auth.checkAuthState();
    },

    setupEventListeners: function() {
        document.addEventListener('submit', function(e) {
            if (e.target.id === 'login-form') {
                e.preventDefault();
                auth.handleLogin();
            }
        });
    },

    checkAuthState: function() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                auth.currentUser = user;
                auth.loadUserData(user.uid);
            } else {
                auth.showLoginPage();
            }
        });
    },

    handleLogin: function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        utils.showLoading(true);
        
        // Simulasi login (ganti dengan Firebase Auth)
        setTimeout(() => {
            if (username.includes('guru')) {
                auth.currentUser = {
                    uid: 'guru123',
                    name: 'Ibu Sarah',
                    email: username,
                    role: 'guru',
                    avatar: 'S'
                };
                auth.saveUserToFirestore();
            } else {
                auth.currentUser = {
                    uid: 'siswa123',
                    name: username || 'Ahmad Rizki',
                    email: username,
                    role: 'siswa',
                    avatar: 'A'
                };
                auth.saveUserToFirestore();
            }
            
            utils.showLoading(false);
            app.showMainApp(auth.currentUser);
            utils.showToast('Login berhasil!');
        }, 1000);
    },

    loginAs: function(role) {
        utils.showLoading(true);
        
        setTimeout(() => {
            if (role === 'guru') {
                auth.currentUser = {
                    uid: 'guru123',
                    name: 'Ibu Sarah',
                    email: 'guru@example.com',
                    role: 'guru',
                    avatar: 'S'
                };
            } else {
                auth.currentUser = {
                    uid: 'siswa123',
                    name: 'Ahmad Rizki',
                    email: 'siswa@example.com',
                    role: 'siswa',
                    avatar: 'A'
                };
            }
            
            auth.saveUserToFirestore();
            utils.showLoading(false);
            app.showMainApp(auth.currentUser);
            utils.showToast('Login berhasil!');
        }, 500);
    },

    saveUserToFirestore: function() {
        if (!auth.currentUser) return;
        
        db.collection(collections.users).doc(auth.currentUser.uid).set({
            name: auth.currentUser.name,
            email: auth.currentUser.email,
            role: auth.currentUser.role,
            avatar: auth.currentUser.avatar,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
    },

    loadUserData: function(uid) {
        db.collection(collections.users).doc(uid).get().then((doc) => {
            if (doc.exists) {
                auth.currentUser = { uid, ...doc.data() };
                app.showMainApp(auth.currentUser);
            }
        });
    },

    logout: function() {
        utils.showLoading(true);
        
        setTimeout(() => {
            auth.currentUser = null;
            utils.showLoading(false);
            auth.showLoginPage();
            utils.showToast('Berhasil logout');
        }, 500);
    },

    showLoginPage: function() {
        const app = document.getElementById('app');
        app.innerHTML = window.components?.loginPage ? 
            window.components.loginPage() : 
            auth.getLoginPageHTML();
    },

    getLoginPageHTML: function() {
        return `
            <div id="login-page" class="h-full w-full gradient-bg flex items-center justify-center p-4 relative overflow-hidden">
                <!-- Background Decorations -->
                <div class="absolute inset-0 overflow-hidden">
                    <div class="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float"></div>
                    <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float" style="animation-delay: -3s;"></div>
                    <div class="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-400/5 rounded-full blur-2xl animate-float" style="animation-delay: -1.5s;"></div>
                </div>
                
                <!-- Login Card -->
                <div class="glass-card rounded-3xl shadow-2xl w-full max-w-md p-8 relative z-10 animate-fade-in">
                    <!-- Logo & Title -->
                    <div class="text-center mb-8">
                        <div class="w-20 h-20 bg-gradient-to-br from-soft-blue to-accent-blue rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h1 id="site-title" class="text-2xl font-bold text-deep-blue mb-2">E-Learning Desain Grafis</h1>
                        <p id="welcome-text" class="text-gray-500 text-sm">Selamat Datang di Platform Pembelajaran</p>
                    </div>
                    
                    <!-- Login Form -->
                    <form id="login-form" class="space-y-5">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Username/Email</label>
                            <div class="relative">
                                <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>
                                <input type="text" id="username" placeholder="Masukkan username/email" class="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all outline-none bg-white/50">
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <div class="relative">
                                <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </span>
                                <input type="password" id="password" placeholder="Masukkan password" class="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all outline-none bg-white/50">
                            </div>
                        </div>
                        <div class="flex items-center justify-between text-sm">
                            <label class="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" class="w-4 h-4 text-accent-blue border-gray-300 rounded focus:ring-accent-blue">
                                <span class="text-gray-600">Ingat saya</span>
                            </label>
                            <a href="#" class="text-accent-blue hover:text-soft-blue transition-colors">Lupa password?</a>
                        </div>
                        <button type="submit" class="w-full py-3 bg-gradient-to-r from-soft-blue to-accent-blue text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                            Masuk
                        </button>
                    </form>
                    
                    <!-- Demo Accounts -->
                    <div class="mt-6 pt-6 border-t border-gray-100">
                        <p class="text-center text-xs text-gray-400 mb-3">Demo Account</p>
                        <div class="flex gap-3">
                            <button onclick="auth.loginAs('guru')" class="flex-1 py-2 px-4 bg-deep-blue/5 hover:bg-deep-blue/10 text-deep-blue text-sm font-medium rounded-lg transition-colors">
                                👩‍🏫 Guru
                            </button>
                            <button onclick="auth.loginAs('siswa')" class="flex-1 py-2 px-4 bg-deep-blue/5 hover:bg-deep-blue/10 text-deep-blue text-sm font-medium rounded-lg transition-colors">
                                👨‍🎓 Siswa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};