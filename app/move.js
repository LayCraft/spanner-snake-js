const buildBoard = require('./build-board');
const drawBoard = require('./draw-board');
//returns if a space is blocked
function setBoardGrid(blob){

    // placeholder for coordinates collected
    // keeping these seperate so that they can be added in 
    var bodies = []; 
    var heads = [];
    var myHead = blob.you.body.data;
    console.log(myHead);
    var otherSnake = blob.snakes.data


    //write blocked locations to board
    const food = blob.food;

    // console.log(points);
    for (var i = 0; i < blob.snakes.data.length; i++ ){
        //collect coordinates
        var coordinates = blob.snakes.data[i].body.data;      
        let isHead = true;
        coordinates.forEach(element => {
            // console.log(element.x +","+element.y);
            if(isHead){
                element.object = 'H';
                heads.push(element);
                //head is now identified because it is the first item in the list.
                isHead = false;
            } else {
                element.object = 'B';
                bodies.push(element);
            }
        })
    }
    console.log("bodies");
    bodies.forEach((bork)=>{
        console.log(bork);
    });
    console.log("heads");
    heads.forEach((bork)=>{
        console.log(bork);
    });


    // food.forEach((bork)=>{
    //     console.log(bork);
    // });
    // threat.forEach((bork)=>{
    //     console.log(bork);
    // });

}

// move snake
var getMove = (blob) => {
    var board = buildBoard(blob);
    drawBoard(board);
    //final direction
    var move;
    move = { move: 'left', taunt: 'ss' };
    return move;
    }

module.exports = getMove;

