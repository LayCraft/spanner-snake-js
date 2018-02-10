//this function identifies all neighbouring spaces on a board grid.
const neighbours = (board, x, y) => {
    // return a list of neighbours
    height = board.length;
    width = board[0].length;

    // check that the x and y are on the board
    if (!(x<width && x>=0 && y<height && y>=0)) return [];
    
    //collector
    var ret = [];

    //check node to be sure it is within board boundaries
    function addInBounds(nodeX,nodeY) {
        if (nodeX<width && nodeX>=0 && nodeY<height && nodeY>=0) ret.push([nodeX,nodeY]);
    };

    //above
    addInBounds(x, y-1); 
    //below
    addInBounds(x, y+1);
    //left
    addInBounds(x-1, y);
    //right
    addInBounds(x+1, y);

    console.log(ret);

    return ret;
}
module.exports = neighbours;