;
! function (win) {
    win.YSZ.prototype.init = function () {
        var defer = $.Deferred(),
            ythis = this,
            $ = layui.jquery;
        if (ythis.options) {
            ythis.render();
        } else {
            if (ythis.elem && $(ythis.elem).length > 0) {
                $(ythis.elem).empty();
                $(ythis.elem).appendTo(ythis.loadingicon());
            }
            // ythis.getComponentData((rows) => {
            //     if (rows && rows.length > 0) {
            //         for (var i = 0; i < rows.length; i++) {
            //             var row = rows[i];
            //             ythis.options = row;
            //             ythis.render();
            //         }
            //     }
            // }, (err) => {
            //     if (ythis.elem && $(ythis.elem).length > 0) {
            //         $(ythis.elem).empty();
            //         $(ythis.elem).appendTo(ythis.loaderricon());
            //     }
            // });
        }
        return defer;
    };

}(window);