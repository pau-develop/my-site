import { laptopRed } from "./colors";

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

export const getColorIndexes = (pixels: number[][]) => {
  const colorIndexes = new Array(15).fill(new Array());

  for (let i = 0; i < pixels.length; i++) {
    for (let y = 0; y < colorIndexes.length; y++) {
      if (
        pixels[i][0] == laptopRed[y][0] &&
        pixels[i][1] == laptopRed[y][1] &&
        pixels[i][2] == laptopRed[y][2]
      ) {
        colorIndexes[y] = [...colorIndexes[y], i];
      }
    }
  }
  return colorIndexes;
};

export const setNewColors = () => {
  const laptopColors = new Array(15);
  for (let i = 0; i < laptopColors.length; i++) {
    let addition = 0;
    laptopColors[i] = new Array(5);
    for (let y = 0; y < laptopColors[i].length; y++) {
      laptopColors[i][y] = new Array(3);
      laptopColors[i][y][0] = laptopRed[i][0] + addition;
      laptopColors[i][y][1] = laptopRed[i][1] + addition;
      laptopColors[i][y][2] = laptopRed[i][2] + addition;
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
