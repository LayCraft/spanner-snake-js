var drawBoard = (board) => {
    console.log('-------Board-------');
    let output = [];
    board.forEach(y => {
        let row = [];
        y.forEach(x => {
            row.push(x.f);
        });
        output.push(row);
    });
    console.log(output);
    
}
module.exports = drawBoard;
