
const validateBase = (number, base) => 
  String(number).split('').every(digit => {
    const value = digit >= '0' && digit <= '9' ? +digit : digit.charCodeAt(0) - 55;
    return value >= 0 && value < base;
  });