$(".playerOne").eq(0).text(prompt("first player name:"))
$(".playerTwo").eq(0).text(prompt("second player name:"))

var rows=$("tr").eq(0).prevObject;
var level=[4,4,4,4,4,4,4,4];

var playerOne=true;
$("td").click(function(){
    var selected =this.cellIndex;
    console.log(selected) ;
    if(playerOne){
        rows[level[selected]--].children[selected].className="playerOneTurn";
        playerOne=false;
    }
    else{
        rows[level[selected]--].children[selected].className="playerTwoTurn";
        playerOne=true;
    }
    selected++;
})
