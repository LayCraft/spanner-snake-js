//returns if a space is blocked 
function setBoardBlocked(blob){
    let boardBlocked = [];
    snakeList = blob.snakes;

    for (var i =0; i<snakeList.length; i++){
        let snake = snakeList[i];
        // console.log("Snake: "+snake);
        for (var j=0; i<snake.coords.length; i++){
            let coordList = snake.coords;
            // console.log("Coordlist: "+coordList);
            for (var k=0; k<coordList.length; k++){
                // console.log("Coordlist item" + coordList[k]);
                boardBlocked.push(coordList[k]);
            }
        }
    }
    console.log(boardBlocked);
/*{ you: '086b46eb-be81-431e-976c-7650f935cca3',
  width: 20,
  turn: 3,
  snakes:
   [ { taunt: null,
       name: 'Spanner Snake',
       id: '086b46eb-be81-431e-976c-7650f935cca3',
       health_points: 97,
       coords: [Array] } ],
  height: 20,
  game_id: '086c209d-de89-43ef-b484-9241fe4b4a5e',
  food: [ [ 14, 9 ] ],
  dead_snakes: [] }*/

}

// takes board data and returns a big list of interesting destinations 
function getTargets(){
    // Consider: food, attack, gap
    return [[0,0,'food'],[15,15,'attack'],[10,10,'gap']];
}

// is there a list of points from head to destination?
// arguments: destination coordinates, canRoute, distance
/*
n = the distance between the snake and its destination
*/
function move (n, startPosition, destination, directionTaken){
    // if direction
    return 'left';
}

// move snake
var getMove = (blob) => {  
    console.log(blob);//write body to terminal
    // console.log(blob.width);
    setBoardBlocked(blob);
    //final direction
    // var move;
    //  move = move();

    //parse data from server and plot it on the board
    //
    // an array of immediate choices
    // var safeDirections = getSafeDirections();
    // where the snake wants to go
    // var targets = getTargets();

    //var move = move();
    
    return { move: 'right', taunt: 'ss' }
    }

module.exports = getMove;

