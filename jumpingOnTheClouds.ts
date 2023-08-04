function jumpingOnClouds(c: number[]): number {
    let count: number = c.length - 1;
    for(let i = 0; i < c.length; i++) {
        if ( c[i + 2] === 0 && i + 2 <= c.length ) {
            count--;
            i++;
        }
    }
    return count;
}

console.log(jumpingOnClouds([0,1,0,0,1,0]))