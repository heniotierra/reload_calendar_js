const createDiv = () => document.createElement("div");

const createElementText = (text) => document.createTextNode(text);

const createFlexRow = (className, key) => {
  const row = createDiv();
  row.setAttribute("class", `o-flex-grid ${className}`);
  row.setAttribute("key", key);
  return row;
};

const createFlexColumn = (className, key) => {
  const col = createDiv();
  col.setAttribute("class", `o-flex-grid--item ${className}`);
  col.setAttribute("key", key);
  return col;
};

module.exports = {
  createDiv,
  createElementText,
  createFlexRow,
  createFlexColumn,
};
