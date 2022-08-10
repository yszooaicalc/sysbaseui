;
! function(win) {
    win.YSZ.prototype.getComponentData = function(succF, errF) {
        var ythis = this,
            opt = {};
        if (this.id) {
            opt = { id: this.id }
        } else if (this.openid) {
            opt = { openid: this.openid }
        }
        this.ajax({
            data: opt,
            success: function(d) {
                if (typeof succF === 'function') {
                    succF.call(ythis, d);
                }
            },
            error: function(d) {
                if (typeof succF === 'function') {
                    errF.call(ythis, d);
                }
            }
        });
    };
}(window);