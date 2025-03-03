const capitlise = (name) => {
  if (name.charAt(0) === name.charAt(0).toUpperCase()) return `Early return ${name}`
  return name.charAt(0).toUpperCase() + name.slice(1)
}

console.log(capitlise("Penine"))
