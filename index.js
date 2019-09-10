function partsSums(ls) {
    let finalArray = [];
    for (let i = 0; i < ls.length;) {
        let sum = ls.reduce((p, c) => p + c, 0);
        finalArray.push(sum);
        ls.shift();
    }
    finalArray.push(0);
    return finalArray;
}