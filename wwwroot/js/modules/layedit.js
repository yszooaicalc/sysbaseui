layui.define(["layer","form"],function(t){"use strict";function e(){this.index=0,this.config={tool:["strong","italic","underline","del","|","left","center","right","|","link","unlink"],hideTool:[],height:280}}function c(t,e,i){var l,a,n=this.document,o=document.createElement(t);for(l in e)o.setAttribute(l,e[l]);o.removeAttribute("text"),n.selection?(a=i.text||e.text,"a"===t&&!a||(a&&(o.innerHTML=a),i.pasteHTML(d(o).prop("outerHTML")),i.select())):(a=i.toString()||e.text,"a"===t&&!a||(a&&(o.innerHTML=a),i.deleteContents(),i.insertNode(o)))}function u(e,t){function i(t){return e.find(".layedit-tool-"+t)}var l=this.document,a="layedit-tool-active",l=b(v(l));t&&t[t.hasClass(a)?"removeClass":"addClass"](a),e.find(">i").removeClass(a),i("unlink").addClass(m),d(l).parents().each(function(){var t=this.tagName.toLowerCase(),e=this.style.textAlign;"b"!==t&&"strong"!==t||i("b").addClass(a),"i"!==t&&"em"!==t||i("i").addClass(a),"u"===t&&i("u").addClass(a),"strike"===t&&i("d").addClass(a),"p"===t&&i("center"===e?"center":"right"===e?"right":"left").addClass(a),"a"===t&&(i("link").addClass(a),i("unlink").removeClass(m))})}var d=layui.$,y=layui.layer,a=layui.form,f=(layui.hint(),layui.device()),i="layedit",m="layui-disabled",p=(e.prototype.set=function(t){return d.extend(!0,this.config,t),this},e.prototype.on=function(t,e){return layui.onevent(i,t,e)},e.prototype.build=function(t,e){e=e||{};var i,l,a=this,n=a.config,o="layui-layedit",s=d("string"==typeof t?"#"+t:t),r="LAY_layedit_"+ ++a.index,c=s.next("."+o),n=d.extend({},n,e),e=(i=[],l={},layui.each(n.hideTool,function(t,e){l[e]=!0}),layui.each(n.tool,function(t,e){C[e]&&!l[e]&&i.push(C[e])}),i.join("")),o=d(['<div class="'+o+'">','<div class="layui-unselect layui-layedit-tool">'+e+"</div>",'<div class="layui-layedit-iframe">','<iframe id="'+r+'" name="'+r+'" textarea="'+t+'" frameborder="0"></iframe>',"</div>","</div>"].join(""));return f.ie&&f.ie<8?s.removeClass("layui-hide").addClass("layui-show"):(c[0]&&c.remove(),p.call(a,o,s[0],n),s.addClass("layui-hide").after(o),a.index)},e.prototype.getContent=function(t){t=n(t);if(t[0])return l(t[0].document.body.innerHTML)},e.prototype.getText=function(t){t=n(t);if(t[0])return d(t[0].document.body).text()},e.prototype.setContent=function(t,e,i){var l=n(t);l[0]&&(i?d(l[0].document.body).append(e):d(l[0].document.body).html(e),layedit.sync(t))},e.prototype.sync=function(t){t=n(t);t[0]&&d("#"+t[1].attr("textarea")).val(l(t[0].document.body.innerHTML))},e.prototype.getSelection=function(t){var t=n(t);if(t[0])return t=v(t[0].document),document.selection?t.text:t.toString()},function(a,n,o){var s=this,r=a.find("iframe");r.css({height:o.height}).on("load",function(){var t=r.contents(),e=r.prop("contentWindow"),i=t.find("head"),l=d(["<style>","*{margin: 0; padding: 0;}","body{padding: 10px; line-height: 20px; overflow-x: hidden; word-wrap: break-word; font: 14px Helvetica Neue,Helvetica,PingFang SC,Microsoft YaHei,Tahoma,Arial,sans-serif; -webkit-box-sizing: border-box !important; -moz-box-sizing: border-box !important; box-sizing: border-box !important;}","a{color:#01AAED; text-decoration:none;}a:hover{color:#c00}","p{margin-bottom: 10px;}","img{display: inline-block; border: none; vertical-align: middle;}","pre{margin: 10px 0; padding: 10px; line-height: 20px; border: 1px solid #ddd; border-left-width: 6px; background-color: #F2F2F2; color: #333; font-family: Courier New; font-size: 12px;}","</style>"].join("")),t=t.find("body");i.append(l),t.attr("contenteditable","true").css({"min-height":o.height}).html(n.value||""),h.apply(s,[e,r,n,o]),g.call(s,e,a,o)})}),n=function(t){t=d("#LAY_layedit_"+t);return[t.prop("contentWindow"),t]},l=function(t){return t=8==f.ie?t.replace(/<.+>/g,function(t){return t.toLowerCase()}):t},h=function(e,t,i,l){var a=e.document,n=d(a.body);n.on("keydown",function(t){if(13===t.keyCode){var e=v(a);if("pre"===b(e).parentNode.tagName.toLowerCase())return t.shiftKey?void 0:(y.msg("请暂时用shift+enter"),!1);a.execCommand("formatBlock",!1,"<p>")}}),d(i).parents("form").on("submit",function(){var t=n.html();8==f.ie&&(t=t.replace(/<.+>/g,function(t){return t.toLowerCase()})),i.value=t}),n.on("paste",function(t){a.execCommand("formatBlock",!1,"<p>"),setTimeout(function(){o.call(e,n),i.value=n.html()},100)})},o=function(t){this.document;t.find("*[style]").each(function(){var t=this.style.textAlign;this.removeAttribute("style"),d(this).css({"text-align":t||""})}),t.find("table").addClass("layui-table"),t.find("script,link").remove()},v=function(t){return t.selection?t.selection.createRange():t.getSelection().getRangeAt(0)},b=function(t){return t.endContainer||t.parentElement().childNodes[0]},g=function(a,t,e){function i(){var t,e=d(this),i=e.attr("layedit-event"),l=e.attr("lay-command");e.hasClass(m)||(o.focus(),(t=v(n)).commonAncestorContainer,l?(n.execCommand(l),/justifyLeft|justifyCenter|justifyRight/.test(l)&&n.execCommand("formatBlock",!1,"<p>"),setTimeout(function(){o.focus()},10)):s[i]&&s[i].call(this,t),u.call(a,r,e))}var n=a.document,o=d(n.body),s={link:function(i){var t=b(i),l=d(t).parent();x.call(o,{href:l.attr("href"),target:l.attr("target")},function(t){var e=l[0];"A"===e.tagName?e.href=t.url:c.call(a,"a",{target:t.target,href:t.url,text:t.url},i)})},unlink:function(t){n.execCommand("unlink")},code:function(e){k.call(o,function(t){c.call(a,"pre",{text:t.code,"lay-lang":t.lang},e)})},help:function(){y.open({type:2,title:"帮助",area:["600px","380px"],shadeClose:!0,shade:.1,skin:"layui-layer-msg",content:["","no"]})}},r=t.find(".layui-layedit-tool"),l=/image/;r.find(">i").on("mousedown",function(){var t=d(this).attr("layedit-event");l.test(t)||i.call(this)}).on("click",function(){var t=d(this).attr("layedit-event");l.test(t)&&i.call(this)}),o.on("click",function(){u.call(a,r)})},x=function(t,i){var l=this,t=y.open({type:1,id:"LAY_layedit_link",area:"350px",shade:.05,shadeClose:!0,moveType:1,title:"超链接",skin:"layui-layer-msg",content:['<ul class="layui-form" style="margin: 15px;">','<li class="layui-form-item">','<label class="layui-form-label" style="width: 60px;">URL</label>','<div class="layui-input-block" style="margin-left: 90px">','<input name="url" lay-verify="url" value="'+(t.href||"")+'" autofocus="true" autocomplete="off" class="layui-input">',"</div>","</li>",'<li class="layui-form-item">','<label class="layui-form-label" style="width: 60px;">打开方式</label>','<div class="layui-input-block" style="margin-left: 90px">','<input type="radio" name="target" value="_self" class="layui-input" title="当前窗口"'+("_self"!==t.target&&t.target?"":"checked")+">",'<input type="radio" name="target" value="_blank" class="layui-input" title="新窗口" '+("_blank"===t.target?"checked":"")+">","</div>","</li>",'<li class="layui-form-item" style="text-align: center;">','<button type="button" lay-submit lay-filter="layedit-link-yes" class="layui-btn"> 确定 </button>','<button style="margin-left: 20px;" type="button" class="layui-btn layui-btn-primary"> 取消 </button>',"</li>","</ul>"].join(""),success:function(t,e){a.render("radio"),t.find(".layui-btn-primary").on("click",function(){y.close(e),l.focus()}),a.on("submit(layedit-link-yes)",function(t){y.close(x.index),i&&i(t.field)})}});x.index=t},k=function(i){var l=this,t=y.open({type:1,id:"LAY_layedit_code",area:"550px",shade:.05,shadeClose:!0,moveType:1,title:"插入代码",skin:"layui-layer-msg",content:['<ul class="layui-form layui-form-pane" style="margin: 15px;">','<li class="layui-form-item">','<label class="layui-form-label">请选择语言</label>','<div class="layui-input-block">','<select name="lang">','<option value="JavaScript">JavaScript</option>','<option value="HTML">HTML</option>','<option value="CSS">CSS</option>','<option value="Java">Java</option>','<option value="PHP">PHP</option>','<option value="C#">C#</option>','<option value="Python">Python</option>','<option value="Ruby">Ruby</option>','<option value="Go">Go</option>',"</select>","</div>","</li>",'<li class="layui-form-item layui-form-text">','<label class="layui-form-label">代码</label>','<div class="layui-input-block">','<textarea name="code" lay-verify="required" autofocus="true" class="layui-textarea" style="height: 200px;"></textarea>',"</div>","</li>",'<li class="layui-form-item" style="text-align: center;">','<button type="button" lay-submit lay-filter="layedit-code-yes" class="layui-btn"> 确定 </button>','<button style="margin-left: 20px;" type="button" class="layui-btn layui-btn-primary"> 取消 </button>',"</li>","</ul>"].join(""),success:function(t,e){a.render("select"),t.find(".layui-btn-primary").on("click",function(){y.close(e),l.focus()}),a.on("submit(layedit-code-yes)",function(t){y.close(k.index),i&&i(t.field)})}});k.index=t},C={html:'<i class="layui-icon layedit-tool-html" title="HTML源代码" lay-command="html" layedit-event="html"">&#xe64b;</i><span class="layedit-tool-mid"></span>',strong:'<i class="layui-icon layedit-tool-b" title="加粗" lay-command="Bold" layedit-event="b"">&#xe62b;</i>',italic:'<i class="layui-icon layedit-tool-i" title="斜体" lay-command="italic" layedit-event="i"">&#xe644;</i>',underline:'<i class="layui-icon layedit-tool-u" title="下划线" lay-command="underline" layedit-event="u"">&#xe646;</i>',del:'<i class="layui-icon layedit-tool-d" title="删除线" lay-command="strikeThrough" layedit-event="d"">&#xe64f;</i>',"|":'<span class="layedit-tool-mid"></span>',left:'<i class="layui-icon layedit-tool-left" title="左对齐" lay-command="justifyLeft" layedit-event="left"">&#xe649;</i>',center:'<i class="layui-icon layedit-tool-center" title="居中对齐" lay-command="justifyCenter" layedit-event="center"">&#xe647;</i>',right:'<i class="layui-icon layedit-tool-right" title="右对齐" lay-command="justifyRight" layedit-event="right"">&#xe648;</i>',link:'<i class="layui-icon layedit-tool-link" title="插入链接" layedit-event="link"">&#xe64c;</i>',unlink:'<i class="layui-icon layedit-tool-unlink layui-disabled" title="清除链接" lay-command="unlink" layedit-event="unlink"">&#xe64d;</i>',face:'<i class="layui-icon layedit-tool-face" title="表情" layedit-event="face"">&#xe650;</i>',image:'<i class="layui-icon layedit-tool-image" title="图片" layedit-event="image">&#xe64a;<input type="file" name="file"></i>',code:'<i class="layui-icon layedit-tool-code" title="插入代码" layedit-event="code">&#xe64e;</i>',help:'<i class="layui-icon layedit-tool-help" title="帮助" layedit-event="help">&#xe607;</i>'},s=new e;t(i,s)});