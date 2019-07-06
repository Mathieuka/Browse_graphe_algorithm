const nodes = {
    A: {visited: false, neighbours:["B","J"]},
    B: {visited: false, neighbours:["A","C","D","Z"]},
    Z: {visited: false, neighbours:["B","J"]},
    J: {visited: false, neighbours:["Z","A"]},
    C: {visited: false, neighbours:["B"]},
    D: {visited: false, neighbours:["B"]}
}

const browseTheGraph =  (nodes,nodeFirstEntry) => {
    let allNodesIsVisited = false;
    while(allNodesIsVisited  !== true){
        allNodesIsVisited = browseEverySingleNode(nodeFirstEntry,nodes)
    }
    console.log("***Final***");
    return nodes;
} 

function browseEverySingleNode(currentNode, nodes){
    console.log(currentNode," ",nodes[currentNode]);
    if(allNodesIsVisited(nodes)){
        return true;
    }
    //the current node is visited
    nodes[currentNode].visited = true;
    nodes[currentNode].neighbours.map((currentNeighbour) => {    
            // In case of the Neighbour is not visited yet
            if(!nodes[currentNeighbour].visited){
                browseEverySingleNode(currentNeighbour, nodes);   
                console.log(currentNode," ",nodes[currentNode]);
            }               
    });
}

function allNodesIsVisited(nodes){
    let allVisited = true;
    for(let node in nodes){
       if(nodes[node].visited === false){
           allVisited = false;
       }
    }
    return allVisited;
}



console.log(browseTheGraph(nodes, "A"));

module.exports = {browseTheGraph, nodes};
























