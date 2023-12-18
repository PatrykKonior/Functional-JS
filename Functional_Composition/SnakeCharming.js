// Takes a "snake_case_string" and returns a split array of the words, e.g. ["snake", "case", "string"]
function desnake(snake_case_string) {
    return snake_case_string.split('_');
  }

// Takes a "string" and returns a string with the first letter capitalized, e.g. "String"
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
  }

// Takes an ["array", "of", "strings"] and returns a camelized ["array", "Of", "Strings"]
function capitalizeAll(stringArray) {
    return map(capitalizeFirstLetter, stringArray);
  }

// Takes an ["array", "of", "strings"] and returns a camelized letter without first one 
function camelize(stringArray) {
    return [head(stringArray)].concat(capitalizeAll(tail(stringArray)));
  }

// Reduce words in array into one word 
function concatenate(stringArray) {
    return reduce((acc, str) => acc + str, '', stringArray);
  }

// Takes a "snake_case_string" and returns a "camelCaseString"
function snakeToCamel(snake_case_string) {
    const pipe = pipeline(desnake, camelize, concatenate);
    return pipe(snake_case_string);
  }