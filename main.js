// const __API = 'https://fakestoreapi.com/products?limit=10';

// fetch(__API)
//   .then(res => res.json())
//   .then(data => {render(data)})
//   .catch(err => console.log(err))
//   .finally(() => console.log('Nima bolgan taqdirda ham ishlaydi'));

// let row = document.querySelector('.row');

// function render(array) {
//   row.innerHTML = '';

//   array.forEach(item => {
//     let card = document.createElement('div');
//     card.className = 'card';

//     let img = document.createElement('img');
//     img.src = item.image;

//     let title = document.createElement('p');
//     title.textContent = item.title;

//     let description = document.createElement('p');
//     description.textContent = item.description;

//     let price = document.createElement('p');
//     price.textContent = `💵${item.price}`;

//     let button = document.createElement('button');
//     button.classList.add('buy');
//     button.textContent = 'Buy';

//     card.append(img, title, description, price, button);
//     row.append(card);
//   });
// }
const __API = 'https://fakestoreapi.com/products?limit=10'

fetch(__API)
  .then(res => res.json())
  .then(data => {render(data)})
  .catch(err => console.log(err))
  .finally(() => console.log('Nima bolgan taqdirda ham ishlaydi'))

let row = document.querySelector('.row')
let cart = []
let totalPrice = 0

function render(array) {
  row.innerHTML = ''

  array.forEach(item => {
    let card = document.createElement('div')
    card.className = 'card'

    let img = document.createElement('img')
    img.src = item.image

    let title = document.createElement('p')
    title.textContent = item.title

    let description = document.createElement('p')
    description.textContent = item.description

    let price = document.createElement('p')
    price.textContent = `${item.price}💵`

    let button = document.createElement('button')
    button.classList.add('buy')
    button.textContent = 'Buy'
    
    button.addEventListener('click', () => {
      alert(`Mahsulot korzinkaga qo\'shildi :
        ${item.title} 🐱‍🚀`)
      cart.push(item)
      totalPrice += item.price
      update()
    });

    card.append(img, title, description, price, button)
    row.append(card)
  });
}

function update() {
  let cartInfo = document.querySelector('.cart-info')
  if (!cartInfo) {
    cartInfo = document.createElement('div')
    cartInfo.className = 'cart-info'
    document.body.append(cartInfo)
  }

  cartInfo.innerHTML = '<h2>Cart</h2>'
  cart.forEach(item => {
    let cartItem = document.createElement('p')
    cartItem.textContent = `${item.title} - ${item.price}💵`
    cartInfo.append(cartItem)
  });

  let total = document.createElement('p')
  total.textContent = `Umumiy: ${totalPrice}💵`
  cartInfo.append(total)
}
