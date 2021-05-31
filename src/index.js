import imagesCardTpl from './templates/images-card.hbs';
import './css/main.css';
import NewsApiService from './js/apiService';


const searchFormEl = document.querySelector('.js-search-form');
const loadMoreBtnEl = document.querySelector('[data-action="load-more"]');
const articlesContainer = document.querySelector('.js-articles-container');

searchFormEl.addEventListener('submit', onSearch);
loadMoreBtnEl.addEventListener('click', onLoadMore);

const newsApiService = new NewsApiService();

function onSearch(e) {
    e.preventDefault();
   
    newsApiService.searchQuery = e.currentTarget.elements.query.value;

    if (newsApiService.searchQuery ==='') {
        return alert('invalid name');
   }

    newsApiService.resetPage()
    newsApiService.fetchImages().then(renderImagesCard)
     clearImagesCard();

};

function onLoadMore() {
    newsApiService.fetchImages().then(renderImagesCard)
}

function renderImagesCard (hits) {
    const markup = imagesCardTpl(hits);
    articlesContainer.insertAdjacentHTML('beforeend', markup);
    articlesContainer.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
    });
}

function clearImagesCard() {
     articlesContainer.innerHTML='';
}

