import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter} from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkHQC2xwL4lhnTE-7xXUAT9dPxWkqMjWI",
  authDomain: "divoom-store-react.firebaseapp.com",
  projectId: "divoom-store-react",
  storageBucket: "divoom-store-react.appspot.com",
  messagingSenderId: "77674882824",
  appId: "1:77674882824:web:3c244a7ca2daf4ce232ebd"
};

// Initialize Firebase
initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
