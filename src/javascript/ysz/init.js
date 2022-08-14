;
! function (win) {
    "use strict";
    win.YSZ.prototype.init = function () {
        var y = this;
        layui.use(['jquery', 'layer', 'yszutil'], function () {
            var $ = layui.jquery,
                yu = layui.yszutil;
            if (y.elem) {
                $(y.elem).empty();
                $(y.elem).appendTo(yu.loadhtml());
            }
            if (y.com) {
                y.render();
            } else if (y.id) {
                yu.getcomdata(y.id).done(function (com) {
                    y.com = com;
                    y.render();
                }).fail(function (err) {
                    if (y.elem) {
                        $(y.elem).empty();
                        $(y.elem).appendTo(yu.errhtml(err));
                    }
                });
            } else {
                if (y.elem) {
                    $(y.elem).empty();
                    $(y.elem).appendTo(yu.errhtml());
                }
            }
        });
        return this;
    };
}(window);