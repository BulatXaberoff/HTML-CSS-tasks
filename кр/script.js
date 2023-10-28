const cart = [];

Array.from(document.querySelectorAll('.to_cart')).forEach((el) => {
    el.addEventListener('click', (e) => {
      const cartProduct = e.target.closest('.product').id;
      const cartWrapper = document.querySelector('.modal_wrapper.add');
      if (!cart.includes(cartProduct)) {
        cart.push(cartProduct);
      }
      cartWrapper.querySelector('#cart_content').innerHTML = document.querySelector(`.product#${cartProduct}`).outerHTML;
      cartWrapper.style.display = 'block';
    });
});

document.querySelector('#open_cart').addEventListener('click', (e) => {
  e.target.closest('.modal_wrapper').style.display = 'none';
  const cartModal = document.querySelector('.modal_wrapper.cart');
  cartModal.querySelector('#cart_products').innerHTML = cart.map((c) => {
    return document.querySelector(`.product#${c}`).outerHTML;
  }).join('');
  cartModal.style.display = 'block';
})

Array.from(document.querySelectorAll('.product img')).forEach((el) => {
  el.addEventListener('click', () => {
    const imgViewer = document.querySelector('.img_wrapper');
    imgViewer.querySelector('#image').innerHTML = el.outerHTML;
    imgViewer.style.display = 'block';
  });
});