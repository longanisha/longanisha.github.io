/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "20200526/index.html",
    "revision": "6899f6b5de9edc849e6a268389c3791e"
  },
  {
    "url": "20200529/index.html",
    "revision": "51dde415c943b077a8dc0c74f50d2456"
  },
  {
    "url": "20200601/index.html",
    "revision": "c12379fbf777d204b14db3a04142f202"
  },
  {
    "url": "20200604/index.html",
    "revision": "1e383888a069a2beb2486438b18459cc"
  },
  {
    "url": "20210301/index.html",
    "revision": "fb32ecfd3e236227d5f4be81188846d2"
  },
  {
    "url": "20210327/index.html",
    "revision": "d571ba51adeb378cf50fe48515bce5f5"
  },
  {
    "url": "404.html",
    "revision": "feebe22d6866fed1c2521051ae227145"
  },
  {
    "url": "assets/121501/1.png",
    "revision": "c4bdcde64b3d33cbc8baec7e9d21d6f5"
  },
  {
    "url": "assets/200526/1.png",
    "revision": "126ac5ae3a114e3bec3b897d439cf3c7"
  },
  {
    "url": "assets/200526/2.png",
    "revision": "23dff91a7b5ac26d6580c2974b94bbca"
  },
  {
    "url": "assets/200526/3.png",
    "revision": "71821d824a4c76648b0a9ba01f6725ee"
  },
  {
    "url": "assets/200526/4.png",
    "revision": "a0d9ecf3271c8f8fbd7451fae743b268"
  },
  {
    "url": "assets/200526/5.png",
    "revision": "d01be8e7c3e3822c12af0dc06d443985"
  },
  {
    "url": "assets/css/0.styles.f6dd2152.css",
    "revision": "f5960f3427e559abd93bd80ca85a0db5"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/interview/01.jpg",
    "revision": "4ba6a5e4af975258cc1f47d55dcd38ca"
  },
  {
    "url": "assets/js/1.07bf8512.js",
    "revision": "c6a19f4fe2bc9b8fb8853653b7004322"
  },
  {
    "url": "assets/js/10.b4fa79b4.js",
    "revision": "ec44405a080b07ec73523b6d2b2309d1"
  },
  {
    "url": "assets/js/11.4d934f57.js",
    "revision": "7983e272128a29ce7d48ab1da7d8adab"
  },
  {
    "url": "assets/js/14.617ce1c8.js",
    "revision": "424a7e13255d308d145b60dd44d501dd"
  },
  {
    "url": "assets/js/15.1e607404.js",
    "revision": "fe3806bd451ba6bd3a9aa77b0dfbea0a"
  },
  {
    "url": "assets/js/16.5baf9b18.js",
    "revision": "5ca17cd4313afd43827420f6aaad765b"
  },
  {
    "url": "assets/js/17.892ae76a.js",
    "revision": "35ee38e45ee507188291d32e549725e8"
  },
  {
    "url": "assets/js/18.98ce6fec.js",
    "revision": "449b1658f8c596589196da9832da9cdc"
  },
  {
    "url": "assets/js/19.f1c7343d.js",
    "revision": "cd3b815eef29138a4763883c80e691e5"
  },
  {
    "url": "assets/js/2.d69eb172.js",
    "revision": "b3872dbee4e6499d825101744c04e2c3"
  },
  {
    "url": "assets/js/20.8ff02322.js",
    "revision": "673e70582cb0bd4e7e03c29ba40c7d21"
  },
  {
    "url": "assets/js/21.c3f487ab.js",
    "revision": "4e1e3129d6cc6d06efa0273af72e7167"
  },
  {
    "url": "assets/js/22.a5a16fe4.js",
    "revision": "5ebbae4fc03634ab0050d71258518bf2"
  },
  {
    "url": "assets/js/23.a0777808.js",
    "revision": "d444aadd09c55620b57dba6b084904be"
  },
  {
    "url": "assets/js/24.31eeac55.js",
    "revision": "8b6d2fb0b63a4aa39416f9c9a0969d24"
  },
  {
    "url": "assets/js/25.02bb9f55.js",
    "revision": "08a4a156b67f6156a9b68b45056d76c9"
  },
  {
    "url": "assets/js/26.a0ce230b.js",
    "revision": "918bb4798276d09cda122bf80f3a126d"
  },
  {
    "url": "assets/js/27.f6465fcd.js",
    "revision": "e37da813fa0fc87a1324fb3521127a3d"
  },
  {
    "url": "assets/js/28.ca72a513.js",
    "revision": "d76a6e35ba2fe59239c3faea70e886a1"
  },
  {
    "url": "assets/js/29.67cef684.js",
    "revision": "625ab148dd4bf77fe98dad96fac828ec"
  },
  {
    "url": "assets/js/3.e3d9631b.js",
    "revision": "bdc593a1236daecbb1e6c53b63736304"
  },
  {
    "url": "assets/js/30.d9152b91.js",
    "revision": "fb25124ed2d7fadb52f5ba2b15551995"
  },
  {
    "url": "assets/js/31.bef388b1.js",
    "revision": "9746a9dc0983664640043893b092dedd"
  },
  {
    "url": "assets/js/32.58c784b4.js",
    "revision": "fd10ad5eccff583835308c7b9726eb5e"
  },
  {
    "url": "assets/js/33.4daade74.js",
    "revision": "39e5e354e66e182582ef247d5be02a12"
  },
  {
    "url": "assets/js/34.cbbd6f46.js",
    "revision": "f34ec82b7768db7b0869b1a0185081e0"
  },
  {
    "url": "assets/js/35.153fb3f7.js",
    "revision": "d1a8583f0b576c9e6b8423e1a792cda4"
  },
  {
    "url": "assets/js/36.88b16170.js",
    "revision": "d5a213167658de539c2536f02ab41bb8"
  },
  {
    "url": "assets/js/37.96fbd2b4.js",
    "revision": "40cec1b97cfb3d7035fb8cacf318731f"
  },
  {
    "url": "assets/js/38.8c96b69f.js",
    "revision": "d4789d917a4caa9b5b1e4c220d621e9e"
  },
  {
    "url": "assets/js/39.b4c88ab2.js",
    "revision": "d273a25a4ad5274da8ab92a628e58c72"
  },
  {
    "url": "assets/js/4.cc13e188.js",
    "revision": "a14792a231b6bf4f78c2a73345c41e49"
  },
  {
    "url": "assets/js/40.07b88df6.js",
    "revision": "8260397dbf65c9d7701a9483e1834c48"
  },
  {
    "url": "assets/js/41.f2111637.js",
    "revision": "037f18c3c486b456121daf443ae8328c"
  },
  {
    "url": "assets/js/42.e40a7bfe.js",
    "revision": "b404eacb64f45defead1eec19efd7a48"
  },
  {
    "url": "assets/js/43.384e7541.js",
    "revision": "be56c11d8247924b0d658f989cdfda78"
  },
  {
    "url": "assets/js/44.f1b1fc3a.js",
    "revision": "80d75c3b79cfa57eda96f115b1da3f1a"
  },
  {
    "url": "assets/js/45.23a04aa9.js",
    "revision": "0d7a232745954049d4ccef651df6f0a3"
  },
  {
    "url": "assets/js/46.6717de41.js",
    "revision": "31821082e0778f459aabb1610c0cdeee"
  },
  {
    "url": "assets/js/47.59306c8b.js",
    "revision": "e62b2800f6d2cee39d45409d03a3da95"
  },
  {
    "url": "assets/js/5.3c5554d9.js",
    "revision": "edaed539eb349deafd6fb50f8680dd09"
  },
  {
    "url": "assets/js/6.53535a7e.js",
    "revision": "c5aaeea8aa5ed08fb61b35a8c9ef08a5"
  },
  {
    "url": "assets/js/7.77f1ff95.js",
    "revision": "2b45a40acbceff647e0f59dc34e15cac"
  },
  {
    "url": "assets/js/8.cbfbeafa.js",
    "revision": "02152e54d2f0074cd29d2e6925f5b027"
  },
  {
    "url": "assets/js/9.03ad3961.js",
    "revision": "e58a4eeb2473a1722d9a456b9b9e2e1b"
  },
  {
    "url": "assets/js/app.64ce7f85.js",
    "revision": "b71b1fd90cca5c8123a92bb9d7920f48"
  },
  {
    "url": "assets/js/vendors~docsearch.601cda4d.js",
    "revision": "6a47c112e0a77693e662088f1e84aefa"
  },
  {
    "url": "avatar.jpg",
    "revision": "d4dd2d543bfc95ffa6ce44ce1b75f709"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "bg.jpg",
    "revision": "e06f1a51f4c146f1fd7d42ec4b6451ad"
  },
  {
    "url": "cat.jpg",
    "revision": "289fe6e568cfb71ce0e8bcc1458cd61b"
  },
  {
    "url": "categories/About Me/index.html",
    "revision": "8948b27c2ab2816fcc6a3e34ddedaa4e"
  },
  {
    "url": "categories/Artical/index.html",
    "revision": "55568bdda98235ec4a96b019033f2211"
  },
  {
    "url": "categories/index.html",
    "revision": "4bdf971c58b084f468e2c61a73a07c06"
  },
  {
    "url": "categories/Learning Notes/index.html",
    "revision": "3ec674310519520d3a896f33f6c3603b"
  },
  {
    "url": "categories/Projects/index.html",
    "revision": "71a3afec9792832936fbc4445306da5b"
  },
  {
    "url": "hero.jpg",
    "revision": "c60b4e9b3a0454137d336d7fdf4a3bf7"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "dc8ba44fcff9dd18aa935d23f6a49ed5"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "681992f5b3649ffe525abb02eb3c619d"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "e88f292f8c50879df390a697190537e5"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "97f627f10205ac86868f9727ecb7c477"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "231b6077415af6b017503e5b499cd90b"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "771a697863a0bc92b4cffcbe66d25bc3"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "1c10ea76fcd90a1c83aec949bb9dd254"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "ed7b53a2f4596f15838eb88bd84c6f1c"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f358ba0595844b2acc7d02fc18cb56f4"
  },
  {
    "url": "index.html",
    "revision": "e922f00bac9935e7bb53682eb6d785ce"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "mine.jpg",
    "revision": "5ef1240314ed8707848ed856f43d7b13"
  },
  {
    "url": "tag/About Me/index.html",
    "revision": "5cd5d672f9e4b82a42f0179dea5d3d13"
  },
  {
    "url": "tag/Artical/index.html",
    "revision": "0511e50007ced3211b2c8a8b408f787d"
  },
  {
    "url": "tag/index.html",
    "revision": "9cc66208ed058e0cf60b90a3b2f604f7"
  },
  {
    "url": "tag/Learning Notes/index.html",
    "revision": "7ed357639d5c5f1632d28eda4a95fa24"
  },
  {
    "url": "tag/Projects/index.html",
    "revision": "d418295f6e23e1a5bcf138922bffb498"
  },
  {
    "url": "timeline/index.html",
    "revision": "cea2e0214a94af93070c778291f2115b"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "15741ee05739ca48d4024f8f14c2cea8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
