var board = [];
//returns if a space is blocked 
function isBlocked(){

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
    
}

// move snake
var getMove = (body) => {
    //parse data from server and plot it on the board
    //
    // an array of immediate choices
    // var safeDirections = getSafeDirections();
    // where the snake wants to go
    //var targets = getTarget();

    //var move = move();
    
    return { move: 'right' }
    }

module.exports = getMove;

