function calculator(num1, num2, operation) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    isNaN(num1) ||
    isNaN(num2)
  ) {
    return "unknown value"
  }

  switch (operation) {
    case "+":
      return num1 + num2
    case "-":
      return num1 - num2
    case "*":
      return num1 * num2
    case "/":
      return num1 / num2
    default:
      return "unknown value"
  }
}
