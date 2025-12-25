import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyCil1aOwZC9X3yRo4hzLqc12a2dYB7BI6I',
    authDomain: 'todolistproject-15784.firebaseapp.com',
    projectId: 'todolistproject-15784',
    storageBucket: 'todolistproject-15784.firebasestorage.app',
    messagingSenderId: '803838625794',
    appId: '1:803838625794:web:3db4f07b049aefbc017f1b',
    databaseURL:
        'https://todolistproject-15784-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const dataBase = getDatabase(app);
