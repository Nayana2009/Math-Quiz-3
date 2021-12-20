player1_name= localStorage.getItem("player1_name");
player2_name= localStorage.getItem("player2_name");

player1_score= 0;
player2_score= 0;

document.getElementById("player1_name").innerHTML=player1_name + ":";
document.getElementById("player2_name").innerHTML=player2_name + ":";

document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;

document.getElementById("player_question").innerHTML="Question Turn - " + player1_name;
document.getElementById("player_ans").innerHTML="Answer Turn - " + player2_name;

function send()
{
    number_1=document.getElementById("n1").value;
    number_2=document.getElementById("n2").value;
    correct_answer=parseInt(number_1)*parseInt(number_2);

    question_number="<h4>" +number_1+" X "+number_2+ "</h4>";
   input_box="<br> Answer:<input type='text' id='input_ans'>";

   button= "<br><br><button onclick='check()' class='btn btn-info'>Check</button>";

   total=question_number+input_box+button;
   document.getElementById("output").innerHTML=total;

  document.getElementById("number_1").value="";
  document.getElementById("number_2").value="";
}