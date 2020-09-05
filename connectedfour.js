$(".playerOne").eq(0).text(prompt("first player name:"))
$(".playerTwo").eq(0).text(prompt("second player name:"))

var select=0
$("td").click(function(){
    if(select%2==0)
    $(this).toggleClass("playerTwoTurn")
    else{
        $(this).toggleClass("playerOneTurn")
    }
    select++
})
