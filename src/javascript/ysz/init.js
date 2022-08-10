;
! function(win) {

    win.YSZ.prototype.init = function() {
        var ythis = this;
        layui.use(['jquery'], function() {
            var $ = layui.jquery;
            if (ythis.options) {
                ythis.render();
            } else {
                if (ythis.elem && $(ythis.elem).length > 0) {
                    $(ythis.elem).empty();
                    $(ythis.elem).appendTo(ythis.loadingicon());
                }
                ythis.getComponentData((rows) => {
                    if (rows && rows.length > 0) {
                        for (var i = 0; i < rows.length; i++) {
                            var row = rows[i];
                            ythis.options = row;
                            ythis.render();
                        }
                    }
                }, (err) => {
                    if (ythis.elem && $(ythis.elem).length > 0) {
                        $(ythis.elem).empty();
                        $(ythis.elem).appendTo(ythis.loaderricon());
                    }
                });
            }
        });
    };

}(window);