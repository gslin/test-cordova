import axios from 'axios';

const main = async () => {
  const res = await axios.get('https://www.example.com/');

  const el = document.querySelector('textarea');
  el.innerText = await res.data;
};

document.addEventListener('deviceready', main, false);
