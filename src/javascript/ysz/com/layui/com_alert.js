;
! function (win) {
    win.YSZ.prototype.com_alert = function (msg, options, func, showOnTop, callback) {
        var y = this;
        layui.use(['jquery', 'layer', 'yszutil'], function () {
            var $ = layui.jquery,
                yu = layui.yszutil,
                alertindex = layer.alert(msg, options, func);
            if (showOnTop || showOnTop === undefined) {
                $('.layui-layer-shade').css('z-index', yu.top_zindex);
                $('.layui-layer-shade').next('[type="dialog"]').css('z-index', yu.top_zindex);
            }
            if (typeof callback === 'function') {
                callback.call(ythis, alertindex);
            }
        });
        return y;
    };
}(window); 