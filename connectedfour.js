$(".playerOne").eq(0).text(prompt("first player name:"))
$(".playerTwo").eq(0).text(prompt("second player name:"))

var rows=$("tr").eq(0).prevObject;
var level=[4,4,4,4,4,4,4,4];

var playerOne=true;
$("td").click(function(){
    var selected =this.cellIndex;
    actualElement=rows[level[selected]--].children[selected];
    if(playerOne){
        actualElement.className="playerOneTurn";
        playerOne=false;
    }
    else{
        actualElement.className="playerTwoTurn";
        playerOne=true;
    }
    selected++;
})

function checkWinner(element){
    var temp_element=temp_element2=temp_element3=element
    var topElementsClasses=topElementsArray(temp_element)
    var bottomelementCalsses=bottomElementsArray(temp_element2)
    var rightelementCalsses=rightElementsArray(temp_element3)
    var leftelementCalsses=leftElementsArray(element)
    return [topElementsClasses,bottomelementCalsses,rightelementCalsses,leftelementCalsses]
}

function leftElementsArray(element){
    var previousElements=[];
    var columnsCount=0;
        while(element!==null && columnsCount++ !==4){
          try {
            previousElements.push(element.className);
            element=element.previousElementSibling; 
          } catch (error) {
          break;    
          }  
            
        }
        return previousElements;
}
function rightElementsArray(element){
    var columnsCount=0;
    var nextElements=[];
        while(element!==null && columnsCount++ !==4){
          try {
            nextElements.push(element.className);
            element=element.nextElementSibling; 
          } catch (error) {
          break;    
          }  
            
        }
        
        return nextElements;
}
function topElementsArray(element){
    var topElements=[];
    var columnsCount=0;
        while(element!==null && columnsCount++ !==4){
          try {
            topElements.push(element.className);
            element=element.parentNode.previousElementSibling.cells[element.cellIndex];
          } catch (error) {
          break;    
          }  
            
        }
        return topElements;    
}
function bottomElementsArray(element){
    var bottomElements=[];
    var columnsCount=0;
        while(element!==null && columnsCount++ !==4){
          try {
            bottomElements.push(element.className);
            element=element.parentNode.nextElementSibling.cells[element.cellIndex];
          } catch (error) {
          break;    
          }  
            
        }
        return bottomElements;    
}