import './css/styles.css';
import './css/loader.css';
import arrowLeft from './img/arrow.svg';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  clearGallery();
  showLoader();

  const query = event.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.show({
      class: 'custom-error-toast',
      message: 'Enter the search word',
      position: 'topRight',
    });
    return;
  }

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
          close: true,
          closeOnEscape: true,
          transitionIn: 'fadeInLeft',
          transitionOut: 'fadeOut',
          iconUrl: arrowLeft,
          iconColor: '#ffffff',
        });
        return;
      }
      createGallery(data.hits);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hideLoader();
    });
});
