function equalizeArray(arr: number[]): number {
    const counts: {[key: number]: number} = {};
    let removes: number = 0
    let theHighest: number = 0

    arr.forEach(x=> { counts[x] = (counts[x] || 0) + 1; });

    for (let key in counts) {
        if (counts[key] > theHighest) {
            removes = removes + theHighest;
            theHighest = counts[key];
        }
        else {
            removes = removes + counts[key];
        }
    }

    return removes;
}
console.log(equalizeArray([1,1,1,2,2,2,3,3,3]))