;
! function(win) {
    /**
     * 全部替换
     * @param {string} searchValue 
     * @param {string} replaceValue 
     * @returns 
     */
    String.prototype.replaceAll = function(searchValue, replaceValue) {
        return this.replace(new RegExp(searchValue, "gm"), replaceValue);
    };

}(window);