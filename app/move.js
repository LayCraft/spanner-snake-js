const buildBoard = require('./build-board');
const drawBoard = require('./draw-board');
const neighbours = require('./neighbours');
const rawDistance = require('./raw-distance');
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
    console.log("Returning move for snake "+ blob.you.id);
/*  
    this uses a modified a* algorithm. This means the g value of board spaces is set. G value represents effort. So the head of the snake has 0 effort because it is already there. all other spaces are instantiated at infinity. In this case infinity is represented by 9.
*/
    // console.log(blob);
    // console.log([blob.you.body.data[0].x, blob.you.body.data[0].y]);//my head
    // this is a set of priorities x,y,distance,cost
    
    var move = 'right';

    // returns a board that can be addressed with board[y][x]
    // also contains f,g,h,visited,closed,parent
    var board = buildBoard(blob.width, blob.height);
    
    // priority = setPriority(board);
    
    // console.log(rawDistance([0,0],[3,2]));//returns 5.
    // console.log(neighbours(board,[0,2]));//test returns a 2d array of orthoganal nodes
    // board[2][0].f = 3;//test can be addressed and set
    
    //draw a command line board
    drawBoard(board);

    //final direction
    return { move: move, taunt: 'ss' };
    }

module.exports = getMove;

