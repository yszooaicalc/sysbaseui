;
! function (win) {
    win.YSZ.prototype.com_dom = function (tagname, attr, binddata) {
        var y = this;
        layui.use(['jquery', 'layer', 'yszutil'], function () {
            var $ = layui.jquery,
                yu = layui.yszutil;
            if (y.elem) {
                var $tag = $(tagname).appendTo($(y.elem)).attr({ id: y.id }).attr(attr).data('binddata', binddata);
                $tag.click(function () {
                    yu.events.call(this, y, 'click');
                });
                out_events.call(y, 'click', () => { $tag.trigger('click'); });
            }
        });
        return y;
    };
}(window); 