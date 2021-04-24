/**
 * Converts flat array to nested tree.
 * @param {Array} list Collection of items.
 * @returns {Array}
 */
export default function makeNestedList(list) {
  const clonedList = list.map((item, index) => (
    {
      ...item,
      children: [],
      absolutePosition: index,
    }
  )).filter(i => !i.removed);
  const nestedList = [];
  const map = {};

  clonedList.forEach((item, index) => {
    map[item.ID] = index;

    if (item.parentID) {
      clonedList[map[item.parentID]].children.push(item);
    } else {
      nestedList.push(item);
    }
  });

  return nestedList;
}
