let todo = [];
let doing = [];
let done = [];
   // TODO: Replace the following with your app's Firebase project configuration
    // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
    var firebaseConfig = {
      apiKey: "AIzaSyB4PkviMkXo5QoNvN6VW7ra-wO78w10H3U",
      authDomain: "quiz2-26200.firebaseapp.com",
      projectId: "quiz2-26200",
      storageBucket: "quiz2-26200.appspot.com",
      messagingSenderId: "1010336460685",
      appId: "1:1010336460685:web:ceed2987be1109063797c4",
      measurementId: "G-KLVJH912L0"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();
function loadFun() {
  console.log("hey");
  todo.push({ name: "moo" });
  console.log(todo);
}
function btn(){
  const currentDate =  new Date();
  db.collection("Tasks").add({
    descripcion: "test2",
    estado: "to do",
    fecha: currentDate.getDate(),
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
}
