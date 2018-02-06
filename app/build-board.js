var buildBoard = (blob) => {
    //types
        //F == food
        //H == head
        //B == blocked/body
        //T == threat

    const width = blob.width;
    const height = blob.height;
    var board = []; // the final board state
    
    // instantiate blank array
    for (var y = 0; y<height; y++){
        var row = []; 
        for (var x = 0; x<width; x++) row.push([0]);
        board.push(row);
    }

    return board;
}

module.exports = buildBoard;
