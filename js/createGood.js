/**
 * Пример объекта, который описывает товар
 */
const goodConfigExample = {
  id: 0,
  imgUrl: '',
  title: '',
  subtitle: '',
  price: 1000,
  sizes: [46, 48, 50, 54],
  activeSize: 48,
}

/**
 * Функция, которая создает DOM-элемент товара и наполняет его данными товара
 */
export const createGood = function(goodConfig) {
  const { id, imgUrl, title, subtitle, price, sizes, activeSize } = goodConfig;

  const goodItem = document.createElement('div');
  goodItem.classList.add('item');
  goodItem.setAttribute('id', id);

  goodItem.innerHTML = `
    <div class="product-img">
      <img src="${imgUrl}">
    </div>
    <div class="dat">
      <div>
        <strong class="item-title">${title}</strong>
        <p><small data-items-in-box class="text-muted">${subtitle}</small></p>
        <small class="price">${price}₽</small>
      </div>
      <div class="size">
        <strong>Размер:</strong>
        <p class="in">
          ${createSizes(sizes, activeSize)}
        </p>
      </div>
      <div>
        <div class="counter">
          <button class="buy buy-button" data-item_id="${id}">Купить оптом</button>
          <div class="counter-wrapper" data-counter>
            <button class="counter__btn" data-direction="minus" data-item_id="${id}">-</button>
            <input type="text" value="0" class="counter__value">
            <button class="counter__btn" data-direction="plus" data-item_id="${id}">+</button>
          </div>
        </div>
      </div>
    </div>
  `;

  return goodItem;
}

function createSizes(sizes, activeSize) {
  return sizes.map((size) =>
    size === activeSize
      ? `<span class="active">${size}</span>`
      : `<span>${size}</span>`
  ).join('');
};
