const neighbours = require('./neighbours');

/* 
    put all snakes, threats, incentives and food on the board.
 */
const populateBoard = (board, blob) => {
    
    populated = board;
    myHead = [blob.you.body.data[0].x, blob.you.body.data[0].y];
    myLength = blob.you.length;
    console.log("My length "+myLength);
    heads = [];
    //place all snakes
    blob.snakes.data.forEach(snake => {
        let isHead = true;
        snake.body.data.forEach(point => {
            if (isHead){
                //first item in list is a head
                populated[point.y][point.x].contains = 'H';
                // Uh oh the snake is bigger than you but not you.
                // NOTE: The comparison done here is dumb but is a workaround for problems comparing js objects. :-(
                if(blob.you.length<=snake.length && JSON.stringify([blob.you.body.data[0].x, blob.you.body.data[0].y]) !== JSON.stringify([point.x, point.y])) {
                    heads.push([point.x, point.y]);
                }
                // if the head is not my head
                isHead = false;
            } else if( populated[point.y][point.x].contains == 'H') {
                //do not overdraw a head with a body.
            } else {
                //otherwise we are looking at normal body tiles
                populated[point.y][point.x].contains = 'B';
            }
        });
        isHead = true;
    });
    // add food spaces to board
    blob.food.data.forEach(point=>{
        populated[point.y][point.x].contains = 'F';
    }); 

    //generate threat spaces
    threats = [];
    heads.forEach((head)=>{
        point = neighbours(blob.width, blob.height, head);
        point.forEach((point) => {
            // if the populated board doesn't have a body or head there it should be marked as threats
            if (populated[point[1]][point[0]].contains == 'H' || populated[point[1]][point[0]].contains == 'B'){
                //mark nothing
            } else if (populated[point[1]][point[0]].contains == 'F') {
                // it is a tempting but dangerous food source
                populated[point[1]][point[0]].contains = 'X'; 
            } else {
                // it is a threatening spot
                populated[point[1]][point[0]].contains = 'T';
            }
        });
    });

    populated[blob.you.body.data[0].y][blob.you.body.data[0].x].contains = 'M';
    // console.log(myHead);
    // console.log(heads);

    return populated;
}
module.exports = populateBoard;

/*{
    "you":
        {"taunt":null,"object":"snake","name":"Spanner Snake","length":3,"id":"12369a41-56dd-45f4-8a29-e9349391c97a","health":94,"body":{"object":"list","data":[{"y":4,"x":8,"object":"point"},{"y":4,"x":7,"object":"point"},{"y":4,"x":6,"object":"point"}]}},
    "width":20,
    "turn":6,
    "snakes":
        {"object":"list","data":[{"taunt":null,"object":"snake","name":"Spanner Snake","length":3,"id":"12369a41-56dd-45f4-8a29-e9349391c97a","health":94,
            "body":{"object":"list","data":[{"y":4,"x":8,"object":"point"},{"y":4,"x":7,"object":"point"},{"y":4,"x":6,"object":"point"}]}}]},"object":"world","id":1,"height":5,"food":{"object":"list","data":[{"y":1,"x":7,"object":"point"}]}}*/