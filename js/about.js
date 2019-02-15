const productSelection = document.getElementsByClassName('secondList');

Array.from(productSelection).forEach(listItem => {
  listItem.addEventListener('click', (e)=> {
    let productName = e.target.textContent;
    localStorage.setItem('product', productName);
    window.location.href = 'product.html';
  })
});
