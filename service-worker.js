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
    "revision": "7ad3be458d41fc37fc7e6a8f189420f8"
  },
  {
    "url": "20200529/index.html",
    "revision": "86ca88d457ad67ff67082b40d06105d1"
  },
  {
    "url": "20200601/index.html",
    "revision": "42945dcc025f576c964480635bfcf5de"
  },
  {
    "url": "20200604/index.html",
    "revision": "3628a35abc9fbc299abd5d5b561fc9ff"
  },
  {
    "url": "20210301/index.html",
    "revision": "14ff6c23f8b9163af233114619ebb87c"
  },
  {
    "url": "20210327/index.html",
    "revision": "c180cef8ff84216af351bf51e1a8ed0a"
  },
  {
    "url": "404.html",
    "revision": "ad3c7cd16f35e557d554c490e1dad704"
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
    "url": "assets/css/0.styles.772212fd.css",
    "revision": "882938592519bdb75ac2f8811fdc2eb0"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/oose1.e7908821.jpg",
    "revision": "e79088213a48f5204efbf0b2c2748af8"
  },
  {
    "url": "assets/interview/01.jpg",
    "revision": "4ba6a5e4af975258cc1f47d55dcd38ca"
  },
  {
    "url": "assets/js/1.e8354ab7.js",
    "revision": "ddc9f734993167dbe05adceab30f6431"
  },
  {
    "url": "assets/js/10.5c11185a.js",
    "revision": "76272f4214f91deb249a24c3647c1d1c"
  },
  {
    "url": "assets/js/11.68c21bf4.js",
    "revision": "9c2760f2326349c88787bfd43a365d1e"
  },
  {
    "url": "assets/js/12.03fbf9d6.js",
    "revision": "03bfedbb428506f56be93550c62de1d5"
  },
  {
    "url": "assets/js/13.ae6a9738.js",
    "revision": "dd051f1073fe94306c2240966f304cb8"
  },
  {
    "url": "assets/js/14.66cda733.js",
    "revision": "a30700ce2ba049ef50053f414fdcfa23"
  },
  {
    "url": "assets/js/15.18c88bc9.js",
    "revision": "0bd2d2bd72a27fdcb1aa46f0f26cde1f"
  },
  {
    "url": "assets/js/16.a4e97445.js",
    "revision": "616254a01d09fb418fb68a58ee5a63bf"
  },
  {
    "url": "assets/js/17.a2884252.js",
    "revision": "675690bed734f00de931d9c4cf03f52f"
  },
  {
    "url": "assets/js/18.3b18b0b8.js",
    "revision": "ecaf7145b4c377efa628a741921114f9"
  },
  {
    "url": "assets/js/19.36529bc0.js",
    "revision": "8f1dcf5a364f488545ec414e65933cad"
  },
  {
    "url": "assets/js/20.f7b5e2a0.js",
    "revision": "eaf7723d76f1380fefbaa5642cff29d6"
  },
  {
    "url": "assets/js/3.fcb0388d.js",
    "revision": "1839383f51cb0529bf73d5f007712227"
  },
  {
    "url": "assets/js/4.76dcd5bd.js",
    "revision": "a1130d82bd49c591a7816714ae95357b"
  },
  {
    "url": "assets/js/5.e381fb48.js",
    "revision": "617385345aba8a636783876317dfba9e"
  },
  {
    "url": "assets/js/6.07d0828a.js",
    "revision": "d4f3edb06a8cc959d5d344ed4f26092d"
  },
  {
    "url": "assets/js/7.350a5057.js",
    "revision": "a540ee6b091d8c8d32eaceb33edebfb6"
  },
  {
    "url": "assets/js/8.45e860ae.js",
    "revision": "76b04aa5ade55c9fdb4a3366053645c2"
  },
  {
    "url": "assets/js/9.f0a5614b.js",
    "revision": "ee782392edbafff259809e26c5dbc485"
  },
  {
    "url": "assets/js/app.4cda1f56.js",
    "revision": "2dab01f46299ae537b281a43383dc7ce"
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
    "revision": "782fcd5cd8a882db77921a523b913fc4"
  },
  {
    "url": "categories/Artical/index.html",
    "revision": "b3f568890a4ef5974049890d5e76f42c"
  },
  {
    "url": "categories/index.html",
    "revision": "58493c1a3b56b8a00b64410a44a9229c"
  },
  {
    "url": "categories/Learning Notes/index.html",
    "revision": "0a0de11c2512cee01e8ad0a59a5446c5"
  },
  {
    "url": "categories/Projects/index.html",
    "revision": "176594384eae7ca8b15819c3b0287e6b"
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
    "revision": "6997cf3eaee559eee99f362e7a88fad8"
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
    "revision": "bbd841ef946b5029743014ca5ccd976f"
  },
  {
    "url": "tag/Artical/index.html",
    "revision": "92ccccf9d4bdef43b1cb43c295f001df"
  },
  {
    "url": "tag/index.html",
    "revision": "bf161ed855db34cae614a42d3a102e41"
  },
  {
    "url": "tag/Learning Notes/index.html",
    "revision": "c2d4c268f8ab7a43ad1106f2c6084ea3"
  },
  {
    "url": "tag/Projects/index.html",
    "revision": "8810b2b95e041b5701248350bc4f6e2e"
  },
  {
    "url": "timeline/index.html",
    "revision": "30d60800baf5d9d8a9b695baeef5dcea"
  },
  {
    "url": "views/article/2016/121501.html",
    "revision": "5b880bb1bd73e5465f87e79220dd2d41"
  },
  {
    "url": "views/article/2017/092101.html",
    "revision": "bfec66bad939422c27b06be21eb31d2f"
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
