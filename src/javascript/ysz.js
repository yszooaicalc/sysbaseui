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
        if (!opt || !elem || opt && typeof opt !== 'string' && typeof opt !== 'number' && typeof opt !== 'object') {
            this.alert('传输参数不正确，无法正常运行');
            return;
        }

        var ythis = this;
        var $ = layui.jquery;
        this.elem = elem;
        if (typeof opt === 'number') {
            //通过key获取组件信息 
            this.id = opt;
            this.init();
        } else if (typeof opt === 'string') {
            //通过key获取组件信息 
            this.openid = opt;
            this.init();
        } else if (typeof opt === 'object') {
            this.options = opt;
            this.id = this.options.id;
            this.init();
        }
    };
}(window);