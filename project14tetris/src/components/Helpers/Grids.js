export const createGrids = () => {
  // create a row of 12 items
  const row = new Array(12).fill([0, "clear"]);

  // create array from arrat of 20 rows
  return Array.from(Array(20), () => row);
};
