'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "83e840a7b9600bd10a464735d44efeda",
"index.html": "454d5fba4bc5ea2dc7c6f363e89e3c95",
"/": "454d5fba4bc5ea2dc7c6f363e89e3c95",
"main.dart.js": "6f4abd650eb4e612a89ca65cb4e4c646",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "d8d6e4af8c02fc40283305e9d2db267f",
"icons/Icon-192.png": "44012475f8d3fae5a6f4ce2292c7e083",
"icons/Icon-maskable-192.png": "44012475f8d3fae5a6f4ce2292c7e083",
"icons/Icon-maskable-512.png": "72dd38493e6b0d66432e8962adb4f6b3",
"icons/Icon-512.png": "72dd38493e6b0d66432e8962adb4f6b3",
"manifest.json": "a8d3c99bdaa2fab21d04c338f34a9fcd",
"assets/ensemble/ensemble-config.yaml": "7719cdbb43d2db1cb5194b200357d9eb",
"assets/ensemble/ensemble.properties": "99d580d058b65cb461a229d6ef5471b7",
"assets/ensemble/i18n/nl.yaml": "2b11a9498de8071e0569c8ade0a8bfb9",
"assets/ensemble/i18n/en.yaml": "6931d4b14e2fd9cbb1f48a89ddfd3632",
"assets/ensemble/i18n/es.yaml": "c30c9b941ef1c8a2528e0219259099b0",
"assets/ensemble/assets/example.png": "5abbc540eba2a0a6a826a8f008714bb5",
"assets/AssetManifest.json": "183616140d8d41a47c7a6be3c6f14387",
"assets/NOTICES": "75752490480b9c25d24a3ad2a6fcb1e5",
"assets/FontManifest.json": "5d0269a5524246d1213162a3f43d70f2",
"assets/AssetManifest.bin.json": "edfdf5920eff61a76707c0a786f35df7",
"assets/packages/ensemble/ensemble/integration_tests/themedApp/theme.ensemble": "a3bd871885fe57281f43252ad53e8eeb",
"assets/packages/ensemble/ensemble/integration_tests/themedApp/Widgets.yaml": "c1145887f9080d8a4eaad5f6de9f8412",
"assets/packages/ensemble/ensemble/integration_tests/defaultApp/Conditional.yaml": "ef7581f93c0e400075c145dd8e193060",
"assets/packages/ensemble/ensemble/integration_tests/defaultApp/API%2520Bindings.yaml": "a66f1bd578326db2a5cb9e033af76e3b",
"assets/packages/ensemble/ensemble/integration_tests/defaultApp/Widget%2520Bindings.yaml": "9a76200846a312d66bb13aba9966d72b",
"assets/packages/ensemble/ensemble/integration_tests/defaultApp/Invoke%2520Api.yaml": "ea9a38e2a8ae4af8a0d2e433ca5732d9",
"assets/packages/ensemble/ensemble/integration_tests/defaultApp/Dropdown%2520and%2520Form.yaml": "f5c0a598da6c0a0b63f1ac3401185321",
"assets/packages/ensemble/ensemble/integration_tests/defaultApp/Nested%2520TextStyle.yaml": "4b2c95823bba43270d7e67f08e481068",
"assets/packages/ensemble/assets/images/img_placeholder.png": "4708ccdd1a24a37ee8cc1f716da53ae5",
"assets/packages/ensemble/assets/images/qr_error.png": "3e551b710e55a86ed620e1d111be30c0",
"assets/packages/ensemble/assets/images/map_location_button.png": "885dff19a1330034f39f762ede112ce2",
"assets/packages/ensemble/assets/images/2.0x/map_location_button.png": "fec381a2f7c74cfcb17045662c48a8bf",
"assets/packages/ensemble/assets/images/2.0x/map_layers_button.png": "e792cdbcd9d9b2f9a96772d649cd9c09",
"assets/packages/ensemble/assets/images/2.0x/map_location.png": "70149084989170e86742ffc44cee314d",
"assets/packages/ensemble/assets/images/map_layers_button.png": "60446fbe176bd3743314fb2d5aed3cc9",
"assets/packages/ensemble/assets/images/map_hybrid.png": "5ce0a826204fa0bfd7676c2639b3af93",
"assets/packages/ensemble/assets/images/3.0x/map_location_button.png": "98885c6a6aafa62fb1a08f5db7654ad6",
"assets/packages/ensemble/assets/images/3.0x/map_layers_button.png": "c4bc50946dc5af1ace00c0c272dec370",
"assets/packages/ensemble/assets/images/3.0x/map_location.png": "16e3f32d6c425a8f6f66efdd7a1daa8e",
"assets/packages/ensemble/assets/images/map_normal.png": "b67967c226ae12f5046cf53a46532b61",
"assets/packages/ensemble/assets/images/error.png": "82239592af01a04f8901cb1563e1f0bf",
"assets/packages/ensemble/assets/images/map_terrain.png": "d2357ce7ad5806a2fd606313be32ee4b",
"assets/packages/ensemble/assets/images/map_satellite.png": "80151ed5ec62c6a337fd648cedf7a2d3",
"assets/packages/ensemble/assets/images/map_location.png": "bdade7cab177d1bbee1b386f06a9c113",
"assets/packages/ensemble/assets/iconFonts/remixicon.ttf": "bb68cee10bf78904f18c799b90c1213b",
"assets/packages/ensemble/assets/fonts/idealTalent/icomoon.ttf": "d01e8f3a983a6eb1a808ec952a663d7b",
"assets/packages/ensemble/assets/fonts/idealTalent/Clarika.ttf": "bafb62b947d038d2b0343677f78bac76",
"assets/packages/ensemble/assets/fonts/idealTalent/ClarikaRegular.ttf": "489add991fedb5b55176e30a52bb3010",
"assets/packages/ensemble/assets/fonts/Jost-VariableFont_wght.ttf": "d3c2dd4bde21454dd271abc82abec998",
"assets/packages/ensemble/assets/fonts/inter/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/packages/ensemble/assets/fonts/inter/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/packages/ensemble/assets/fonts/inter/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/packages/ensemble/assets/fonts/inter/Inter-ExtraBold.ttf": "c9709fb8e32755490795ce5bd226c3a0",
"assets/packages/ensemble/assets/fonts/inter/Inter-SemiBold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"assets/packages/ensemble/assets/fonts/Jost-Italic-VariableFont_wght.ttf": "90cf5a5805d8babe904d707953fa8682",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/ensemble_icons/fonts/remixicon.ttf": "b67fa6d2619f443ab2fe260301202a96",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "9af5f55f24c5b1af880cecb92a7190ae",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/others/other_assets_will_go_here": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icon/icon.png": "0ad6f4931f881cecbdb6e221c2994cfc",
"assets/assets/icon/icons_will_go_here": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icon/splash.png": "0ad6f4931f881cecbdb6e221c2994cfc",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
