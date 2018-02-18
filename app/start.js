// Export a function that delives a snake info payload.
const getInfo = (id) => {

    //curl -i -X POST -H "Content-Type: application/json" -d ' { "game_id": "derp" }' localhost:3000/start
    var snakeInfo = {
        name: 'Spanner Snake',
        color: '#bb2233',
        head_url: 'http://1.bp.blogspot.com/-OF1YsenmaR0/VUmxLf3arXI/AAAAAAAA5zI/5HBUljkfwm8/s1600/spanner.png',
        taunt: 'Yiss...',
        head_type: 'safe',
        tail_type: 'round-bum',
        secondary_color: '#bb2200',
    };
    console.log("Returning start info for "+ snakeInfo.name);
    return snakeInfo;
}

module.exports = getInfo;
