// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
  cats.push(name)
}

function destructivelyPrependCat(name) {
  cats.unshift(name)
}

function destructivelyRemoveLastCat() {
  cats.pop()
}

function destructivelyRemoveFirstCat() {
  cats.shift()
}

function appendCat(name) {
  const list = cats.slice()
  list.push(name)
  return list
}

function prependCat(name) {
  const newCat = [...cats]
  newCat.unshift(name)
    return newCat
}
function removeLastCat() {
  const catArry = [...cats]
  catArry.pop()
  return catArry
}
  
function removeFirstCat() {
  const catPop = [...cats]
  catPop.shift()
  return catPop
}