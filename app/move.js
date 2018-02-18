const buildBoard = require('./build-board');
const drawBoard = require('./draw-board');
const neighbours = require('./neighbours');
const rawDistance = require('./raw-distance');
const realDistance = require('./real-distance');
const mostSpace = require('./most-space');
const priorities = require('./priorities');
const populateBoard = require('./populate-board');
const inArray = require('./inArray');
// move snake
var getMove = (blob) => {
/*  
    this uses a modified a* algorithm. This means the g value of board spaces is set. G value represents effort. So the head of the snake has 0 effort because it is already there. all other spaces are instantiated at infinity. In this case infinity is represented by 9.
*/
    var move = 'right';

    const head = [blob.you.body.data[0].x, blob.you.body.data[0].y];//my head
    // this is a set of priorities x,y,distance,cost
    

    // returns a board that can be addressed with board[y][x]
    // also contains f,g,h,visited,closed,parent
    var board = buildBoard(blob.width, blob.height);
    board = populateBoard(board, blob);
    
    // find a target/priority 
    // var priorityList = priorities(board, blob);
    // direction with greatest space
    // move = mostSpace(board, head);


    // var distance = rawDistance(head, priorityList[0]);
    // var direction = realDistance(head, priorityList[0]);
    // flood fill area

    // console.log("Raw distance: "+distance);
    // console.log(rawDistance([0,0],[3,2]));//returns 5.
    // board[2][0].f = 3;//test can be addressed and set
    
    //draw a board in the terminal
    // drawBoard(board, 'Normal board');
    drawBoard(board, 'Populated board');
    //final direction
    console.log(`Returning ${move}ward move for snake ${blob.you.id}. gj`);
    return { move: move, taunt: 'ssssssss' };
    }

module.exports = getMove;

