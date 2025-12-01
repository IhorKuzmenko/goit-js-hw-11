import './css/styles.css';
import './css/loader.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  lightbox,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  showLoader();

  const query = event.target.elements['search-text'].value.trim();

  setTimeout(() => {
    getImagesByQuery(query)
      .then(data => {
        if (!data.hits || data.hits.length === 0) {
          iziToast.show({
            class: 'custom-error-toast',
            message:
              'Sorry, there are no images matching your search query. Please, try again!',
            position: 'topRight',
            layout: 2,
            timeout: 5000,
            close: true, // стандартный крестик справа
            closeOnEscape: true,
            transitionIn: 'fadeInLeft',
            transitionOut: 'fadeOut',
            iconUrl: './img/arrow.svg',
            iconColor: '#ffffff',
          });
          return;
        }
        clearGallery();
        createGallery(data.hits);

        lightbox.refresh();
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        hideLoader();
      });
  }, 1500);
});
