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
//ADD YOUR FIREBASE LINKS HERE

username=localStorage.getItem("username");
document.getElementById("user_name").innerHTML="Welcome " + username +"!";

function addroom(){
      roomname=document.getElementById("addroom").value;
      firebase.database().ref("/").child(roomname).update({
            cake:"sprinkles"
      });
      localStorage.setItem("roomname",roomname);
      
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname"+Room_names);
row="<div class='roomname' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirect(name){
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}