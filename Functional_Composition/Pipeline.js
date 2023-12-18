function pipeline(...functions) {
    if (length(functions) === 0) return input => input;
    if (length(functions) === 1) return input => head(functions)(input);
    return function(input) {
      return pipeline(...tail(functions))(head(functions)(input));
    };
  }


// Pipeline with reduce // 

function reducePipeline(...functions) {
    return input => reduce((acc, fn) => fn(acc), input, functions);
  }