;
! function (win) {
    "use strict";

    layui.use(['jquery', 'layer', 'yszutil'], function () {
        win.$ = layui.jquery;
        var y = layui.yszutil;
        win.ysz = function (id, elem, queryparam, callback) {
            if (!id) {
                console.error('传输参数不正确，无法正常运行!');
                return;
            }
            //先从界面找
            var $com = $('[com_id=' + id + ']');
            if ($com.length > 0) {
                var cominfo = $com.data('cominfo'),
                    com = y.handle_com_param(cominfo, queryparam);
                if (typeof callback == 'function') {
                    callback(com);
                }
                return;
            }
            //找不到就生成 
            if (elem) {
                $(elem).empty();
                $(elem).appendTo(y.loadhtml());
            }
            y.get_com(id).done(function (cominfo) {
                if (elem) { $(elem).empty(); }
                var comf = y.com[cominfo.CODE];
                if (typeof comf === 'function') {
                    var com = y.handle_com_param(cominfo, queryparam);
                    comf(...com.paramlist).done(function ($com) {
                        if (typeof callback == 'function') {
                            $com.attr({ 'com_id': id }).data('cominfo', cominfo);
                            callback(com);
                        }
                    });
                }
            }).fail(function (err) {
                if (elem) {
                    $(elem).empty();
                    $(elem).appendTo(y.errhtml(err));
                }
            });
        }
    });
}(window);