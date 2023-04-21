/* eslint-disable no-new */





//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//
// DfE frontend components
!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t){NodeList.prototype.forEach||(NodeList.prototype.forEach=Array.prototype.forEach),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{enumerable:!1,value:function(t){return 0<this.filter(function(e){return e===t}).length}}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(Element.prototype.matches.call(t,e))return t}while(null!==(t=t.parentElement||t.parentNode)&&1===t.nodeType);return null})},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}n.r(t);function a(e,t){var n;e&&t&&(n="true"===e.getAttribute(t)?"false":"true",e.setAttribute(t,n))}function i(e){e.form.querySelectorAll('input[type="checkbox"]').forEach(function(e){return d(e,"dfeuk-checkboxes__conditional--hidden")})}function c(){function t(e){var t,n;d(e.target,"dfeuk-checkboxes__conditional--hidden"),e.target.checked&&(e.target.hasAttribute("data-checkbox-exclusive")?((t=e.target).form.querySelectorAll('input[type="checkbox"][data-checkbox-exclusive-group="'.concat(t.getAttribute("data-checkbox-exclusive-group"),'"]')).forEach(function(e){t.form===e.form&&e!==t&&(e.checked=!1)}),i(t)):((n=e.target).form.querySelectorAll('input[type="checkbox"][data-checkbox-exclusive][data-checkbox-exclusive-group="'.concat(n.getAttribute("data-checkbox-exclusive-group"),'"]')).forEach(function(e){n.form===e.form&&(e.checked=!1)}),i(n)))}var e=document.querySelectorAll(".dfeuk-checkboxes .dfeuk-checkboxes__input");"onpageshow"in window?window.addEventListener("pageshow",function(){return e.forEach(i)}):window.addEventListener("DOMContentLoaded",function(){return e.forEach(i)}),e.forEach(i),e.forEach(function(e){e.addEventListener("change",t)})}function u(){var e;"boolean"!=typeof document.createElement("details").open&&(e=document.querySelectorAll("details")).length&&e.forEach(function(e,t){var n,r,o;e.hasAttribute("dfeuk-polyfilled")||(t=t,(n=e).setAttribute("dfeuk-polyfilled","true"),n.id||n.setAttribute("id","dfeuk-details".concat(t)),(r=document.querySelector("#".concat(n.id," .dfeuk-details__text"))).id||r.setAttribute("id","dfeuk-details__text".concat(t)),(o=document.querySelector("#".concat(n.id," .dfeuk-details__summary"))).setAttribute("role","button"),o.setAttribute("aria-controls",r.id),o.setAttribute("tabIndex","0"),!0==(null!==n.getAttribute("open"))?(o.setAttribute("aria-expanded","true"),r.setAttribute("aria-hidden","false")):(o.setAttribute("aria-expanded","false"),r.setAttribute("aria-hidden","true"),r.style.display="none"),o.addEventListener("click",function(){a(o,"aria-expanded"),a(r,"aria-hidden"),r.style.display="true"===r.getAttribute("aria-hidden")?"none":"",n.hasAttribute("open")?n.removeAttribute("open"):n.setAttribute("open","open")}),o.addEventListener("keydown",function(e){13!==e.keyCode&&32!==e.keyCode||(e.preventDefault(),o.click())}))})}r((t=s).prototype,[{key:"handleKeyDown",value:function(e){var t=e.target;"button"===t.getAttribute("role")&&e.keyCode===this.KEY_SPACE&&(e.preventDefault(),t.click())}},{key:"debounce",value:function(e){var t=this;if("true"===e.target.getAttribute("data-prevent-double-click"))return this.debounceFormSubmitTimer?(e.preventDefault(),!1):void(this.debounceFormSubmitTimer=setTimeout(function(){t.debounceFormSubmitTimer=null},1e3*this.DEBOUNCE_TIMEOUT_IN_SECONDS))}},{key:"init",value:function(){this.$module.addEventListener("keydown",this.handleKeyDown.bind(this)),this.$module.addEventListener("click",this.debounce.bind(this))}}]),Object.defineProperty(t,"prototype",{writable:!1});var l=s,d=function(e,t){var n;e&&t&&(n=e.getAttribute("aria-controls"))&&(n=document.getElementById(n))&&(e.checked?(n.classList.remove(t),e.setAttribute("aria-expanded",!0)):(n.classList.add(t),e.setAttribute("aria-expanded",!1)))};function s(e){if(!(this instanceof s))throw new TypeError("Cannot call a class as a function");o(this,"KEY_SPACE",32),o(this,"DEBOUNCE_TIMEOUT_IN_SECONDS",1),this.$module=e,this.debounceFormSubmitTimer=null}function f(e){!function(e){if("A"===e.tagName&&!1!==e.href){var t,e=document.querySelector(e.hash);if(e)return(t=function(e){var t=e.closest("fieldset");if(t){t=t.getElementsByTagName("legend");if(t.length){t=t[0];if("checkbox"===e.type||"radio"===e.type)return t;var n=t.getBoundingClientRect().top,r=e.getBoundingClientRect();if(r.height&&window.innerHeight&&r.top+r.height-n<window.innerHeight/2)return t}}return document.querySelector("label[for='".concat(e.getAttribute("id"),"']"))||e.closest("label")}(e))&&(t.scrollIntoView(),e.focus({preventScroll:!0}),1)}}(e.target)||e.preventDefault()}function h(){var t,n,r,o,e,i,c;function u(e){e.preventDefault(),a(o,"aria-expanded"),o.classList.toggle("is-active"),i.classList.toggle("js-show"),c.classList.toggle("js-show")}t=document.querySelector("#toggle-menu"),e=document.querySelector("#close-menu"),n=document.querySelector("#header-navigation"),r=function(e){e.preventDefault(),a(t,"aria-expanded"),t.classList.toggle("is-active"),n.classList.toggle("js-show")},t&&e&&n&&[t,e].forEach(function(e){e.addEventListener("click",r)}),o=document.querySelector("#toggle-search"),e=document.querySelector("#close-search"),i=document.querySelector("#wrap-search"),c=document.querySelector("#content-header"),o&&e&&[o,e].forEach(function(e){e.addEventListener("click",u)})}n(0),document.addEventListener("DOMContentLoaded",function(){var e,t,n,r;document.querySelectorAll('[data-module="dfeuk-button"]').forEach(function(e){new l(e).init()}),document.querySelectorAll(".dfeuk-card--clickable").forEach(function(e){null!==e.querySelector("a")&&e.addEventListener("click",function(){e.querySelector("a").click()})}),c(),u(),function(e){var e=(0<arguments.length&&void 0!==e?e:{}).focusOnPageLoad,e=void 0===e||e,t=document.querySelector(".dfeuk-error-summary");t&&(e&&t.focus(),t.addEventListener("click",f))}(),h(),e=document.querySelectorAll(".dfeuk-radios--conditional .dfeuk-radios__input"),t=function(){e.forEach(function(e){return d(e,"dfeuk-radios__conditional--hidden")})},"onpageshow"in window?window.addEventListener("pageshow",t):window.addEventListener("DOMContentLoaded",t),t(),e.forEach(function(e){e.addEventListener("change",t)}),n=document.querySelector("h1"),r=document.querySelector(".dfeuk-skip-link"),n&&r&&(r.addEventListener("click",function(e){e.preventDefault(),n.setAttribute("tabIndex","-1"),n.focus()}),n.addEventListener("blur",function(e){e.preventDefault(),n.removeAttribute("tabIndex")}))})}]);



window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
  MenuToggle();
SearchToggle();
Details();
SkipLink();
Checkboxes();
Radios();
Card();
})


