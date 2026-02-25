// Utility Functions
window.utils = {
    showLoading: function(show = true) {
        let loader = document.getElementById('global-loader');
        if (!loader && show) {
            loader = document.createElement('div');
            loader.id = 'global-loader';
            loader.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
            loader.innerHTML = `
                <div class="bg-white rounded-2xl p-8">
                    <div class="w-16 h-16 border-4 border-accent-blue border-t-transparent rounded-full animate-spin"></div>
                </div>
            `;
            document.body.appendChild(loader);
        } else if (loader && !show) {
            loader.remove();
        }
    },

    showToast: function(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `fixed top-4 right-4 px-6 py-3 rounded-xl shadow-lg z-50 animate-fade-in ${
            type === 'success' ? 'bg-success text-white' : 
            type === 'error' ? 'bg-danger text-white' : 
            'bg-warning text-white'
        }`;
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    },

    formatDate: function(date) {
        return new Date(date).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    },

    animateCharts: function() {
        setTimeout(() => {
            document.querySelectorAll('.chart-bar').forEach(bar => {
                const height = bar.dataset.height;
                bar.style.height = height;
            });
        }, 100);
    },

    exportToExcel: function(data, filename = 'data.xlsx') {
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, filename);
    }
};