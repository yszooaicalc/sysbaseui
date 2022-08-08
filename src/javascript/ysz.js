;
! function(win) {
    /**
     * 
     * @param {*} opt 参数 
     * @param {*} callback 回调 
     */
    win.YSZ = function(opt, callback) {
        this.options = opt || {};
        this.callback = callback;
    };
}(window);