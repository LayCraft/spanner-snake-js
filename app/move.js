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
/*  
    this uses a modified a* algorithm. This means the g value of board spaces is set. G value represents effort. So the head of the snake has 0 effort because it is already there. all other spaces are instantiated at infinity. In this case infinity is represented by 9.

    build board
    determine destination
    route path to destination
    return first direction in route
*/


    var move = 'left';

    var board = buildBoard(blob.width, blob.height);
    // Each 
    // board[2][0].f=3;
    console.log(board[2][0]);//this is addressed by [y][x]
    // board = setCoords(board, [[1,2],[1,3],[1,4]], 0);
    
    //draw a command line board
    drawBoard(board);
    //final direction
    var move;
    return { move: move, taunt: 'ss' };
    }

module.exports = getMove;

