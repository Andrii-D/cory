"use strict";var precacheConfig=[["/cory/index.html","6170c47bbf173604e2e9afd5e6a5cf88"],["/cory/static/css/main.e3557a85.css","b39f910c390bd70fa67cf00cada8cdff"],["/cory/static/js/main.97aabe4a.js","3eb1a60a5dea35c171046585756ae5c2"],["/cory/static/media/icons-16.10182c3e.eot","10182c3e4e1cdcfd93ba19610e97c790"],["/cory/static/media/icons-16.29c95c2d.ttf","29c95c2d68c76de3ee30f7b2c0220da9"],["/cory/static/media/icons-16.5bf5f8da.woff","5bf5f8dab6f35fab3ae560d8cc2923b8"],["/cory/static/media/icons-20.05a65153.ttf","05a65153efe56028d343c10b53faa583"],["/cory/static/media/icons-20.54fbc883.woff","54fbc883d110b217f19a4cfe3898979d"],["/cory/static/media/icons-20.86035194.eot","86035194a2ecaec2e33d6deae8ecf2ab"],["/cory/static/media/loader-big.a770b679.gif","a770b6797b68e3f8920e473eb824bac0"],["/cory/static/media/rw-widgets.12f0820c.woff","12f0820c451bdc75f4d1ef97732bf6e8"],["/cory/static/media/rw-widgets.792dcd18.svg","792dcd18baf5f544aabcad1883d673c2"],["/cory/static/media/rw-widgets.bc7c4a59.eot","bc7c4a59f924cf037aad6e1f9edba366"],["/cory/static/media/rw-widgets.eceddf47.ttf","eceddf474df95d8d4a7e316668c3be85"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/cory/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});