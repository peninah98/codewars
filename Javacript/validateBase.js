
const validateBase = (num, base) => 
  [...String(num)].every(
    d => (d.charCodeAt(0) - 55) % base >= 0
  );
