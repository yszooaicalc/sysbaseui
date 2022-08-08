!function(l){"use strict";function h(t){return new i(t)}function i(t){for(var e=0,n="object"==typeof t?[t]:(this.selector=t,f.querySelectorAll(t||null));e<n.length;e++)this.push(n[e])}var t,f=l.document;(i.prototype=[]).constructor=i,h.extend=function(){function o(t,e){for(var n in t=t||("array"===layui.type(e)?[]:{}),e)t[n]=e[n]&&e[n].constructor===Object?o(t[n],e[n]):e[n];return t}var t,e=1,n=arguments;for(n[0]="object"==typeof n[0]?n[0]:{},t=n.length;e<t;e++)"object"==typeof n[e]&&o(n[0],n[e]);return n[0]},h.v="1.0.8",h.ie=(t=navigator.userAgent.toLowerCase(),!!(l.ActiveXObject||"ActiveXObject"in l)&&((t.match(/msie\s(\d+)/)||[])[1]||"11")),h.layui=layui||{},h.getPath=layui.cache.dir,h.stope=layui.stope,h.each=function(){return layui.each.apply(layui,arguments),this},h.digit=function(t,e){if("string"!=typeof t&&"number"!=typeof t)return"";var n="";e=e||2;for(var o=(t=String(t)).length;o<e;o++)n+="0";return t<Math.pow(10,e)?n+t:t},h.elem=function(t,e){var n=f.createElement(t);return h.each(e||{},function(t,e){n.setAttribute(t,e)}),n},h.hasScrollbar=function(){return f.body.scrollHeight>(l.innerHeight||f.documentElement.clientHeight)},h.position=function(t,e,n){var o,i,r,c,u,a,s;e&&(n=n||{},t!==f&&t!==h("body")[0]||(n.clickType="right"),u="right"===n.clickType?{left:(u=n.e||l.event||{}).clientX,top:u.clientY,right:u.clientX,bottom:u.clientY}:t.getBoundingClientRect(),a=e.offsetWidth,s=e.offsetHeight,o=function(t){return f.body[t=t?"scrollLeft":"scrollTop"]|f.documentElement[t]},r=u.left,c=u.bottom,"center"===n.align?r-=(a-t.offsetWidth)/2:"right"===n.align&&(r=r-a+t.offsetWidth),(r=r+a+5>(i=function(t){return f.documentElement[t?"clientWidth":"clientHeight"]})("width")?i("width")-a-5:r)<5&&(r=5),c+s+5>i()&&(u.top>s+5?c=u.top-s-10:"right"===n.clickType?(c=i()-s-10)<0&&(c=0):c=5),(a=n.position)&&(e.style.position=a),e.style.left=r+("fixed"===a?0:o(1))+"px",e.style.top=c+("fixed"===a?0:o())+"px",h.hasScrollbar()||(s=e.getBoundingClientRect(),!n.SYSTEM_RELOAD&&s.bottom+5>i()&&(n.SYSTEM_RELOAD=!0,setTimeout(function(){h.position(t,e,n)},50))))},h.options=function(t,e){t=h(t),e=e||"lay-options";try{return new Function("return "+(t.attr(e)||"{}"))()}catch(t){return hint.error("parseerror："+t,"error"),{}}},h.isTopElem=function(n){var t=[f,h("body")[0]],o=!1;return h.each(t,function(t,e){if(e===n)return o=!0}),o},i.addStr=function(n,t){return n=n.replace(/\s+/," "),t=t.replace(/\s+/," ").split(" "),h.each(t,function(t,e){new RegExp("\\b"+e+"\\b").test(n)||(n=n+" "+e)}),n.replace(/^\s|\s$/,"")},i.removeStr=function(n,t){return n=n.replace(/\s+/," "),t=t.replace(/\s+/," ").split(" "),h.each(t,function(t,e){e=new RegExp("\\b"+e+"\\b");e.test(n)&&(n=n.replace(e,""))}),n.replace(/\s+/," ").replace(/^\s|\s$/,"")},i.prototype.find=function(o){var i=this,r=0,c=[],u="object"==typeof o;return this.each(function(t,e){for(var n=u?e.contains(o):e.querySelectorAll(o||null);r<n.length;r++)c.push(n[r]);i.shift()}),u||(i.selector=(i.selector?i.selector+" ":"")+o),h.each(c,function(t,e){i.push(e)}),i},i.prototype.each=function(t){return h.each.call(this,this,t)},i.prototype.addClass=function(n,o){return this.each(function(t,e){e.className=i[o?"removeStr":"addStr"](e.className,n)})},i.prototype.removeClass=function(t){return this.addClass(t,!0)},i.prototype.hasClass=function(n){var o=!1;return this.each(function(t,e){new RegExp("\\b"+n+"\\b").test(e.className)&&(o=!0)}),o},i.prototype.css=function(e,o){function i(t){return isNaN(t)?t:t+"px"}var t=this;return"string"!=typeof e||void 0!==o?t.each(function(t,n){"object"==typeof e?h.each(e,function(t,e){n.style[t]=i(e)}):n.style[e]=i(o)}):0<t.length?t[0].style[e]:void 0},i.prototype.width=function(n){var o=this;return void 0!==n?o.each(function(t,e){o.css("width",n)}):0<o.length?o[0].offsetWidth:void 0},i.prototype.height=function(n){var o=this;return void 0!==n?o.each(function(t,e){o.css("height",n)}):0<o.length?o[0].offsetHeight:void 0},i.prototype.attr=function(n,o){var t=this;return void 0!==o?t.each(function(t,e){e.setAttribute(n,o)}):0<t.length?t[0].getAttribute(n):void 0},i.prototype.removeAttr=function(n){return this.each(function(t,e){e.removeAttribute(n)})},i.prototype.html=function(n){var t=this;return void 0!==n?this.each(function(t,e){e.innerHTML=n}):0<t.length?t[0].innerHTML:void 0},i.prototype.val=function(n){var t=this;return void 0!==n?this.each(function(t,e){e.value=n}):0<t.length?t[0].value:void 0},i.prototype.append=function(n){return this.each(function(t,e){"object"==typeof n?e.appendChild(n):e.innerHTML=e.innerHTML+n})},i.prototype.remove=function(n){return this.each(function(t,e){n?e.removeChild(n):e.parentNode.removeChild(e)})},i.prototype.on=function(n,o){return this.each(function(t,e){e.attachEvent?e.attachEvent("on"+n,function(t){t.target=t.srcElement,o.call(e,t)}):e.addEventListener(n,o,!1)})},i.prototype.off=function(n,o){return this.each(function(t,e){e.detachEvent?e.detachEvent("on"+n,o):e.removeEventListener(n,o,!1)})},l.lay=h,l.layui&&layui.define&&layui.define(function(t){t("lay",h)})}(window,window.document);