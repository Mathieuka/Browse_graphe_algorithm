const UnitTest = require("./UnityTest_lib");
const { browseTheGraph, nodes } = require("./graph_algorithm");

//  ***Example***

// const sum = (a,b) => a + b;
// const substract = (a,b) => a - b;


// UnitTest.test("Sum adds numbers" , ()=>{
//     let result = sum(3,7);
//     let expected = 10;
//     UnitTest.expect(result).toBe(expected);
//  })   


// UnitTest.test("Sum substract numbers" ,()=>{
//     result = substract(12,6);
//     expected = 6;
//     UnitTest.expect(result).toBe(expected);
// }) 


// graph unit test
UnitTest.test("browse all nodes", ()=>{
    const result = browseTheGraph(nodes, "A");
    const objectExpected = { A: { visited: true, neighbours: [ 'B', 'J' ] },
                 B: { visited: true, neighbours: [ 'A', 'C', 'D', 'Z' ] },
                 Z: { visited: true, neighbours: [ 'B', 'J' ] },
                 J: { visited: true, neighbours: [ 'Z', 'A' ] },
                 C: { visited: true, neighbours: [ 'B' ] },
                 D: { visited: true, neighbours: [ 'B' ] }}
    let expected = true;
    for(let key in result){
        if(!(key in objectExpected)){
            expected = false;
        }
        if(result[key].visited === false){
            expected = false
        }
    }
    UnitTest.expect(expected).toBe(true)
})
