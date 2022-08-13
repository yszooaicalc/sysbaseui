;
! function (win) {
    "use strict";
    win.YSZ.prototype.init = function () {
        var y = this;
        layui.use(['jquery', 'layer', 'yszutil'], function () {
            var $ = layui.jquery,
                yu = layui.yszutil;
            $(y.elem).empty();

        });
    };
}(window);