// Modal Components
window.modals = {
    showAddMaterialModal: function() {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
        modal.id = 'material-modal';
        modal.innerHTML = `
            <div class="bg-white rounded-2xl p-8 max-w-md w-full mx-4 animate-fade-in">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-xl font-bold text-deep-blue">Tambah Materi Baru</h3>
                    <button onclick="modals.closeModal('material-modal')" class="text-gray-400 hover:text-gray-600">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                
                <form id="add-material-form" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Judul Materi</label>
                        <input type="text" class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none" placeholder="Masukkan judul materi">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Tipe Materi</label>
                        <select class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none">
                            <option value="video">Video</option>
                            <option value="text">Teks</option>
                            <option value="image">Gambar</option>
                        </select>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Durasi</label>
                        <input type="text" class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none" placeholder="Contoh: 15 menit">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">URL Materi</label>
                        <input type="url" class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none" placeholder="https://example.com/video">
                    </div>
                    
                    <div class="flex gap-3 mt-6">
                        <button type="button" onclick="modals.closeModal('material-modal')" class="flex-1 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors">
                            Batal
                        </button>
                        <button type="submit" class="flex-1 py-3 bg-gradient-to-r from-soft-blue to-accent-blue text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
        `;
        
        document.body.appendChild(modal);
    },

    showAddQuizModal: function() {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
        modal.id = 'quiz-modal';
        modal.innerHTML = `
            <div class="bg-white rounded-2xl p-8 max-w-md w-full mx-4 animate-fade-in">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-xl font-bold text-deep-blue">Buat Quiz Baru</h3>
                    <button onclick="modals.closeModal('quiz-modal')" class="text-gray-400 hover:text-gray-600">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                
                <form id="add-quiz-form" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Judul Quiz</label>
                        <input type="text" class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none" placeholder="Masukkan judul quiz">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Jumlah Soal</label>
                        <input type="number" class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none" placeholder="10">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Durasi</label>
                        <input type="text" class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none" placeholder="Contoh: 15 menit">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Tipe Quiz</label>
                        <select class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none">
                            <option value="multiple-choice">Pilihan Ganda</option>
                            <option value="drag-drop">Drag & Drop</option>
                            <option value="matching">Matching</option>
                            <option value="essay">Essay</option>
                        </select>
                    </div>
                    
                    <div class="flex gap-3 mt-6">
                        <button type="button" onclick="modals.closeModal('quiz-modal')" class="flex-1 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors">
                            Batal
                        </button>
                        <button type="submit" class="flex-1 py-3 bg-gradient-to-r from-soft-blue to-accent-blue text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                            Lanjut
                        </button>
                    </div>
                </form>
            </div>
        `;
        
        document.body.appendChild(modal);
    },

    closeModal: function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.remove();
        }
    }
};