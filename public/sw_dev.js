importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([{"revision":"94801f7a6f8c940d68ef5d911d6976f9","url":"asset-manifest.json"},{"revision":"593bfa7aafda1564a97551d4a24dacd7","url":"favicon.png"},{"revision":"a446d117994c8f0eda19d30c10e04275","url":"index.html"},{"revision":"9929400e002cbeb1f5a762be3f5e1728","url":"manifest.json"},{"revision":"82891e9fe269c3b2b9de82a32e479b30","url":"offline.html"},{"revision":"17e9cc0a856ec84261d47730dda06604","url":"serviceworkerOLD.js"},{"revision":"2cba44924468de287949f3d481d393a0","url":"static/css/2.20aa2d7b.chunk.css"},{"revision":"e161cb47c5550f6b1afdb4b03d8ad8fd","url":"static/css/main.573fa992.chunk.css"},{"revision":"c3352805c81dafafd812f903ff15ccc5","url":"static/js/2.bc30aa9c.chunk.js"},{"revision":"39188326931c34bb6632394200da6fcf","url":"static/js/2.bc30aa9c.chunk.js.LICENSE.txt"},{"revision":"13147984b2b0d1c091412ad9c39719be","url":"static/js/main.4c0ce511.chunk.js"},{"revision":"8eb9b86b8aa4058069ff5b3388f2ba8e","url":"static/js/runtime-main.5a4b5460.js"}]);

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}