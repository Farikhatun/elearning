// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// Collections
const collections = {
    users: 'users',
    materials: 'materials',
    quizzes: 'quizzes',
    scores: 'scores',
    classes: 'classes'
};

// Default Data
const defaultConfig = {
    site_title: 'E-Learning Desain Grafis',
    welcome_text: 'Selamat Datang di Platform Pembelajaran',
    primary_color: '#0A1F44',
    secondary_color: '#1E4FA1',
    accent_color: '#3B82F6',
    background_color: '#F5F7FA',
    text_color: '#1F2937'
};