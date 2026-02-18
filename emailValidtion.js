const emailValidation = (email) => {
  if (!email || typeof email !== "string") return false;
  let atIndex = -1;
  let dotindex;
  for (let index = 0; index < email.length; index++) {
    const char = email[index];
    if (char === "@") {
      if (atIndex !== -1) return false;
      atIndex = index;
      if (atIndex === 0 || atIndex === email.length - 1) {
        return false;
      }
    }
    if (char === ".") {
      if (
        index === 0 ||
        index === email.length - 1 ||
        index === email.length - 2 ||
        email[index + 1] === "@" ||
        email[index - 1] === "@" ||
        email[index + 1] === "."
      )
        return false;
    }

    if (atIndex !== -1 && char === "." && email[index + 2] === ".")
      return false;
  }

  return true;
};

console.log(emailValidation("test.fdf@s.es.ls"));
