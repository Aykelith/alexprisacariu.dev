(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[840],{4472:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[dirName]",function(){return n(2285)}])},9404:function(e,t,n){"use strict";n.d(t,{wz:function(){return PostTags},QV:function(){return ShortPost},mC:function(){return getPublishedDateString}}),n(9675);var s=n(1864),r=n.n(s);n(2464);var o=n(3454);r().join(o.cwd(),"posts");var c=n(2904);let i=new Date;function getPublishedDateString(e){let t=new Date(e);return"".concat(t.getDate()," ").concat((0,c.ZY)(t.getMonth())).concat(i.getFullYear()!=t.getFullYear()?" ".concat(t.getFullYear()):"")}var l=n(5893),a=n(3062);function PostTags(e){let{tags:t}=e;return(0,l.jsx)("div",{className:"flex gap-1 flex-wrap",children:t.map(e=>(0,l.jsx)(a.Md,{children:"#".concat(e)},e))})}function ShortPost(e){return(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)(c.rU,{href:"/posts/".concat(e.dirName),children:(0,l.jsx)("h3",{className:"text-xl font-bold",children:e.title})}),(0,l.jsxs)("div",{className:"flex flex-col md:flex-row mb-1 items-start",children:[(0,l.jsx)("div",{className:"text-sm mr-3 whitespace-nowrap",children:getPublishedDateString(e.publishedOn)}),(0,l.jsx)(PostTags,{tags:e.tags})]}),(0,l.jsxs)("div",{children:[e.content,(0,l.jsx)(c.rU,{href:"/posts/".concat(e.dirName),className:"whitespace-nowrap",children:"Read more >"})]})]})}},2285:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return u},default:function(){return _dirName_}});var s=n(5893),r=n(9404),o=n(2904),c=n(3305),i=n(9008),l=n.n(i);n(5212),n(1311);let a={ImageOnClickFullscreen:o.bq};var u=!0,_dirName_=function(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l(),{children:(0,s.jsx)("title",{children:e.title})}),(0,s.jsx)("div",{id:"PostPage",className:"page",children:(0,s.jsxs)("div",{className:"box",children:[(0,s.jsx)(o.h4,{small:!0,useH2:!0,showContacts:!1,showHome:!0}),(0,s.jsxs)("main",{className:"mt-8 flex flex-col",children:[(0,s.jsx)(o.rU,{href:"/blog/1",children:"< See more posts"}),(0,s.jsx)("h1",{className:"text-4xl mt-1 mb-2",children:e.title}),(0,s.jsxs)("div",{className:"flex flex-col md:flex-row md:items-center mb-8 md:space-x-3",children:[(0,s.jsx)("div",{children:(0,r.mC)(e.publishedOn)}),(0,s.jsx)(r.wz,{tags:e.tags})]}),(0,s.jsx)("div",{className:"postContent flex flex-col",children:(0,s.jsx)(c.R,{...e.content,components:a})})]})]})})]})}},1311:function(){},5212:function(){},3596:function(){},2464:function(){},2746:function(e,t,n){e.exports.jsxRuntime=n(5893)},3305:function(e,t,n){"use strict";n.d(t,{R:function(){return MDXRemote}});var s={};n.r(s),n.d(s,{MDXContext:function(){return c},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var r=n(7294),o=n(2746);let c=r.createContext({});function withMDXComponents(e){return function(t){let n=useMDXComponents(t.components);return r.createElement(e,{...t,allComponents:n})}}function useMDXComponents(e){let t=r.useContext(c);return r.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let i={};function MDXProvider({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||i:useMDXComponents(e),r.createElement(c.Provider,{value:s},t)}function MDXRemote({compiledSource:e,frontmatter:t,scope:n,components:c={},lazy:i}){let[l,a]=(0,r.useState)(!i||"undefined"==typeof window);(0,r.useEffect)(()=>{if(i){let e=window.requestIdleCallback(()=>{a(!0)});return()=>window.cancelIdleCallback(e)}},[]);let u=(0,r.useMemo)(()=>{let r=Object.assign({opts:{...s,...o.jsxRuntime}},{frontmatter:t},n),c=Object.keys(r),i=Object.values(r),l=Reflect.construct(Function,c.concat(`${e}`));return l.apply(l,i).default},[n,e]);if(!l)return r.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let d=r.createElement(MDXProvider,{components:c},r.createElement(u,null));return i?r.createElement("div",null,d):d}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)})}},function(e){e.O(0,[146,471,175,774,888,179],function(){return e(e.s=4472)}),_N_E=e.O()}]);