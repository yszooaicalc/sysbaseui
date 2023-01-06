;
! function (win) {
    win.YSZ.prototype.com_layui_msg = function (msg, options, func, showTop, callback) {
        var ythis = this;
        layui.use(['jquery', 'layer', 'yszutil'], function () {
            var $ = layui.jquery,
                yu = layui.yszutil,
                msgindex = layer.msg(msg, options, func);
            if (showTop || showTop === undefined) {
                $('.layui-layer-shade').css('z-index', yu.top_zindex);
                $('.layui-layer-shade').next('[type="dialog"]').css('z-index', yu.top_zindex);
            }
            if (typeof callback === 'function') {
                callback.call(ythis, msgindex);
            }
        });
        return this;
    };
}(window);