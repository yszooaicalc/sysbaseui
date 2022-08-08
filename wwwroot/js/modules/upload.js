layui.define("layer",function(e){"use strict";function v(e){var t=this;t.config=y.extend({},t.config,n.config,e),t.render()}var y=layui.$,t=layui.layer,i=layui.hint(),F=layui.device(),n={config:{},set:function(e){var t=this;return t.config=y.extend({},t.config,e),t},on:function(e,t){return layui.onevent.call(this,o,e,t)}},o="upload",a="layui-upload-file",l="layui-upload-form",b="layui-upload-iframe",x="layui-upload-choose";v.prototype.config={accept:"images",exts:"",auto:!0,bindAction:"",url:"",force:"",field:"file",acceptMime:"",method:"post",data:{},drag:!0,size:0,number:0,multiple:!1},v.prototype.render=function(e){var t=this;(e=t.config).elem=y(e.elem),e.bindAction=y(e.bindAction),t.file(),t.events()},v.prototype.file=function(){var e=this,t=e.config,i=e.elemFile=y(['<input class="'+a+'" type="file" accept="'+t.acceptMime+'" name="'+t.field+'"',t.multiple?" multiple":"",">"].join("")),n=t.elem.next();(n.hasClass(a)||n.hasClass(l))&&n.remove(),F.ie&&F.ie<10&&t.elem.wrap('<div class="layui-upload-wrap"></div>'),e.isFile()?(e.elemFile=t.elem,t.field=t.elem[0].name):t.elem.after(i),F.ie&&F.ie<10&&e.initIE()},v.prototype.initIE=function(){var i,e=this.config,t=y('<iframe id="'+b+'" class="'+b+'" name="'+b+'" frameborder="0"></iframe>'),n=y(['<form target="'+b+'" class="'+l+'" method="post" key="set-mine" enctype="multipart/form-data" action="'+e.url+'">',"</form>"].join(""));y("#"+b)[0]||y("body").append(t),e.elem.next().hasClass(l)||(this.elemFile.wrap(n),e.elem.next("."+l).append((i=[],layui.each(e.data,function(e,t){t="function"==typeof t?t():t,i.push('<input type="hidden" name="'+e+'" value="'+t+'">')}),i.join(""))))},v.prototype.msg=function(e){return t.msg(e,{icon:2,shift:6})},v.prototype.isFile=function(){var e=this.config.elem[0];if(e)return"input"===e.tagName.toLocaleLowerCase()&&"file"===e.type},v.prototype.preview=function(n){window.FileReader&&layui.each(this.chooseFiles,function(e,t){var i=new FileReader;i.readAsDataURL(t),i.onload=function(){n&&n(e,t,this.result)}})},v.prototype.upload=function(i,e){var n,o,t,a,l=this,r=l.config,u=l.elemFile[0],c=function(){function t(){r.multiple&&o+a===l.fileLength&&"function"==typeof r.allDone&&r.allDone({total:l.fileLength,successful:o,failed:a})}var o=0,a=0,e=i||l.files||l.chooseFiles||u.files;layui.each(e,function(i,e){var n=new FormData,e=(n.append(r.field,e),layui.each(r.data,function(e,t){t="function"==typeof t?t():t,n.append(e,t)}),{url:r.url,type:"post",data:n,contentType:!1,processData:!1,dataType:"json",headers:r.headers||{},success:function(e){o++,f(i,e),t()},error:function(e){a++,l.msg("Request URL is abnormal: "+(e.statusText||"error")),p(i),t()}});"function"==typeof r.progress&&(e.xhr=function(){var e=y.ajaxSettings.xhr();return e.upload.addEventListener("progress",function(e){var t;e.lengthComputable&&(t=Math.floor(e.loaded/e.total*100),r.progress(t,(r.item||r.elem)[0],e,i))}),e}),y.ajax(e)})},s=function(){var i=y("#"+b);l.elemFile.parent().submit(),clearInterval(v.timer),v.timer=setInterval(function(){var e,t=i.contents().find("body");try{e=t.text()}catch(e){l.msg("Cross-domain requests are not supported"),clearInterval(v.timer),p()}e&&(clearInterval(v.timer),t.html(""),f(0,e))},30)},f=function(e,t){if(l.elemFile.next("."+x).remove(),u.value="","json"===r.force&&"object"!=typeof t)try{t=JSON.parse(t)}catch(e){return t={},l.msg("Please return JSON data format")}"function"==typeof r.done&&r.done(t,e||0,function(e){l.upload(e)})},p=function(e){r.auto&&(u.value=""),"function"==typeof r.error&&r.error(e||0,function(e){l.upload(e)})},d=r.exts,m=(o=[],layui.each(i||l.chooseFiles,function(e,t){o.push(t.name)}),o),h={preview:function(e){l.preview(e)},upload:function(e,t){var i={};i[e]=t,l.upload(i)},pushFile:function(){return l.files=l.files||{},layui.each(l.chooseFiles,function(e,t){l.files[e]=t}),l.files},resetFile:function(e,t,i){t=new File([t],i);l.files=l.files||{},l.files[e]=t}},g={file:"文件",images:"图片",video:"视频",audio:"音频"}[r.accept]||"文件",m=0===m.length?u.value.match(/[^\/\\]+\..+/g)||[]||"":m;if(0!==m.length){switch(r.accept){case"file":layui.each(m,function(e,t){if(d&&!RegExp(".\\.("+d+")$","i").test(escape(t)))return n=!0});break;case"video":layui.each(m,function(e,t){if(!RegExp(".\\.("+(d||"avi|mp4|wma|rmvb|rm|flash|3gp|flv")+")$","i").test(escape(t)))return n=!0});break;case"audio":layui.each(m,function(e,t){if(!RegExp(".\\.("+(d||"mp3|wav|mid")+")$","i").test(escape(t)))return n=!0});break;default:layui.each(m,function(e,t){if(!RegExp(".\\.("+(d||"jpg|png|gif|bmp|jpeg")+")$","i").test(escape(t)))return n=!0})}if(n)return l.msg("选择的"+g+"中包含不支持的格式"),u.value="";if("choose"!==e&&!r.auto||(r.choose&&r.choose(h),"choose"!==e)){if(l.fileLength=(t=0,g=i||l.files||l.chooseFiles||u.files,layui.each(g,function(){t++}),t),r.number&&l.fileLength>r.number)return l.msg("同时最多只能上传: "+r.number+" 个文件<br>您当前已经选择了: "+l.fileLength+" 个文件");if(0<r.size&&!(F.ie&&F.ie<10))if(layui.each(l.chooseFiles,function(e,t){t.size>1024*r.size&&(t=1<=(t=r.size/1024)?t.toFixed(2)+"MB":r.size+"KB",u.value="",a=t)}),a)return l.msg("文件大小不能超过 "+a);if(!r.before||!1!==r.before(h))F.ie?(9<F.ie?c:s)():c()}}},v.prototype.reload=function(e){delete(e=e||{}).elem,delete e.bindAction;(e=this.config=y.extend({},this.config,n.config,e)).elem.next().attr({name:e.name,accept:e.acceptMime,multiple:e.multiple})},v.prototype.events=function(){function n(e){a.chooseFiles={},layui.each(e,function(e,t){var i=(new Date).getTime();a.chooseFiles[i+"-"+e]=t})}function o(e,t){var i=a.elemFile,e=(l.item||l.elem,1<e.length?e.length+"个文件":(e[0]||{}).name||i[0].value.match(/[^\/\\]+\..+/g)||[]||"");i.next().hasClass(x)&&i.next().remove(),a.upload(null,"choose"),a.isFile()||l.choose||i.after('<span class="layui-inline '+x+'">'+e+"</span>")}var a=this,l=a.config;l.elem.off("upload.start").on("upload.start",function(){var e=y(this),t=e.attr("lay-data");if(t)try{t=new Function("return "+t)(),a.config=y.extend({},l,t)}catch(e){i.error("Upload element property lay-data configuration item has a syntax error: "+t)}a.config.item=e,a.elemFile[0].click()}),F.ie&&F.ie<10||l.elem.off("upload.over").on("upload.over",function(){y(this).attr("lay-over","")}).off("upload.leave").on("upload.leave",function(){y(this).removeAttr("lay-over")}).off("upload.drop").on("upload.drop",function(e,t){var i=y(this),t=t.originalEvent.dataTransfer.files||[];i.removeAttr("lay-over"),n(t),l.auto?a.upload():o(t)}),a.elemFile.off("upload.change").on("upload.change",function(){var e=this.files||[];n(e),l.auto?a.upload():o(e)}),l.bindAction.off("upload.action").on("upload.action",function(){a.upload()}),l.elem.data("haveEvents")||(a.elemFile.on("change",function(){y(this).trigger("upload.change")}),l.elem.on("click",function(){a.isFile()||y(this).trigger("upload.start")}),l.drag&&l.elem.on("dragover",function(e){e.preventDefault(),y(this).trigger("upload.over")}).on("dragleave",function(e){y(this).trigger("upload.leave")}).on("drop",function(e){e.preventDefault(),y(this).trigger("upload.drop",e)}),l.bindAction.on("click",function(){y(this).trigger("upload.action")}),l.elem.data("haveEvents",!0))},n.render=function(e){e=new v(e);return function(){var t=this;return{upload:function(e){t.upload.call(t,e)},reload:function(e){t.reload.call(t,e)},config:t.config}}.call(e)},e(o,n)});