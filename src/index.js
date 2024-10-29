const axios = require('axios').default;

const main = () => {
  const el = document.querySelector('textarea');
  el.innerText = 'fetching...';

  axios.get('https://www.example.com/').then(res => {
    el.innerText = res.data;
  });
};

document.addEventListener('deviceready', main, false);
