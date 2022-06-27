
//ADD YOUR FIREBASE 

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/Users").child(user_name).update({
        purpose:"Adding User"
    });
}