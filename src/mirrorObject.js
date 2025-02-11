const mirrorObject = (string) => {
  return string.split("").reverse().join("")
}
console.log(mirrorObject("hello"))

const objectMirror = (object) => {
  return Object.fromEntries(Object.keys(object).map(
    (key => [key, key.split("").reverse().join("")])
  ))
}

console.log(objectMirror({ Penine: "", Noella: "", Momc: "" }))

// const objectMirror = (object) => {
//     return Object.fromEntries(
//         Object.keys(object).map(key => [key, key.split("").reverse().join("")])
//     );
// };

// console.log(objectMirror({ abc: "", arara: "", xyz: "" }));
// // Expected Output: { abc: "cba", arara: "arara", xyz: "zyx" }

// console.log(objectMirror({ Penine: "", Noella: "Noella", Momc: "" }));
// // Output: { Penine: "enineP", Noella: "alleoN", Momc: "cmoM" }


// const createObject = (array) => {
//   return Object.fromEntries(array)
// }

// console.log(
//   createObject([
//     ["Rwanda", "Kigali"],
//     ["Tanzania", "Dodoma"],
//     ["Kenya", "Nairobi"],
//     ["Uganda", "Kampala"],
//     ["Ethiopia", "Addis Ababa"],
//     ["Somalia", "Mogadishu"],
//     ["Burundi", "Bujumbura", "Mbarara", "Akanyaru"],
//   ])
// )
