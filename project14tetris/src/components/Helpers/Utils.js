export const checkCollision = (mergeArray, player) => {
  for (let i = 0; i < mergeArray.length; i++) {
    let item = mergeArray[i];

    if (player.shapes.id === "I") {
      if (item[1] === player.pos.y) {
        if (item[0] === player.pos.x + 2) {
          return true;
        }
      }
    } else {
      if (item[1] === player.pos.y || item[1] === player.pos.y + 1) {
        if (item[0] === player.pos.x + 2) {
          return true;
        }
      }
    }
  }
  return false;
};

// remove row in merge array
export const removeRowFromMergeArray = array => {
  var map = {};

  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    let key = item[0];
    map[key] = map[key] + 1 || 1;
  }
  let removeMerge = [];
  for (var i = 0, keys = Object.keys(map), j = keys.length; i < j; i++) {
    if (map[keys[i]] === 12) {
      removeMerge.push(keys[i]);
    }
  }

  // delete row
  let removeRowArray = array.filter(function(item) {
    for (var key in removeMerge) {
      if (item[0] === parseInt(removeMerge[key])) {
        return false;
      }
    }
    return true;
  });

  if (removeMerge.length > 0) {
    for (let i = 0; i < removeRowArray.length; i++) {
      if (removeRowArray[i][0] < removeMerge[0]) {
        let item = removeRowArray[i];
        let x = item[0] + 1;
        let y = item[1];
        removeRowArray[i] = [x, y];
      }
    }
  }
  return [removeRowArray, removeMerge.length];
};
