function reduce(reducerFn, initialValue, array) {
    if (length(array) === 0) return initialValue;
    const newInitialValue = reducerFn(initialValue, head(array));
    return reduce(reducerFn, newInitialValue, tail(array));
  };

let wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sum = reduce((accumulator, value) => {
    return accumulator + value;
},0,wholes)

let max = reduce((acc, val) => {
    return val > acc ? val : acc;
},0,wholes)