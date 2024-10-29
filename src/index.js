const main = () => {
  const el = document.querySelector('textarea');
  el.innerText = 'fetching...';

  cordova.plugin.http.sendRequest('https://www.example.com/', {}, res => {
    el.innerText = 'OK\n' + res.data;
  }, res => {
    el.innerText = 'error\n' + res.error;
  });
};

document.addEventListener('deviceready', main, false);
