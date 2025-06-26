// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP9IwqiyKmfAHS_997IMcVsinsHmkmhXI",
  authDomain: "doctorapp-5bb53.firebaseapp.com",
  projectId: "doctorapp-5bb53",
  storageBucket: "doctorapp-5bb53.firebasestorage.app",
  messagingSenderId: "48730095361",
  appId: "1:48730095361:web:1a48770173be6fcd2da500",
  measurementId: "G-ZSGG439XYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
document.getElementById("appointmentForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const doctor = document.getElementById("doctor").value;
  const dateTime = document.getElementById("dateTime").value;

  try {
    await addDoc(collection(db, "appointments"), {
      name: name,
      doctor: doctor,
      dateTime: dateTime
    });
    alert("Appointment booked successfully!");
  } catch (error) {
    alert("Error booking appointment: " + error);
  }
});