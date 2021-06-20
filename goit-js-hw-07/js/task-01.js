const categoriesQuantity = document.querySelector('#categories')
console.log(`В списке ${categoriesQuantity.children.length} категории.`);




const categoryTitles = document.querySelectorAll('h2');
const categoriesList = document.querySelectorAll('.item ul');

for (let i = 0; i < categoryTitles.length; i++) {
    console.log(`Категория: ${categoryTitles[i].textContent}`);
    console.log(`Количество элементов: ${categoriesList[i].children.length}`);
}

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('#gallery')


galleryEl.classList.add('list')

const addGallery = images.map(option => {
  return `<li class='item'><img class='img' src='${option.url}' alt='${option.alt}'></li>`
}).join('')

galleryEl.insertAdjacentHTML('afterbegin', addGallery)
