

//returns if a space is blocked
function setBoardGrid(blob){
    const width = blob.width;
    const height = blob.height;
    var board = []; // the final board state
    
    // instantiate blank array
    for (var y = 0; y<height; y++){
        var row = []; 
        for (var x = 0; x<width; x++){
            row.push([0]);
        }
        board.push(row);
    }

    // placeholder for coordinates collected
    var items = []; 
    
    //types
    //F == food
    //H == head
    //B == blocked
    //T == threat

    

    //write blocked locations to board
    const food = blob.food;

    console.log(points);


    // for (var i = 0; i < blob.snakes.data.length; i++ ){
    //     console.log(blob.snakes.data[i].name);
    //     var t = blob.snakes.data[i].body.data;
    //     console.log(t);
    //     t.forEach(element => {
    //         console.log(element.x +","+element.y);
    //     })
    // }

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
    /*
    find an unobstructed route to destination
        return first direction to get there. if there is more than one starting direction to get there then return a random one of them.
    Route found.
        return found
    No route found.
        Change priority
    Arrived at target?
    Arrived at wall?
    
    
    */
    return 'left';
}

// move snake
var getMove = (blob) => {  
    // console.log(blob);//write body to terminal
    // console.log(blob.width);
    setBoardGrid(blob);

    
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
    
    return { move: 'left', taunt: 'ss' }
    }

module.exports = getMove;

