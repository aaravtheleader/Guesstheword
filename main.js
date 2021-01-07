function adduser(){
   
   Player1= document.getElementById("player1input").value;
   Player2= document.getElementById("player2input").value;
   localStorage.setItem("player1name",Player1);
   localStorage.setItem("player2name",Player2);
   window.location="game_page.html";
}