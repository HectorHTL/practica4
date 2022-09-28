self.addEventListener('install', (event)=>{
    console.log('SW: Install'); 
    const promiseCache = caches.open('Cache-v1').then((cache)=>{
         return cache.addAll(
             [
                 '/',
                 '/index.html',
                 '/css/style.css',
                 '/js/app.js',
                 '/pages/suma.html',
                 '/pages/division.html',
                 '/pages/multiplicacion.html',
                 '/pages/resta.html',
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