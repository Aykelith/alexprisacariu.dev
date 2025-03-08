/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/script */ \"(pages-dir-node)/./node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nextjs-progressbar */ \"nextjs-progressbar\");\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/global.css */ \"(pages-dir-node)/./src/styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_5__);\n//= React components\n// Others\n\n\n\n\n\n//= Style & Assets\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"viewport\",\n                    content: \"target-densitydpi=device-dpi, width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui\"\n                }, void 0, false, {\n                    fileName: \"/home/alex/work/alexprisacariu.dev/src/pages/_app.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/alex/work/alexprisacariu.dev/src/pages/_app.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"google-analytics\",\n                strategy: \"afterInteractive\",\n                children: `\n                    (function(window, document, dataLayerName, id) {\n                    window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:\"stg.start\"});var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');\n                    function stgCreateCookie(a,b,c){var d=\"\";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d=\"; expires=\"+e.toUTCString();f=\"; SameSite=Strict\"}document.cookie=a+\"=\"+b+d+f+\"; path=/\"}\n                    var isStgDebug=(window.location.href.match(\"stg_debug\")||document.cookie.match(\"stg_debug\"))&&!window.location.href.match(\"stg_disable_debug\");stgCreateCookie(\"stg_debug\",isStgDebug?1:\"\",isStgDebug?14:-1);\n                    var qP=[];dataLayerName!==\"dataLayer\"&&qP.push(\"data_layer_name=\"+dataLayerName),isStgDebug&&qP.push(\"stg_debug\");var qPString=qP.length>0?(\"?\"+qP.join(\"&\")):\"\";\n                    tags.async=!0,tags.src=\"https://alexpriscariu.containers.piwik.pro/\"+id+\".js\"+qPString,scripts.parentNode.insertBefore(tags,scripts);\n                    !function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);\"string\"==typeof a[0]&&window[dataLayerName].push({event:n+\".\"+i+\":\"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,\"ppms\",[\"tm\",\"cm\"]);\n                    })(window, document, 'dataLayer', '9dc1d869-3efc-40a3-b8e1-ec7fa21cf48f');\n                `\n            }, void 0, false, {\n                fileName: \"/home/alex/work/alexprisacariu.dev/src/pages/_app.tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((nextjs_progressbar__WEBPACK_IMPORTED_MODULE_4___default()), {\n                color: \"#006ad5\"\n            }, void 0, false, {\n                fileName: \"/home/alex/work/alexprisacariu.dev/src/pages/_app.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/alex/work/alexprisacariu.dev/src/pages/_app.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            !pageProps?.hideFooter && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"mt-2 mb-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"box\",\n                    children: [\n                        \"\\xa9 \",\n                        new Date().getFullYear(),\n                        \" Alexandru Prisacariu | Powered by\",\n                        ' ',\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"https://nextjs.org\",\n                            className: \"text-black underline\",\n                            target: \"_blank\",\n                            rel: \"noreferrer noopener\",\n                            children: \"NextJS\"\n                        }, void 0, false, {\n                            fileName: \"/home/alex/work/alexprisacariu.dev/src/pages/_app.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 25\n                        }, this),\n                        \",\",\n                        ' ',\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"https://github.com\",\n                            className: \"text-black underline\",\n                            target: \"_blank\",\n                            rel: \"noreferrer noopener\",\n                            children: \"GitHub\"\n                        }, void 0, false, {\n                            fileName: \"/home/alex/work/alexprisacariu.dev/src/pages/_app.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/alex/work/alexprisacariu.dev/src/pages/_app.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/alex/work/alexprisacariu.dev/src/pages/_app.tsx\",\n                lineNumber: 35,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLFNBQVM7O0FBQ29CO0FBQ0k7QUFDSjtBQUNrQjtBQUUvQyxrQkFBa0I7QUFDWTtBQUU5QixTQUFTSSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ25DLHFCQUNJOzswQkFDSSw4REFBQ04sa0RBQUlBOzBCQUNELDRFQUFDTztvQkFDR0MsTUFBSztvQkFDTEMsU0FBUTs7Ozs7Ozs7Ozs7MEJBR2hCLDhEQUFDUixvREFBTUE7Z0JBQUNTLElBQUc7Z0JBQW1CQyxVQUFTOzBCQUNsQyxDQUFDOzs7Ozs7Ozs7Z0JBU0YsQ0FBQzs7Ozs7OzBCQUVMLDhEQUFDUiwyREFBYUE7Z0JBQUNTLE9BQU07Ozs7OzswQkFDckIsOERBQUNQO2dCQUFXLEdBQUdDLFNBQVM7Ozs7OztZQUN2QixDQUFDQSxXQUFXTyw0QkFDVCw4REFBQ0M7Z0JBQU9DLFdBQVU7MEJBQ2QsNEVBQUNDO29CQUFJRCxXQUFVOzt3QkFBTTt3QkFDZCxJQUFJRSxPQUFPQyxXQUFXO3dCQUFHO3dCQUFtQztzQ0FDL0QsOERBQUNoQixrREFBSUE7NEJBQUNpQixNQUFLOzRCQUFxQkosV0FBVTs0QkFBdUJLLFFBQU87NEJBQVNDLEtBQUk7c0NBQXNCOzs7Ozs7d0JBRXBHO3dCQUNMO3NDQUNGLDhEQUFDbkIsa0RBQUlBOzRCQUFDaUIsTUFBSzs0QkFBcUJKLFdBQVU7NEJBQXVCSyxRQUFPOzRCQUFTQyxLQUFJO3NDQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFuSTtBQUVBLGlFQUFlakIsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsiL2hvbWUvYWxleC93b3JrL2FsZXhwcmlzYWNhcml1LmRldi9zcmMvcGFnZXMvX2FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy89IFJlYWN0IGNvbXBvbmVudHNcbi8vIE90aGVyc1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBOZXh0TlByb2dyZXNzIGZyb20gJ25leHRqcy1wcm9ncmVzc2Jhcic7XG5cbi8vPSBTdHlsZSAmIEFzc2V0c1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcyc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidGFyZ2V0LWRlbnNpdHlkcGk9ZGV2aWNlLWRwaSwgd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIG1pbmltdW0tc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPW5vLCBtaW5pbWFsLXVpXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPFNjcmlwdCBpZD1cImdvb2dsZS1hbmFseXRpY3NcIiBzdHJhdGVneT1cImFmdGVySW50ZXJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgZGF0YUxheWVyTmFtZSwgaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93W2RhdGFMYXllck5hbWVdPXdpbmRvd1tkYXRhTGF5ZXJOYW1lXXx8W10sd2luZG93W2RhdGFMYXllck5hbWVdLnB1c2goe3N0YXJ0OihuZXcgRGF0ZSkuZ2V0VGltZSgpLGV2ZW50Olwic3RnLnN0YXJ0XCJ9KTt2YXIgc2NyaXB0cz1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF0sdGFncz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gc3RnQ3JlYXRlQ29va2llKGEsYixjKXt2YXIgZD1cIlwiO2lmKGMpe3ZhciBlPW5ldyBEYXRlO2Uuc2V0VGltZShlLmdldFRpbWUoKSsyNCpjKjYwKjYwKjFlMyksZD1cIjsgZXhwaXJlcz1cIitlLnRvVVRDU3RyaW5nKCk7Zj1cIjsgU2FtZVNpdGU9U3RyaWN0XCJ9ZG9jdW1lbnQuY29va2llPWErXCI9XCIrYitkK2YrXCI7IHBhdGg9L1wifVxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNTdGdEZWJ1Zz0od2luZG93LmxvY2F0aW9uLmhyZWYubWF0Y2goXCJzdGdfZGVidWdcIil8fGRvY3VtZW50LmNvb2tpZS5tYXRjaChcInN0Z19kZWJ1Z1wiKSkmJiF3aW5kb3cubG9jYXRpb24uaHJlZi5tYXRjaChcInN0Z19kaXNhYmxlX2RlYnVnXCIpO3N0Z0NyZWF0ZUNvb2tpZShcInN0Z19kZWJ1Z1wiLGlzU3RnRGVidWc/MTpcIlwiLGlzU3RnRGVidWc/MTQ6LTEpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcVA9W107ZGF0YUxheWVyTmFtZSE9PVwiZGF0YUxheWVyXCImJnFQLnB1c2goXCJkYXRhX2xheWVyX25hbWU9XCIrZGF0YUxheWVyTmFtZSksaXNTdGdEZWJ1ZyYmcVAucHVzaChcInN0Z19kZWJ1Z1wiKTt2YXIgcVBTdHJpbmc9cVAubGVuZ3RoPjA/KFwiP1wiK3FQLmpvaW4oXCImXCIpKTpcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0YWdzLmFzeW5jPSEwLHRhZ3Muc3JjPVwiaHR0cHM6Ly9hbGV4cHJpc2Nhcml1LmNvbnRhaW5lcnMucGl3aWsucHJvL1wiK2lkK1wiLmpzXCIrcVBTdHJpbmcsc2NyaXB0cy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YWdzLHNjcmlwdHMpO1xuICAgICAgICAgICAgICAgICAgICAhZnVuY3Rpb24oYSxuLGkpe2Fbbl09YVtuXXx8e307Zm9yKHZhciBjPTA7YzxpLmxlbmd0aDtjKyspIWZ1bmN0aW9uKGkpe2Fbbl1baV09YVtuXVtpXXx8e30sYVtuXVtpXS5hcGk9YVtuXVtpXS5hcGl8fGZ1bmN0aW9uKCl7dmFyIGE9W10uc2xpY2UuY2FsbChhcmd1bWVudHMsMCk7XCJzdHJpbmdcIj09dHlwZW9mIGFbMF0mJndpbmRvd1tkYXRhTGF5ZXJOYW1lXS5wdXNoKHtldmVudDpuK1wiLlwiK2krXCI6XCIrYVswXSxwYXJhbWV0ZXJzOltdLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpfSl9fShpW2NdKX0od2luZG93LFwicHBtc1wiLFtcInRtXCIsXCJjbVwiXSk7XG4gICAgICAgICAgICAgICAgICAgIH0pKHdpbmRvdywgZG9jdW1lbnQsICdkYXRhTGF5ZXInLCAnOWRjMWQ4NjktM2VmYy00MGEzLWI4ZTEtZWM3ZmEyMWNmNDhmJyk7XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvU2NyaXB0PlxuICAgICAgICAgICAgPE5leHROUHJvZ3Jlc3MgY29sb3I9XCIjMDA2YWQ1XCIgLz5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIHshcGFnZVByb3BzPy5oaWRlRm9vdGVyICYmIChcbiAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cIm10LTIgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgwqkge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gQWxleGFuZHJ1IFByaXNhY2FyaXUgfCBQb3dlcmVkIGJ5eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL25leHRqcy5vcmdcIiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIHVuZGVybGluZVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXh0SlNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICx7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbVwiIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgdW5kZXJsaW5lXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdpdEh1YlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJTY3JpcHQiLCJMaW5rIiwiTmV4dE5Qcm9ncmVzcyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiaWQiLCJzdHJhdGVneSIsImNvbG9yIiwiaGlkZUZvb3RlciIsImZvb3RlciIsImNsYXNzTmFtZSIsImRpdiIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "nextjs-progressbar":
/*!*************************************!*\
  !*** external "nextjs-progressbar" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("nextjs-progressbar");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0","vendor-chunks/@swc+helpers@0.5.15"], () => (__webpack_exec__("(pages-dir-node)/./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();