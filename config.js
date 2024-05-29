import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyCxNLHe-3UQ_PobDU4-5A8IXWyzc63LXRs",
  authDomain: "story-ca996.firebaseapp.com",
  databaseURL: "https://story-ca996-default-rtdb.firebaseio.com",
  projectId: "story-ca996",
  storageBucket: "story-ca996.appspot.com",
  messagingSenderId: "204536323272",
  appId: "1:204536323272:web:81c97bb9f9318cbb4a59fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
