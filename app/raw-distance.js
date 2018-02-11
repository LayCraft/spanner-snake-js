//raw distance is pure straight line count of how many times the snake must move before moving into the destination
//Origin and destination should be [x,y] format
const rawDistance = (origin, destination) => {
    xDistance = Math.abs(origin[0]-destination[0]);
    yDistance = Math.abs(origin[1]-destination[1]);
return xDistance+yDistance;
}
module.exports = rawDistance;