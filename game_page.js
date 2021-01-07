var player1_score=0;
var player2_score=0;
player1_name=localStorage.getItem("player1name");
player2_name=localStorage.getItem("player2name");
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player_question").innerHTML="Question Turn : "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn : "+player2_name;
function send(){
    getWord=document.getElementById("word").value;
    word=getWord.toLowerCase();
    a=word.charAt(1);
    l=Math.floor(word.length/2);
    b=word.charAt(l);
    x=word.length-1;
    c=word.charAt(x);
    d=word.replace(a,"_");
    g=d.replace(b,"_");
    f=g.replace(c,"_");
    questionWord="<h4 id='wordDisplay'>Q. "+f+"</h4>";
    inputBox="<br><br>answer: <input type='text' id='checkbox'>";
    checkButton="<br><br><button class='btn-btn-success'onclick='check()'>Check</button>";
    row=questionWord+inputBox+checkButton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").innerHTML=" ";

}

questionTurn="player1";
answerTurn="player2";
function check(){
    getAnswer=document.getElementById("checkbox").value;
    answer=getAnswer.toLowerCase();
    if (answer==word){
if (answerTurn=="player1"){
    player1_score=player1_score+1;
    document.getElementById("player1_score").innerHTML=player1_score;
} else{
    player2_score=player2_score+1;
    document.getElementById("player2_score").innerHTML=player2_score;  
}
    }
if(questionTurn=="player1"){
    questionTurn="player2";
    document.getElementById("player_question").innerHTML="Question Turn : "+player2_name;  
} else{
    questionTurn="player1";
    document.getElementById("player_question").innerHTML="Question Turn : "+player1_name;
}
if(answerTurn=="player1"){
    answerTurn="player2";
    document.getElementById("player_answer").innerHTML="Answer Turn : "+player2_name;  
} else{
    answerTurn="player1";
    document.getElementById("player_answer").innerHTML="Answer Turn : "+player1_name;
}
 document.getElementById("output").innerHTML=" ";
}