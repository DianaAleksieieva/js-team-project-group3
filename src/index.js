import './sass/main.scss';
import 'tui-pagination/dist/tui-pagination.css';
import './js/cardTemplates';
import photoCardsTemplates from './templates/photoCards.hbs';
import { getMovies } from './js/getMovies';
import { MODE } from './js/constants';
import Pagination from 'tui-pagination';


const inputElement = document.querySelector('.search-input');
const searchButtonElement = document.querySelector('.search-button');
const paginationContainer = document.querySelector('#tui-pagination-container');
const inputElement = document.querySelector(".search-input");
const searchButtonElement = document.querySelector(".search-button");
const galleryContainer = document.querySelector('.gallery');
const MyLibraryBtn = document.querySelector("#library");
const SearchForm = document.querySelector("#search-form");
const WatchedQueueContainer = document.querySelector("#watched-queue-container");
const headerHome = document.querySelector("header");


let inputValue = '';
let currentContent = [];

const optionsPagination = {
  itemsPerPage: 1,
  visiblePages: 10,
  page: 1,
};
const pagination = new Pagination(paginationContainer, optionsPagination);
pagination.on('afterMove', event => {
  const currentPage = event.page;
  console.log(currentPage);
});

getMovies(MODE.popular, inputValue).then(data => {
  currentContent = data;

  console.log(currentContent);
  pagination.reset(currentContent.length);

  galleryContainer.insertAdjacentHTML('beforeend', photoCardsTemplates(currentContent));

});

const searchMoviesEvent = () => {
  if (!inputValue) {
    return;
  }
  getMovies(MODE.search, inputValue).then(data => {
    if (data.length > 0) {
      currentContent = data; 
      clearGalleryMarkup();
      galleryContainer.insertAdjacentHTML('beforeend', photoCardsTemplates(currentContent));
        return;
    }
    console.log('No results found.');
  });
};

const inputEvent = () => {
  inputValue = inputElement.value.trim().replace(' ', '%20');
};

inputElement.addEventListener('input', inputEvent);
searchButtonElement.addEventListener('click', searchMoviesEvent);

function clearGalleryMarkup() {
    galleryContainer.innerHTML = '';
   
};

//При нажатии по кнопке My Library пропадает input, меняется фон и появляются две кнопки(Начало)


MyLibraryBtn.addEventListener('click', onClicklibraryBtn);

function onClicklibraryBtn () {
SearchForm.style.display = 'none';
WatchedQueueContainer.style.display = 'block'; 
headerHome.classList.replace('header-home', 'header-library');
}
//При нажатии по кнопке My Library пропадает input, меняется фон и появляются две кнопки(конец)


