(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[840],{4472:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[dirName]",function(){return t(4154)}])},5404:function(e,n,t){"use strict";t.d(n,{wz:function(){return d},QV:function(){return f},mC:function(){return a}});t(9675);var c=t(1864),r=t.n(c),s=(t(2464),t(3454));r().join(s.cwd(),"posts");var o=t(3312);var i=new Date;function a(e){var n=new Date(e);return"".concat(n.getDate()," ").concat((0,o.ZY)(n.getMonth())).concat(i.getFullYear()!=n.getFullYear()?" ".concat(n.getFullYear()):"")}var l=t(5893),u=t(3758);function d(e){var n=e.tags;return(0,l.jsx)("div",{className:"flex gap-1",children:n.map((function(e){return(0,l.jsx)(u.Md,{children:"#".concat(e)},e)}))})}function f(e){return(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)(o.rU,{href:"/posts/".concat(e.dirName),children:(0,l.jsx)("h3",{className:"text-xl font-bold",children:e.title})}),(0,l.jsxs)("div",{className:"flex mb-1 items-center",children:[(0,l.jsx)("div",{className:"text-sm mr-3",children:a(e.publishedOn)}),(0,l.jsx)(d,{tags:e.tags})]}),(0,l.jsxs)("div",{children:[e.content,(0,l.jsx)(o.rU,{href:"/posts/".concat(e.dirName),className:"whitespace-nowrap",children:"Read more >"})]})]})}},4154:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return f},default:function(){return m}});var c=t(6042),r=t(9396),s=t(5893),o=t(5404),i=t(3312),a=t(3659),l=t(9008),u=t.n(l),d=(t(6764),t(5663),{});var f=!0,m=function(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u(),{children:(0,s.jsx)("title",{children:e.title})}),(0,s.jsx)("div",{id:"PostPage",className:"page",children:(0,s.jsxs)("div",{className:"box",children:[(0,s.jsx)(i.h4,{small:!0,useH2:!0,showContacts:!1}),(0,s.jsxs)("main",{className:"mt-8 flex flex-col",children:[(0,s.jsx)(i.rU,{href:"/blog/1",children:"< See more posts"}),(0,s.jsx)("h1",{className:"text-4xl mt-1 mb-2",children:e.title}),(0,s.jsxs)("div",{className:"flex items-center mb-8 space-x-3",children:[(0,s.jsx)("div",{children:(0,o.mC)(e.publishedOn)}),(0,s.jsx)(o.wz,{tags:e.tags})]}),(0,s.jsx)("div",{className:"postContent",children:(0,s.jsx)(a.R,(0,r.Z)((0,c.Z)({},e.content),{components:d}))})]})]})})]})}},5663:function(){},6764:function(){},3596:function(){},2464:function(){},2746:function(e,n,t){const c=t(5893);e.exports.c=c},3659:function(e,n,t){"use strict";t.d(n,{R:function(){return d}});var c={};t.r(c),t.d(c,{MDXContext:function(){return o},MDXProvider:function(){return u},useMDXComponents:function(){return a},withMDXComponents:function(){return i}});var r=t(7294),s=t(2746);const o=r.createContext({});function i(e){return function(n){const t=a(n.components);return r.createElement(e,{...n,allComponents:t})}}function a(e){const n=r.useContext(o);return r.useMemo((()=>"function"===typeof e?e(n):{...n,...e}),[n,e])}const l={};function u({components:e,children:n,disableParentContext:t}){let c=a(e);return t&&(c=e||l),r.createElement(o.Provider,{value:c},n)}function d({compiledSource:e,frontmatter:n,scope:t,components:o={},lazy:i}){const[a,l]=(0,r.useState)(!i||"undefined"===typeof window);(0,r.useEffect)((()=>{if(i){const e=window.requestIdleCallback((()=>{l(!0)}));return()=>window.cancelIdleCallback(e)}}),[]);const d=(0,r.useMemo)((()=>{const r=Object.assign({opts:{...c,...s.c}},{frontmatter:n},t),o=Object.keys(r),i=Object.values(r),a=Reflect.construct(Function,o.concat(`${e}`));return a.apply(a,i).default}),[t,e]);if(!a)return r.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});const f=r.createElement(u,{components:o},r.createElement(d,null));return i?r.createElement("div",null,f):f}"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var n=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)})}},function(e){e.O(0,[146,287,314,774,888,179],(function(){return n=4472,e(e.s=n);var n}));var n=e.O();_N_E=n}]);