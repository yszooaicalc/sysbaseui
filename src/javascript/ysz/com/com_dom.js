;
! function (win) {
    win.YSZ.prototype.com_dom = function (tagname, attr, binddata) {
        var y = this;
        layui.use(['jquery', 'layer', 'yszutil'], function () {
            var $ = layui.jquery,
                yu = layui.yszutil;
            if (this.elem) {
                var $tag = $(tagname).appendTo($(this.elem)).attr({ id: this.id }).attr(attr).data('binddata', binddata);
                $tag.click(function () {
                    yu.events.call(this, y, 'click');
                });
            }
        });
        return this;
    };
}(window); 