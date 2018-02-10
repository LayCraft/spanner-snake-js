var setCoord = (board, coords, value) => {
    //coords should be an array of points
    // [[x,y],[x,y], ... ]
    coords.forEach(coord => {
        // board[y][x]=value; 
        board[coord[1]][coord[0]] = value;
    });
    
    return board;
}

module.exports = setCoord;
