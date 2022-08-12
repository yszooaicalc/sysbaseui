!function(f){"use strict";function n(){this.v="2.7.6"}function d(t,e){e=e||"log",f.console&&console[e]&&console[e]("layui error hint: "+t)}var t,h=f.document,m={modules:{},status:{},timeout:10,event:{}},e=f.LAYUI_GLOBAL||{},v=(t=h.currentScript?h.currentScript.src:function(){for(var t,e=h.scripts,o=e.length-1,n=o;0<n;n--)if("interactive"===e[n].readyState){t=e[n].src;break}return t||e[o].src}(),m.dir=e.dir||t.substring(0,t.lastIndexOf("/")+1)),g="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),b=m.builtin={lay:"lay",layer:"layer",laydate:"laydate",laypage:"laypage",laytpl:"laytpl",layedit:"layedit",form:"form",upload:"upload",dropdown:"dropdown",transfer:"transfer",tree:"tree",table:"table",element:"element",rate:"rate",colorpicker:"colorpicker",slider:"slider",carousel:"carousel",flow:"flow",util:"util",code:"code",jquery:"jquery",all:"all","layui.all":"layui.all"},s=(n.prototype.cache=m,n.prototype.define=function(t,n){return"function"==typeof t&&(n=t,t=[]),this.use(t,function(){function o(t,e){layui[t]=e,m.status[t]=!0}return"function"==typeof n&&n(function(t,e){o(t,e),m.callback[t]=function(){n(o)}}),this},null,"define"),this},n.prototype.use=function(o,t,e,n){var r,i,a=this,u=m.dir=m.dir||v,l=h.getElementsByTagName("head")[0],s=(o="string"==typeof o?[o]:"function"==typeof o?(t=o,["all"]):o,f.jQuery&&jQuery.fn.on&&(a.each(o,function(t,e){"jquery"===e&&o.splice(t,1)}),layui.jquery=layui.$=jQuery),o[0]),c=0;function p(t,e){var o="PLaySTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/;"load"!==t.type&&!o.test((t.currentTarget||t.srcElement).readyState)||(m.modules[s]=e,l.removeChild(r),function t(){return++c>1e3*m.timeout/4?d(s+" is not a valid module","error"):void(m.status[s]?y():setTimeout(t,4))}())}function y(){e.push(layui[s]),1<o.length?a.use(o.slice(1),t,e,n):"function"==typeof t&&(layui.jquery&&"function"==typeof layui.jquery&&"define"!==n?layui.jquery(function(){t.apply(layui,e)}):t.apply(layui,e))}return e=e||[],m.host=m.host||(u.match(/\/\/([\s\S]+?)\//)||["//"+location.host+"/"])[0],0===o.length||layui["layui.all"]&&b[s]?y():(i=(i=(b[s]?u+"modules/":!/^\{\/\}/.test(a.modules[s])&&m.base||"")+(a.modules[s]||s)+".js").replace(/^\{\/\}/,""),!m.modules[s]&&layui[s]&&(m.modules[s]=i),m.modules[s]?function t(){return++c>1e3*m.timeout/4?d(s+" is not a valid module","error"):void("string"==typeof m.modules[s]&&m.status[s]?y():setTimeout(t,4))}():((r=h.createElement("script")).async=!0,r.charset="utf-8",r.src=i+((u=!0===m.version?m.v||(new Date).getTime():m.version||"")?"?v="+u:""),l.appendChild(r),!r.attachEvent||r.attachEvent.toString&&r.attachEvent.toString().indexOf("[native code")<0||g?r.addEventListener("load",function(t){p(t,i)},!1):r.attachEvent("onreadystatechange",function(t){p(t,i)}),m.modules[s]=i)),a},n.prototype.disuse=function(t){var o=this;return t=o.isArray(t)?t:[t],o.each(t,function(t,e){m.status[e],delete o[e],delete b[e],delete o.modules[e],delete m.status[e],delete m.modules[e]}),o},n.prototype.getStyle=function(t,e){t=t.currentStyle||f.getComputedStyle(t,null);return t[t.getPropertyValue?"getPropertyValue":"getAttribute"](e)},n.prototype.link=function(n,r,t){var i=this,e=h.getElementsByTagName("head")[0],o=h.createElement("link"),t=((t="string"==typeof r?r:t)||n).replace(/\.|\//g,""),a=o.id="layuicss-"+t,u="creating",l=0;return o.rel="stylesheet",o.href=n+(m.debug?"?v="+(new Date).getTime():""),o.media="all",h.getElementById(a)||e.appendChild(o),"function"==typeof r&&function t(e){var o=h.getElementById(a);return++l>1e3*m.timeout/100?d(n+" timeout"):void(1989===parseInt(i.getStyle(o,"width"))?(e===u&&o.removeAttribute("lay-status"),o.getAttribute("lay-status")===u?setTimeout(t,100):r()):(o.setAttribute("lay-status",u),setTimeout(function(){t(u)},100)))}(),i},n.prototype.addcss=function(t,e,o){return layui.link(m.dir+"css/"+t,e,o)},m.callback={},n.prototype.factory=function(t){if(layui[t])return"function"==typeof m.callback[t]?m.callback[t]:null},n.prototype.img=function(t,e,o){var n=new Image;if(n.src=t,n.complete)return e(n);n.onload=function(){n.onload=null,"function"==typeof e&&e(n)},n.onerror=function(t){n.onerror=null,"function"==typeof o&&o(t)}},n.prototype.config=function(t){for(var e in t=t||{})m[e]=t[e];return this},n.prototype.modules=function(){var t,e={};for(t in b)e[t]=b[t];return e}(),n.prototype.extend=function(t){for(var e in t=t||{})this[e]||this.modules[e]?d(e+" Module already exists","error"):this.modules[e]=t[e];return this},n.prototype.router=n.prototype.hash=function(t){var o={path:[],search:{},hash:((t=t||location.hash).match(/[^#](#.*$)/)||[])[1]||""};return/^#\//.test(t)&&(t=t.replace(/^#\//,""),o.href="/"+t,t=t.replace(/([^#])(#.*$)/,"$1").split("/")||[],this.each(t,function(t,e){/^\w+=/.test(e)?(e=e.split("="),o.search[e[0]]=e[1]):o.path.push(e)})),o},n.prototype.url=function(t){var r,e,o=this;return{pathname:(t?((t.match(/\.[^.]+?\/.+/)||[])[0]||"").replace(/^[^\/]+/,"").replace(/\?.+/,""):location.pathname).replace(/^\//,"").split("/"),search:(r={},e=(t?((t.match(/\?.+/)||[])[0]||"").replace(/\#.+/,""):location.search).replace(/^\?+/,"").split("&"),o.each(e,function(t,e){var o=e.indexOf("="),n=o<0?e.substr(0,e.length):0!==o&&e.substr(0,o);n&&(r[n]=0<o?e.substr(o+1):null)}),r),hash:o.router(t?(t.match(/#.+/)||[])[0]||"/":location.hash)}},n.prototype.data=function(t,e,o){if(t=t||"layui",o=o||localStorage,f.JSON&&f.JSON.parse){if(null===e)return delete o[t];e="object"==typeof e?e:{key:e};try{var n=JSON.parse(o[t])}catch(t){n={}}return"value"in e&&(n[e.key]=e.value),e.remove&&delete n[e.key],o[t]=JSON.stringify(n),e.key?n[e.key]:n}},n.prototype.sessionData=function(t,e){return this.data(t,e,sessionStorage)},n.prototype.device=function(t){function e(t){var e=new RegExp(t+"/([^\\s\\_\\-]+)");return(t=(o.match(e)||[])[1])||!1}var o=navigator.userAgent.toLowerCase(),n={os:/windows/.test(o)?"windows":/linux/.test(o)?"linux":/iphone|ipod|ipad|ios/.test(o)?"ios":/mac/.test(o)?"mac":void 0,ie:!!(f.ActiveXObject||"ActiveXObject"in f)&&((o.match(/msie\s(\d+)/)||[])[1]||"11"),weixin:e("micromessenger")};return t&&!n[t]&&(n[t]=e(t)),n.android=/android/.test(o),n.ios="ios"===n.os,n.mobile=!(!n.android&&!n.ios),n},n.prototype.hint=function(){return{error:d}},n.prototype._typeof=n.prototype.type=function(t){return null===t?String(t):"object"==typeof t||"function"==typeof t?(e=(e=Object.prototype.toString.call(t).match(/\s(.+)\]$/)||[])[1]||"Object",new RegExp("\\b(Function|Array|Date|RegExp|Object|Error|Symbol)\\b").test(e)?e.toLowerCase():"object"):typeof t;var e},n.prototype._isArray=n.prototype.isArray=function(t){var e,o=this.type(t);return!(!t||"object"!=typeof t||t===f)&&(e="length"in t&&t.length,"array"===o||0===e||"number"==typeof e&&0<e&&e-1 in t)},n.prototype.each=function(t,o){function e(t,e){return o.call(e[t],t,e[t])}if("function"==typeof o)if(this.isArray(t=t||[]))for(n=0;n<t.length&&!e(n,t);n++);else for(var n in t)if(e(n,t))break;return this},n.prototype.sort=function(t,r,e){var o=JSON.parse(JSON.stringify(t||[]));if("object"!==this.type(t)||r){if("object"!=typeof t)return[o];o.sort(function(t,e){var o=t[r],n=e[r];if(!isNaN(t)&&!isNaN(e))return t-e;if(!isNaN(t)&&isNaN(e)){if(!r||"object"!=typeof e)return-1;o=t}else if(isNaN(t)&&!isNaN(e)){if(!r||"object"!=typeof t)return 1;n=e}t=[!isNaN(o),!isNaN(n)];return t[0]&&t[1]?o&&!n&&0!==n?1:!o&&0!==o&&n?-1:o-n:t[0]||t[1]?t[0]||!t[1]?-1:!t[0]||t[1]?1:void 0:n<o?1:o<n?-1:0}),e&&o.reverse()}return o},n.prototype.stope=function(e){e=e||f.event;try{e.stopPropagation()}catch(t){e.cancelBubble=!0}},"LAYUI-EVENT-REMOVE");n.prototype.onevent=function(t,e,o){return"string"!=typeof t||"function"!=typeof o?this:n.event(t,e,null,o)},n.prototype.event=n.event=function(t,e,o,n){function r(t,e){!1===(e&&e.call(i,o))&&null===a&&(a=!1)}var i=this,a=null,u=(e||"").match(/\((.*)\)$/)||[],t=(t+"."+e).replace(u[0],""),l=u[1]||"";return o===s?(delete(i.cache.event[t]||{})[l],i):n?(m.event[t]=m.event[t]||{},m.event[t][l]=[n],this):(layui.each(m.event[t],function(t,e){"{*}"===l?layui.each(e,r):(""===t&&layui.each(e,r),l&&t===l&&layui.each(e,r))}),a)},n.prototype.on=function(t,e,o){return this.onevent.call(this,e,t,o)},n.prototype.off=function(t,e){return this.event.call(this,e,t,s)},f.layui=new n}(window);
!function(e){e.default={top_zindex:202208161517,elem:"body"},e.YSZ=function(e,t){var n=$.Deferred();if(e&&t&&(!e||"string"==typeof e||"number"==typeof e||"object"==typeof e))return layui.use(["jquery"],function(){}),n;this.alert("传输参数不正确，无法正常运行")}}(window);
window.YSZ.prototype.ajax=function(t){var a=this,e=a.$,o=e.extend(!0,{},{type:"post",dataType:"json",timeout:6e5,cache:!0},t);o.data=((t=(t=t.data||{})||{}).token=a.token(),{requestData:JSON.stringify(t)}),e.ajax(o)};
!function(t){function s(t,e){if(e)for(var r=Object.keys(t),o=new RegExp(e),i=0;i<=r.length;i++){var n=r[i];o.test(n)&&t.removeItem(n)}}function r(t,e,r){if(/^\w+$/.test(e))try{if(!e||!t)return null;var o="ysz_"+e;if(""!==r&&null!==r){if(void 0===r){for(var i="",n=0,l="";(l=t.getItem(o+"_"+n))&&(i+=l,n++,l););if(i)return JSON.parse(i||"null")}else{s.call(this,t,"^"+o);for(i=JSON.stringify(r),n=0;(l=i.substring(5e5*n,5e5*(n+1)))&&(t.setItem(o+"_"+n,l),n++,l););}return r}s.call(this,t,"^"+o)}catch(t){return null}else this.alert("缓存可以不能有特殊符号！")}var o,i;t.sessionStorage&&(o=t.sessionStorage),t.localStorage&&(i=t.localStorage);t.YSZ.prototype.cache=function(t,e){t=(this.id||"")+"_"+t;return r.call(this,o,t,e)},t.YSZ.prototype.store=function(t,e){t=(this.id||"")+"_"+t;return r.call(this,i,t,e)},t.YSZ.prototype.removeCache=function(t){s.call(this,o,t)},t.YSZ.prototype.removeStore=function(t){s.call(this,i,t)}}(window);
window.YSZ.prototype.getComponentData=function(){var i={};this.id?i={id:this.id}:this.openid&&(i={openid:this.openid}),this.ajax({data:i})};
window.YSZ.prototype.init=function(){var t=this,n=layui.jquery;t.options?t.render():(t.elem&&0<n(t.elem).length&&(n(t.elem).empty(),n(t.elem).appendTo(t.loadingicon())),t.getComponentData(e=>{if(e&&0<e.length)for(var n=0;n<e.length;n++){var o=e[n];t.options=o,t.render()}},e=>{t.elem&&0<n(t.elem).length&&(n(t.elem).empty(),n(t.elem).appendTo(t.loaderricon()))}))};
window.YSZ.prototype.loaderricon=function(o){};
window.YSZ.prototype.loadingicon=function(o){};
!function(o){o.YSZ.prototype.render=function(){var t=this;t.options&&layui.use(["jquery"],function(){var e=layui.jquery,n=t.elem||t.options.elem||o.default.elem;0!=e(n).length&&e(n).empty()})}}(window);
window,String.prototype.replaceAll=function(e,n){return this.replace(new RegExp(e,"gm"),n)};
!function(d){d.YSZ.prototype.win_alert=function(i,t,a,n,l){var o=this;layui.use(["layer"],function(){var e=layer.alert(i,t,a);!n&&void 0!==n||($(".layui-layer-shade").css("z-index",o.top_zindex||d.default.top_zindex),$(".layui-layer-shade").next('[type="dialog"]').css("z-index",o.top_zindex||d.default.top_zindex)),"function"==typeof l&&l.call(o,e)})}}(window);
!function(o){o.YSZ.prototype.win_msg=function(e,i,n,t,a){var d=this;layui.use(["layer"],function(){layer.msg(e,i,n);!t&&void 0!==t||($(".layui-layer-shade").css("z-index",d.top_zindex||o.default.top_zindex),$(".layui-layer-shade").next('[type="dialog"]').css("z-index",d.top_zindex||o.default.top_zindex)),"function"==typeof a&&a.call(d,alertindex)})}}(window);
window;