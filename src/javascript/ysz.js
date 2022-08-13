;
! function (win) {
    "use strict";


    /**
     * 
     * @param {*} id 组件ID
     * @param {*} elem 绑定组件的元素 
     */
    win.YSZ = function (id, elem) {
        var y = this;
        y.id = id;
        y.elem = elem || 'body';
        if (!id || typeof id !== 'number') {
            console.error('传输参数不正确，无法正常运行!');
            return;
        }
        y.com = {};
        y.barchart();
    };
}(window);