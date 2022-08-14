;
! function (win) {
    "use strict";
    win.YSZ.prototype.render = function () {
        var y = this;
        layui.use(['jquery', 'layer', 'yszutil'], function () {
            var $ = layui.jquery,
                yu = layui.yszutil;
            if (y.com) {
                if (y.elem) { $(y.elem).empty(); }
                var comcode = y.com.CODE,
                    comf = y['com_' + comcode];
                if (typeof comf === 'function') {
                    comf(...y.com.PARAMLIST);
                }
            }
        });
        return this;
    };
}(window);