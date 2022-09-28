self.addEventListener('install', (event)=>{
    console.log('SW: Install'); 
    const promiseCache = caches.open('Cache-v1').then((cache)=>{
         return cache.addAll(
             [
                 '/practica4/',
                 '/practica4/index.html',
                 '/practica4/css/style.css',
                 '/practica4/js/app.js',
                 '/practica4/pages/suma.html',
                 '/practica4/pages/division.html',
                 '/practica4/pages/multiplicacion.html',
                 '/practica4/pages/resta.html',
                 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js',
                 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css',
             ]
         );
    });
 
    event.waitUntil(promiseCache);
 
 });
 


 // Only Cache
self.addEventListener('fetch', event =>{
    const respCache = caches.match(event.request)
    event.respondWith(respCache);
});