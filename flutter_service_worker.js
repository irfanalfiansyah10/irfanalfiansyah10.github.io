'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "426313f2f3133c2f20415344c4a22df3",
"index.html": "6aca2ee71129e829b3e026dc9cbe7a80",
"/": "6aca2ee71129e829b3e026dc9cbe7a80",
"main.dart.js": "280e18e530f1c9d5dd0f10a63b1ac253",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "001c5a79dab94172d5b71b25b55fd6c9",
"assets/NOTICES": "a891f792560742303364b7810c00d614",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/course_certificate/dicoding_belajar_fundamental_aplikasi_android.png": "fe8bfa608df8ab1b2b816008ca471db1",
"assets/assets/course_certificate/skill_academy_dasar_programming_data_science.png": "1da4d477de5ae7af76f65cdc459d35dc",
"assets/assets/course_certificate/dicoding_belajar_prinsip_pemrograman_solid.png": "e576195a3f82e9f1e92863be85b814a4",
"assets/assets/android.png": "9709426e6d872048da7335a7b19bd768",
"assets/assets/portfolio/agi_mobile/logo.jpg": "f501abd11bda22ca839e10b1290401c0",
"assets/assets/portfolio/digimagz/logo.jpg": "eef8b162fb817a1f0b62f8fada93a323",
"assets/assets/portfolio/freshkom_for_driver/logo.jpg": "cda5af7a1674eef30cb26089d4234f76",
"assets/assets/portfolio/himmaty_parent/logo.jpg": "b8de61fbb0daddbfece43136eca9fdaa",
"assets/assets/portfolio/capital_mobile/logo.jpg": "5889e221be19ea2fc6e237f0d40e289c",
"assets/assets/portfolio/pede/logo.jpg": "3e86bdb776ed0e4a8bbb03ba177da055",
"assets/assets/portfolio/blukendi/logo.jpg": "88bf8d7a87760f79218ce52670575602",
"assets/assets/portfolio/haloteach_student/logo.jpg": "8323104a73816d9de02471f5bea56da4",
"assets/assets/portfolio/halokes/logo.jpg": "23dd20b0acecc39a63c914cdf720ad03",
"assets/assets/portfolio/nasabah_agen9/logo.jpg": "71662dbbbc5326eb386c2f2f5843656a",
"assets/assets/portfolio/shami/logo.jpg": "965e612db4965c8354544afd20afd37a",
"assets/assets/portfolio/halokes_siswa/logo.jpg": "27e947e556f5ec6b82e5f3e1a9c93bc8",
"assets/assets/portfolio/himmaty_specialist/logo.jpg": "0d8cfb8f43c1725836f45f15eedf6d4e",
"assets/assets/portfolio/bangga/logo.jpg": "f4f308de94ae891020e7fccc752523b7",
"assets/assets/portfolio/rodeo_express_carwash/logo.jpg": "18567b49359e721c07d446b17d05b746",
"assets/assets/portfolio/bank_mas_mobile/logo.jpg": "1ea4297b4e59ee0e886b1d7afde639a4",
"assets/assets/portfolio/freshkom/logo.jpg": "fab5b5aac16097cca4ed6ffad268cebe",
"assets/assets/portfolio/freshkom_for_fisher/logo.jpg": "d44025f20b81db230b2d97f2a577142f",
"assets/assets/portfolio/sampoerna_mobile_banking/logo.jpg": "21c673a0bec226d852ebb84b08eba5f9",
"assets/assets/portfolio/sobatku/logo.jpg": "a67128d0f7d81d55e85a7fd8ec18a129",
"assets/assets/portfolio/artoz/logo.jpg": "db0324327952a01dc1f5be1862b5fdee",
"assets/assets/portfolio/medictrust/logo.jpg": "36505f2a781986998975e364a78ee60d",
"assets/assets/portfolio/agen9/logo.jpg": "2c7fc583aa9b40e1d75549d4a33ec6ac",
"assets/assets/portfolio/ottocash/logo.jpg": "c5de566b3a002bcd9674cbc24b16402a",
"assets/assets/portfolio/osac_sistema_pos/logo.jpg": "d83eead265def2f6a86c46f89c9f95f7",
"assets/assets/portfolio/redkendi/logo.jpg": "ac36f5f8925cfc892365b03d3c435ed0",
"assets/assets/portfolio/osac_sistema_cs/logo.jpg": "d83eead265def2f6a86c46f89c9f95f7",
"assets/assets/portfolio/haloteach_teacher/logo.jpg": "a226dd9e01bd98d1cfab112ca22ae26f",
"assets/assets/portfolio/nitromax/logo.jpg": "5eebcaf5db0ef930a1dafdafa2b594c7",
"assets/assets/portfolio/redkendi_caterer/logo.jpg": "c5c1b7e66710bad9dcf8a64a516164f7",
"assets/assets/portfolio/lets_connect/logo.jpg": "4a0171821cac9fab5fe9e40535b3e87e",
"assets/assets/portfolio/youji/logo.jpg": "db34ec1464c4fda79385dc3fe48bdfbe",
"assets/assets/portfolio/medictrust_for_doctor/logo.jpg": "1a302558de112b970a9aa10978911fcf",
"assets/assets/ios.png": "3def51a8b5d1686a327807944d49edd8",
"assets/assets/company/lcp.jpeg": "07b9e5e57345745268e3921054ed396c",
"assets/assets/company/dsi.png": "829f709eb408ea9104edf8641c1aeecb",
"assets/assets/company/glovory.jpeg": "0cd302bf4944ddb71e4d2bc84dfd6217",
"assets/assets/company/digiponic.png": "d8f9062c3182787ae00c300776e2c715",
"assets/assets/company/ubig.png": "dad386725d532a780e28801c5039b678"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
