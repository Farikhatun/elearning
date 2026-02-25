// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFK8buuwET0spxnVccuApNg5sulQbuv5w",
    authDomain: "elearning-c81cb.firebaseapp.com",
    projectId: "elearning-c81cb",
    storageBucket: "elearning-c81cb.firebasestorage.app",
    messagingSenderId: "48410409495",
    appId: "1:48410409495:web:bda34b8da5823d9ce67a52"
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
