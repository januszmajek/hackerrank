// https://www.hackerrank.com/challenges/three-month-preparation-kit-array-left-rotation/problem?h_r=internal-search
function rotateLeft(d: number, arr: number[]): number[] {
    for(let i = 0; i<d; i++) {
        const popper: number = arr.shift()!
        arr.push(popper);
    }
    console.log(arr);
    return arr;
}