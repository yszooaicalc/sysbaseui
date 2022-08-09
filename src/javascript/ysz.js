;
! function(win) {
    /**
     * 
     * @param {*} opt 参数 
     */
    win.YSZ = function(opt) {
        if (typeof opt === 'string') {

        } else if (typeof opt === 'object') {
            this.options = Object.create(opt);
            this.top_zindex = 202208161517;
        }

        layui.use(['jquery'], function() {

        });
    };
    win.YSZ.prototype.init = function() {

    };
}(window);