import { updateCartIconCounter } from "./updateCartIconCounter.js";
import { ITEMS_COUNT } from './itemsCount.js';

const shouldAddGood = (itemId) => {
  const goodCount = ITEMS_COUNT[itemId];

  /* Количество товара 0 или отсутствует */
  if (!goodCount) {
    return false;
  }

  return true;
}

const handler = function() {
  const itemId = this.dataset.item_id;

  if (!shouldAddGood(itemId)) {
    return;
  }

  const goodsInCart = window.localStorage.getItem('goods-in-cart');

  if (!goodsInCart) {
    window.localStorage.setItem('goods-in-cart', JSON.stringify([itemId]));
    
    updateCartIconCounter();

    return;
  }

  try {
    const currentGoodsInCart = JSON.parse(goodsInCart);

    if (!Array.isArray(currentGoodsInCart)) {
      return;
    }

    if (!currentGoodsInCart.includes(itemId)) {
      currentGoodsInCart.push(itemId);

      window.localStorage.setItem('goods-in-cart', JSON.stringify(currentGoodsInCart));

      updateCartIconCounter();
    }
  } catch {}
};

export const handleBuyButtons = function() {
  const btns = document.querySelectorAll('.buy-button');

  btns.forEach(btn => {
    btn.addEventListener('click', handler);
  });
};
