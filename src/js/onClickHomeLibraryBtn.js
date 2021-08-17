import { headerEl, mainEl } from './constants';
import { clearGalleryMarkup } from './utils';
import { clearSpiner, showSpinner } from './spinner';
import { hidePagination, showPagination } from './pagination';

const onClickLibraryBtn = () => {
    console.log('qqqqqq');
    headerEl.headerHome.classList.replace('header-home', 'header-library');
    mainEl.WatchedQueueContainer.style.display = 'block';
    headerEl.SearchForm.style.display = 'none';
    headerEl.headerNavigationItemHome.classList.remove('navigation__item--current');
    headerEl.headerNavigationItemLibrary.classList.add('navigation__item--current');
    showSpinner();
    clearSpiner();
    hidePagination();
    // galleryContainer.style.display = 'none';
    clearGalleryMarkup();
};
const onClickHomeBtn = () => {
    headerEl.headerNavigationItemHome.classList.add('navigation__item--current');
    headerEl.headerNavigationItemLibrary.classList.remove('navigation__item--current');
    headerEl.headerHome.classList.replace('header-library', 'header-home');
    mainEl.WatchedQueueContainer.style.display = 'none';
    headerEl.SearchForm.style.display = 'inline-block';
    showSpinner();
    clearSpiner();
    showPagination();
    mainEl.galleryContainer.style.display = 'flex';

    localStorage.setItem('CurrentGalleryPage', 'Home');
};

export { onClickLibraryBtn, onClickHomeBtn };