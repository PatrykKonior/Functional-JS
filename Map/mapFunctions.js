function map(fn, array) {
    if (length(array) === 0) return [];
    return [fn(head(array))].concat(map(fn, tail(array)));
}

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let doubled = map( n => n * 2, array);

let halved = map( n => n / 2, array);
