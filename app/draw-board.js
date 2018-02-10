var drawBoard = (board) => {

    
    header = "/";
    for (let i = 0; i<board[0].length; i++){
        header=header+'FGH|';
    }
    console.log('-------Board-------');
    //print header line fgh
    console.log(header);

    board.forEach(y => {
        let line = "|";
        y.forEach(x => {
            // done like this to avoid JS adding elements
            line = line + `${x.f}${x.g}${x.h}|`;
        });
        console.log(line);
    });
    let footer = "";
    for (let i = 0; i<header.length; i++) footer = footer+"-";
    console.log(footer);
}
module.exports = drawBoard;
