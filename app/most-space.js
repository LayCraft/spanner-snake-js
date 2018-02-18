const neighbours = require('./neighbours');
const inArray = require('./inArray');

function floodFill(board, coord){
    var width = board[0].length;
    var height = board.length;
    var stats = {count:0, collisions:0, coordinate:coord};
    var open = [coord];
    var closed = [];
    while (open.length>0){
        //get next element from open list
        let m = open.pop();
        if (()=>{
            //test if element m is in the array already.
            closed.forEach((element)=>{
                if (element == m) {
                    console.log("open coordinate found in closed coordinate list.=>"+ m);
                    return true;
                }
            })
        }){
            console.log("Found an element matching the one.")
        }
        closed.push(m);
        // pop element add element to closed list
        // if found element is empty
            // increment count by 10
        // if element is threat increment by 2 and continue traversal
            // check for neighbours and remove ones in the closed coordinates collection
            // add empty coords to open coords
        // else increment collision count
    }
    console.log("Open"+ open);
    console.log("Closed"+ closed);
    return stats;
}
//returns if a space is blocked
function mostSpace(board, head){
    startSpaces = neighbours(board[0].length, board.length, head);
    startSpaces.forEach(direction => {
         floodFill(board, direction);
    });

    //figure out which direction has the most moves.

    //Flood fill each direction
    //left
    //right
    //up
    //down
    return 'left';
}
module.exports = mostSpace;