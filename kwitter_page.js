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
var user=localStorage.getItem("user_name")
var room=localStorage.getItem("room_name")
console.log(user)
console.log(room)
function getData() { firebase.database().ref("/"+room).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id)
         console.log(message_data)
         name=message_data['name']
         message=message_data['message']
         like=message_data['like']
         nameWithTag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>"
         messageWithTag="<h4 class='message_h4'>"+message+"</h4>"
         like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+"onclick='update_like(this.id)'>"
         spanWithTag="<span class='glyphicorn glyphicorn-thumbs-up'>Like:"+like+"</span></button><hr>"
         row=nameWithTag+messageWithTag+like_button+spanWithTag
         document.getElementById("output").innerHTML+=row
      } });  }); }
getData();
function send(){
  var text=document.getElementById("message").value   
  firebase.database().ref(room).push({
        name:user,
        message:text,
        like:0
  })
  document.getElementById("message").innerHTML=" "
}
function update_like(message_id){
      console.log(message_id)
      button_id=message_id
var likes=document.getElementById(button_id).value
updated_likes=Number(likes)+1
firebase.database.ref(room).child(message_w).update({
      like:updated_likes
})
}