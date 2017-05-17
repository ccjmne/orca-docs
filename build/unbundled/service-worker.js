/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["build/unbundled/bower_components/app-route/app-location.html","e3bd813962e634bd71009586ddd39db1"],["build/unbundled/bower_components/app-route/app-route-converter-behavior.html","5ed794fad917e6c6cae8ecc2da6a1840"],["build/unbundled/bower_components/app-route/app-route.html","7f8ea0946b59adf6165cd873e76df1bc"],["build/unbundled/bower_components/diacritic/diacritics.js","cd97325cece071b8d7209ccc5856ed69"],["build/unbundled/bower_components/font-roboto/roboto.html","196f915c2bb639c50e0748d057754841"],["build/unbundled/bower_components/iron-a11y-announcer/iron-a11y-announcer.html","7da2a1b06dbf5fc05631df208da0ba8b"],["build/unbundled/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","26309806bc5a08dab92ec43a33bf85ad"],["build/unbundled/bower_components/iron-behaviors/iron-button-state.html","69eabb470fcadef4e70ff50a09bedafc"],["build/unbundled/bower_components/iron-behaviors/iron-control-state.html","c206f87dd46f347d33c37004913a24b1"],["build/unbundled/bower_components/iron-flex-layout/iron-flex-layout-classes.html","1af0f1c4265e9ed22714c7b51c226aa5"],["build/unbundled/bower_components/iron-flex-layout/iron-flex-layout.html","d209230aa135c45c817b0deacd4fe0cf"],["build/unbundled/bower_components/iron-form-element-behavior/iron-form-element-behavior.html","729d7e9d023843e50ec4d04d66b4376e"],["build/unbundled/bower_components/iron-icon/iron-icon.html","531c4dce3ccc0ca17182d137fb82e2f7"],["build/unbundled/bower_components/iron-icons/iron-icons.html","263c425f0e794d1e2fd636f8039a8586"],["build/unbundled/bower_components/iron-iconset-svg/iron-iconset-svg.html","df2b26b9f276a709bfe9e75d5f46fbfa"],["build/unbundled/bower_components/iron-input/iron-input.html","5c723fffebe679215012b380bb3d825e"],["build/unbundled/bower_components/iron-location/iron-location.html","632fb5f2d963b7096f3ee6786bef3bf4"],["build/unbundled/bower_components/iron-location/iron-query-params.html","7af5593d2603020de94ba9e63af91b5b"],["build/unbundled/bower_components/iron-media-query/iron-media-query.html","65ec581bf71b4acffa3703a5964e1232"],["build/unbundled/bower_components/iron-meta/iron-meta.html","9a240eda67672e29b82e15898a9619d1"],["build/unbundled/bower_components/iron-pages/iron-pages.html","82d5debc56ced36961be39a181280795"],["build/unbundled/bower_components/iron-resizable-behavior/iron-resizable-behavior.html","369445436b6316b3ce3a36621808e152"],["build/unbundled/bower_components/iron-selector/iron-multi-selectable.html","c3a5407e403189d9ffbb26a94253cac9"],["build/unbundled/bower_components/iron-selector/iron-selectable.html","a179d62580cfdf7c022dcdf24841487a"],["build/unbundled/bower_components/iron-selector/iron-selection.html","3343a653dfada7e893aad0571ceb946d"],["build/unbundled/bower_components/iron-selector/iron-selector.html","eaec85c290f2dfa24f778a676bf56e15"],["build/unbundled/bower_components/iron-validatable-behavior/iron-validatable-behavior.html","276f0be293659b862bc108eabfdb04e5"],["build/unbundled/bower_components/paper-behaviors/paper-button-behavior.html","1b832001d3a6001ddeb2380e4b5bee47"],["build/unbundled/bower_components/paper-behaviors/paper-inky-focus-behavior.html","07276537aed6235c4126ff8f2f38db6a"],["build/unbundled/bower_components/paper-behaviors/paper-ripple-behavior.html","26f84434724812da0631633cdd54676e"],["build/unbundled/bower_components/paper-button/paper-button.html","ce857a5d05931fef7fbb2090ae0feb06"],["build/unbundled/bower_components/paper-drawer-panel/paper-drawer-panel.html","8241a385c790bbad597ca4597eec7619"],["build/unbundled/bower_components/paper-header-panel/paper-header-panel.html","eea05744f37f120a3fcf77daf9f993d6"],["build/unbundled/bower_components/paper-icon-button/paper-icon-button.html","d2302a27079e142d6cf27ecb26e21e06"],["build/unbundled/bower_components/paper-input/paper-input-addon-behavior.html","2a44f95760e14f00e2edef2941dc3a01"],["build/unbundled/bower_components/paper-input/paper-input-behavior.html","5414ca3c1c15e9914a016e5dc42253d0"],["build/unbundled/bower_components/paper-input/paper-input-char-counter.html","0b700395d284f73e0d5fefb8ecc97786"],["build/unbundled/bower_components/paper-input/paper-input-container.html","449870d5e326ce0057df9453c320e3ea"],["build/unbundled/bower_components/paper-input/paper-input-error.html","ea91878f0704d294c5f7a9090852aba5"],["build/unbundled/bower_components/paper-input/paper-input.html","a2e412908d2b65105baad3f07728dfe1"],["build/unbundled/bower_components/paper-material/paper-material-shared-styles.html","96e347b417f6c92a317813cc08a23c8d"],["build/unbundled/bower_components/paper-material/paper-material.html","5b1de192df056015265e247916fbbd7e"],["build/unbundled/bower_components/paper-ripple/paper-ripple.html","ab48a97fb99a146ad6eff4bf3e6d0ad8"],["build/unbundled/bower_components/paper-scroll-header-panel/paper-scroll-header-panel.html","a8a55c3c5ff9eb053f926d1e72f057a5"],["build/unbundled/bower_components/paper-styles/color.html","731b5f7949a2c3f26ce829fd9be99c2d"],["build/unbundled/bower_components/paper-styles/default-theme.html","9e845d4da61bd65308eb8e4682cd8506"],["build/unbundled/bower_components/paper-styles/shadow.html","17203fd5db371a3e5cb4efabb11951f9"],["build/unbundled/bower_components/paper-styles/typography.html","dc2b6f8af5ebcb16a63800b46017a08a"],["build/unbundled/bower_components/paper-toolbar/paper-toolbar.html","561ad24941e2eeb4cbdb557c74e83a9f"],["build/unbundled/bower_components/polymer/polymer-micro.html","51bf9669120232f00691f897cd456e35"],["build/unbundled/bower_components/polymer/polymer-mini.html","70300bbedb25a0e0fa086ad307a45117"],["build/unbundled/bower_components/polymer/polymer.html","fcfd1ca7766ad2fc9845a9f5d7d7c8ce"],["build/unbundled/index.html","4fb139188a8db05c35e8bb1d1df3c9c9"],["build/unbundled/src/drawer-menu/drawer-menu.html","a6a36aff53abeb58408610ad7364890f"],["build/unbundled/src/error-views/orca-404.html","cd8f6deaa78db992bd843a52d52124ba"],["build/unbundled/src/error-views/orca-under-construction.html","10f745ea11e1bd7bdc8431028295895f"],["build/unbundled/src/main/orca-docs.html","47c521bdeb2d43a1f521e09f907a7995"],["build/unbundled/src/main/orca-footer.html","2370fb32ce24908bec4cb607e8f295e0"],["build/unbundled/src/shared-styles.html","a6cb901f0abb05322952a65d8a83e5a7"],["build/unbundled/src/utils/footnotes.html","b495d2512077d121a6159bc9d96f907b"],["build/unbundled/src/utils/html-echo.html","f9951ac1fb2b81433f5d3ec3ef38ec83"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '/index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




