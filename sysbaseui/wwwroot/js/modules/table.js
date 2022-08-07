layui.define(["laytpl","laypage","form","util"],function(e){"use strict";function y(){var a=this,e=a.config,i=e.id||e.index;return i&&(y.that[i]=a,y.config[i]=e),{config:e,reload:function(e,t){a.reload.call(a,e,t)},reloadData:function(e,t){k.reloadData(i,e,t)},setColsWidth:function(){a.setColsWidth.call(a)},resize:function(){a.resize.call(a)}}}function l(e){var t=y.config[e];return t||f.error(e?"The table instance with ID '"+e+"' not found":"ID argument required"),t||null}function m(e){var t=this.config||{},a=(e=e||{}).item3,i=e.content;return("escape"in a?a:t).escape&&(i=x.escape(i)),(t=e.text&&a.exportTemplet||a.templet||a.toolbar)&&(i="function"==typeof t?t.call(a,e.tplData,e.obj):g(v(t).html()||String(i)).render(v.extend({LAY_COL:a},e.tplData))),e.text?v("<div>"+i+"</div>").text():i}function t(e){return['<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ','{{# if(d.data.skin){ }}lay-skin="{{=d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{=d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>',"<thead>","{{# layui.each(d.data.cols, function(i1, item1){ }}","<tr>","{{# layui.each(item1, function(i2, item2){ }}",'{{# if(item2.fixed && item2.fixed !== "right"){ left = true; } }}','{{# if(item2.fixed === "right"){ right = true; } }}',(e=e||{}).fixed&&"right"!==e.fixed?'{{# if(item2.fixed && item2.fixed !== "right"){ }}':"right"===e.fixed?'{{# if(item2.fixed === "right"){ }}':"","{{# var isSort = !(item2.colGroup) && item2.sort; }}",'<th data-field="{{= item2.field||i2 }}" data-key="{{=d.index}}-{{=i1}}-{{=i2}}" {{# if( item2.parentKey){ }}data-parentkey="{{= item2.parentKey }}"{{# } }} {{# if(item2.minWidth){ }}data-minwidth="{{=item2.minWidth}}"{{# } }} {{#if(item2.colspan){}} colspan="{{=item2.colspan}}"{{#} if(item2.rowspan){}} rowspan="{{=item2.rowspan}}"{{#}}} {{# if(item2.unresize || item2.colGroup){ }}data-unresize="true"{{# } }} class="{{# if(item2.hide){ }}layui-hide{{# } }}{{# if(isSort){ }} layui-unselect{{# } }}{{# if(!item2.field){ }} layui-table-col-special{{# } }}">','<div class="layui-table-cell laytable-cell-',"{{# if(item2.colGroup){ }}","group","{{# } else { }}","{{=d.index}}-{{=i1}}-{{=i2}}",'{{# if(item2.type !== "normal"){ }}'," laytable-cell-{{= item2.type }}","{{# } }}","{{# } }}",'" {{#if(item2.align){}}align="{{=item2.align}}"{{#}}}>','{{# if(item2.type === "checkbox"){ }}','<input type="checkbox" name="layTableCheckbox" lay-skin="primary" lay-filter="layTableAllChoose" {{# if(item2[d.data.checkName]){ }}checked{{# }; }}>',"{{# } else { }}",'<span>{{-item2.title||""}}</span>',"{{# if(isSort){ }}",'<span class="layui-table-sort layui-inline"><i class="layui-edge layui-table-sort-asc" title="升序"></i><i class="layui-edge layui-table-sort-desc" title="降序"></i></span>',"{{# } }}","{{# } }}","</div>","</th>",e.fixed?"{{# }; }}":"","{{# }); }}","</tr>","{{# }); }}","</thead>","</table>"].join("")}function a(e){this.index=++k.index,this.config=v.extend({},this.config,k.config,e),this.render()}function c(a,i,e,l){var n,o;l.colGroup&&(n=0,a++,l.CHILD_COLS=[],o=e+(parseInt(l.rowspan)||1),layui.each(i[o],function(e,t){t.parentKey?t.parentKey===l.key&&(t.PARENT_COL_INDEX=a,l.CHILD_COLS.push(t),c(a,i,o,t)):t.PARENT_COL_INDEX||1<=n&&n==(l.colspan||1)||(t.PARENT_COL_INDEX=a,l.CHILD_COLS.push(t),n+=t.hide?0:parseInt(1<t.colspan?t.colspan:1),c(a,i,o,t))}))}var v=layui.$,g=layui.laytpl,r=layui.laypage,b=layui.layer,h=layui.form,x=layui.util,f=layui.hint(),p=layui.device(),k={config:{checkName:"LAY_CHECKED",indexName:"LAY_TABLE_INDEX",disabledName:"LAY_DISABLED"},cache:{},index:layui.table?layui.table.index+1e4:0,set:function(e){var t=this;return t.config=v.extend({},t.config,e),t},on:function(e,t){return layui.onevent.call(this,C,e,t)}},C="table",w="layui-hide",d="layui-hide-v",T="layui-none",s="layui-table-view",u=".layui-table-header",L=".layui-table-body",N=".layui-table-pageview",D=".layui-table-sort",A="layui-table-edit",E="layui-table-hover",_="layui-table-col-special",j="LAY_TABLE_MOVE_DICT",i=['<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ','{{# if(d.data.skin){ }}lay-skin="{{=d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{=d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>',"<tbody></tbody>","</table>"].join(""),R=[,"{{# if(d.data.toolbar){ }}",'<div class="layui-table-tool">','<div class="layui-table-tool-temp"></div>','<div class="layui-table-tool-self"></div>',"</div>","{{# } }}",'<div class="layui-table-box">',"{{# if(d.data.loading){ }}",'<div class="layui-table-init" style="background-color: #fff;">','<i class="layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></i>',"</div>","{{# } }}","{{# var left, right; }}",'<div class="layui-table-header">',t(),"</div>",'<div class="layui-table-body layui-table-main">',i,"</div>","{{# if(left){ }}",'<div class="layui-table-fixed layui-table-fixed-l">','<div class="layui-table-header">',t({fixed:!0}),"</div>",'<div class="layui-table-body">',i,"</div>","</div>","{{# }; }}","{{# if(right){ }}",'<div class="layui-table-fixed layui-table-fixed-r layui-hide">','<div class="layui-table-header">',t({fixed:"right"}),'<div class="layui-table-mend"></div>',"</div>",'<div class="layui-table-body">',i,"</div>","</div>","{{# }; }}","</div>","{{# if(d.data.totalRow){ }}",'<div class="layui-table-total">','<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ','{{# if(d.data.skin){ }}lay-skin="{{=d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{=d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>','<tbody><tr><td><div class="layui-table-cell" style="visibility: hidden;">Total</div></td></tr></tbody>',"</table>","</div>","{{# } }}",'<div class="layui-table-column layui-table-page layui-hide">','<div class="layui-inline layui-table-pageview" id="layui-table-page{{=d.index}}"></div>',"</div>","<style>","{{# layui.each(d.data.cols, function(i1, item1){","layui.each(item1, function(i2, item2){ }}",".laytable-cell-{{=d.index}}-{{=i1}}-{{=i2}}{ ","{{# if(item2.width){ }}","width: {{=item2.width}}px;","{{# } }}"," }","{{# });","}); }}","{{# if(d.data.lineStyle){",'var cellClassName = ".layui-table-view-"+ d.index +" .layui-table-body .layui-table .layui-table-cell";',"}}","{{= cellClassName }}{","display: -webkit-box; -webkit-box-align: center; white-space: normal; {{- d.data.lineStyle }} ","}","{{= cellClassName }}:hover{overflow: auto;}","{{# } }}","{{# if(d.data.css){ }}","{{- d.data.css }}","{{# } }}","</style>"].join(""),S=v(window),F=v(document);a.prototype.config={limit:10,loading:!0,escape:!0,cellMinWidth:60,editTrigger:"click",defaultToolbar:["filter","exports","print"],autoSort:!0,text:{none:"无数据"}},a.prototype.render=function(e){var t=this,a=t.config;if(a.elem=v(a.elem),a.where=a.where||{},a.id=a.id||a.elem.attr("id")||t.index,a.request=v.extend({pageName:"page",limitName:"limit"},a.request),a.response=v.extend({statusName:"code",statusCode:0,msgName:"msg",dataName:"data",totalRowName:"totalRow",countName:"count"},a.response),"object"==typeof a.page&&(a.limit=a.page.limit||a.limit,a.limits=a.page.limits||a.limits,t.page=a.page.curr=a.page.curr||1,delete a.page.elem,delete a.page.jump),!a.elem[0])return t;if("reloadData"===e)return t.pullData(t.page,{type:"reloadData"});a.height&&/^full-\d+$/.test(a.height)&&(t.fullHeightGap=a.height.split("-")[1],a.height=S.height()-t.fullHeightGap),t.setInit();var i,l,e=a.elem,n=e.next("."+s),o=t.elem=v("<div></div>");o.addClass((i=[s,s+"-"+t.index,"layui-form","layui-border-box"],a.className&&i.push(a.className),i.join(" "))).attr({"lay-filter":"LAY-TABLE-FORM-DF-"+t.index,"lay-id":a.id,style:(i=[],a.width&&i.push("width:"+a.width+"px;"),a.height&&i.push("height:"+a.height+"px;"),i.join(""))}).html(g(R).render({data:a,index:t.index})),a.index=t.index,t.key=a.id||a.index,n[0]&&n.remove(),e.after(o),t.layTool=o.find(".layui-table-tool"),t.layBox=o.find(".layui-table-box"),t.layHeader=o.find(u),t.layMain=o.find(".layui-table-main"),t.layBody=o.find(L),t.layFixed=o.find(".layui-table-fixed"),t.layFixLeft=o.find(".layui-table-fixed-l"),t.layFixRight=o.find(".layui-table-fixed-r"),t.layTotal=o.find(".layui-table-total"),t.layPage=o.find(".layui-table-page"),t.renderToolbar(),t.renderPagebar(),t.fullSize(),1<a.cols.length&&(i=t.layFixed.find(u).find("th"),l=t.layHeader.first(),layui.each(i,function(e,t){(t=v(t)).height(l.find('th[data-key="'+t.attr("data-key")+'"]').height()+"px")})),t.pullData(t.page),t.events()},a.prototype.initOpts=function(e){this.config;e.checkbox&&(e.type="checkbox"),e.space&&(e.type="space"),e.type||(e.type="normal"),"normal"!==e.type&&(e.unresize=!0,e.width=e.width||{checkbox:50,radio:50,space:30,numbers:60}[e.type])},a.prototype.setInit=function(e){var a,c=this,r=c.config;function i(e){var t,a=(e=e||r.elem.parent()).width();try{t="none"===e.css("display")}catch(e){}return!e[0]||a&&!t?a:i(e.parent())}if(r.clientWidth=r.width||i(),"width"===e)return r.clientWidth;r.css&&-1===r.css.indexOf(s)&&(a=r.css.split("}"),layui.each(a,function(e,t){t&&(a[e]="."+s+"-"+c.index+" "+t)}),r.css=a.join("}"));var d=function(a,e,i,l){var n,o;l?(l.key=a+"-"+i,l.hide=l.hide||!1,l.colspan=l.colspan||1,l.rowspan=l.rowspan||1,c.initOpts(l),(n=a+(parseInt(l.rowspan)||1))<r.cols.length?(l.colGroup=!0,o=0,layui.each(r.cols[n],function(e,t){t.HAS_PARENT||1<=o&&o==(l.colspan||1)||(t.HAS_PARENT=!0,t.parentKey=a+"-"+i,o+=parseInt(1<t.colspan?t.colspan:1),d(n,r.cols[n],e,t))})):l.colGroup=!1):e.splice(i,1)};layui.each(r.cols,function(a,i){if(a)return!0;layui.each(i,function(e,t){d(a,i,e,t)})})},a.prototype.renderToolbar=function(){var e=this.config,t=['<div class="layui-inline" lay-event="add"><i class="layui-icon layui-icon-add-1"></i></div>','<div class="layui-inline" lay-event="update"><i class="layui-icon layui-icon-edit"></i></div>','<div class="layui-inline" lay-event="delete"><i class="layui-icon layui-icon-delete"></i></div>'].join(""),a=this.layTool.find(".layui-table-tool-temp"),i=("default"===e.toolbar?a.html(t):"string"==typeof e.toolbar&&(t=v(e.toolbar).html()||"")&&a.html(g(t).render(e)),{filter:{title:"筛选列",layEvent:"LAYTABLE_COLS",icon:"layui-icon-cols"},exports:{title:"导出",layEvent:"LAYTABLE_EXPORT",icon:"layui-icon-export"},print:{title:"打印",layEvent:"LAYTABLE_PRINT",icon:"layui-icon-print"}}),l=[];"object"==typeof e.defaultToolbar&&layui.each(e.defaultToolbar,function(e,t){t="string"==typeof t?i[t]:t;t&&l.push('<div class="layui-inline" title="'+t.title+'" lay-event="'+t.layEvent+'"><i class="layui-icon '+t.icon+'"></i></div>')}),this.layTool.find(".layui-table-tool-self").html(l.join(""))},a.prototype.renderPagebar=function(){var e,t=this.config,a=this.layPagebar=v('<div class="layui-inline layui-table-pagebar"></div>');t.pagebar&&((e=v(t.pagebar).html()||"")&&a.append(g(e).render(t)),this.layPage.append(a))},a.prototype.setParentCol=function(e,t){var a=this.config,i=this.layHeader.find('th[data-key="'+a.index+"-"+t+'"]'),l=parseInt(i.attr("colspan"))||0;i[0]&&(t=t.split("-"),a=a.cols[t[0]][t[1]],e?l--:l++,i.attr("colspan",l),i[l<1?"addClass":"removeClass"](w),a.colspan=l,a.hide=l<1,(t=i.data("parentkey"))&&this.setParentCol(e,t))},a.prototype.setColsPatch=function(){var a=this,e=a.config;layui.each(e.cols,function(e,t){layui.each(t,function(e,t){t.hide&&a.setParentCol(t.hide,t.parentKey)})})},a.prototype.setColsWidth=function(){function e(n){layui.each(o.cols,function(e,l){layui.each(l,function(e,t){var a=0,i=t.minWidth||o.cellMinWidth;t?t.colGroup||t.hide||(n?r&&r<i&&(c--,a=i):(a=t.width||0,/\d+%$/.test(a)?(a=Math.floor(parseFloat(a)/100*s))<i&&(a=i):a||(t.width=a=0,c++)),t.hide&&(a=0),d+=a):l.splice(e,1)})}),d<s&&c&&(r=(s-d)/c)}var t,a,i,l=this,o=l.config,n=0,c=0,r=0,d=0,s=l.setInit("width"),u=(l.eachCols(function(e,t){t.hide||n++}),s=s-("line"===o.skin||"nob"===o.skin?2:n+1)-l.getScrollWidth(l.layMain[0])-1,e(),e(!0),l.autoColNums=c,l.eachCols(function(e,t){var a=t.minWidth||o.cellMinWidth;t.colGroup||t.hide||(0===t.width?l.getCssRule(o.index+"-"+t.key,function(e){e.style.width=Math.floor(a<=r?r:a)+"px"}):/\d+%$/.test(t.width)&&l.getCssRule(o.index+"-"+t.key,function(e){e.style.width=Math.floor(parseFloat(t.width)/100*s)+"px"}))}),l.layMain.width()-l.getScrollWidth(l.layMain[0])-l.layMain.children("table").outerWidth());l.autoColNums&&-n<=u&&u<=n&&(i=(a=(t=function(e){return!(e=e||l.layHeader.eq(0).find("thead th:last-child")).data("field")&&e.prev()[0]?t(e.prev()):e})()).data("key"),l.getCssRule(i,function(e){var t=e.style.width||a.outerWidth();e.style.width=parseFloat(t)+u+"px",0<l.layMain.height()-l.layMain.prop("clientHeight")&&(e.style.width=parseFloat(e.style.width)-1+"px")})),l.loading(!0)},a.prototype.resize=function(){this.fullSize(),this.setColsWidth(),this.scrollPatch()},a.prototype.reload=function(e,t,a){var i=this;e=e||{},delete i.haveInit,layui.each(e,function(e,t){"array"===layui.type(t)&&delete i.config[e]}),i.config=v.extend(t,{},i.config,e),i.render(a)},a.prototype.errorView=function(e){var t=this,a=t.layMain.find("."+T),e=v('<div class="'+T+'">'+(e||"Error")+"</div>");a[0]&&(t.layNone.remove(),a.remove()),t.layFixed.addClass(w),t.layMain.find("tbody").html(""),t.layMain.append(t.layNone=e),t.layTotal.addClass(d),t.layPage.find(N).addClass(d),k.cache[t.key]=[],t.syncCheckAll()},a.prototype.page=1,a.prototype.pullData=function(t,a){function i(){"object"==typeof n.initSort&&l.sort(n.initSort.field,n.initSort.type)}var e,l=this,n=l.config,o=n.request,c=n.response;a=a||{},"function"==typeof n.before&&n.before(n),l.startTime=(new Date).getTime(),n.url?((e={})[o.pageName]=t,e[o.limitName]=n.limit,o=v.extend(e,n.where),n.contentType&&0==n.contentType.indexOf("application/json")&&(o=JSON.stringify(o)),l.loading(),v.ajax({type:n.method||"get",url:n.url,contentType:n.contentType,data:o,dataType:n.dataType||"json",jsonpCallback:n.jsonpCallback,headers:n.headers||{},success:function(e){(e="function"==typeof n.parseData?n.parseData(e)||e:e)[c.statusName]!=c.statusCode?(l.renderForm(),l.errorView(e[c.msgName]||'返回的数据不符合规范，正确的成功状态码应为："'+c.statusName+'": '+c.statusCode)):(l.renderData({res:e,curr:t,count:e[c.countName],type:a.type}),i(),n.time=(new Date).getTime()-l.startTime+" ms"),l.setColsWidth(),"function"==typeof n.done&&n.done(e,t,e[c.countName])},error:function(e,t){l.errorView("请求异常，错误提示："+t),l.renderForm(),l.setColsWidth(),"function"==typeof n.error&&n.error(e,t)}})):"array"===layui.type(n.data)&&(e=t*n.limit-n.limit,(o={})[c.dataName]=n.data.concat().splice(e,n.limit),o[c.countName]=n.data.length,"object"==typeof n.totalRow&&(o[c.totalRowName]=v.extend({},n.totalRow)),l.renderData({res:o,curr:t,count:o[c.countName],type:a.type}),i(),l.setColsWidth(),"function"==typeof n.done&&n.done(o,t,o[c.countName]))},a.prototype.eachCols=function(e){return k.eachCols(null,e,this.config.cols),this},a.prototype.col=function(e){try{return e=e.split("-"),this.config.cols[e[1]][e[2]]}catch(e){return f.error(e),{}}},a.prototype.renderData=function(e){function t(){var s;if(y.HAS_SET_COLS_PATCH||u.setColsPatch(),y.HAS_SET_COLS_PATCH=!0,!n&&u.sortKey)return u.sort(u.sortKey.field,u.sortKey.sort,!0);layui.each(o,function(o,c){var a=[],i=[],r=[],d=o+y.limit*(l-1)+1;"array"===layui.type(c)&&0===c.length||(n||(c[k.config.indexName]=o),u.eachCols(function(e,l){var e=l.field||e,t=y.index+"-"+l.key,n=c[e];null==n&&(n=""),l.colGroup||(t=['<td data-field="'+e+'" data-key="'+t+'" '+(e=[],l.templet&&e.push('data-content="'+x.escape(n)+'"'),l.toolbar&&e.push('data-off="true"'),l.event&&e.push('lay-event="'+l.event+'"'),l.minWidth&&e.push('data-minwidth="'+l.minWidth+'"'),e.join(" "))+' class="'+(e=[],l.hide&&e.push(w),l.field||e.push(_),e.join(" "))+'">','<div class="layui-table-cell laytable-cell-'+("normal"===l.type?t:t+" laytable-cell-"+l.type)+'"'+(l.align?' align="'+l.align+'"':"")+(e=[],l.style&&e.push('style="'+l.style+'"'),e.join(" "))+">"+function(){var e,t=v.extend(!0,{LAY_INDEX:d,LAY_COL:l},c),a=k.config.checkName,i=k.config.disabledName;switch(l.type){case"checkbox":return'<input type="checkbox" name="layTableCheckbox" lay-skin="primary" '+(e=[],l[a]&&(c[a]=l[a],l[a]&&(e[0]="checked")),t[a]&&(e[0]="checked"),t[i]&&e.push("disabled"),e.join(" "))+">";case"radio":return t[a]&&(s=o),'<input type="radio" name="layTableRadio_'+y.index+'" '+(e=[],t[a]&&(e[0]="checked"),t[i]&&e.push("disabled"),e.join(" "))+' lay-type="layTableRadio">';case"numbers":return d}return l.toolbar?g(v(l.toolbar).html()||"").render(t):m.call(u,{item3:l,content:n,tplData:t})}(),"</div></td>"].join(""),a.push(t),l.fixed&&"right"!==l.fixed&&i.push(t),"right"===l.fixed&&r.push(t))}),h.push('<tr data-index="'+o+'">'+a.join("")+"</tr>"),f.push('<tr data-index="'+o+'">'+i.join("")+"</tr>"),p.push('<tr data-index="'+o+'">'+r.join("")+"</tr>"))}),"fixed"===y.scrollPos&&"reloadData"===e.type||u.layBody.scrollTop(0),"reset"===y.scrollPos&&u.layBody.scrollLeft(0),u.layMain.find("."+T).remove(),u.layMain.find("tbody").html(h.join("")),u.layFixLeft.find("tbody").html(f.join("")),u.layFixRight.find("tbody").html(p.join("")),u.renderForm(),"number"==typeof s&&u.setThisRowChecked(s),u.syncCheckAll(),u.fullSize(),u.haveInit?u.scrollPatch():setTimeout(function(){u.scrollPatch()},50),u.haveInit=!0,b.close(u.tipsIndex)}var u=this,y=u.config,a=e.res,l=e.curr,i=e.count,n=e.sort,o=a[y.response.dataName]||[],a=a[y.response.totalRowName],h=[],f=[],p=[];return k.cache[u.key]=o,u.layTotal[0==o.length?"addClass":"removeClass"](d),u.layPage[y.page||y.pagebar?"removeClass":"addClass"](w),u.layPage.find(N)[!y.page||0==i||0===o.length&&1==l?"addClass":"removeClass"](d),0===o.length?(u.renderForm(),u.errorView(y.text.none)):(u.layFixLeft.removeClass(w),n?t():(t(),u.renderTotal(o,a),u.layTotal&&u.layTotal.removeClass(w),void(y.page&&(y.page=v.extend({elem:"layui-table-page"+y.index,count:i,limit:y.limit,limits:y.limits||[10,20,30,40,50,60,70,80,90],groups:3,layout:["prev","page","next","skip","count","limit"],prev:'<i class="layui-icon">&#xe603;</i>',next:'<i class="layui-icon">&#xe602;</i>',jump:function(e,t){t||(u.page=e.curr,y.limit=e.limit,u.pullData(e.curr))}},y.page),y.page.count=i,r.render(y.page)))))},a.prototype.renderTotal=function(e,o){var c,r=this,d=r.config,s={};d.totalRow&&(layui.each(e,function(e,i){"array"===layui.type(i)&&0===i.length||r.eachCols(function(e,t){var e=t.field||e,a=i[e];t.totalRow&&(s[e]=(s[e]||0)+(parseFloat(a)||0))})}),r.dataTotal={},c=[],r.eachCols(function(e,t){var a,e=t.field||e,i=o&&o[t.field],l=(a=t.totalRowText||"",n="totalRowDecimals"in t?t.totalRowDecimals:2,n=parseFloat(s[e]).toFixed(n),(l={LAY_COL:t})[e]=n,n=t.totalRow&&m.call(r,{item3:t,content:n,tplData:l})||a,i||n),n=['<td data-field="'+e+'" data-key="'+d.index+"-"+t.key+'" '+(a=[],t.align&&a.push('align="'+t.align+'"'),t.minWidth&&a.push('data-minwidth="'+t.minWidth+'"'),a.join(" "))+' class="'+(n=[],t.hide&&n.push(w),t.field||n.push(_),n.join(" "))+'">','<div class="layui-table-cell laytable-cell-'+(a=d.index+"-"+t.key,"normal"===t.type?a:a+" laytable-cell-"+t.type)+'"'+(n=[],t.style&&n.push('style="'+t.style+'"'),n.join(" "))+">"+("string"==typeof(a=t.totalRow||d.totalRow)?g(a).render(v.extend({TOTAL_NUMS:i||s[e],LAY_COL:t},t)):l),"</div></td>"].join("");t.field&&(r.dataTotal[e]=l),c.push(n)}),r.layTotal.find("tbody").html("<tr>"+c.join("")+"</tr>"))},a.prototype.getColElem=function(e,t){var a=this.config;return e.eq(0).find(".laytable-cell-"+a.index+"-"+t+":eq(0)")},a.prototype.renderForm=function(e){this.config;var t=this.elem.attr("lay-filter");h.render(e,t)},a.prototype.setThisRowChecked=function(e){this.config;var t="layui-table-click";this.layBody.find('tr[data-index="'+e+'"]').addClass(t).siblings("tr").removeClass(t)},a.prototype.sort=function(l,e,t,a){var i,n=this,o={},c=n.config,r=c.elem.attr("lay-filter"),d=k.cache[n.key];"string"==typeof l&&(s=l,n.layHeader.find("th").each(function(e,t){var a=v(this),i=a.data("field");if(i===l)return l=a,s=i,!1}));try{var s=s||l.data("field"),u=l.data("key");if(n.sortKey&&!t&&s===n.sortKey.field&&e===n.sortKey.sort)return;var y=n.layHeader.find("th .laytable-cell-"+u).find(D);n.layHeader.find("th").find(D).removeAttr("lay-sort"),y.attr("lay-sort",e||null),n.layFixed.find("th")}catch(e){f.error("Table modules: sort field '"+s+"' not matched")}n.sortKey={field:s,sort:e},c.autoSort&&("asc"===e?i=layui.sort(d,s):"desc"===e?i=layui.sort(d,s,!0):(i=layui.sort(d,k.config.indexName),delete n.sortKey,delete c.initSort)),o[c.response.dataName]=i||d,n.renderData({res:o,curr:n.page,count:n.count,sort:!0}),a&&(c.initSort={field:s,type:e},layui.event.call(l,C,"sort("+r+")",c.initSort))},a.prototype.loading=function(e){var t=this;t.config.loading&&(e?(t.layInit&&t.layInit.remove(),delete t.layInit,t.layBox.find(".layui-table-init").remove()):(t.layInit=v(['<div class="layui-table-init">','<i class="layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></i>',"</div>"].join("")),t.layBox.append(t.layInit)))},a.prototype.setCheckData=function(e,t){var a=this.config,i=k.cache[this.key];i[e]&&"array"!==layui.type(i[e])&&(i[e][a.checkName]=t)},a.prototype.syncCheckAll=function(){function e(a){t.eachCols(function(e,t){"checkbox"===t.type&&(t[i.checkName]=a)})}var t=this,i=t.config,a=t.layHeader.find('input[name="layTableCheckbox"]');a[0]&&(k.checkStatus(t.key).isAll?(a[0].checked||(a.prop("checked",!0),t.renderForm("checkbox")),e(!0)):(a[0].checked&&(a.prop("checked",!1),t.renderForm("checkbox")),e(!1)))},a.prototype.getCssRule=function(a,i){var e=this.elem.find("style")[0],e=e.sheet||e.styleSheet||{},e=e.cssRules||e.rules;layui.each(e,function(e,t){if(t.selectorText===".laytable-cell-"+a)return i(t),!0})},a.prototype.fullSize=function(){var e=this,t=e.config,a=t.height;e.fullHeightGap&&(a=S.height()-e.fullHeightGap,e.elem.css("height",a=a<135?135:a)),a&&(a=parseFloat(a)-(e.layHeader.outerHeight()||38),t.toolbar&&(a-=e.layTool.outerHeight()||50),t.totalRow&&(a-=e.layTotal.outerHeight()||40),(t.page||t.pagebar)&&(a-=e.layPage.outerHeight()||43),e.layMain.outerHeight(a))},a.prototype.getScrollWidth=function(e){var t=0;return e?t=e.offsetWidth-e.clientWidth:((e=document.createElement("div")).style.width="100px",e.style.height="100px",e.style.overflowY="scroll",document.body.appendChild(e),t=e.offsetWidth-e.clientWidth,document.body.removeChild(e)),t},a.prototype.scrollPatch=function(){function e(e){var t;i&&l?(e=e.eq(0)).find(".layui-table-patch")[0]||((t=v('<th class="layui-table-patch"><div class="layui-table-cell"></div></th>')).find("div").css({width:i}),e.find("tr").append(t)):e.find(".layui-table-patch").remove()}var t=this,a=t.layMain.children("table"),i=t.layMain.width()-t.layMain.prop("clientWidth"),l=t.layMain.height()-t.layMain.prop("clientHeight"),n=(t.getScrollWidth(t.layMain[0]),a.outerWidth()-t.layMain.width());e(t.layHeader),e(t.layTotal);var o=t.layMain.height()-l;t.layFixed.find(L).css("height",a.height()>=o?o:"auto"),t.layFixRight[0<n?"removeClass":"addClass"](w),t.layFixRight.css("right",i-1)},a.prototype.events=function(){function t(e){var t=v(this),a=t.parents("tr").eq(0).data("index");layui.event.call(this,C,(e||"tool")+"("+d+")",n.call(this,{event:t.attr("lay-event")})),s.setThisRowChecked(a)}var s=this,r=s.config,d=r.elem.attr("lay-filter"),e=s.layHeader.find("th"),u=".layui-table-cell",i=v("body"),l={},n=(s.layTool.on("click","*[lay-event]",function(e){function t(e){var t=v(e.list),a=v('<ul class="layui-table-tool-panel"></ul>');a.html(t),r.height&&a.css("max-height",r.height-(s.layTool.outerHeight()||50)),i.find(".layui-table-tool-panel")[0]||i.append(a),s.renderForm(),a.on("click",function(e){layui.stope(e)}),e.done&&e.done(a,t)}var a,i=v(this),l=i.attr("lay-event");switch(layui.stope(e),F.trigger("table.tool.panel.remove"),b.close(s.tipsIndex),l){case"LAYTABLE_COLS":t({list:(a=[],s.eachCols(function(e,t){t.field&&"normal"==t.type&&a.push('<li><input type="checkbox" name="'+t.field+'" data-key="'+t.key+'" data-parentkey="'+(t.parentKey||"")+'" lay-skin="primary" '+(t.hide?"":"checked")+' title="'+x.escape(t.title||t.field)+'" lay-filter="LAY_TABLE_TOOL_COLS"></li>')}),a.join("")),done:function(){h.on("checkbox(LAY_TABLE_TOOL_COLS)",function(e){var e=v(e.elem),i=this.checked,l=e.data("key"),n=e.data("parentkey");layui.each(r.cols,function(a,e){layui.each(e,function(e,t){a+"-"+e===l&&(e=t.hide,t.hide=!i,s.elem.find('*[data-key="'+r.index+"-"+l+'"]')[i?"removeClass":"addClass"](w),e!=t.hide&&s.setParentCol(!i,n),s.resize())})})})}});break;case"LAYTABLE_EXPORT":p.ie?b.tips("导出功能不支持 IE，请用 Chrome 等高级浏览器导出",this,{tips:3}):t({list:['<li data-type="csv">导出 csv 格式文件</li>','<li data-type="xls">导出 xls 格式文件</li>'].join(""),done:function(e,t){t.on("click",function(){var e=v(this).data("type");k.exportFile.call(s,r.id,null,e)})}});break;case"LAYTABLE_PRINT":var n=window.open("about:blank","_blank"),o=["<style>","body{font-size: 12px; color: #5F5F5F;}","table{width: 100%; border-collapse: collapse; border-spacing: 0;}","th,td{line-height: 20px; padding: 9px 15px; border: 1px solid #ccc; text-align: left; font-size: 12px; color: #5F5F5F;}","a{color: #5F5F5F; text-decoration:none;}","*.layui-hide{display: none}","</style>"].join(""),c=v(s.layHeader.html());c.append(s.layMain.find("table").html()),c.append(s.layTotal.find("table").html()),c.find("th.layui-table-patch").remove(),c.find("thead>tr>th."+_).filter(function(e,t){return!v(t).children(".laytable-cell-group").length}).remove(),c.find("tbody>tr>td."+_).remove(),n.document.write(o+c.prop("outerHTML")),n.document.close(),n.print(),n.close()}layui.event.call(this,C,"toolbar("+d+")",v.extend({event:l,config:r},{}))}),s.layPagebar.on("click","*[lay-event]",function(e){var t=v(this).attr("lay-event");layui.event.call(this,C,"pagebar("+d+")",v.extend({event:t,config:r},{}))}),e.on("mousemove",function(e){var t=v(this),a=t.offset().left,e=e.clientX-a;t.data("unresize")||y.eventMoveElem||(l.allowResize=t.width()-e<=10,i.css("cursor",l.allowResize?"col-resize":""))}).on("mouseleave",function(){v(this);y.eventMoveElem||i.css("cursor","")}).on("mousedown",function(e){var t,a=v(this);l.allowResize&&(t=a.data("key"),e.preventDefault(),l.offset=[e.clientX,e.clientY],s.getCssRule(t,function(e){var t=e.style.width||a.outerWidth();l.rule=e,l.ruleWidth=parseFloat(t),l.minWidth=a.data("minwidth")||r.cellMinWidth}),a.data(j,l),y.eventMoveElem=a)}),y.docEvent||F.on("mousemove",function(e){var t;y.eventMoveElem&&(t=y.eventMoveElem.data(j)||{},y.eventMoveElem.data("resizing",1),e.preventDefault(),t.rule&&((e=t.ruleWidth+e.clientX-t.offset[0])<t.minWidth&&(e=t.minWidth),t.rule.style.width=e+"px",b.close(s.tipsIndex)))}).on("mouseup",function(e){y.eventMoveElem&&(l={},i.css("cursor",""),s.scrollPatch(),y.eventMoveElem.removeData(j),delete y.eventMoveElem)}),y.docEvent=!0,e.on("click",function(e){var t=v(this),a=t.find(D),i=a.attr("lay-sort");if(!a[0]||1===t.data("resizing"))return t.removeData("resizing");s.sort(t,"asc"===i?"desc":"desc"===i?null:"asc",null,!0)}).find(D+" .layui-edge ").on("click",function(e){var t=v(this),a=t.index(),t=t.parents("th").eq(0).data("field");layui.stope(e),0===a?s.sort(t,"asc",null,!0):s.sort(t,"desc",null,!0)}),s.commonMember=function(e){var t=v(this).parents("tr").eq(0).data("index"),r=s.layBody.find('tr[data-index="'+t+'"]'),d=(d=k.cache[s.key]||[])[t]||{};return v.extend({tr:r,data:k.clearCacheKey(d),del:function(){k.cache[s.key][t]=[],r.remove(),s.scrollPatch()},update:function(e,c){e=e||{},layui.each(e,function(i,l){var n=r.children('td[data-field="'+i+'"]'),o=n.children(u);i in d&&(d[i]=l),s.eachCols(function(e,t){var a;t.field==i?(o.html(m.call(s,{item3:t,content:l,tplData:d})),n.data("content",l)):c&&(t.templet||t.toolbar)&&(e=r.children('td[data-field="'+(t.field||e)+'"]'),a=d[t.field],e.children(u).html(m.call(s,{item3:t,content:a,tplData:d})),e.data("content",a))})}),s.renderForm()}},e)}),a=(s.elem.on("click",'input[name="layTableCheckbox"]+',function(){var e=v(this).prev(),t=s.layBody.find('input[name="layTableCheckbox"]'),a=e.parents("tr").eq(0).data("index"),i=e[0].checked,l="layTableAllChoose"===e.attr("lay-filter");e[0].disabled||(l?(t.each(function(e,t){t.checked=i,s.setCheckData(e,i)}),s.syncCheckAll(),s.renderForm("checkbox")):(s.setCheckData(a,i),s.syncCheckAll()),layui.event.call(e[0],C,"checkbox("+d+")",n.call(e[0],{checked:i,type:l?"all":"one"})))}),s.elem.on("click",'input[lay-type="layTableRadio"]+',function(){var e=v(this).prev(),t=e[0].checked,a=k.cache[s.key],i=e.parents("tr").eq(0).data("index");layui.each(a,function(e,t){i===e?t[r.checkName]=!0:delete t[r.checkName]}),s.setThisRowChecked(i),layui.event.call(this,C,"radio("+d+")",n.call(this,{checked:t}))}),s.layBody.on("mouseenter","tr",function(){var e=v(this),t=e.index();e.data("off")||s.layBody.find("tr:eq("+t+")").addClass(E)}).on("mouseleave","tr",function(){var e=v(this),t=e.index();e.data("off")||s.layBody.find("tr:eq("+t+")").removeClass(E)}).on("click","tr",function(){a.call(this,"row")}).on("dblclick","tr",function(){a.call(this,"rowDouble")}),function(e){var t=v(this);t.data("off")||layui.event.call(this,C,e+"("+d+")",n.call(t.children("td")[0]))}),o=(s.layBody.on("change","."+A,function(){var e=v(this),t=this.value,a=e.parent().data("field"),e=e.parents("tr").eq(0).data("index");k.cache[s.key][e][a]=t,layui.event.call(this,C,"edit("+d+")",n.call(this,{value:t,field:a}))}).on("blur","."+A,function(){var e,t=v(this),a=t.parent(),i=a.data("key"),l=t.closest("tr").data("index"),l=k.cache[s.key][l];t.siblings(u).html((e=t[0].value,m.call(s,{item3:s.col(i),content:e,tplData:l}))),a.data("content",t[0].value),t.remove()}),s.layBody.on(r.editTrigger,"td",function(e){var t,a,i,l,n=v(this);n.data("off")||(t=n.data("field"),l=n.data("key"),l=s.col(l),a=n.closest("tr").data("index"),a=k.cache[s.key][a],i=n.children(u),(l="function"==typeof l.edit?l.edit(a):l.edit)&&((l=v("textarea"===l?'<textarea class="layui-input '+A+'"></textarea>':'<input class="layui-input '+A+'">'))[0].value=n.data("content")||a[t]||i.text(),n.find("."+A)[0]||n.append(l),l.focus(),layui.stope(e)))}).on("mouseenter","td",function(){c.call(this)}).on("mouseleave","td",function(){c.call(this,"hide")}),"layui-table-grid-down"),c=function(e){var t=v(this),a=t.children(u);t.data("off")||(e?t.find(".layui-table-grid-down").remove():!(a.prop("scrollWidth")>a.outerWidth()||0<a.find("br").length)||r.lineStyle||a.find("."+o)[0]||t.append('<div class="'+o+'"><i class="layui-icon layui-icon-down"></i></div>'))};s.layBody.on("click","."+o,function(e){var t=v(this).parent().children(u);s.tipsIndex=b.tips(['<div class="layui-table-tips-main" style="margin-top: -'+(t.height()+23)+"px;"+("sm"===r.size?"padding: 4px 15px; font-size: 12px;":"lg"===r.size?"padding: 14px 15px;":"")+'">',t.html(),"</div>",'<i class="layui-icon layui-table-tips-c layui-icon-close"></i>'].join(""),t[0],{tips:[3,""],time:-1,anim:-1,maxWidth:p.ios||p.android?300:s.elem.width()/2,isOutAnim:!1,skin:"layui-table-tips",success:function(e,t){e.find(".layui-table-tips-c").on("click",function(){b.close(t)})}}),layui.stope(e)});s.layBody.on("click","*[lay-event]",function(e){t.call(this),layui.stope(e)}).on("dblclick","*[lay-event]",function(e){t.call(this,"toolDouble"),layui.stope(e)}),s.layMain.on("scroll",function(){var e=v(this),t=e.scrollLeft(),e=e.scrollTop();s.layHeader.scrollLeft(t),s.layTotal.scrollLeft(t),s.layFixed.find(L).scrollTop(e),b.close(s.tipsIndex)}),S.on("resize",function(){s.resize()})},F.on("click",function(){F.trigger("table.remove.tool.panel")}),F.on("table.remove.tool.panel",function(){v(".layui-table-tool-panel").remove()}),k.init=function(a,i){i=i||{};var e=v(a?'table[lay-filter="'+a+'"]':".layui-table[lay-data]"),l="Table element property lay-data configuration item has a syntax error: ";return e.each(function(){var e=v(this),t=e.attr("lay-data");try{t=new Function("return "+t)()}catch(e){f.error(l+t,"error")}var n=[],o=v.extend({elem:this,cols:[],data:[],skin:e.attr("lay-skin"),size:e.attr("lay-size"),even:"string"==typeof e.attr("lay-even")},k.config,i,t);a&&e.hide(),e.find("thead>tr").each(function(i){o.cols[i]=[],v(this).children().each(function(e){var t=v(this),a=t.attr("lay-data");try{a=new Function("return "+a)()}catch(e){return f.error(l+a)}t=v.extend({title:t.text(),colspan:t.attr("colspan")||1,rowspan:t.attr("rowspan")||1},a);t.colspan<2&&n.push(t),o.cols[i].push(t)})}),e.find("tbody>tr").each(function(e){var a=v(this),l={};a.children("td").each(function(e,t){var a=v(this),i=a.data("field");if(i)return l[i]=a.html()}),layui.each(n,function(e,t){e=a.children("td").eq(e);l[t.field]=e.html()}),o.data[e]=l}),k.render(o)}),this},y.that={},y.config={};k.eachCols=function(e,a,i){function l(e){layui.each(e||n,function(e,t){if(t.CHILD_COLS)return l(t.CHILD_COLS);"function"==typeof a&&a(e,t)})}var e=y.config[e]||{},n=[];i=v.extend(!0,[],i||e.cols),layui.each(i,function(a,e){if(a)return!0;layui.each(e,function(e,t){c(0,i,a,t),t.PARENT_COL_INDEX||n.push(t)})});l()},k.checkStatus=function(e){var a=0,i=0,l=[],e=k.cache[e]||[];return layui.each(e,function(e,t){"array"===layui.type(t)?i++:t[k.config.checkName]&&(a++,t[k.config.disabledName]||l.push(k.clearCacheKey(t)))}),{data:l,isAll:!!e.length&&a===e.length-i}},k.getData=function(e){var a=[],e=k.cache[e]||[];return layui.each(e,function(e,t){"array"!==layui.type(t)&&a.push(k.clearCacheKey(t))}),a},k.exportFile=function(e,t,a){t=t||k.clearCacheKey(k.cache[e]);var c,i,l,r,n=(a="object"==typeof a?a:(n={},a&&(n.type=a),n)).type||"csv",d=y.that[e],o=y.config[e]||{},s={csv:"text/csv",xls:"application/vnd.ms-excel"}[n],u=document.createElement("a");if(p.ie)return f.error("IE_NOT_SUPPORT_EXPORTS");u.href="data:"+s+";charset=utf-8,\ufeff"+encodeURIComponent((c=[],i=[],l=[],r={},layui.each(t,function(l,n){var o=[];"object"==typeof e?(layui.each(e,function(e,t){0==l&&c.push(t||"")}),layui.each(k.clearCacheKey(n),function(e,t){o.push('"'+(t||"")+'"')})):k.eachCols(e,function(e,t){var a,i;t.field&&"normal"==t.type&&(t.hide?0==l&&(r[t.field]=!0):(a=n[t.field],i=d.layBody.find('tr[data-index="'+l+'"]>td'),null==a&&(a=""),0==l&&c.push(t.title||""),o.push('"'+m.call(d,{item3:t,content:a,tplData:n,text:"text",obj:d.commonMember.call(i.eq(0),{td:function(e){return i.filter('[data-field="'+e+'"]')}})})+'"')))}),i.push(o.join(","))}),d&&layui.each(d.dataTotal,function(e,t){r[e]||l.push(t)}),c.join(",")+"\r\n"+i.join("\r\n")+"\r\n"+l.join(","))),u.download=(a.title||o.title||"table_"+(o.index||""))+"."+n,document.body.appendChild(u),u.click(),document.body.removeChild(u)},k.resize=function(e){e?l(e)&&y.that[e].resize():layui.each(y.that,function(){this.resize()})},k.reload=function(e,t,a,i){if(l(e))return e=y.that[e],e.reload(t,a,i),y.call(e)},k.reloadData=function(){var a=v.extend([],arguments),i=(a[3]="reloadData",new RegExp("^("+["data","url","method","contentType","dataType","jsonpCallback","headers","where","page","limit","request","response","parseData","scrollPos"].join("|")+")$"));return layui.each(a[1],function(e,t){i.test(e)||delete a[1][e]}),k.reload.apply(null,a)},k.render=function(e){e=new a(e);return y.call(e)},k.clearCacheKey=function(e){return delete(e=v.extend({},e))[k.config.checkName],delete e[k.config.indexName],delete e[k.config.disabledName],e},v(function(){k.init()}),e(C,k)});