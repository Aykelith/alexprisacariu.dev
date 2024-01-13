(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4730)}])},9404:function(e,s,n){"use strict";n.d(s,{wz:function(){return PostTags},QV:function(){return ShortPost},mC:function(){return getPublishedDateString}}),n(9675);var t=n(1864),r=n.n(t);n(2464);var c=n(3454);r().join(c.cwd(),"posts");var i=n(2904);let l=new Date;function getPublishedDateString(e){let s=new Date(e);return"".concat(s.getDate()," ").concat((0,i.ZY)(s.getMonth())).concat(l.getFullYear()!=s.getFullYear()?" ".concat(s.getFullYear()):"")}var a=n(5893),o=n(3062);function PostTags(e){let{tags:s}=e;return(0,a.jsx)("div",{className:"flex gap-1 flex-wrap",children:s.map(e=>(0,a.jsx)(o.Md,{children:"#".concat(e)},e))})}function ShortPost(e){return(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)(i.rU,{href:"/posts/".concat(e.dirName),children:(0,a.jsx)("h3",{className:"text-xl font-bold",children:e.title})}),(0,a.jsxs)("div",{className:"flex flex-col md:flex-row mb-1 items-start",children:[(0,a.jsx)("div",{className:"text-sm mr-3 whitespace-nowrap",children:getPublishedDateString(e.publishedOn)}),(0,a.jsx)(PostTags,{tags:e.tags})]}),(0,a.jsxs)("div",{children:[e.content,(0,a.jsx)(i.rU,{href:"/posts/".concat(e.dirName),className:"whitespace-nowrap",children:"Read more >"})]})]})}},2336:function(e,s,n){"use strict";n.d(s,{Y2:function(){return ShortProjectComponent}}),n(2904);var t=n(1864),r=n.n(t),c=n(3454);r().join(c.cwd(),"projects"),n(9404),n(9675),n(5298);var i=n(5893),l=n(3062),a=n(1664),o=n.n(a);function ShortProjectComponent(e){let{project:s}=e;return(0,i.jsxs)("div",{className:"flex flex-col w-full md:w-56 shadow-lg",children:[(0,i.jsx)(o(),{href:"/project/".concat(s.id),className:"cursor-pointer overflow-hidden rounded-t",children:(0,i.jsx)("img",{src:s.coverImage,className:"w-full object-cover h-36 hover:scale-105 transition duration-500",loading:"lazy"})}),(0,i.jsxs)("div",{className:"bg-gray-50 py-2 px-3 rounded-b",children:[(0,i.jsx)("div",{className:"font-bold mr-2",children:(0,i.jsx)(o(),{href:"/project/".concat(s.id),className:"cursor-pointer hover:underline",children:s.title})}),(0,i.jsx)("div",{className:"flex flex-wrap gap-1",children:s.tags.map(e=>(0,i.jsx)(l.IM,{children:e},e))}),(0,i.jsx)("div",{className:"text-sm mt-1",children:s.description})]})]})}},4730:function(e,s,n){"use strict";n.r(s),n.d(s,{__N_SSG:function(){return x},default:function(){return pages}});var t=n(5893);function Section(e){let{title:s,children:n}=e;return(0,t.jsxs)("div",{className:"flex flex-col space-y-3",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold",children:s}),n]})}var r=n(9404),c=n(1664),i=n.n(c);function RecentPosts(e){let{shortPosts:s}=e;return(0,t.jsxs)(Section,{title:"Sometimes I write",children:[(0,t.jsx)("div",{className:"flex flex-col gap-4",children:s&&s.map(e=>(0,t.jsx)(r.QV,{...e},e.dirName))}),(0,t.jsx)("div",{children:(0,t.jsx)(i(),{href:"/blog/1",className:"font-bold",children:"Read more posts"})})]})}var l=n(2336);function PinnedProjects(e){let{pinnedProjects:s}=e;return(0,t.jsxs)(Section,{title:"Some projects",children:[(0,t.jsx)("div",{className:"flex flex-wrap justify-center lg:justify-start gap-5",children:s.map(e=>(0,t.jsx)(l.Y2,{project:e},e.id))}),(0,t.jsx)("div",{children:(0,t.jsx)(i(),{href:"/projects",className:"font-bold",children:"See more projects"})})]})}var a=n(2904),o=n(9008),d=n.n(o),x=!0,pages=function(e){let{shortPosts:s,pinnedProjects:n}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(d(),{children:[(0,t.jsx)("title",{children:"Alexandru Priscariu: The Website"}),(0,t.jsx)("meta",{name:"description",content:"Place of Alexandru Prisacariu"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsx)("div",{className:"page",children:(0,t.jsx)("div",{className:"box",children:(0,t.jsxs)("div",{className:"flex flex-col font-normal",children:[(0,t.jsx)(a.h4,{}),(0,t.jsxs)("main",{className:"flex flex-col space-y-8",children:[(0,t.jsx)("div",{className:""}),(0,t.jsx)(RecentPosts,{shortPosts:s}),(0,t.jsx)(PinnedProjects,{pinnedProjects:n})]})]})})})]})}},3596:function(){},2464:function(){},5298:function(){}},function(e){e.O(0,[146,471,175,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);