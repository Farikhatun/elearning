// Student Functions
window.student = {
    currentPage: 'dashboard',

    renderContent: function(page) {
        this.currentPage = page;
        const contentArea = document.getElementById('content-area');
        
        switch(page) {
            case 'dashboard':
                contentArea.innerHTML = this.getDashboard();
                utils.animateCharts();
                break;
            case 'materi':
                contentArea.innerHTML = this.getMaterials();
                break;
            case 'quiz':
                contentArea.innerHTML = this.getQuiz();
                break;
            case 'nilai':
                contentArea.innerHTML = this.getScores();
                break;
        }
    },

    getDashboard: function() {
        return `
            <div class="animate-fade-in">
                <!-- Header -->
                <div class="mb-8">
                    <h1 class="text-2xl font-bold text-deep-blue">Dashboard Siswa</h1>
                    <p class="text-gray-500">Selamat belajar, ${auth.currentUser.name}!</p>
                </div>
                
                <!-- Progress Overview -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    ${this.getProgressCards()}
                </div>
                
                <!-- Charts Row -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    ${this.getScoreHistory()}
                    ${this.getLearningActivity()}
                </div>
                
                <!-- Continue Learning -->
                ${this.getContinueLearning()}
            </div>
        `;
    },

    getProgressCards: function() {
        return `
            <div class="bg-white rounded-2xl p-6 shadow-sm card-hover">
                <div class="flex items-center justify-between mb-4">
                    <div class="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center">
                        <svg class="w-6 h-6 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                        </svg>
                    </div>
                </div>
                <h3 class="text-3xl font-bold text-deep-blue mb-1">18/24</h3>
                <p class="text-gray-500 text-sm">Materi Selesai</p>
                <div class="mt-3 w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-soft-blue to-accent-blue rounded-full" style="width: 75%"></div>
                </div>
            </div>
            
            <div class="bg-white rounded-2xl p-6 shadow-sm card-hover">
                <div class="flex items-center justify-between mb-4">
                    <div class="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                        <svg class="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                </div>
                <h3 class="text-3xl font-bold text-deep-blue mb-1">9/12</h3>
                <p class="text-gray-500 text-sm">Quiz Selesai</p>
                <div class="mt-3 w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-success to-emerald-400 rounded-full" style="width: 75%"></div>
                </div>
            </div>
            
            <div class="bg-white rounded-2xl p-6 shadow-sm card-hover">
                <div class="flex items-center justify-between mb-4">
                    <div class="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center">
                        <svg class="w-6 h-6 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                </div>
                <h3 class="text-3xl font-bold text-deep-blue mb-1">3</h3>
                <p class="text-gray-500 text-sm">Tugas Pending</p>
                <p class="mt-3 text-xs text-warning font-medium">⚠️ Deadline mendekat</p>
            </div>
            
            <div class="bg-white rounded-2xl p-6 shadow-sm card-hover">
                <div class="flex items-center justify-between mb-4">
                    <div class="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                        <svg class="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                        </svg>
                    </div>
                </div>
                <h3 class="text-3xl font-bold text-deep-blue mb-1">88</h3>
                <p class="text-gray-500 text-sm">Rata-rata Nilai</p>
                <p class="mt-3 text-xs text-success font-medium">📈 +5 dari minggu lalu</p>
            </div>
        `;
    },

    getScoreHistory: function() {
        return `
            <div class="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
                <h3 class="font-bold text-deep-blue mb-6">Riwayat Nilai</h3>
                <div class="h-64 flex items-end justify-between gap-4 px-4">
                    ${['Quiz 1', 'Quiz 2', 'Tugas 1', 'Quiz 3', 'Tugas 2'].map((quiz, i) => {
                        const scores = [85, 78, 90, 88, 92];
                        return `
                            <div class="flex-1 flex flex-col items-center gap-2">
                                <div class="w-full bg-light-grey rounded-t-lg relative overflow-hidden" style="height: 200px;">
                                    <div class="chart-bar absolute bottom-0 w-full bg-gradient-to-t from-soft-blue to-accent-blue rounded-t-lg transition-all duration-1000" style="height: 0%;" data-height="${scores[i]}%"></div>
                                </div>
                                <span class="text-xs text-gray-500 font-medium text-center">${quiz}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    },

    getLearningActivity: function() {
        return `
            <div class="bg-white rounded-2xl p-6 shadow-sm">
                <h3 class="font-bold text-deep-blue mb-6">Aktivitas Belajar</h3>
                <div class="space-y-4">
                    <div class="flex items-center gap-4 p-3 bg-light-grey rounded-xl">
                        <div class="w-10 h-10 bg-accent-blue/20 rounded-lg flex items-center justify-center">
                            <svg class="w-5 h-5 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                            </svg>
                        </div>
                        <div class="flex-1">
                            <p class="font-medium text-deep-blue text-sm">Menonton Video</p>
                            <p class="text-xs text-gray-500">2.5 jam minggu ini</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 p-3 bg-light-grey rounded-xl">
                        <div class="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center">
                            <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <div class="flex-1">
                            <p class="font-medium text-deep-blue text-sm">Quiz Selesai</p>
                            <p class="text-xs text-gray-500">3 quiz minggu ini</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 p-3 bg-light-grey rounded-xl">
                        <div class="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                            <svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                            </svg>
                        </div>
                        <div class="flex-1">
                            <p class="font-medium text-deep-blue text-sm">Materi Dibaca</p>
                            <p class="text-xs text-gray-500">5 materi minggu ini</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    getContinueLearning: function() {
        const materials = [
            { id: 1, title: 'Pengenalan Desain Grafis', type: 'video', duration: '15 menit', status: 'published' },
            { id: 2, title: 'Prinsip Dasar Layout', type: 'text', duration: '10 menit', status: 'published' },
            { id: 3, title: 'Teori Warna', type: 'image', duration: '12 menit', status: 'published' }
        ];

        return `
            <div class="bg-white rounded-2xl p-6 shadow-sm">
                <h3 class="font-bold text-deep-blue mb-6">Lanjutkan Belajar</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    ${materials.map(material => `
                        <div class="border border-gray-100 rounded-xl p-4 hover:border-accent-blue transition-colors cursor-pointer" onclick="student.viewMaterial(${material.id})">
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 bg-gradient-to-br ${material.type === 'video' ? 'from-purple-500 to-pink-500' : material.type === 'text' ? 'from-accent-blue to-cyan-400' : 'from-success to-emerald-400'} rounded-xl flex items-center justify-center flex-shrink-0">
                                    ${material.type === 'video' ? `
                                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                                        </svg>
                                    ` : `
                                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                        </svg>
                                    `}
                                </div>
                                <div class="flex-1 min-w-0">
                                    <h4 class="font-semibold text-deep-blue text-sm mb-1 truncate">${material.title}</h4>
                                    <p class="text-xs text-gray-500">${material.duration}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    getMaterials: function() {
        const materials = [
            { id: 1, title: 'Pengenalan Desain Grafis', type: 'video', duration: '15 menit', status: 'published' },
            { id: 2, title: 'Prinsip Dasar Layout', type: 'text', duration: '10 menit', status: 'published' },
            { id: 3, title: 'Teori Warna', type: 'image', duration: '12 menit', status: 'published' },
            { id: 4, title: 'Typography Basics', type: 'video', duration: '20 menit', status: 'draft' },
            { id: 5, title: 'Praktik Adobe Illustrator', type: 'video', duration: '30 menit', status: 'published' }
        ];

        return `
            <div class="animate-fade-in">
                <!-- Header -->
                <div class="mb-8">
                    <h1 class="text-2xl font-bold text-deep-blue">Materi Pembelajaran</h1>
                    <p class="text-gray-500">Pelajari materi yang tersedia</p>
                </div>
                
                <!-- Filter -->
                <div class="flex flex-wrap gap-2 mb-6">
                    <button class="px-4 py-2 bg-accent-blue text-white rounded-lg text-sm font-medium">Semua</button>
                    <button class="px-4 py-2 bg-white text-gray-600 rounded-lg text-sm font-medium hover:bg-light-grey transition-colors">Video</button>
                    <button class="px-4 py-2 bg-white text-gray-600 rounded-lg text-sm font-medium hover:bg-light-grey transition-colors">Teks</button>
                    <button class="px-4 py-2 bg-white text-gray-600 rounded-lg text-sm font-medium hover:bg-light-grey transition-colors">Gambar</button>
                </div>
                
                <!-- Materials Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${materials.filter(m => m.status === 'published').map((material, index) => `
                        <div class="bg-white rounded-2xl shadow-sm overflow-hidden card-hover cursor-pointer" onclick="student.viewMaterial(${material.id})">
                            <div class="h-40 bg-gradient-to-br ${material.type === 'video' ? 'from-purple-500 to-pink-500' : material.type === 'text' ? 'from-accent-blue to-cyan-400' : 'from-success to-emerald-400'} flex items-center justify-center relative">
                                ${material.type === 'video' ? `
                                    <svg class="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                ` : material.type === 'text' ? `
                                    <svg class="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                    </svg>
                                ` : `
                                    <svg class="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                    </svg>
                                `}
                                ${index < 3 ? `
                                    <span class="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-success text-white">
                                        ✓ Selesai
                                    </span>
                                ` : ''}
                            </div>
                            <div class="p-5">
                                <h3 class="font-bold text-deep-blue mb-2">${material.title}</h3>
                                <div class="flex items-center gap-4 text-sm text-gray-500">
                                    <span class="flex items-center gap-1">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                        ${material.duration}
                                    </span>
                                    <span class="capitalize">${material.type}</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    getQuiz: function() {
        const quizzes = [
            { id: 1, title: 'Quiz Teori Warna', questions: 10, duration: '15 menit', status: 'active' },
            { id: 2, title: 'Tugas Layout Design', questions: 3, duration: '60 menit', status: 'active' }
        ];

        return `
            <div class="animate-fade-in">
                <!-- Header -->
                <div class="mb-8">
                    <h1 class="text-2xl font-bold text-deep-blue">Quiz & Tugas</h1>
                    <p class="text-gray-500">Kerjakan quiz dan tugas yang tersedia</p>
                </div>
                
                <!-- Available Quizzes -->
                <div class="space-y-4 mb-8">
                    ${quizzes.filter(q => q.status === 'active').map((quiz, index) => `
                        <div class="bg-white rounded-2xl p-6 shadow-sm card-hover">
                            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                <div class="flex items-start gap-4">
                                    <div class="w-14 h-14 bg-gradient-to-br ${index % 2 === 0 ? 'from-purple-500 to-pink-500' : 'from-accent-blue to-cyan-400'} rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="font-bold text-deep-blue text-lg mb-1">${quiz.title}</h3>
                                        <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                            <span class="flex items-center gap-1">
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                </svg>
                                                ${quiz.questions} Soal
                                            </span>
                                            <span class="flex items-center gap-1">
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                </svg>
                                                ${quiz.duration}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button onclick="student.startQuiz(${quiz.id})" class="px-6 py-3 bg-gradient-to-r from-soft-blue to-accent-blue text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                                    Mulai Quiz
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <!-- Quiz Demo (Hidden by default) -->
                <div id="quiz-demo" class="bg-white rounded-2xl p-6 shadow-sm hidden">
                    ${this.getQuizDemo()}
                </div>
                
                <!-- Quiz Result Modal (Hidden by default) -->
                <div id="quiz-result" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 hidden">
                    ${this.getQuizResult()}
                </div>
            </div>
        `;
    },

    getQuizDemo: function() {
        return `
            <div class="flex items-center justify-between mb-6">
                <h3 class="font-bold text-deep-blue">Demo Quiz</h3>
                <span class="px-3 py-1 bg-warning/10 text-warning text-sm font-medium rounded-full">Soal 1/10</span>
            </div>
            
            <p class="text-lg text-deep-blue mb-6">Warna primer dalam desain grafis adalah...</p>
            
            <div class="space-y-3 mb-6">
                <label class="quiz-option flex items-center gap-4 p-4 border-2 border-gray-100 rounded-xl cursor-pointer">
                    <input type="radio" name="quiz-answer" value="0" class="w-5 h-5 text-accent-blue" onchange="student.selectAnswer(0)">
                    <span class="text-gray-700">Merah, Kuning, Biru</span>
                </label>
                <label class="quiz-option flex items-center gap-4 p-4 border-2 border-gray-100 rounded-xl cursor-pointer">
                    <input type="radio" name="quiz-answer" value="1" class="w-5 h-5 text-accent-blue" onchange="student.selectAnswer(1)">
                    <span class="text-gray-700">Hijau, Orange, Ungu</span>
                </label>
                <label class="quiz-option flex items-center gap-4 p-4 border-2 border-gray-100 rounded-xl cursor-pointer">
                    <input type="radio" name="quiz-answer" value="2" class="w-5 h-5 text-accent-blue" onchange="student.selectAnswer(2)">
                    <span class="text-gray-700">Hitam, Putih, Abu-abu</span>
                </label>
                <label class="quiz-option flex items-center gap-4 p-4 border-2 border-gray-100 rounded-xl cursor-pointer">
                    <input type="radio" name="quiz-answer" value="3" class="w-5 h-5 text-accent-blue" onchange="student.selectAnswer(3)">
                    <span class="text-gray-700">Merah, Hijau, Biru</span>
                </label>
            </div>
            
            <div class="flex justify-between">
                <button onclick="student.hideQuizDemo()" class="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors">
                    Kembali
                </button>
                <button onclick="student.submitQuizAnswer()" class="px-6 py-3 bg-gradient-to-r from-soft-blue to-accent-blue text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                    Submit Jawaban
                </button>
            </div>
        `;
    },

    getQuizResult: function() {
        return `
            <div class="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center animate-fade-in">
                <div class="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-10 h-10 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
                <h3 class="text-2xl font-bold text-deep-blue mb-2">Selamat!</h3>
                <p class="text-gray-500 mb-4">Jawaban Anda Benar</p>
                <p class="text-5xl font-bold text-success mb-6">100</p>
                <button onclick="student.hideQuizResult()" class="w-full py-3 bg-gradient-to-r from-soft-blue to-accent-blue text-white font-semibold rounded-xl">
                    Tutup
                </button>
            </div>
        `;
    },

    getScores: function() {
        const myScores = [
            { quiz: 'Quiz Teori Warna', score: 85, date: '2024-01-15', status: 'completed' },
            { quiz: 'Tugas Layout Design', score: 90, date: '2024-01-18', status: 'completed' },
            { quiz: 'Quiz Typography', score: 88, date: '2024-01-20', status: 'completed' }
        ];

        return `
            <div class="animate-fade-in">
                <!-- Header -->
                <div class="mb-8">
                    <h1 class="text-2xl font-bold text-deep-blue">Nilai Saya</h1>
                    <p class="text-gray-500">Lihat perkembangan nilai Anda</p>
                </div>
                
                <!-- Summary Cards -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div class="bg-gradient-to-br from-soft-blue to-accent-blue rounded-2xl p-6 text-white">
                        <p class="text-white/80 text-sm mb-2">Rata-rata Nilai</p>
                        <p class="text-4xl font-bold">87.7</p>
                        <p class="text-white/80 text-sm mt-2">📈 Meningkat 5% dari bulan lalu</p>
                    </div>
                    <div class="bg-white rounded-2xl p-6 shadow-sm">
                        <p class="text-gray-500 text-sm mb-2">Total Quiz Selesai</p>
                        <p class="text-4xl font-bold text-deep-blue">3</p>
                        <p class="text-success text-sm mt-2">✓ Semua selesai tepat waktu</p>
                    </div>
                    <div class="bg-white rounded-2xl p-6 shadow-sm">
                        <p class="text-gray-500 text-sm mb-2">Nilai Tertinggi</p>
                        <p class="text-4xl font-bold text-success">90</p>
                        <p class="text-gray-400 text-sm mt-2">Tugas Layout Design</p>
                    </div>
                </div>
                
                <!-- Score History -->
                <div class="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div class="p-6 border-b border-gray-100">
                        <h3 class="font-bold text-deep-blue">Riwayat Nilai</h3>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full">
                            <thead class="bg-light-grey">
                                <tr>
                                    <th class="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase">Quiz/Tugas</th>
                                    <th class="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase">Nilai</th>
                                    <th class="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase">Tanggal</th>
                                    <th class="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase">Status</th>
                                    <th class="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${myScores.map(score => `
                                    <tr class="border-b border-gray-50 hover:bg-light-grey/50 transition-colors">
                                        <td class="py-4 px-6">
                                            <span class="font-medium text-deep-blue">${score.quiz}</span>
                                        </td>
                                        <td class="py-4 px-6">
                                            <span class="inline-flex items-center justify-center w-12 h-12 rounded-xl font-bold text-lg ${score.score >= 85 ? 'bg-success/10 text-success' : score.score >= 70 ? 'bg-warning/10 text-warning' : 'bg-danger/10 text-danger'}">
                                                ${score.score}
                                            </span>
                                        </td>
                                        <td class="py-4 px-6 text-gray-500">${score.date}</td>
                                        <td class="py-4 px-6">
                                            <span class="px-3 py-1 rounded-full text-xs font-medium bg-success/10 text-success">
                                                Selesai
                                            </span>
                                        </td>
                                        <td class="py-4 px-6">
                                            <button class="text-accent-blue hover:text-soft-blue font-medium text-sm">Lihat Detail</button>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    },

    selectedAnswer: null,

    startQuiz: function(id) {
        const quizDemo = document.getElementById('quiz-demo');
        if (quizDemo) {
            quizDemo.classList.remove('hidden');
            quizDemo.scrollIntoView({ behavior: 'smooth' });
        }
    },

    hideQuizDemo: function() {
        const quizDemo = document.getElementById('quiz-demo');
        if (quizDemo) {
            quizDemo.classList.add('hidden');
        }
    },

    selectAnswer: function(index) {
        this.selectedAnswer = index;
        document.querySelectorAll('.quiz-option').forEach((opt, i) => {
            opt.classList.toggle('selected', i === index);
        });
    },

    submitQuizAnswer: function() {
        if (this.selectedAnswer === 0) {
            document.getElementById('quiz-result').classList.remove('hidden');
        } else {
            utils.showToast('Jawaban salah, coba lagi!', 'error');
        }
    },

    hideQuizResult: function() {
        document.getElementById('quiz-result').classList.add('hidden');
        this.hideQuizDemo();
        this.selectedAnswer = null;
    },

    viewMaterial: function(id) {
        utils.showToast('Materi akan segera tersedia', 'info');
    }
};