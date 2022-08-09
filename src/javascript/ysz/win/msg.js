;
! function(win) {
    win.YSZ.prototype.alert = function(msg, options, func, showTop, callback) {
        var ythis = this;
        layui.use(['layer'], function() {
            var msgindex = layer.msg(msg, options, func);
            if (showTop || showTop === undefined) {
                $('.layui-layer-shade').css('z-index', ythis.top_zindex);
                $('.layui-layer-shade').next('[type="dialog"]').css('z-index', ythis.top_zindex);
            }
            if (typeof callback === 'function') {
                callback.call(ythis, alertindex);
            }
        });
    };
}(window);