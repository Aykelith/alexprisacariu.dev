(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[592],{263:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),i(n(530),t),i(n(769),t)},530:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),i(n(9513),t)},9513:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.createResponsiveComponentByBreakpoints=void 0;const i=n(769),c=r(n(7294));t.createResponsiveComponentByBreakpoints=function(e,t,n=null,r=!0){const s=c.default.forwardRef(((s,o)=>{const u=(0,i.useBreakpointsByWindowWidth)(e,n,r);if(null==u)return null;let a;for(let e=t.length-1;e>=0;--e)if(t[e].bpIndex<=u){a=t[e].component;break}return c.default.createElement(a,Object.assign({},s,{ref:o}))}));return s.displayName="ResponsiveComponent",s}},769:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),i(n(8230),t),i(n(9819),t),i(n(8829),t),i(n(3040),t),i(n(9030),t)},8230:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useBreakpointsByWindowWidth=void 0;const r=n(9819),i=n(7294);t.useBreakpointsByWindowWidth=function(e,t=null,n=!0){const[c,s]=(0,i.useState)(t),o=()=>{if(e[c]==window.innerWidth)return;let t=null;if(e[c]>window.innerWidth){for(let n=c-1;n>=0;--n)if(e[n]<window.innerWidth){t=n;break}}else{const n=e.length;for(let r=c+1;r<n;++r)if(e[r]>window.innerWidth){t=r-1;break}null==t&&(t=n-1)}t!=c&&s(t)};return n&&(0,r.useConstructor)(o),(0,i.useEffect)((()=>(n||o(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o))),[]),c}},9819:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useConstructor=void 0;const r=n(7294);t.useConstructor=function(e=(()=>{})){const[t,n]=(0,r.useState)(!1);t||(e(),n(!0))}},8829:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useForceUpdate=void 0;const r=n(7294);t.useForceUpdate=function(){return(0,r.useReducer)((()=>({})),{})[1]}},3040:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useMounted=void 0;const r=n(7294);t.useMounted=function(){const e=(0,r.useRef)(!1);return(0,r.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),(0,r.useCallback)((function(){return e.current}),[e])}},9030:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useWindowWidth=void 0;const r=n(7294);t.useWindowWidth=function(){const[e,t]=(0,r.useState)(void 0);return(0,r.useEffect)((()=>{const n=()=>{e!=window.innerWidth&&t(window.innerWidth)};return window.addEventListener("resize",n),n(),()=>window.removeEventListener("resize",n)}),[]),e}},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)){if(n.length){var s=i.apply(null,n);s&&e.push(s)}}else if("object"===c)if(n.toString===Object.prototype.toString)for(var o in n)r.call(n,o)&&n[o]&&e.push(o);else e.push(n.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},3762:function(e,t,n){"use strict";n.d(t,{d:function(){return y}});var r,i=n(5893),c=n(1163),s=n(3312),o=n(3758),u=n(4829),a=n(2942),l=n(2125),f=n(7294);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}var d,h=function(e){return f.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},e),r||(r=f.createElement("path",{d:"M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.1-20.4-4.2-41.8-4.2-64 0-22.2 2.1-43.6 4.2-64h185.4c2.1 20.4 3.3 41.8 3.3 64zm151.9-64c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42.9 3.2-64 0-22-1.1-43.4-3.2-64h123.1zm-10.5-32H376.7c-10-63.86-29.8-117.38-55.3-151.558C399.8 29.09 463.4 85.94 493.4 160zm-149.1 0H167.7c6.1-36.4 15.5-68.62 27-94.65 10.5-23.61 22.2-40.74 33.5-51.54C239.4 3.178 248.7 0 256 0c7.3 0 16.6 3.178 27.8 13.81 11.3 10.8 23 27.93 33.5 51.54 11.5 26.03 20.9 58.25 27 94.65zm-325.69 0C48.59 85.94 112.2 29.09 190.6 8.442 165.1 42.62 145.3 96.14 135.3 160H18.61zm112.59 32c-2.1 20.6-4.1 42-4.1 64 0 21.1 2 43.4 4.1 64H8.065C2.8 299.5 0 278.1 0 256s2.8-43.5 8.065-64H131.2zm63.5 254.6c-11.5-26-20.9-58.2-27-94.6h176.6c-6.1 36.4-15.5 68.6-27 94.6-10.5 23.7-22.2 40.8-33.5 51.6-11.2 10.6-20.5 13.8-28.7 13.8-6.4 0-15.7-3.2-26.9-13.8-11.3-10.8-23-27.9-33.5-51.6zm-4.1 57C112.2 482.9 48.59 426.1 18.61 352H135.3c10 63.9 29.8 117.4 55.3 151.6zm130.8 0c25.5-34.2 45.3-87.7 55.3-151.6h116.7c-30 74.1-93.6 130.9-172 151.6z"})))};function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}var w,b=function(e){return f.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},e),d||(d=f.createElement("path",{d:"M448 192H64c-35.35 0-64 28.7-64 64v96c0 17.67 14.33 32 32 32h32v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h32c17.67 0 32-14.33 32-32v-96c0-35.3-28.7-64-64-64zm-64 256H128v-96h256v96zm48-152c-13.25 0-24-10.75-24-24 0-13.27 10.75-24 24-24s24 10.73 24 24c0 13.3-10.7 24-24 24zM128 64h229.5L384 90.51V160h64V77.25c0-8.484-3.375-16.62-9.375-22.62l-45.25-45.25C387.4 3.375 379.2 0 370.8 0H96C78.34 0 64 14.33 64 32v128h64V64z"})))};function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}var g=function(e){return f.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},e),w||(w=f.createElement("path",{d:"M88 304h-8v-48h8c13.3 0 24 10.7 24 24s-10.7 24-24 24zm104-48h8c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-8v-96zM224 0v128c0 17.7 14.3 32 32 32h128v288c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h160zM64 224c-8.84 0-16 7.2-16 16v128c0 8.8 7.16 16 16 16s16-7.2 16-16v-32h8c30.9 0 56-25.1 56-56s-25.1-56-56-56H64zm96 144c0 8.8 7.2 16 16 16h24c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48h-24c-8.8 0-16 7.2-16 16v128zm128-144c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-32h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48zM256 0l128 128H256V0z"})))},j="text-black flex gap-1 items-center";function y(e){var t=e.id,n=e.pdfHref,r=e.children,f=(0,c.useRouter)();return(0,i.jsxs)("div",{id:t,className:"flex flex-col items-center py-3 gap-3 bg-gray-300 print:bg-transparent print:block print:py-0",children:[(0,i.jsxs)("div",{className:"px-2 lg:px-0 print:px-0 print:hidden w-full lg:w-[210mm] print:w-[210mm] flex justify-between",children:[(0,i.jsxs)(o.N3,{onClick:function(){return f.back()},children:["<"," Go back"]}),(0,i.jsxs)("div",{className:"flex gap-2",children:[(0,i.jsxs)(o.eu,{href:n,className:"flex gap-1 items-center",children:[(0,i.jsx)(g,{className:"w-4 h-4"}),"PDF"]}),(0,i.jsxs)(o.N3,{onClick:function(){return null===window||void 0===window?void 0:window.print()},className:"flex gap-1 items-center",children:[(0,i.jsx)(b,{className:"w-4 h-4"}),"Print"]})]})]}),(0,i.jsxs)("div",{className:"w-full lg:w-[210mm] lg:h-[297mm] print:w-[210mm] print:h-[297mm] p-6 lg:p-[1cm] print:p-[1cm] bg-white flex flex-col gap-8 shadow-lg print:bg-transparent print:shadow-none",children:[(0,i.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,i.jsx)("div",{className:"text-5xl font-bold font-accent text-blue-600",children:"Alexandru Prisacariu"}),(0,i.jsxs)("div",{className:"flex gap-4 flex-col lg:flex-row print:flex-row",children:[(0,i.jsxs)("a",{className:j,href:"mailto:".concat(s.ZC),children:[(0,i.jsx)(u.Z,{className:"w-4 h-4"}),s.ZC]}),(0,i.jsxs)("a",{className:j,href:s.RL,children:[(0,i.jsx)(h,{className:"w-4 h-4"}),s.RL]}),(0,i.jsxs)("a",{className:j,href:s.aX,children:[(0,i.jsx)(a.Z,{className:"w-4 h-4"}),"@AlexxanderX"]}),(0,i.jsxs)("a",{className:j,href:s.q4,children:[(0,i.jsx)(l.Z,{className:"w-4 h-4"}),"Aykelith"]})]})]}),r]})]})}},9396:function(e,t,n){"use strict";function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}n.d(t,{Z:function(){return r}})},9534:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,{Z:function(){return r}})}}]);