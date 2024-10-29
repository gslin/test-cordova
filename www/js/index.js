const main = async () => {
  const res = await fetch('https://www.example.com/');

  const el = document.querySelector('textarea');
  el.innerText = await res.text();
};

document.addEventListener('deviceready', main, false);
