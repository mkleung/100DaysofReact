export const searchArray = (array, player) => {
  let col1 = player.pos.y;
  let col2 = player.pos.y + 1;

  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    if (item[1] === player.pos.y || item[1] === player.pos.y + 1) {
      if (item[0] === player.pos.x + 2) {
        return true;
      }
    }
  }
  return false;
};
