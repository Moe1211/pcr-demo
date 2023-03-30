'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f592650f14edfd3dc2299aeae4a3d318",
"splash/img/light-2x.png": "3104e1305b083afc9369b9967cd63645",
"splash/img/dark-4x.png": "c95daa8c183394c6e13a0f6423b3fd44",
"splash/img/light-3x.png": "600d9f8c3beeeba43780dcdcd8b86ccb",
"splash/img/dark-3x.png": "600d9f8c3beeeba43780dcdcd8b86ccb",
"splash/img/light-4x.png": "c95daa8c183394c6e13a0f6423b3fd44",
"splash/img/dark-2x.png": "3104e1305b083afc9369b9967cd63645",
"splash/img/dark-1x.png": "7af3adcd06bb1b73366d1ec204418f3e",
"splash/img/light-1x.png": "7af3adcd06bb1b73366d1ec204418f3e",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "8632f66b778ab6afb1cdff5a5d50857a",
"index.html": "5e7800d1e27daa2b12b1b54e2f772774",
"/": "5e7800d1e27daa2b12b1b54e2f772774",
"main.dart.js": "cd7de0afea72ec354dacf50d071bde69",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "686d0fa7e5475d7ca10eecbac7af3304",
"icons/Icon-192.png": "6c89a546a2db64cc42d5c6d9b5e458d5",
"icons/Icon-maskable-192.png": "6c89a546a2db64cc42d5c6d9b5e458d5",
"icons/Icon-maskable-512.png": "96491ae09c5156d3ee98df5eb6a78a57",
"icons/Icon-512.png": "96491ae09c5156d3ee98df5eb6a78a57",
"manifest.json": "21194ea2162900b193b352af194ee23b",
"assets/images/26065.webp": "0dd8e1610d43690909e98d1fb46e771a",
"assets/images/09999.jpg": "4f3f857a7f04ec896e00132baa81d350",
"assets/images/Coat_of_arms_of_Egypt_(Official).svg.webp": "0f567c3536cab783eb37a2a32387bf28",
"assets/AssetManifest.json": "39a3ecc30504a7861d08e323e3da2ca2",
"assets/NOTICES": "8e5836f1c1b4387c98c0bb540daccd94",
"assets/FontManifest.json": "9adf59fd4d3eb23dd8286d886d3296f2",
"assets/packages/country_picker/lib/src/res/assets/worldwide.png": "e983bfcea9fbc75a1afb1ded43e87587",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/Ranga-Regular.ttf": "754c8ffb0875d5d6a11e6b3c3bdd5d23",
"assets/fonts/Alegreya-Italic-VariableFont_wght.ttf": "4287ef735d7beabe8605d759c61cb331",
"assets/fonts/Ranga-Bold.ttf": "aaf066bf224ddacfa040691d8b073a80",
"assets/fonts/Alegreya-VariableFont_wght.ttf": "9471ed703f9ff3684fab7e64d4d57560",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/personicon.svg": "6444e0ed8ee695593fa8973555f847a0",
"assets/assets/images/passengers.png": "e9961fc399824bca5bd888fc5c936618",
"assets/assets/images/icon.png": "ebecc7372fd485b6937e04a50b919bd6",
"assets/assets/images/hotel.png": "be57f927c5bbb2870f590f0b9d8bea91",
"assets/assets/images/lab.png": "53b49c5bfce6f4f47832aa57600722e5",
"assets/assets/images/hotelicon.svg": "8eec446acbe7ef0897021c93f15cd26d",
"assets/assets/images/top@2x.jpg": "d7e525a85955baeff8b2c2f01c923a09",
"assets/assets/images/icon_date.png": "71806f4c131433df5f1a5604edf191d8",
"assets/assets/images/person.png": "5b450264360ef921349b17115f6d77e5",
"assets/assets/images/icon_door.png": "bde69cb98acd802325ccc6d98b8865ed",
"assets/assets/images/medicalicon.svg": "60fb7e500032014ddf4cee31349ccebd",
"assets/assets/images/icon_print.png": "ae838fdef5b3f4d53c2abd51ef30b92c",
"assets/assets/images/icon_last.png": "c602b77c54fb873d65fd6b2329df4e7f",
"assets/assets/images/homeicon.svg": "ba8fc57c6c001a156f50759a4b268f82",
"assets/assets/images/icon@2x.png": "4774413c56bac91b46b08697e49b3282",
"assets/assets/images/icon_medical.png": "ed499356d50e2d00350a60d60ee3d465",
"assets/assets/images/top.jpg": "fd12d87c879931ae8516dfb9aae5390f",
"assets/assets/images/09999.jpg": "4f3f857a7f04ec896e00132baa81d350",
"assets/assets/images/icon_home.png": "0aafdc07f767b9773564f24707e35aad",
"assets/assets/images/appointments.svg": "e0b51446c20c15f9a80dde73c6945e96",
"assets/assets/images/labicon.svg": "5068e47d327469d63aabcd14c343379e",
"assets/assets/images/icon@2xxx.png": "445b74ef81dd8bc1e8ebf7b5550c10c1",
"assets/assets/images/icon_code.png": "4c645ffa12a72171888264751de34103",
"assets/assets/images/icon_flag.png": "6f85fce8c56300db65bd873f920836a7",
"assets/assets/images/icon_(2)_todo.svg": "e0b51446c20c15f9a80dde73c6945e96",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
