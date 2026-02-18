const bracketValidation = (str) => {
  if (typeof str !== "string") throw "Invalid Input";
  const openings = ["[", "{", "("];
  const closings = ["]", "}", ")"];
  const pairs = { "]": "[", "}": "{", ")": "(" };
  const stack = [];
  //   console.log(str.length);
  for (let index in str) {
    const char = str[index];
    const charIsOpening = openings.includes(char);
    if (!charIsOpening && !closings.includes(char)) {
      return "Invalid Input";
    }

    if (charIsOpening) {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }
      const removed = stack.pop();
      if (removed !== pairs[char]) {
        return false;
      }
    }
  }
  if (stack.length > 0) return false;

  return true;
};

console.log(bracketValidation("{}"));
