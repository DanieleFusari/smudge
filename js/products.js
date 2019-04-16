const productSelection = document.getElementsByClassName('secondList');

const product = document.querySelector('.product');

try {
  let productName = localStorage.getItem('product');
  productName = productName.replace(/\s/g, '');
  productName = productName.toLowerCase()
  displayProductPage(eval(productName));
} catch (e) {
  console.log(e)
}

Array.from(productSelection).forEach(listItem => {
  listItem.addEventListener('click', (e)=> {
    let productName = e.target.textContent;
    productName = productName.replace(/\s/g, '');
    productName = productName.toLowerCase()
    localStorage.setItem('product', productName);
    displayProductPage(eval(productName));
    location.reload();
  })
});

function displayProductPage(productInfo) {
  while (product.firstChild) {
    product.removeChild(product.firstChild);
  }

  const img = document.createElement('img');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const em = document.createElement('em');
  const p2 = document.createElement('p');
  const ae = document.createElement('a');
  const at = document.createElement('a');

  img.setAttribute("src", productInfo.img);

  img.setAttribute("alt", productInfo.name);
  p2.innerText = productInfo.ingreadence;
  h2.innerText = productInfo.name;
  p.innerText = productInfo.info;
  em.innerText = 'Ingredients';
  ae.innerText = 'Drop me an E-Mail';
  at.innerText = 'Drop me a Call';

  at.className = 'contactme'
  ae.setAttribute('href', 'mailto:dovemccolm@yahoo.co.uk?subject='+ productInfo.name);
  at.setAttribute('href', 'tel:+447557950493');

  product.innerHTML = img.outerHTML + h2.outerHTML + p.outerHTML + em.outerHTML + p2.outerHTML + ae.outerHTML + at.outerHTML;
};
