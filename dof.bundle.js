(()=>{"use strict";var e={d:(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};e.r(r),e.d(r,{addedDiff:()=>a,deletedDiff:()=>s,detailedDiff:()=>b,diff:()=>c,updatedDiff:()=>O});const t=e=>e instanceof Date,n=e=>0===Object.keys(e).length,o=e=>null!=e&&"object"==typeof e,u=(e,...r)=>Object.prototype.hasOwnProperty.call(e,...r),d=e=>o(e)&&n(e),f=(e,r)=>{if(e===r)return{};if(!o(e)||!o(r))return r;const n=e,c=r,i=Object.keys(n).reduce(((e,r)=>(u(c,r)||(e[r]=void 0),e)),{});return t(n)||t(c)?n.valueOf()==c.valueOf()?{}:c:Object.keys(c).reduce(((e,r)=>{if(!u(n,r))return e[r]=c[r],e;const o=f(n[r],c[r]);return!d(o)||t(o)||!d(n[r])&&d(c[r])?(e[r]=o,e):e}),i)},c=f,i=(e,r)=>{if(e===r||!o(e)||!o(r))return{};const t=e,d=r;return Object.keys(d).reduce(((e,r)=>{if(u(t,r)){const u=i(t[r],d[r]);return o(u)&&n(u)||(e[r]=u),e}return e[r]=d[r],e}),{})},a=i,l=(e,r)=>{if(e===r||!o(e)||!o(r))return{};const t=e,d=r;return Object.keys(t).reduce(((e,r)=>{if(u(d,r)){const u=l(t[r],d[r]);return o(u)&&n(u)||(e[r]=u),e}return e[r]=void 0,e}),{})},s=l,y=(e,r)=>{if(e===r)return{};if(!o(e)||!o(r))return r;const n=e,f=r;return t(n)||t(f)?n.valueOf()==f.valueOf()?{}:f:Object.keys(f).reduce(((e,r)=>{if(u(n,r)){const o=y(n[r],f[r]);return!d(o)||t(o)||!d(n[r])&&d(f[r])?(e[r]=o,e):e}return e}),{})},O=y,b=(e,r)=>({added:a(e,r),deleted:s(e,r),updated:O(e,r)});var p=exports;for(var j in r)p[j]=r[j];r.__esModule&&Object.defineProperty(p,"__esModule",{value:!0})})();