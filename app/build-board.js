var buildBoard = (blob) => {
    var board = []; // the final board state
    // instantiate blank array
    for (let y = 0; y<blob.height; y++){
        var row = []; 
        for (let x = 0; x<blob.width; x++){
            row.push([]);
        } 
        board.push(row);
    }    
    // console.log(blob);


    /*
    //types
        //I == my head or me or moi
        //F == food
    var food = []
        //H == head
        //B == blocked/body
        //T == threat
    //my identifier
    var myId = blob.you.id;
    //point stack for writing on grid
    var points = [];

    // iterate through snakes and collect their head and body information
    for(snake of blob.snakes.data){
        console.log(snake.id);
        let isHead = true; //first one is head
        snake.body.data.forEach(element => {
            if (isHead && snake.id==myId){
                element.object = 'I';//my head
                isHead=false;
                points.push(element);
            } else if(snake.id==myId){
                //handier if it was in a for loop because I could use an index to grab the last element and call it an empty spot
            } else if (isHead){
                element.object = 'H';
                isHead=false;
                points.push(element);
            } else {
                element.object = 'B';
                points.push(element);
            }
        });
    }

    //my head
    //my body
    //my tail space
    //enemy heads
    //enemy bodies
    //enemy tail space
    //food
    //good collisions - check thatshorter snake
    //danger zones
    //all blocked spaces
    
*/

    


    return board;
}

module.exports = buildBoard;
