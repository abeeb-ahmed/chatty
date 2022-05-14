import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBK8PwaRxlRzjT027SkIB0m3M0QcUs8sE0",
  authDomain: "chatty-6d541.firebaseapp.com",
  projectId: "chatty-6d541",
  storageBucket: "chatty-6d541.appspot.com",
  messagingSenderId: "668236400693",
  appId: "1:668236400693:web:8891684ccf0eabc81b897c",
  measurementId: "G-Z3JXLHGZER",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
