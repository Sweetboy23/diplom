import { ITEMS_COUNT } from "./itemsCount.js";

export const counter = function() {
  const btns = document.querySelectorAll('.counter__btn');

  btns.forEach(btn => {
    btn.addEventListener('click', function() {
      const direction = this.dataset.direction;
      const itemId = this.dataset.item_id;
      const inp = this.parentElement.querySelector('.counter__value');
      const currentValue = +inp.value;
      let newValue;

      if (direction === 'plus') {
        newValue = currentValue + 1;
      } else {
        newValue = Math.max(currentValue - 1, 0);
      }

      inp.value = newValue;
      window.localStorage.setItem(`${itemId}-count`, newValue);
      ITEMS_COUNT[itemId] = newValue;
    });
  });
};

