// types
import { IElement } from "../App";

function getRandomNumber(max: number) {
  return Math.floor(Math.random() * max);
}

export function makeNewCells() {
  const finish = 100;
  const result = [];

  for (let i = 0; i < finish; i += 1) {
    const color = getRandomNumber(2) === 1 ? "red" : "green";
    const current = { color };

    result.push(current);
  }

  return result;
}

export function changeColor(array: IElement[], index: number) {
  const currentColor = array[index].color;
  const oppositeColor = currentColor === "red" ? "green" : "red";

  array[index].color = oppositeColor;

  if (index % 10 !== 0) {
    const leftNeighbor = array[index - 1];
    if (leftNeighbor.color === currentColor) {
      leftNeighbor.color = oppositeColor;
    }
  }

  if ((index + 1) % 10 !== 0) {
    const rightNeighbor = array[index + 1];
    if (rightNeighbor.color === currentColor) {
      rightNeighbor.color = oppositeColor;
    }
  }

  if (index >= 10) {
    const topNeighbor = array[index - 10];
    if (topNeighbor.color === currentColor) {
      topNeighbor.color = oppositeColor;
    }
  }

  if (index < 90) {
    const bottomNeighbor = array[index + 10];
    if (bottomNeighbor.color === currentColor) {
      bottomNeighbor.color = oppositeColor;
    }
  }

  return array;
}
