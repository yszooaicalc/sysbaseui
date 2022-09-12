;
! function (win) {
    "use strict";
    layui.use(['jquery', 'layer', 'yszutil'], function () {
        win.$ = layui.jquery;
        var yu = win.ysz = layui.yszutil;

        /**
         * 
         * @param {*} id 组件ID  
         */
        win.FINDYSZ = function (id) {
            var $ysz = $('[yszcom]#' + id),
                ysz;
            if ($ysz.length > 0) {
                ysz = $ysz.data('ysz');
            }
            return ysz;
        };
        win.SETYSZDOM = function ($dom) {
            var y = this;
            $dom.attr({ id: id, 'yszcom': 'yszcom' }).data('ysz', y);
        };
        /**
         * 
         * @param {*} id 组件ID
         * @param {*} elem 绑定组件的元素 
         */
        win.YSZ = function (id, elem, param, callback) {
            var y = this,
                render = function (com) {
                    if (elem) { $(elem).empty(); }
                    var comf = y[com.CLASSTYPE + '_' + com.CODE];
                    if (typeof comf === 'function') {
                        var p = yu.handleobjectparamdata(com.PARAMLIST, param);
                        comf(...p).done(function (ysz) {
                            if (typeof callback == 'function') {
                                callback(ysz);
                            }
                        });
                    }
                };
            if (!id || typeof id !== 'number') {
                console.error('传输参数不正确，无法正常运行!');
                return;
            }
            this.id = id;
            this.elem = elem;
            this.param = param;
            if (elem) {
                $(elem).empty();
                $(elem).appendTo(yu.loadhtml());
            }
            if (id) {
                yu.getobjectdata(id).done(function (com) {
                    this.com = com;
                    render(com);
                }).fail(function (err) {
                    if (elem) {
                        $(elem).empty();
                        $(elem).appendTo(yu.errhtml(err));
                    }
                });
            } else {
                if (elem) {
                    $(elem).empty();
                    $(elem).appendTo(yu.errhtml());
                }
            }
        };
    });
}(window);