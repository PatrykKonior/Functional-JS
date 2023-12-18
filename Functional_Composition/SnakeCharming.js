// Takes a "snake_case_string" and returns a split array of the words, e.g. ["snake", "case", "string"]
function desnake(snake_case_string) {
    return snake_case_string.split('_');
  }

// Takes a "string" and returns a string with the first letter capitalized, e.g. "String"
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
  }