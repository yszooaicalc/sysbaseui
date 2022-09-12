;
! function (win) {
    win.YSZ.prototype.com_dom = function (tagname, attr, binddata) {
        var defer = $.Deferred(),
            y = this;
        var $tag;
        if (y.elem) {
            $tag = $(tagname).appendTo($(y.elem)).attr(attr).data('binddata', binddata);
            win.SETYSZDOM.call(y, $tag);
            //事件绑定
            $tag.click(function () {

                //事件触发
                if (y.relation) yu.relations.call(y, y.relation.click);
            });
            //事件触发方法定义
            y.event_click = function () {
                if ($tag) $tag.trigger('click');
            }
            //方法定义
            y.func_getdata = function () {
                var defer = $.Deferred();
                defer.resolve([]);
                return defer;
            };
        }
        defer.resolve(y);
        return defer;
    };
}(window); 