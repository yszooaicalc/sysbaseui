;
! function (win) {
    win.YSZ.prototype.win_alert = function (msg, options, showOnTop) {
        var y = this,
            $ = layui.jquery,
            defer = $.Deferred();
        layui.use(['layer'], function () {
            var alertindex = layer.alert(msg, options || {}, function () {
                layer.close(alertindex);
                defer.resolve(alertindex);
            });
            if (showOnTop || showOnTop === undefined) {
                $('.layui-layer-shade').css('z-index', y.top_zindex || win.default.top_zindex);
                $('.layui-layer-shade').next('[type="dialog"]').css('z-index', y.top_zindex || win.default.top_zindex);
            }
        });
        return defer;
    };
}(window);