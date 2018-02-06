var drawBoard = (board) => {
console.log('-----V--Board--V-----');
    board.forEach((y)=> {
        let row = [];
        y.forEach((x)=> {
            row.push(x);
        });
        console.log('|'+row+'|');
    });
}

module.exports = drawBoard;
