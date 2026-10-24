
const firebaseConfig = {
  apiKey: "AIzaSyCO0jsrq04aFde9OGy4hV9obQPU-vKiz2Q",
  authDomain: "sciocart.firebaseapp.com",
  projectId: "sciocart",
  storageBucket: "sciocart.firebasestorage.app",
  messagingSenderId: "292225398334",
  appId: "1:292225398334:web:b16f254764f3f33410036f",
  measurementId: "G-HM968Q06DZ"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
