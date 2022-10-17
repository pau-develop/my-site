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
