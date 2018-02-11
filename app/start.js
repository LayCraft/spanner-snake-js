// Export a function that delives a snake info payload.
const getInfo = (id) => {

    //curl -i -X POST -H "Content-Type: application/json" -d ' { "game_id": "derp" }' localhost:3000/start
    var snakeInfo = {
        name: 'Spanner Snake',
        color: '#bb2233',
        head_url: 'https://i.imgur.com/Pw8oNUw.png',
        taunt: 'Yiss...',
        head_type: 'safe',
        tail_type: 'round-bum',
        secondary_color: '#bb2200',
    };
    console.log("Returning start info for "+ snakeInfo.name);
    return snakeInfo;
}

module.exports = getInfo;
