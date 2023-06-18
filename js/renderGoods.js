import { createGood } from "./createGood.js";
import { GOODS_CONFIG } from "./goodsConfig.js";

export const renderGoods = function() {
  const catalogContainer = document.getElementById('catalog-section');

  catalogContainer.innerHTML = '';

  if (!catalogContainer) {
    return;
  }

  GOODS_CONFIG.forEach((good) => {
    const goodItem = createGood(good);

    catalogContainer.appendChild(goodItem);
  });
}