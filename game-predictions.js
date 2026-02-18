import fs from "fs";
import csv from "csv-parser";

const suits = ["Heart", "Spades", "Diamond", "Joker", "Clubs"];
const animals = ["Snake", "Parrot", "Fox", "Seal", "Lion"];
const fruits = ["Apple", "Bananas", "Mango", "Papaya", "Watermelon"];

const gamePreditions = () => {
  const probabilityToBeatBoss = async (suit, animal, fruit) => {
    if (
      inputValidation(suit, suits) &&
      inputValidation(animal, animals) &&
      inputValidation(fruit, fruits)
    )
      throw "Invalid Input";
    const result = [];
    await fs
      .createReadStream("./prediction.csv")
      .pipe(csv())
      .on("data", (data) => result.push(data))
      .on("end", () => {
        const suitFilter = result.filter((a) => a["Card Suit"] === suit);
        const animalFilter = result.filter((a) => a["Animal Name"] === animal);
        const fruitFilter = result.filter((a) => a.Fruit === fruit);

        const pWinsuit =
          suitFilter.filter((a) => a.Result === "True").length /
          suitFilter.length;

        const pWinAnimal =
          animalFilter.filter((a) => a.Result === "True").length /
          animalFilter.length;
        const pWinfruit =
          fruitFilter.filter((a) => a.Result === "True").length /
          fruitFilter.length;

        const pWin = (pWinsuit + pWinAnimal + pWinfruit) / 3;
        console.log(Math.round(pWin * 1000) / 10 + "%");
      });
  };

  probabilityToBeatBoss("Hearts", "Lion", "Mango");
};

const inputValidation = (input, valid) => {
  if (!valid.includes(input)) return false;
  return false;
};

gamePreditions();
