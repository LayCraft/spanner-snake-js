// Export a function that delives a snake info payload.
const getInfo = (x) => {
    //TEST for getting this info
    //curl -i -X POST -H "Content-Type: application/json" -d ' { "game_id": "b1dadee8-a112-4e0e-afa2-2845cd1f21aa",s },' localhost:3000/start
    var snakeInfo = {
        name: 'Spanner Snake',
        color: '#bb2233',
        head_url: 'https://i.imgur.com/Pw8oNUw.png',
        taunt: 'Yiss...',
        head_type: 'safe',
        tail_type: 'round-bum',
        secondary_color: '#bb2200',
    };
    return snakeInfo;
}

module.exports = getInfo;
