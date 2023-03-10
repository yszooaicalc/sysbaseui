layui.define('jquery', function (exports) {
    "use strict";

    var $ = layui.$,
        _cache = window.sessionStorage,
        _stor = window.localStorage,
        cache_suffix = 'ysz_',
        token_cache_key = '202208131029_',
        objectdata_cache_key = '202208131042_',
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
                hint.error('缓存可以不能有特殊符号！');
                return;
            }
            try {
                if (!key || !obj) { return null; }
                var cachekey = cache_suffix + key;
                if (val === '' || val === null) {
                    remove_cache(obj, '^' + cachekey);
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
                    remove_cache(obj, '^' + cachekey);
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
        },
        yszutil = {
            top_zindex: 202208131112,
            /**
             * 临时缓存
             * @param {*} key 键
             * @param {*} val 值
             * @returns 
             */
            cache: function (key, val) {
                return cache_f(_cache, key, val);
            },
            /**
         * 持久化缓存
         * @param {*} key 键
         * @param {*} val 值 
         * @returns 
         */
            store: function (key, val) {
                return cache_f(_stor, key, val);
            },
            /**
             * 
             * 清除缓存 
             * @param {string} seachkey 正则表达式，查找key 
             */
            removeCache: function (seachkey) {
                remove_cache(_cache, seachkey);
            },
            /**
             * 
             * 清除持久化缓存
             * @param {string} seachkey 正则表达式，查找key 
             */
            removeStore: function (seachkey) {
                remove_cache(_stor, seachkey);
            },
            ajax: function (opt) {
                var yu = this,
                    option = $.extend(true, {}, {
                        type: 'post',
                        dataType: 'json',
                        timeout: 600000,
                        cache: true,
                    }, opt),
                    token = function () {
                        return yu.cache(token_cache_key) || '';
                    },
                    post_data = function (data) {
                        if (!data) { data = {}; }
                        data.token = token();
                        return { requestData: JSON.stringify(data) };
                    };
                option['data'] = post_data(opt['data'] || {});
                $.ajax(option);
            },
            getobjectdata: function (id) {
                var yu = this,
                    defer = $.Deferred(),
                    opt = { id: id };
                if (id) {
                    var com = yu.store(objectdata_cache_key + id);
                    if (com) {
                        defer.resolve(com);
                        return defer;
                    }
                } else {
                    defer.reject('组件id非法!');
                    return defer;
                }
                opt.success = function (data, textStatus) {
                    if (data.status == 1) {
                        var com = null;
                        if (data.rows && data.rows.length > 0) {
                            $.each(data.rows, function (i, n) {
                                yu.store(objectdata_cache_key + id, n);
                                if (n.id == id) {
                                    com = n;
                                }
                            });
                        }
                        if (com) {
                            defer.resolve(com);
                        } else {
                            defer.reject('组件不存在,请检查id是否正确!');
                        }
                    } else {
                        defer.reject(data.msg);
                    }
                };
                opt.error = function (XMLHttpRequest, textStatus, errorThrown) {
                    defer.reject('访问服务器错误,请检查是否连接网络!');
                };
                yu.ajax({ data: opt });
                return defer;
            },
            loadhtml: function (msg) {
                var html = '<div>' + (msg || '') + '</div>';
                return html;
            },
            errhtml: function (msg) {
                var html = '<div>' + (msg || '') + '</div>';
                return html;
            }
        };
    /**
         * 全部替换
         * @param {string} searchValue 
         * @param {string} replaceValue 
         * @returns 
         */
    String.prototype.replaceAll = function (searchValue, replaceValue) {
        return this.replace(new RegExp(searchValue, "gm"), replaceValue);
    };

    // 输出接口
    exports('yszutil', yszutil);
});