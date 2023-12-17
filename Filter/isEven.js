wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function filter(predicateFn, array) {
    if (length(array) === 0) return [];
    const firstItem = head(array);
    const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
    return concat(filteredFirst, filter(predicateFn, tail(array)));
  }

function isEven(n) {
    return n % 2 === 0;
}