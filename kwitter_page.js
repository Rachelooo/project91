var firebaseConfig = {
      apiKey: "AIzaSyAma9yU6NWeVI3a99v2wgxO0k67RtkACsc",
      authDomain: "kwitter-f690d.firebaseapp.com",
      databaseURL: "https://kwitter-f690d-default-rtdb.firebaseio.com",
      projectId: "kwitter-f690d",
      storageBucket: "kwitter-f690d.appspot.com",
      messagingSenderId: "325459002928",
      appId: "1:325459002928:web:19132880321d2aa79e0ff5"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS

username=localStorage.getItem("username");
roomname=localStorage.getItem("roomname");

function send(){
      message=document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
            name:username,
            message:message,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
likes = message_data['like'];
nametag = "<h4>"+name+"<img src='tick.png' class='user_tick'></h4>";
messagetag = "<h4 class='message_h4'>"+message+"</h4>";
liketag = "<button class='btn btn-warning' id="+firebase_message_id+" value="+likes+" onclick='updatelike(this.id)'>";
spantag = "<span class='glyphicon glyphicon-thumbs-up'>like; "+ likes +"</span></button><hr>";

row = nametag + messagetag + liketag + spantag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updatelike(message_id){
      console.log("Clicked on like button- "+ message_id);
      button_id = message_id;
      Likes = document.getElementById(button_id).value;
      updated_like = Number(Likes) + 1;
      console.log(updated_like);
      firebase.database().ref(roomname).child(message_id).update({
            like:updated_like
      });
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location.replace("index.html");
}