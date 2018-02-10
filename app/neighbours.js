//neighbours returns an array of coordinates that are othoganal neighbours to the given coordinate
//board should be a board array of objects
//node should be a coordinate that looks like [x,y]
const neighbours = (board, node) => {
    // return a list of neighbours
    height = board.length;
    width = board[0].length;
    x = node[0];
    y = node[1];

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
    return ret;
}
module.exports = neighbours;