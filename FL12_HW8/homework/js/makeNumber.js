function mknumber(stroka) {
    let numbers = '';
    for (let symbols of stroka) {
        numbers += !isNaN(symbols) ? symbols : '';
    }
    return numbers;
}
mknumber('84756yn984w75ynf0w374f903yfm');
