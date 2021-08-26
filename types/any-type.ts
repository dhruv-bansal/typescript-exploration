
let jsonStr = '{"x":1, "y":2}';


// way  1
let jsonObj1: { x: number, y: number } = JSON.parse(jsonStr);
console.log(typeof jsonObj1);
console.log(jsonObj1.x);

// way 2
interface Coordiate {
    x: number,
    y: number
}
let jsonOb2 = JSON.parse(jsonStr) as Coordiate;
console.log(typeof jsonOb2);
console.log(jsonOb2.x);