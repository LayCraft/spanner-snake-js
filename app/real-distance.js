
//use the astar algorithm to determine distance to target
// return real distance and direction choice
const realDistance = (start, goal) => {
    //evaluated nodes
    closedSet = [];
    //unevaluated nodes
    openSet = [];
    openSet.push(start);

    while (openSet.length>0){
        
    }
    console.log("Open set: " + openSet);


}
module.exports = realDistance;

/**
push startNode onto openList
while(openList is not empty) {
  currentNode = find lowest f in openList
  if currentNode is final, return the successful path
  push currentNode onto closedList and remove from openList
  foreach neighbor of currentNode {
    if neighbor is not in openList {
      save g, h, and f then save the current parent
      add neighbor to openList
    }
    if neighbor is in openList but the current g is better than previous g {
      save g and f, then save the current parent
    }
  }
}

 */