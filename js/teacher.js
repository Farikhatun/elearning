// Teacher Functions
window.teacher = {
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
                    <h1 class="text-2xl font-bold text-deep-blue">Dashboard Guru</h1>
                    <p class="text-gray-500">Selamat datang kembali, ${auth.currentUser.name}!</p>
                </div>
                
                <!-- Stats Cards -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    ${this.getStatCards()}
                </div>
                
                <!-- Charts Row -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    ${this.getProgressChart()}
                    ${this.getProgressCircle()}
                </div>
                
                <!-- Recent Students -->
                ${this.getRecentStudents()}
            </div>
        `;
    },

    getStatCards: function() {
        return `
            <div class="bg-white rounded-2xl p-6 shadow-sm card-hover">
                <div class="flex items-center justify-between mb-4">
                    <div class="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center">
                        <svg class="w-6 h-6 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                        </svg>
                    </div>
                    <span class="text-success text-sm font-medium">+12%</span>
                </div>
                <h3 class="text-3xl font-bold text-deep-blue mb-1">156</h3>
                <p class="text-gray-500 text-sm">Total Siswa</p>
            </div>
            
            <div class="bg-white rounded-2xl p-6 shadow-sm card-hover">
                <div class="flex items-center justify-between mb-4">
                    <div class="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                        <svg class="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <span class="text-success text-sm font-medium">+8%</span>
                </div>
                <h3 class="text-3xl font-bold text-deep-blue mb-1">142</h3>
                <p class="text-gray-500 text-sm">Siswa Aktif</p>
            </div>
            
            <div class="bg-white rounded-2xl p-6 shadow-sm card-hover">
                <div class="flex items-center justify-between mb-4">
                    <div class="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center">
                        <svg class="w-6 h-6 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                        </svg>
                    </div>
                    <span class="text-gray-400 text-sm font-medium">5 baru</span>
                </div>
                <h3 class="text-3xl font-bold text-deep-blue mb-1">24</h3>
                <p class="text-gray-500 text-sm">Total Materi</p>
            </div>
            
            <div class="bg-white rounded-2xl p-6 shadow-sm card-hover">
                <div class="flex items-center justify-between mb-4">
                    <div class="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                        <svg class="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                        </svg>
                    </div>
                    <span class="text-danger text-sm font-medium">3 aktif</span>
                </div>
                <h3 class="text-3xl font-bold text-deep-blue mb-1">12</h3>
                <p class="text-gray-500 text-sm">Quiz/Tugas</p>
            </div>
        `;
    },

    getProgressChart: function() {
        return `
            <div class="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
                <div class="flex items-center justify-between mb-6">
                    <div>
                        <h3 class="font-bold text-deep-blue">Perkembangan Nilai</h3>
                        <p class="text-sm text-gray-500">Rata-rata nilai per minggu</p>
                    </div>
                    <select class="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent-blue">
                        <option>Minggu ini</option>
                        <option>Bulan ini</option>
                        <option>Semester ini</option>
                    </select>
                </div>
                <div class="h-64 flex items-end justify-between gap-4 px-4">
                    ${['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map((day, i) => {
                        const heights = [65, 78, 72, 85, 90, 82];
                        return `
                            <div class="flex-1 flex flex-col items-center gap-2">
                                <div class="w-full bg-light-grey rounded-t-lg relative overflow-hidden" style="height: 200px;">
                                    <div class="chart-bar absolute bottom-0 w-full bg-gradient-to-t from-soft-blue to-accent-blue rounded-t-lg transition-all duration-1000" style="height: 0%;" data-height="${heights[i]}%"></div>
                                </div>
                                <span class="text-xs text-gray-500 font-medium">${day}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    },

    getProgressCircle: function() {
        return `
            <div class="bg-white rounded-2xl p-6 shadow-sm">
                <h3 class="font-bold text-deep-blue mb-6">Progres Keseluruhan</h3>
                <div class="flex flex-col items-center">
                    <div class="relative w-40 h-40 mb-4">
                        <svg class="w-full h-full progress-ring">
                            <circle cx="80" cy="80" r="70" fill="none" stroke="#E5E7EB" stroke-width="12"/>
                            <circle cx="80" cy="80" r="70" fill="none" stroke="url(#gradient)" stroke-width="12" 
                                stroke-linecap="round" stroke-dasharray="440" stroke-dashoffset="110" class="transition-all duration-1000"/>
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stop-color="#1E4FA1"/>
                                    <stop offset="100%" stop-color="#3B82F6"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div class="absolute inset-0 flex items-center justify-center flex-col">
                            <span class="text-3xl font-bold text-deep-blue">75%</span>
                            <span class="text-xs text-gray-500">Selesai</span>
                        </div>
                    </div>
                    <div class="w-full space-y-3">
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-600">Materi Selesai</span>
                            <span class="text-sm font-semibold text-deep-blue">18/24</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-600">Quiz Dikerjakan</span>
                            <span class="text-sm font-semibold text-deep-blue">9/12</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    getRecentStudents: function() {
        const students = [
            { id: 1, name: 'Ahmad Rizki', class: 'XII RPL 1', progress: 85, avgScore: 88 },
            { id: 2, name: 'Siti Nurhaliza', class: 'XII RPL 1', progress: 92, avgScore: 95 },
            { id: 3, name: 'Budi Santoso', class: 'XII RPL 2', progress: 78, avgScore: 82 },
            { id: 4, name: 'Dewi Lestari', class: 'XII RPL 2', progress: 88, avgScore: 90 },
            { id: 5, name: 'Eko Prasetyo', class: 'XII RPL 1', progress: 65, avgScore: 75 }
        ];

        return `
            <div class="bg-white rounded-2xl p-6 shadow-sm">
                <div class="flex items-center justify-between mb-6">
                    <div>
                        <h3 class="font-bold text-deep-blue">Siswa Terbaru</h3>
                        <p class="text-sm text-gray-500">Aktivitas pembelajaran terkini</p>
                    </div>
                    <button class="text-sm text-accent-blue hover:text-soft-blue font-medium">Lihat Semua</button>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="border-b border-gray-100">
                                <th class="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Siswa</th>
                                <th class="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Kelas</th>
                                <th class="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Progres</th>
                                <th class="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Rata-rata</th>
                                <th class="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${students.map(student => `
                                <tr class="border-b border-gray-50 hover:bg-light-grey/50 transition-colors">
                                    <td class="py-4 px-4">
                                        <div class="flex items-center gap-3">
                                            <div class="w-10 h-10 bg-gradient-to-br from-accent-blue to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                ${student.name.charAt(0)}
                                            </div>
                                            <span class="font-medium text-deep-blue">${student.name}</span>
                                        </div>
                                    </td>
                                    <td class="py-4 px-4 text-gray-600">${student.class}</td>
                                    <td class="py-4 px-4">
                                        <div class="flex items-center gap-2">
                                            <div class="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <div class="h-full bg-gradient-to-r from-soft-blue to-accent-blue rounded-full" style="width: ${student.progress}%"></div>
                                            </div>
                                            <span class="text-sm text-gray-600">${student.progress}%</span>
                                        </div>
                                    </td>
                                    <td class="py-4 px-4">
                                        <span class="font-semibold ${student.avgScore >= 85 ? 'text-success' : student.avgScore >= 70 ? 'text-warning' : 'text-danger'}">${student.avgScore}</span>
                                    </td>
                                    <td class="py-4 px-4">
                                        <span class="px-3 py-1 rounded-full text-xs font-medium ${student.progress >= 80 ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}">
                                            ${student.progress >= 80 ? 'Aktif' : 'Perlu Perhatian'}
                                        </span>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
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
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <div>
                        <h1 class="text-2xl font-bold text-deep-blue">Kelola Materi</h1>
                        <p class="text-gray-500">Buat dan kelola materi pembelajaran</p>
                    </div>
                    <button onclick="modals.showAddMaterialModal()" class="px-6 py-3 bg-gradient-to-r from-soft-blue to-accent-blue text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                        </svg>
                        Tambah Materi
                    </button>
                </div>
                
                <!-- Tabs -->
                <div class="flex gap-2 mb-6 border-b border-gray-200">
                    <button class="tab-btn active px-6 py-3 text-sm font-medium transition-colors" onclick="teacher.filterMaterials('all')">Semua</button>
                    <button class="tab-btn px-6 py-3 text-sm font-medium text-gray-500 transition-colors" onclick="teacher.filterMaterials('video')">Video</button>
                    <button class="tab-btn px-6 py-3 text-sm font-medium text-gray-500 transition-colors" onclick="teacher.filterMaterials('text')">Teks</button>
                    <button class="tab-btn px-6 py-3 text-sm font-medium text-gray-500 transition-colors" onclick="teacher.filterMaterials('image')">Gambar</button>
                </div>
                
                <!-- Materials Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${materials.map(material => this.getMaterialCard(material)).join('')}
                </div>
            </div>
        `;
    },

    getMaterialCard: function(material) {
        return `
            <div class="bg-white rounded-2xl shadow-sm overflow-hidden card-hover">
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
                    <span class="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${material.status === 'published' ? 'bg-white/20 text-white' : 'bg-yellow-400 text-yellow-900'}">
                        ${material.status === 'published' ? 'Published' : 'Draft'}
                    </span>
                </div>
                <div class="p-5">
                    <h3 class="font-bold text-deep-blue mb-2">${material.title}</h3>
                    <div class="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span class="flex items-center gap-1">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            ${material.duration}
                        </span>
                        <span class="capitalize">${material.type}</span>
                    </div>
                    <div class="flex gap-2">
                        <button class="flex-1 py-2 px-4 bg-accent-blue/10 text-accent-blue font-medium rounded-lg hover:bg-accent-blue/20 transition-colors text-sm">
                            Edit
                        </button>
                        <button class="py-2 px-4 bg-danger/10 text-danger font-medium rounded-lg hover:bg-danger/20 transition-colors text-sm">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    getQuiz: function() {
        const quizzes = [
            { id: 1, title: 'Quiz Teori Warna', questions: 10, duration: '15 menit', status: 'active' },
            { id: 2, title: 'Tugas Layout Design', questions: 3, duration: '60 menit', status: 'active' },
            { id: 3, title: 'Quiz Typography', questions: 15, duration: '20 menit', status: 'draft' }
        ];

        return `
            <div class="animate-fade-in">
                <!-- Header -->
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <div>
                        <h1 class="text-2xl font-bold text-deep-blue">Quiz & Tugas</h1>
                        <p class="text-gray-500">Buat dan kelola quiz serta tugas</p>
                    </div>
                    <button onclick="modals.showAddQuizModal()" class="px-6 py-3 bg-gradient-to-r from-soft-blue to-accent-blue text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                        </svg>
                        Buat Quiz Baru
                    </button>
                </div>
                
                <!-- Quiz List -->
                <div class="space-y-4">
                    ${quizzes.map((quiz, index) => this.getQuizCard(quiz, index)).join('')}
                </div>
                
                <!-- Question Types Preview -->
                ${this.getQuestionTypes()}
            </div>
        `;
    },

    getQuizCard: function(quiz, index) {
        return `
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
                                <span class="px-3 py-1 rounded-full text-xs font-medium ${quiz.status === 'active' ? 'bg-success/10 text-success' : 'bg-gray-100 text-gray-500'}">
                                    ${quiz.status === 'active' ? 'Aktif' : 'Draft'}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <button class="px-4 py-2 bg-light-grey hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors text-sm">
                            Preview
                        </button>
                        <button class="px-4 py-2 bg-accent-blue/10 text-accent-blue font-medium rounded-lg hover:bg-accent-blue/20 transition-colors text-sm">
                            Edit
                        </button>
                        <button class="px-4 py-2 bg-danger/10 text-danger font-medium rounded-lg hover:bg-danger/20 transition-colors text-sm">
                            Hapus
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    getQuestionTypes: function() {
        return `
            <div class="mt-8">
                <h2 class="text-lg font-bold text-deep-blue mb-4">Jenis Soal Tersedia</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div class="bg-white rounded-xl p-5 shadow-sm border-2 border-transparent hover:border-accent-blue transition-colors cursor-pointer">
                        <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                            <svg class="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <h4 class="font-semibold text-deep-blue mb-1">Pilihan Ganda</h4>
                        <p class="text-xs text-gray-500">Multiple choice dengan 4 opsi jawaban</p>
                    </div>
                    <div class="bg-white rounded-xl p-5 shadow-sm border-2 border-transparent hover:border-accent-blue transition-colors cursor-pointer">
                        <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                            <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/>
                            </svg>
                        </div>
                        <h4 class="font-semibold text-deep-blue mb-1">Drag & Drop</h4>
                        <p class="text-xs text-gray-500">Seret jawaban ke tempat yang benar</p>
                    </div>
                    <div class="bg-white rounded-xl p-5 shadow-sm border-2 border-transparent hover:border-accent-blue transition-colors cursor-pointer">
                        <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                            <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                            </svg>
                        </div>
                        <h4 class="font-semibold text-deep-blue mb-1">Matching</h4>
                        <p class="text-xs text-gray-500">Cocokkan pasangan yang sesuai</p>
                    </div>
                    <div class="bg-white rounded-xl p-5 shadow-sm border-2 border-transparent hover:border-accent-blue transition-colors cursor-pointer">
                        <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-3">
                            <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                            </svg>
                        </div>
                        <h4 class="font-semibold text-deep-blue mb-1">Essay</h4>
                        <p class="text-xs text-gray-500">Jawaban dalam bentuk paragraf</p>
                    </div>
                </div>
            </div>
        `;
    },

    getScores: function() {
        const scores = [
            { id: 1, studentName: 'Ahmad Rizki', quiz: 'Quiz Teori Warna', score: 85, date: '2024-01-15' },
            { id: 2, studentName: 'Siti Nurhaliza', quiz: 'Quiz Teori Warna', score: 95, date: '2024-01-15' },
            { id: 3, studentName: 'Budi Santoso', quiz: 'Quiz Teori Warna', score: 78, date: '2024-01-15' },
            { id: 4, studentName: 'Ahmad Rizki', quiz: 'Tugas Layout Design', score: 90, date: '2024-01-18' },
            { id: 5, studentName: 'Siti Nurhaliza', quiz: 'Tugas Layout Design', score: 92, date: '2024-01-18' }
        ];

        return `
            <div class="animate-fade-in">
                <!-- Header -->
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <div>
                        <h1 class="text-2xl font-bold text-deep-blue">Rekapitulasi Nilai</h1>
                        <p class="text-gray-500">Pantau dan kelola nilai siswa</p>
                    </div>
                    <button onclick="teacher.exportScoresToExcel()" class="px-6 py-3 bg-success text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                        </svg>
                        Download Laporan Excel
                    </button>
                </div>
                
                <!-- Filter Bar -->
                <div class="bg-white rounded-2xl p-4 shadow-sm mb-6">
                    <div class="flex flex-col md:flex-row gap-4">
                        <div class="flex-1 relative">
                            <svg class="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                            <input type="text" placeholder="Cari siswa..." class="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none">
                        </div>
                        <select class="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none">
                            <option>Semua Kelas</option>
                            <option>XII RPL 1</option>
                            <option>XII RPL 2</option>
                        </select>
                        <select class="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none">
                            <option>Semua Quiz</option>
                            <option>Quiz Teori Warna</option>
                            <option>Tugas Layout Design</option>
                        </select>
                    </div>
                </div>
                
                <!-- Scores Table -->
                <div class="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full">
                            <thead class="bg-light-grey">
                                <tr>
                                    <th class="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase">Siswa</th>
                                    <th class="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase">Quiz/Tugas</th>
                                    <th class="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase">Nilai</th>
                                    <th class="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase">Tanggal</th>
                                    <th class="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${scores.map(score => `
                                    <tr class="border-b border-gray-50 hover:bg-light-grey/50 transition-colors">
                                        <td class="py-4 px-6">
                                            <div class="flex items-center gap-3">
                                                <div class="w-10 h-10 bg-gradient-to-br from-accent-blue to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                    ${score.studentName.charAt(0)}
                                                </div>
                                                <span class="font-medium text-deep-blue">${score.studentName}</span>
                                            </div>
                                        </td>
                                        <td class="py-4 px-6 text-gray-600">${score.quiz}</td>
                                        <td class="py-4 px-6">
                                            <span class="inline-flex items-center justify-center w-12 h-12 rounded-xl font-bold text-lg ${score.score >= 85 ? 'bg-success/10 text-success' : score.score >= 70 ? 'bg-warning/10 text-warning' : 'bg-danger/10 text-danger'}">
                                                ${score.score}
                                            </span>
                                        </td>
                                        <td class="py-4 px-6 text-gray-500">${score.date}</td>
                                        <td class="py-4 px-6">
                                            <button class="text-accent-blue hover:text-soft-blue font-medium text-sm">Detail</button>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                    
                    <!-- Pagination -->
                    <div class="p-4 border-t border-gray-100 flex items-center justify-between">
                        <p class="text-sm text-gray-500">Menampilkan 1-5 dari 50 data</p>
                        <div class="flex gap-2">
                            <button class="px-3 py-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-light-grey transition-colors">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                                </svg>
                            </button>
                            <button class="px-4 py-2 bg-accent-blue text-white rounded-lg font-medium">1</button>
                            <button class="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-light-grey transition-colors">2</button>
                            <button class="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-light-grey transition-colors">3</button>
                            <button class="px-3 py-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-light-grey transition-colors">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    exportScoresToExcel: function() {
        const scores = [
            { studentName: 'Ahmad Rizki', quiz: 'Quiz Teori Warna', score: 85, date: '2024-01-15' },
            { studentName: 'Siti Nurhaliza', quiz: 'Quiz Teori Warna', score: 95, date: '2024-01-15' },
            { studentName: 'Budi Santoso', quiz: 'Quiz Teori Warna', score: 78, date: '2024-01-15' },
            { studentName: 'Ahmad Rizki', quiz: 'Tugas Layout Design', score: 90, date: '2024-01-18' },
            { studentName: 'Siti Nurhaliza', quiz: 'Tugas Layout Design', score: 92, date: '2024-01-18' }
        ];

        utils.exportToExcel(scores, 'rekap_nilai_siswa.xlsx');
        utils.showToast('File Excel berhasil diunduh!');
    },

    filterMaterials: function(type) {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    }
};