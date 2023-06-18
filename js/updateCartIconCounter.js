export const updateCartIconCounter = () => {
  const cartIconCounter = document.getElementById('cart-icon-counter');

  if (!cartIconCounter) {
    return;
  }

  const goodsInCart = window.localStorage.getItem('goods-in-cart');

  if (!goodsInCart) {
    cartIconCounter.innerHTML = 0;

    return;
  }

  try {
    const currentGoodsInCart = JSON.parse(goodsInCart);

    if (!Array.isArray(currentGoodsInCart)) {
      cartIconCounter.innerHTML = 0;

      return;
    }

    cartIconCounter.innerHTML = currentGoodsInCart.length;
  } catch {}
};
