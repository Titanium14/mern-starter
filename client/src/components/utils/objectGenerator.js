let createdObjects = [];

export const objNavOptions = (iconsArray, listArray, refsArray) => {
  createdObjects = iconsArray.map((co, i) => {
    let newObj = [];
    newObj.icon = co;
    newObj.name = listArray[i];
    newObj.link = refsArray[i];
    return newObj;
  });
  return createdObjects;
};
