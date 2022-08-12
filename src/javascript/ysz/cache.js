;
! function (win) {
    var _cache, _stor;
    if (win.sessionStorage) {
        _cache = win.sessionStorage;
    } else {

    }

    if (win.localStorage) {
        _stor = win.localStorage;
    }

    var cache_suffix = 'ysz_',
        /**
         * 删除缓存
         * @param {*} obj 临时或持久缓存，window.sessionStorage ，window.localStorage
         * @param {string} seachkey 正则表达式，查找key 
         */
        remove_cache = function (obj, seachkey) {
            if (!seachkey) return;
            var keys = Object.keys(obj),
                reg = new RegExp(seachkey);
            for (var i = 0; i <= keys.length; i++) {
                var k = keys[i];
                if (reg.test(k)) {
                    obj.removeItem(k);
                }
            }
        },
        cache_f = function (obj, key, val) {
            if (!/^\w+$/.test(key)) {
                this.win_alert('缓存可以不能有特殊符号！');
                return;
            }
            try {
                if (!key || !obj) { return null; }
                var cachekey = cache_suffix + key;
                if (val === '' || val === null) {
                    remove_cache.call(this, obj, '^' + cachekey);
                    return;
                }
                var k_len = 500000;
                if (val === undefined) { //获取 
                    var valstr = '',
                        val_par_i = 0,
                        val_par = '';
                    do {
                        val_par = obj.getItem(cachekey + '_' + val_par_i);
                        if (!val_par) break;
                        valstr += val_par;
                        val_par_i++;
                    } while (val_par);
                    if (valstr) {
                        return JSON.parse(valstr || 'null');
                    }
                } else { //写入
                    //先删除
                    remove_cache.call(this, obj, '^' + cachekey);
                    //再写入
                    var valstr = JSON.stringify(val),
                        val_par_i = 0,
                        val_par;
                    do {
                        val_par = valstr.substring(val_par_i * k_len, (val_par_i + 1) * k_len);
                        if (!val_par) break;
                        obj.setItem(cachekey + '_' + val_par_i, val_par);
                        val_par_i++;
                    } while (val_par);
                }
                return val;
            } catch (e) {
                return null;
            }
        };

    /**
     * 临时缓存
     * @param {*} key 键
     * @param {*} val 值
     * @returns 
     */
    win.YSZ.prototype.cache = function (key, val) {
        var k = (this.id || '') + '_' + key;
        return cache_f.call(this, _cache, k, val);
    };
    /**
     * 持久化缓存
     * @param {*} key 键
     * @param {*} val 值 
     * @returns 
     */
    win.YSZ.prototype.store = function (key, val) {
        var k = (this.id || '') + '_' + key;
        return cache_f.call(this, _stor, k, val);
    };

    /**
     * 
     * 清除缓存 
     * @param {string} seachkey 正则表达式，查找key 
     */
    win.YSZ.prototype.removeCache = function (seachkey) {
        remove_cache.call(this, _cache, seachkey);
    };
    /**
     * 
     * 清除持久化缓存
     * @param {string} seachkey 正则表达式，查找key 
     */
    win.YSZ.prototype.removeStore = function (seachkey) {
        remove_cache.call(this, _stor, seachkey);
    };

}(window);