var buildBoard = (width, height) => {
    var board = []; // the final board state
    // instantiate blank array
    for (let y = 0; y<height; y++){
        var row = []; 
        for (let x = 0; x<width; x++){
            let prop = {};
            prop.f = 0;
            prop.g = 0;
            prop.h = 0;
            prop.visited = false;
            prop.closed = false;
            prop.parent = null;
            prop.contains = " ";
            row.push(prop);
        } 
        board.push(row);
    }
    // console.log(board);
    return board;
}

module.exports = buildBoard;
