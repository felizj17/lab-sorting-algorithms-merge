const {catArt, someNums, someProducts, someWords} = require('./data/data.js')

// sort numbers in ascending order
const sortNumsA = arr => {
  let sorted = false
  while (!sorted) {
    sorted = true
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        sorted = false
        ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
      }
    }
  }
  return arr
}

// sort numbers in descending order
const sortNumsD = arr => {
  let sorted = false
  while (!sorted) {
    sorted = true
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
        sorted = false
        ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
      }
    }
  }
  return arr
}

// sort words in ascending order case sensitive
const sortWordsA = arr => {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i]
    let j = i - 1
    while (arr[j] > curr && j >= 0) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = curr
  }
  return arr
}

// sort words in descending order case insensitive
const sortWordsD = arr => {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j].toLowerCase() < curr.toLowerCase()) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = curr
  }
  return arr
}

// sort products by name, ascending order case insensitive
const sortProductNamesA = arr => {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j].name.toLowerCase() > curr.name.toLowerCase()) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = curr
  }
  return arr
}

// sort products by price, ascending order
const sortProductPriceA = arr => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    let curr = arr[i]
    while (j >= 0 && arr[j].price > curr.price) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = curr
  }
  return arr
}

// sort products by price, descending order
const sortProductPriceD = arr => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    let curr = arr[i]
    while (j >= 0 && arr[j].price < curr.price) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = curr
  }
  return arr
}

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = arr => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    let curr = arr[i]
    while (j >= 0 && arr[j].name > curr.name) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = curr
  }
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    let curr = arr[i]
    while (j >= 0 && arr[j].price > curr.price) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = curr
  }

  return arr
}

// sort catArt by designed by
const catArtSortDesginedByA = arr => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    let curr = arr[i]
    while (j >= 0 && arr[j].designedBy > curr.designedBy) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = curr
  }
  return arr
}
const conversion = price => {
  const regex = /[0-9.]/
  if (!regex.test(+price)) {
    return +price[2] * 10
  } else {
    return +price
  }
}

// sort catArt by price
const catArtSortByPriceA = arr => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    let curr = arr[i]

    while (j >= 0 && conversion(curr.price) < conversion(arr[j].price)) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = curr
  }
  return arr
}

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (arr, order) => {
  if (order === 'asc' || !order) {
    for (let i = 1; i < arr.length; i++) {
      let curr = arr[i]
      let j = i - 1
      while (j >= 0 && curr < arr[j]) {
        arr[j + 1] = arr[j]
        j--
      }
      arr[j + 1] = curr
    }
    return arr
  } else {
    for (let i = 1; i < arr.length; i++) {
      let curr = arr[i]
      let j = i - 1
      while (j >= 0 && curr > arr[j]) {
        arr[j + 1] = arr[j]
        j--
      }
      arr[j + 1] = curr
    }
    return arr
  }
}

module.exports = {
  sortNumsA,
  sortNumsD,
  sortWordsA,
  sortWordsD,
  sortProductNamesA,
  sortProductPriceA,
  sortProductPriceD,
  sortProducsPriceNameA,
  catArtSortDesginedByA,
  catArtSortByPriceA,
  mySortFunction,
}
