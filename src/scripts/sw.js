self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');
});

self.addEventListener('active', (event) => {
  console.log('Activating Server Worker ...');
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);

  event.responWidth(fetch(event.request));
});
