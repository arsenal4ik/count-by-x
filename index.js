function getAverage(marks) {
    let sum = 0;
    for (i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    let average = Math.floor (sum / marks.length);
    return average
}