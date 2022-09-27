if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js')
}




if(window.caches){
    console.log('Soportas caches');

    caches.open('cache-v1');
 

   


    caches.open('cache-v1').then((cache)=>{
  
        cache.addAll(
         [
            '/',
            '/index.html',
            '/pages/suma.html',
            '/pages/resta.html',
            '/pages/multiplicacion.html',
            '/pages/division.html'
         ]
        )

        
    })
}