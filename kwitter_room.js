
var firebaseConfig = {
      apiKey: "AIzaSyCrmqjcbWN6M2Q_LjeItW2LMtUZwLW40zk",
      authDomain: "kwitter-7bbb5.firebaseapp.com",
      databaseURL: "https://kwitter-7bbb5-default-rtdb.firebaseio.com",
      projectId: "kwitter-7bbb5",
      storageBucket: "kwitter-7bbb5.appspot.com",
      messagingSenderId: "750121933597",
      appId: "1:750121933597:web:1547840652669ad948dff4",
      measurementId: "G-S0S4WPV8LL"
    };
    firebase.initializeApp(firebaseConfig);
   var user_name=localStorage.getItem("user_name")
    document.getElementById("name_user").innerHTML="Welcome "+user_name+"!"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log(Room_names)
      var row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row
     });});}
getData();
function add_room(){
var roomname=document.getElementById("room_name").value
console.log(roomname)
firebase.database().ref("/").child(roomname).update({
      pupous:"adding room name"
})
localStorage.setItem("room_name",roomname)
window.location="kwitter_page.html"
}
function redirectToRoomName(name){
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
}
function Logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}