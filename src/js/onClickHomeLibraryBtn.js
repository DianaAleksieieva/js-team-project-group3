import { SearchForm } from './constants';
import { WatchedQueueContainer } from './constants';
import { headerHome } from './constants';
import { galleryContainer } from './constants';
import { clearGalleryMarkup } from './utils';

const onClickLibraryBtn = () => {
    headerHome.classList.replace('header-home', 'header-library');
    WatchedQueueContainer.style.display = 'block';
    SearchForm.style.display = 'none';
    // galleryContainer.style.display = 'none';
    clearGalleryMarkup();
};
const onClickHomeBtn = () => {
    headerHome.classList.replace('header-library', 'header-home');
    WatchedQueueContainer.style.display = 'none';
    SearchForm.style.display = 'block';
    //
    galleryContainer.style.display = 'block';

    localStorage.setItem('CurrentGalleryPage', 'Home');
};

export { onClickLibraryBtn, onClickHomeBtn };