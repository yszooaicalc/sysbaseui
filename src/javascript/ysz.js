;
! function (win) {
    win.default = {
        top_zindex: 202208161517,
        elem: 'body'
    };

    /**
     * 
     * @param {*} opt 组件参数或组件ID
     * @param {*} elem 绑定组件的元素 
     */
    win.YSZ = function (opt, elem) {
        var y = this;
        layui.use(['jquery'], function () {
            var $ = layui.jquery;
            y.$ = $;
            y.elem = elem;
            if (!opt || !elem || opt && typeof opt !== 'string' && typeof opt !== 'number' && typeof opt !== 'object') {
                y.win_alert('传输参数不正确，无法正常运行');
                return;
            }
            if (typeof opt === 'number') {
                //通过key获取组件信息 
                y.id = opt;
                y.init();
            } else if (typeof opt === 'string') {
                //通过key获取组件信息 
                y.openid = opt;
                y.init();
            } else if (typeof opt === 'object') {
                y.options = opt;
                y.id = y.options.id;
                y.init();
            }
        });
    };
}(window);