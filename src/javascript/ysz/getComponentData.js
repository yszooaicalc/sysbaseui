;
! function(win) {
    win.YSZ.prototype.getComponentData = function() {
        var ythis = this,
            opt = {};
        if (this.id) {
            opt = { id: this.id }
        } else if (this.openid) {
            opt = { openid: this.openid }
        }
        this.ajax({data: opt});
    };
}(window);