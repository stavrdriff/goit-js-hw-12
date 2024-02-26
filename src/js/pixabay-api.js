import iziToast from "izitoast";
import Error from '../img/octagone-x-mark.svg';
import { markupGallery } from "./render-functions";
import axios from 'axios';

export const fetchImages = async (request, page) => {
  const SOURCE_URL = 'https://pixabay.com/api/';
  const KEY = '10296847-2cb755935dd8ca79d5cc29426';
  const KEY_STRING = `?key=${KEY}`;
  const QUESTION = request;

  await axios.get(`${SOURCE_URL}${KEY_STRING}&q=${QUESTION}`, {
    params: {
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: 15,
    },
  })
    .then((response) => {
      markupGallery(response.data, request, page);
    })
    .catch((error) => iziToast.error({
      class: 'popup-message',
      theme: 'dark',
      backgroundColor: '#ef4040',
      messageColor: '#fff',
      iconUrl: Error,
      position: 'topRight',
      pauseOnHover: true,
      timeout: 3000,
      message: `${error}`,
    }));
}