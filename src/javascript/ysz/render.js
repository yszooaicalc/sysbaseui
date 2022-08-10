;
! function(win) {
    win.YSZ.prototype.render = function() {
        var ythis = this;
        if (!ythis.options) return;
        layui.use(['jquery'], function() {
            var $ = layui.jquery,
                elem = ythis.elem || ythis.options.elem || win.default.elem;
            if ($(elem).length == 0) return;
            $(elem).empty();

        });
    };

}(window);