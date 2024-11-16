// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.


const sqrt = (x: number) => {

    let min = 1;
    let max = x; 

    while (min <= max) {
        const mid = Math.floor((max + min) / 2); 

        if(mid * mid > x) {
            max = mid - 1; 
        } else {
            min = mid + 1; 
        }
    }

    return min - 1;
}

console.log(sqrt(10))