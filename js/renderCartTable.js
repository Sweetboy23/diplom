import { GOODS_CONFIG } from "./goodsConfig.js";

const TABLE_HEADING_ROW = ["Товар", "Цена", "Количество", "Итог"];

const renderTableHeading = (table) => {
  const tableHeading = document.createElement('tr');

  TABLE_HEADING_ROW.forEach((headingItem) => {
    const headingItemElement = document.createElement('th');
    
    headingItemElement.textContent = headingItem;

    tableHeading.appendChild(headingItemElement);
  });

  table.appendChild(tableHeading);
}

const renderTableContentRow = (table, tableRowItems) => {
  const tableRow = document.createElement('tr');

  tableRowItems.forEach((item) => {
    const tableCell = document.createElement('td');
    
    tableCell.textContent = item;

    tableRow.appendChild(tableCell);
  });

  table.appendChild(tableRow);
};


const renderTableContent = (table, goodsInCart) => {
  goodsInCart.forEach((goodId) => {
    const { title, price } = GOODS_CONFIG[goodId];

    const goodCount = parseInt(window.localStorage.getItem(`${goodId}-count`));

    if (!goodCount) {
      return;
    }

    const goodTotal = goodCount * price;

    renderTableContentRow(table, [title, price, goodCount, goodTotal]);
  })
}

export const renderCartTable = () => {
  const goodsInCart = window.localStorage.getItem('goods-in-cart');

  const cartContainer = document.getElementById('cart-table-container');
  cartContainer.innerHTML = '';

  if (!goodsInCart || JSON.parse(goodsInCart).length === 0) {
    const emptyCartMessage = document.createElement('p');
    emptyCartMessage.textContent = "Корзина пуста";
    emptyCartMessage.classList.add('empty-cart-message');

    cartContainer.appendChild(emptyCartMessage);

    return;
  }

  const table = document.createElement('table');

  renderTableHeading(table);
  renderTableContent(table, JSON.parse(goodsInCart));

  cartContainer.appendChild(table);
}