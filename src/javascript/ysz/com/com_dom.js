;
! function (win) {
    win.YSZ.prototype.com_dom = function (tag, attr, binddata) {
        var y = this;
        layui.use(['jquery', 'layer', 'yszutil'], function () {
            var $ = layui.jquery,
                yu = layui.yszutil;
            if (this.elem) {
                var $tag = $(tag).appendTo($(this.elem)).attr({ id: this.id }).attr(attr).data('binddata', binddata);
                $tag.click(function () {

                });
            }
        });
        return this;
    };
}(window); 