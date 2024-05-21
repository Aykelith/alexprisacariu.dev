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

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nextjs-progressbar */ \"nextjs-progressbar\");\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/global.css */ \"./src/styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_6__);\n//= React components\n// Others\n\n\n\n\n\n//= Style & Assets\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"viewport\",\n                    content: \"target-densitydpi=device-dpi, width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui\"\n                }, void 0, false, {\n                    fileName: \"/home/alex/work/alexprisacariu.dev/src/pages/_app.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/alex/work/alexprisacariu.dev/src/pages/_app.tsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"google-analytics\",\n                strategy: \"afterInteractive\",\n                children: `\n                    (function(window, document, dataLayerName, id) {\n                    window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:\"stg.start\"});var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');\n                    function stgCreateCookie(a,b,c){var d=\"\";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d=\"; expires=\"+e.toUTCString();f=\"; SameSite=Strict\"}document.cookie=a+\"=\"+b+d+f+\"; path=/\"}\n                    var isStgDebug=(window.location.href.match(\"stg_debug\")||document.cookie.match(\"stg_debug\"))&&!window.location.href.match(\"stg_disable_debug\");stgCreateCookie(\"stg_debug\",isStgDebug?1:\"\",isStgDebug?14:-1);\n                    var qP=[];dataLayerName!==\"dataLayer\"&&qP.push(\"data_layer_name=\"+dataLayerName),isStgDebug&&qP.push(\"stg_debug\");var qPString=qP.length>0?(\"?\"+qP.join(\"&\")):\"\";\n                    tags.async=!0,tags.src=\"https://alexpriscariu.containers.piwik.pro/\"+id+\".js\"+qPString,scripts.parentNode.insertBefore(tags,scripts);\n                    !function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);\"string\"==typeof a[0]&&window[dataLayerName].push({event:n+\".\"+i+\":\"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,\"ppms\",[\"tm\",\"cm\"]);\n                    })(window, document, 'dataLayer', '9dc1d869-3efc-40a3-b8e1-ec7fa21cf48f');\n                `\n            }, void 0, false, {\n                fileName: \"/home/alex/work/alexprisacariu.dev/src/pages/_app.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((nextjs_progressbar__WEBPACK_IMPORTED_MODULE_4___default()), {\n                color: \"#006ad5\"\n            }, void 0, false, {\n                fileName: \"/home/alex/work/alexprisacariu.dev/src/pages/_app.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/alex/work/alexprisacariu.dev/src/pages/_app.tsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            !pageProps?.hideFooter && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"mt-2 mb-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"box\",\n                    children: [\n                        \"\\xa9 \",\n                        new Date().getFullYear(),\n                        \" Alexandru Prisacariu | Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"https://nextjs.org\",\n                            className: \"text-black underline\",\n                            target: \"_blank\",\n                            rel: \"noreferrer noopener\",\n                            children: \"NextJS\"\n                        }, void 0, false, {\n                            fileName: \"/home/alex/work/alexprisacariu.dev/src/pages/_app.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 25\n                        }, this),\n                        \",\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"https://github.com\",\n                            className: \"text-black underline\",\n                            target: \"_blank\",\n                            rel: \"noreferrer noopener\",\n                            children: \"GitHub\"\n                        }, void 0, false, {\n                            fileName: \"/home/alex/work/alexprisacariu.dev/src/pages/_app.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/alex/work/alexprisacariu.dev/src/pages/_app.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/alex/work/alexprisacariu.dev/src/pages/_app.tsx\",\n                lineNumber: 36,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLFNBQVM7O0FBQ29CO0FBQ0k7QUFDSjtBQUNrQjtBQUUvQyxrQkFBa0I7QUFDZ0I7QUFDSjtBQUU5QixTQUFTSSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ25DLHFCQUNJOzswQkFDSSw4REFBQ04sa0RBQUlBOzBCQUNELDRFQUFDTztvQkFDR0MsTUFBSztvQkFDTEMsU0FBUTs7Ozs7Ozs7Ozs7MEJBR2hCLDhEQUFDUixvREFBTUE7Z0JBQUNTLElBQUc7Z0JBQW1CQyxVQUFTOzBCQUNsQyxDQUFDOzs7Ozs7Ozs7Z0JBU0YsQ0FBQzs7Ozs7OzBCQUVMLDhEQUFDUiwyREFBYUE7Z0JBQUNTLE9BQU07Ozs7OzswQkFDckIsOERBQUNQO2dCQUFXLEdBQUdDLFNBQVM7Ozs7OztZQUN2QixDQUFDQSxXQUFXTyw0QkFDVCw4REFBQ0M7Z0JBQU9DLFdBQVU7MEJBQ2QsNEVBQUNDO29CQUFJRCxXQUFVOzt3QkFBTTt3QkFDZCxJQUFJRSxPQUFPQyxXQUFXO3dCQUFHO3dCQUFtQztzQ0FDL0QsOERBQUNoQixrREFBSUE7NEJBQUNpQixNQUFLOzRCQUFxQkosV0FBVTs0QkFBdUJLLFFBQU87NEJBQVNDLEtBQUk7c0NBQXNCOzs7Ozs7d0JBRXBHO3dCQUNMO3NDQUNGLDhEQUFDbkIsa0RBQUlBOzRCQUFDaUIsTUFBSzs0QkFBcUJKLFdBQVU7NEJBQXVCSyxRQUFPOzRCQUFTQyxLQUFJO3NDQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFuSTtBQUVBLGlFQUFlakIsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vPSBSZWFjdCBjb21wb25lbnRzXG4vLyBPdGhlcnNcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgU2NyaXB0IGZyb20gJ25leHQvc2NyaXB0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTmV4dE5Qcm9ncmVzcyBmcm9tICduZXh0anMtcHJvZ3Jlc3NiYXInO1xuXG4vLz0gU3R5bGUgJiBBc3NldHNcbmltcG9ydCAndGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRhcmdldC1kZW5zaXR5ZHBpPWRldmljZS1kcGksIHdpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wLCBtaW5pbXVtLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT1ubywgbWluaW1hbC11aVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxTY3JpcHQgaWQ9XCJnb29nbGUtYW5hbHl0aWNzXCIgc3RyYXRlZ3k9XCJhZnRlckludGVyYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsIGRhdGFMYXllck5hbWUsIGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1tkYXRhTGF5ZXJOYW1lXT13aW5kb3dbZGF0YUxheWVyTmFtZV18fFtdLHdpbmRvd1tkYXRhTGF5ZXJOYW1lXS5wdXNoKHtzdGFydDoobmV3IERhdGUpLmdldFRpbWUoKSxldmVudDpcInN0Zy5zdGFydFwifSk7dmFyIHNjcmlwdHM9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdLHRhZ3M9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHN0Z0NyZWF0ZUNvb2tpZShhLGIsYyl7dmFyIGQ9XCJcIjtpZihjKXt2YXIgZT1uZXcgRGF0ZTtlLnNldFRpbWUoZS5nZXRUaW1lKCkrMjQqYyo2MCo2MCoxZTMpLGQ9XCI7IGV4cGlyZXM9XCIrZS50b1VUQ1N0cmluZygpO2Y9XCI7IFNhbWVTaXRlPVN0cmljdFwifWRvY3VtZW50LmNvb2tpZT1hK1wiPVwiK2IrZCtmK1wiOyBwYXRoPS9cIn1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzU3RnRGVidWc9KHdpbmRvdy5sb2NhdGlvbi5ocmVmLm1hdGNoKFwic3RnX2RlYnVnXCIpfHxkb2N1bWVudC5jb29raWUubWF0Y2goXCJzdGdfZGVidWdcIikpJiYhd2luZG93LmxvY2F0aW9uLmhyZWYubWF0Y2goXCJzdGdfZGlzYWJsZV9kZWJ1Z1wiKTtzdGdDcmVhdGVDb29raWUoXCJzdGdfZGVidWdcIixpc1N0Z0RlYnVnPzE6XCJcIixpc1N0Z0RlYnVnPzE0Oi0xKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHFQPVtdO2RhdGFMYXllck5hbWUhPT1cImRhdGFMYXllclwiJiZxUC5wdXNoKFwiZGF0YV9sYXllcl9uYW1lPVwiK2RhdGFMYXllck5hbWUpLGlzU3RnRGVidWcmJnFQLnB1c2goXCJzdGdfZGVidWdcIik7dmFyIHFQU3RyaW5nPXFQLmxlbmd0aD4wPyhcIj9cIitxUC5qb2luKFwiJlwiKSk6XCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGFncy5hc3luYz0hMCx0YWdzLnNyYz1cImh0dHBzOi8vYWxleHByaXNjYXJpdS5jb250YWluZXJzLnBpd2lrLnByby9cIitpZCtcIi5qc1wiK3FQU3RyaW5nLHNjcmlwdHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGFncyxzY3JpcHRzKTtcbiAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uKGEsbixpKXthW25dPWFbbl18fHt9O2Zvcih2YXIgYz0wO2M8aS5sZW5ndGg7YysrKSFmdW5jdGlvbihpKXthW25dW2ldPWFbbl1baV18fHt9LGFbbl1baV0uYXBpPWFbbl1baV0uYXBpfHxmdW5jdGlvbigpe3ZhciBhPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLDApO1wic3RyaW5nXCI9PXR5cGVvZiBhWzBdJiZ3aW5kb3dbZGF0YUxheWVyTmFtZV0ucHVzaCh7ZXZlbnQ6bitcIi5cIitpK1wiOlwiK2FbMF0scGFyYW1ldGVyczpbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKX0pfX0oaVtjXSl9KHdpbmRvdyxcInBwbXNcIixbXCJ0bVwiLFwiY21cIl0pO1xuICAgICAgICAgICAgICAgICAgICB9KSh3aW5kb3csIGRvY3VtZW50LCAnZGF0YUxheWVyJywgJzlkYzFkODY5LTNlZmMtNDBhMy1iOGUxLWVjN2ZhMjFjZjQ4ZicpO1xuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L1NjcmlwdD5cbiAgICAgICAgICAgIDxOZXh0TlByb2dyZXNzIGNvbG9yPVwiIzAwNmFkNVwiIC8+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICB7IXBhZ2VQcm9wcz8uaGlkZUZvb3RlciAmJiAoXG4gICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJtdC0yIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIMKpIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IEFsZXhhbmRydSBQcmlzYWNhcml1IHwgUG93ZXJlZCBieXsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnXCIgY2xhc3NOYW1lPVwidGV4dC1ibGFjayB1bmRlcmxpbmVcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV4dEpTXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAseycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb21cIiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIHVuZGVybGluZVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHaXRIdWJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiU2NyaXB0IiwiTGluayIsIk5leHROUHJvZ3Jlc3MiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImlkIiwic3RyYXRlZ3kiLCJjb2xvciIsImhpZGVGb290ZXIiLCJmb290ZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJocmVmIiwidGFyZ2V0IiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/global.css":
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/tailwindcss"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();