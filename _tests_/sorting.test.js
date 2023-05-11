const {
  sortNumsA,
  sortNumsD,
  sortWordsA,
  sortWordsD,
  sortProductNamesA,
  sortProductPriceA,
  sortProductPriceD,
  sortProducsPriceNameA,
  catArtSortDesginedByA,
  catArtSortByItemNameA,
  catArtSortByPriceA,
  catArtSortByPriceDesignedByD,
  mySortFunction,
} = require("../solution.js");

const {
  catArt,
  someNums,
  someProducts,
  someWords,
} = require("../data/data.js");

describe("Sorting Practice", () => {
  test("Sort numbers in ascending order", () => {
    expect(sortNumsA(someNums)).toStrictEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ]);
  });
  test("Sort numbers in descending order", () => {
    expect(sortNumsD(someNums)).toStrictEqual([
      10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
    ]);
  });
  test("Sort words in ascending order case sensitive", () => {
    expect(sortWordsA(someWords)).toStrictEqual([
      "The",
      "brown",
      "dog",
      "fox",
      "jumps",
      "lazy",
      "over",
      "quick",
      "the",
    ]);
  });
  test("Sort words in descending order case insensitive", () => {
    expect(sortWordsD(someWords)).toStrictEqual([
      "The",
      "the",
      "quick",
      "over",
      "lazy",
      "jumps",
      "fox",
      "dog",
      "brown",
    ]);
  });
  test("Sort products by name, ascending order case insensitive", () => {
    expect(sortProductNamesA(someProducts)).toStrictEqual([
      { description: "full of potassium", name: "banana", price: 0.99 },
      {
        description: "it separates yolks from whites",
        name: "egg separator",
        price: 3.99,
      },
      {
        description: "festive holiday decoration",
        name: "fairy lights",
        price: 5.99,
      },
      { description: "catches the breeze", name: "flag", price: 5.99 },
      { description: "regulation sized", name: "mitt (leather)", price: 15 },
      {
        description: "Hey, if you pay us, we won't ask any questions.",
        name: "nothing",
        price: 10,
      },
      { description: "Very small", name: "quark", price: 0.01 },
      {
        description: "available in black and slightly-darker black",
        name: "turtleneck",
        price: 19.99,
      },
      { description: "Talk about a JS fiddle...", name: "violin", price: 2000 },
      {
        description: "We had to pull some strings to get this one in.",
        name: "yoyo",
        price: 1,
      },
    ]);
  });
  test("Sort products by price, ascending order", () => {
    expect(sortProductPriceA(someProducts)).toStrictEqual([
      { description: "Very small", name: "quark", price: 0.01 },
      { description: "full of potassium", name: "banana", price: 0.99 },
      {
        description: "We had to pull some strings to get this one in.",
        name: "yoyo",
        price: 1,
      },
      {
        description: "it separates yolks from whites",
        name: "egg separator",
        price: 3.99,
      },
      {
        description: "festive holiday decoration",
        name: "fairy lights",
        price: 5.99,
      },
      { description: "catches the breeze", name: "flag", price: 5.99 },
      {
        description: "Hey, if you pay us, we won't ask any questions.",
        name: "nothing",
        price: 10,
      },
      { description: "regulation sized", name: "mitt (leather)", price: 15 },
      {
        description: "available in black and slightly-darker black",
        name: "turtleneck",
        price: 19.99,
      },
      { description: "Talk about a JS fiddle...", name: "violin", price: 2000 },
    ]);
  });
  test("Sort products by price, descending order", () => {
    expect(sortProductPriceD(someProducts)).toStrictEqual([
      { description: "Talk about a JS fiddle...", name: "violin", price: 2000 },
      {
        description: "available in black and slightly-darker black",
        name: "turtleneck",
        price: 19.99,
      },
      { description: "regulation sized", name: "mitt (leather)", price: 15 },
      {
        description: "Hey, if you pay us, we won't ask any questions.",
        name: "nothing",
        price: 10,
      },
      {
        description: "festive holiday decoration",
        name: "fairy lights",
        price: 5.99,
      },
      { description: "catches the breeze", name: "flag", price: 5.99 },
      {
        description: "it separates yolks from whites",
        name: "egg separator",
        price: 3.99,
      },
      {
        description: "We had to pull some strings to get this one in.",
        name: "yoyo",
        price: 1,
      },
      { description: "full of potassium", name: "banana", price: 0.99 },
      { description: "Very small", name: "quark", price: 0.01 },
    ]);
  });

  test("Sort products by price, then by name, ascending order", () => {
    expect(sortProducsPriceNameA(someProducts)).toStrictEqual([
      { description: "Very small", name: "quark", price: 0.01 },
      { description: "full of potassium", name: "banana", price: 0.99 },
      {
        description: "We had to pull some strings to get this one in.",
        name: "yoyo",
        price: 1,
      },
      {
        description: "it separates yolks from whites",
        name: "egg separator",
        price: 3.99,
      },
      {
        description: "festive holiday decoration",
        name: "fairy lights",
        price: 5.99,
      },
      { description: "catches the breeze", name: "flag", price: 5.99 },
      {
        description: "Hey, if you pay us, we won't ask any questions.",
        name: "nothing",
        price: 10,
      },
      { description: "regulation sized", name: "mitt (leather)", price: 15 },
      {
        description: "available in black and slightly-darker black",
        name: "turtleneck",
        price: 19.99,
      },
      { description: "Talk about a JS fiddle...", name: "violin", price: 2000 },
    ]);
  });

  test("Sort catArt by designedBy, ascending", () => {
    expect(catArtSortDesginedByA(catArt)).toStrictEqual([
      { designedBy: "", itemName: "Distressed Laundry Basket", price: 10.1 },
      {
        designedBy: "Chewy",
        itemName: "Cardboard Box with Chewed Edges",
        price: "♇♇7",
      },
      {
        designedBy: "Chewy",
        itemName: "Cardboard Box with Chewed Edges",
        price: "♇♇7",
      },
      {
        designedBy: "Chewy",
        itemName: "Cardboard Box with Chewed Edges",
        price: "♇♇7",
      },
      { designedBy: "Chips", itemName: "Shredded Newspaper", price: 8.8 },
      {
        designedBy: "Fluffy",
        itemName: "Fur-Lined Cardboard Box",
        price: "♇♇3",
      },
      { designedBy: "Fluffy", itemName: "Fur-Lined Track Pants", price: "♇♇5" },
      { designedBy: "Fluffy", itemName: "Fur-Lined Pillowcase", price: 6 },
      { designedBy: "Fluffy", itemName: "Fur-Lined Pillowcase", price: "6" },
      { designedBy: "Mittens", itemName: "Chewed Plastic Bag", price: 1.1 },
      {
        designedBy: "Mocha",
        itemName: "Wooden Spoon with Teeth Indentations",
        price: "91.97",
      },
      { designedBy: "Patches", itemName: "Tangled yarn", price: 2.02 },
      { designedBy: "Tortie", itemName: "Dug Up Houseplant", price: 4 },
    ]);
  });
  test("Sort catArt by price", () => {
    expect(catArtSortByPriceA(catArt)).toStrictEqual([
      { designedBy: "Mittens", itemName: "Chewed Plastic Bag", price: 1.1 },
      { designedBy: "Patches", itemName: "Tangled yarn", price: 2.02 },
      { designedBy: "Tortie", itemName: "Dug Up Houseplant", price: 4 },
      { designedBy: "Fluffy", itemName: "Fur-Lined Pillowcase", price: 6 },
      { designedBy: "Fluffy", itemName: "Fur-Lined Pillowcase", price: "6" },
      { designedBy: "Chips", itemName: "Shredded Newspaper", price: 8.8 },
      { designedBy: "", itemName: "Distressed Laundry Basket", price: 10.1 },
      {
        designedBy: "Fluffy",
        itemName: "Fur-Lined Cardboard Box",
        price: "♇♇3",
      },
      { designedBy: "Fluffy", itemName: "Fur-Lined Track Pants", price: "♇♇5" },
      {
        designedBy: "Chewy",
        itemName: "Cardboard Box with Chewed Edges",
        price: "♇♇7",
      },
      {
        designedBy: "Chewy",
        itemName: "Cardboard Box with Chewed Edges",
        price: "♇♇7",
      },
      {
        designedBy: "Chewy",
        itemName: "Cardboard Box with Chewed Edges",
        price: "♇♇7",
      },
      {
        designedBy: "Mocha",
        itemName: "Wooden Spoon with Teeth Indentations",
        price: "91.97",
      },
    ]);
  });
  test("Create your own sort function", () => {
    expect(mySortFunction(someNums)).toStrictEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
    expect(mySortFunction(someWords)).toStrictEqual([
      "The",
      "brown",
      "dog",
      "fox",
      "jumps",
      "lazy",
      "over",
      "quick",
      "the",
    ]);
  });
});
