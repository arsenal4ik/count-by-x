function countByX(n, x) {
    let array = [];
    for (let i = 1; i <= x; i++) {
        array.push(n * i);
    }
    return array;
}