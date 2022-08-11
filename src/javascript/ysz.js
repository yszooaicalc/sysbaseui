;
! function(win) {
    win.default = {
        top_zindex: 202208161517,
        elem: 'body'
    };

    /**
     * 
     * @param {*} opt 组件参数或组件ID
     * @param {*} elem 绑定组件的元素 
     */
    win.YSZ = function(opt, elem) {
        var ythis = this;
        if (!opt || !elem || opt && typeof opt !== 'string' && typeof opt !== 'number' && typeof opt !== 'object') {
            ythis.alert('传输参数不正确，无法正常运行');
            return;
        }
        layui.use(['jquery'], function() {
            var $ = layui.jquery;
            ythis.elem = elem;
            if (typeof opt === 'number') {
                //通过key获取组件信息 
                ythis.id = opt;
                ythis.init();
            } else if (typeof opt === 'string') {
                //通过key获取组件信息 
                ythis.openid = opt;
                ythis.init();
            } else if (typeof opt === 'object') {
                ythis.options = opt;
                ythis.id = ythis.options.id;
                ythis.init();
            }
        });
    };
}(window);