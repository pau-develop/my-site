import { laptopRed, routerLed, tvLight, tvNoise } from "./colors";

export const setPixelArray = (data: any) => {
  const pixels = new Array(data.length / 4);
  let y = 0;
  for (let i = 0; i < pixels.length; i++) {
    pixels[i] = new Array(4);
    pixels[i][0] = data[y];
    pixels[i][1] = data[y + 1];
    pixels[i][2] = data[y + 2];
    pixels[i][3] = data[y + 3];
    y += 4;
  }
  return pixels;
};

export const getColorIndexes = (pixels: number[][], target: number[][]) => {
  const colorIndexes = new Array(target.length).fill(new Array());

  for (let i = 0; i < pixels.length; i++) {
    for (let y = 0; y < colorIndexes.length; y++) {
      if (
        pixels[i][0] == target[y][0] &&
        pixels[i][1] == target[y][1] &&
        pixels[i][2] == target[y][2]
      ) {
        colorIndexes[y] = [...colorIndexes[y], i];
      }
    }
  }
  return colorIndexes;
};

export const setNewColors = (currentColor: number[][], totalColors: number) => {
  const laptopColors = new Array(totalColors);
  for (let i = 0; i < laptopColors.length; i++) {
    let addition = 0;
    laptopColors[i] = new Array(5);
    for (let y = 0; y < laptopColors[i].length; y++) {
      laptopColors[i][y] = new Array(3);
      laptopColors[i][y][0] = currentColor[i][0] + addition;
      laptopColors[i][y][1] = currentColor[i][1] + addition;
      laptopColors[i][y][2] = currentColor[i][2] + addition;
      if (laptopColors[i][y][0] >= 255) laptopColors[i][y][0] = 255;
      if (laptopColors[i][y][1] >= 255) laptopColors[i][y][1] = 255;
      if (laptopColors[i][y][2] >= 255) laptopColors[i][y][2] = 255;
      addition += 5;
    }
  }
  return laptopColors;
};

export const changeCanvasColors = (
  indexes: number[][],
  imageData: ImageData,
  context: CanvasRenderingContext2D,
  colors: number[][][],
  color: number
) => {
  for (let i = 0; i < indexes.length; i++) {
    for (let y = 0; y < indexes[i].length; y++) {
      imageData.data[indexes[i][y] * 4] = colors[i][color][0];
      imageData.data[indexes[i][y] * 4 + 1] = colors[i][color][1];
      imageData.data[indexes[i][y] * 4 + 2] = colors[i][color][2];
    }
  }
  context!.putImageData(imageData, 0, 0);
};

export const changeTvColors = (
  indexes: number[][],
  imageData: ImageData,
  tvNoiseColor: number,
  context: CanvasRenderingContext2D
) => {
  let temporaryPositions;
  if (tvNoiseColor === 0) temporaryPositions = [0, 1, 2];
  else if (tvNoiseColor === 1) temporaryPositions = [1, 2, 0];
  else temporaryPositions = [2, 0, 1];
  if (indexes !== undefined) {
    for (let i = 0; i < indexes.length; i++) {
      for (let y = 0; y < indexes[i].length; y++) {
        imageData.data[indexes[i][y] * 4] = tvNoise[temporaryPositions[i]][0];
        imageData.data[indexes[i][y] * 4 + 1] =
          tvNoise[temporaryPositions[i]][1];
        imageData.data[indexes[i][y] * 4 + 2] =
          tvNoise[temporaryPositions[i]][2];
      }
    }
    context!.putImageData(imageData, 0, 0);
  }
};

export const changeRouterLedColors = (
  indexes: number[][],
  imageData: ImageData,
  tvNoiseColor: boolean,
  colors: number[][]
) => {
  const index = tvNoiseColor === true ? 0 : 1;
  for (let i = 0; i < indexes[0].length; i++) {
    imageData.data[indexes[0][i] * 4] = colors[index][0];
    imageData.data[indexes[0][i] * 4 + 1] = colors[index][1];
    imageData.data[indexes[0][i] * 4 + 2] = colors[index][2];
  }
};

export const turnOffTv = (
  indexesNoise: number[][],
  indexesLight: number[][],
  imageData: ImageData,
  context: CanvasRenderingContext2D
) => {
  //noise
  for (let i = 0; i < indexesNoise.length; i++) {
    for (let y = 0; y < indexesNoise[i].length; y++) {
      imageData.data[indexesNoise[i][y] * 4] = 0;
      imageData.data[indexesNoise[i][y] * 4 + 1] = 0;
      imageData.data[indexesNoise[i][y] * 4 + 2] = 0;
    }
  }
  //light
  for (let i = 0; i < indexesLight.length; i++) {
    for (let y = 0; y < indexesLight[i].length; y++) {
      imageData.data[indexesLight[i][y] * 4] = tvLight[i][0];
      imageData.data[indexesLight[i][y] * 4 + 1] = tvLight[i][1];
      imageData.data[indexesLight[i][y] * 4 + 2] = tvLight[i][2];
    }
  }
  context.putImageData(imageData, 0, 0);
};
