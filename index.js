function countByX(n, x) {
    let array = [];
    for (let i = 1; i <= x; i++) {
        if (n % 3 ===0){
            array.push(n * i);
        }
          }
    return array;
}