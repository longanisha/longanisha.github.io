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
    "revision": "12832bca3655c6bf09ee198fcef31076"
  },
  {
    "url": "20200529/index.html",
    "revision": "6c4326c0e4ab0e07326b4750055bb9a1"
  },
  {
    "url": "20200604/index.html",
    "revision": "89fe94780c61320817b1719e3b57c392"
  },
  {
    "url": "20200622/index.html",
    "revision": "c65b65c1f0e3603bfa8d96b8d8ecc20b"
  },
  {
    "url": "20210301/index.html",
    "revision": "e4f42bce8aaebcd1cbd7733b84af1f51"
  },
  {
    "url": "20210327/index.html",
    "revision": "704439d919ec7b16a0288d7fede37695"
  },
  {
    "url": "20210412/index.html",
    "revision": "66635a6c747cfcf1f843ef709609ef2e"
  },
  {
    "url": "404.html",
    "revision": "705652710282c4f3d23b4d24aeea37b0"
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
    "url": "assets/css/0.styles.b4222329.css",
    "revision": "882938592519bdb75ac2f8811fdc2eb0"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/interview/01.jpg",
    "revision": "4ba6a5e4af975258cc1f47d55dcd38ca"
  },
  {
    "url": "assets/js/1.e7905a57.js",
    "revision": "6a454df67e80770aab4a5ce9216dc541"
  },
  {
    "url": "assets/js/10.b517de46.js",
    "revision": "300680ebc44cf052d3a07b2605b3f1be"
  },
  {
    "url": "assets/js/11.2a94efea.js",
    "revision": "9742389bd30bb126cf21174139fe847b"
  },
  {
    "url": "assets/js/12.4b61f471.js",
    "revision": "c2f5ab77a1323de38fea9c269a3bf6b4"
  },
  {
    "url": "assets/js/13.67bdf50b.js",
    "revision": "e8dccca8051a4727d81dfca5b53bc132"
  },
  {
    "url": "assets/js/14.0fdf6c55.js",
    "revision": "ebfdf1539ed394324ce157aebdd8d3b6"
  },
  {
    "url": "assets/js/15.970ced73.js",
    "revision": "09501602e1efc0d4a897bff9f6c78413"
  },
  {
    "url": "assets/js/16.9c7d5a4c.js",
    "revision": "a0834de20bf43f45dc9ed92a443e8684"
  },
  {
    "url": "assets/js/17.350c9a4b.js",
    "revision": "c078c58df0a5fef04f3762e9decbc50e"
  },
  {
    "url": "assets/js/18.a9c25ec8.js",
    "revision": "9630adccd970b5e8b7c0e127105b55f0"
  },
  {
    "url": "assets/js/19.a80cdc63.js",
    "revision": "f5e524183870e92bb3538f43f1ca880d"
  },
  {
    "url": "assets/js/20.c28d267c.js",
    "revision": "1c81c9fd3abb83402f2ffada30893fff"
  },
  {
    "url": "assets/js/21.2e101490.js",
    "revision": "ef67a48d1f48c181d7a4fc130b58582b"
  },
  {
    "url": "assets/js/3.beb09522.js",
    "revision": "0b39db296fb50ce54d72fc645d02b99c"
  },
  {
    "url": "assets/js/4.6502e37c.js",
    "revision": "ca3b52974629b10c249797412b536194"
  },
  {
    "url": "assets/js/5.7138c581.js",
    "revision": "decf0ec688b09ba04b5751e5f6a206e5"
  },
  {
    "url": "assets/js/6.f550e7d8.js",
    "revision": "2db31fc21e8c9400a546dc115119eae4"
  },
  {
    "url": "assets/js/7.f92188dd.js",
    "revision": "a7e4c77131e8ae16a937856d4d011e58"
  },
  {
    "url": "assets/js/8.7896e902.js",
    "revision": "707021a1c3a393331bcf0f994427f2c4"
  },
  {
    "url": "assets/js/9.164ae4ca.js",
    "revision": "907580ac1b1f8ba98b306daf54a80067"
  },
  {
    "url": "assets/js/app.6dd65550.js",
    "revision": "db0016f22fdac8c53055403915cb6130"
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
    "revision": "d06dd216471079eec3b5899aa6e84bc9"
  },
  {
    "url": "categories/Artical/index.html",
    "revision": "a9d82cd3d1c098822e4365738f6a1f15"
  },
  {
    "url": "categories/index.html",
    "revision": "742420ec34207507b60b05c2eeb98aa5"
  },
  {
    "url": "categories/Learning Notes/index.html",
    "revision": "ca1c10e9b7fb9043a572102a957f75d7"
  },
  {
    "url": "categories/Projects/index.html",
    "revision": "66f1912a0af2b033a5a4d1cfca3cb6ff"
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
    "revision": "efa4d2602965462b79ac09b7822e4987"
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
    "revision": "3efa04151d585ffd9fc7d593b9f18b94"
  },
  {
    "url": "tag/Artical/index.html",
    "revision": "00bd7c9c7a47316fef799ed477558d01"
  },
  {
    "url": "tag/index.html",
    "revision": "e521e84eb8e8adac1b2c1fb7feeb815c"
  },
  {
    "url": "tag/Learning Notes/index.html",
    "revision": "0ff6b9b8a912e7e463c49877b9771a98"
  },
  {
    "url": "tag/Projects/index.html",
    "revision": "0800653afe316bd058c959b37ffe66da"
  },
  {
    "url": "timeline/index.html",
    "revision": "428aaa5ab6b926df8a842b09c4bfc6a5"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "5ca7e200dad69017077922cd5a6fc10a"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "fae900205dbac59e9cb3f609390bb3a1"
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
