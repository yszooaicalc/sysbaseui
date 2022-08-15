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
                    yu.bind_event.call(this, y, 'click');
                });
                bind_trigger_event.call(y, 'click', () => { $tag.trigger('click'); });
            }
        });
        return y;
    };
}(window); 