var inArray = (array, coord) => {
    let found = false;
    array.forEach(element => {
        if(element[0]==coord[0] && element[1] == coord[1]){
            console.log("Found match.");
            found = true;
        } 
    });
    return found;
}
module.exports = inArray;