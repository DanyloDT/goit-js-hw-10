var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},n=e.parcelRequireabb0;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},e.parcelRequireabb0=n),n.register("9dxg1",(function(e,r){var t,n,o,i;t=e.exports,n="fetchBreeds",o=function(){return a},Object.defineProperty(t,n,{get:o,set:i,enumerable:!0,configurable:!0});const a=()=>{fetch("https://api.thecatapi.com/v1/breeds").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>{console.log(e)}))}})),n("9dxg1");
//# sourceMappingURL=index.d74c2466.js.map
