;
! function (win) {

    var _cache = win.sessionStorage,
        _stor = win.localStorage,
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
            var_param_change: function (val, param) {
                //系统变量

                //用户变量

                return val;
            },
            /**
             * 数据转换
             * @param {*} val 原始数据 
             * @param {*} type 0：数字，1：字符，2：日期时间，3：bool，4：PlainObject，5：数组
             * @param {*} param obj类型:{},也可以是数据类型:[{}]
             * @returns 
             */
            datatypechange: function (val, type, param) {
                var rv = null;
                if (type == 5) {//json array
                    if ($.isArray(param)) {
                        if (param.length > 0) {
                            var list = [];
                            $.each(param, function (i, p) {
                                var arr = val ? JSON.parse(yszutil.var_param_change(val, p)) : null;
                                if (arr) {
                                    $.merge(list, arr);
                                }
                            });
                            if (list.length > 0) rv = list;
                        } else {
                            rv = val ? JSON.parse(val) : null;
                        }
                    } else {
                        rv = val ? JSON.parse(yszutil.var_param_change(val, param)) : null;
                    }
                } else {
                    var nval;
                    if (val && param) {
                        var p = {};
                        if ($.isArray(param)) {
                            if (param.length > 0) {
                                $.each(param, function (i, p2) {
                                    $.extend(p, p2);
                                });
                            }
                        } else {
                            p = param
                        }
                        nval = yszutil.var_param_change(val, p);
                    }
                    if (type == 0) {//number
                        rv = parseFloat(nval);
                    } else if (type == 1) {//string
                        rv = nval;
                    } else if (type == 2) {//datetime
                        rv = nval ? new Date(nval) : null;
                    } else if (type == 3) {//bool
                        rv = nval ? new Date(nval) : null;
                    } else if (type == 4) {//json PlainObject
                        rv = nval ? JSON.parse(nval) : null;
                    }
                }
                return rv
            },
            handleobjectparamdata: function (plist, param) {
                var newpl = [],
                    paramlist = $.extend({}, plist),
                    getjson_f = function (type, pid) {
                        var jsonobj;
                        if (type == 4) {
                            jsonobj = {};
                        } else if (type == 5) {
                            jsonobj = [];
                        }
                        for (var i = 0; i < paramlist.length; i++) {
                            var p = paramlist[i];
                            if (p.PID == pid) {
                                var v;
                                if (p.DATATYPE == 4 || p.DATATYPE == 5) {
                                    v = getjson_f(p.DATATYPE, p.ID);
                                } else {
                                    v = p.VALUE;
                                }
                                if (type == 4) {
                                    jsonobj[p.CODE] = v;
                                } else if (type == 5) {
                                    jsonobj.push(v);
                                }
                            }
                        }
                        return JSON.stringify(jsonobj);
                    };
                if (paramlist && paramlist.length > 0) {
                    for (var i = 0; i < paramlist.length; i++) {
                        var p = paramlist[i];
                        if ((p.PID || 0) == 0) {
                            var v
                            if (p.DATATYPE == 4 || p.DATATYPE == 5) {
                                v = getjson_f(p.DATATYPE, p.ID);
                            } else {
                                v = p.VALUE;
                            }
                            newpl.push(yszutil.datatypechange(v, p.DATATYPE, param));
                        }
                    }
                }
                return newpl;
            },
            getobjectdata: function (id) {
                var yu = this,
                    defer = $.Deferred(),
                    opt = { id: id };
                if (id) {
                    var object_info = yu.store(objectdata_cache_key + id);
                    if (object_info) {
                        defer.resolve(object_info);
                        return defer;
                    }
                } else {
                    defer.reject('组件id非法!');
                    return defer;
                }
                opt.success = function (data, textStatus) {
                    if (data.status == 1) {
                        var object_info = null;
                        if (data.ROWS && data.ROWS.length > 0) {
                            var olist = data.ROWS;
                            $.each(olist, function (i, n) {
                                yu.store(objectdata_cache_key + id, n);
                                if (n.ID == id) {
                                    object_info = $.extend({}, n);
                                }
                            });
                        }
                        if (object_info) {
                            defer.resolve(object_info);
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
            },
            relations: function (ev) {
                var y = this,
                    ev;
                if (ev) {
                    var to_f = function (start_ev, param) {
                        //com 组件,func 组件方法,event 组件事件,pfunc 公共方法 
                        var ysz = this,
                            classType = start_ev.OBJECT_INFO.CLASSTYPE,
                            end_ev = start_ev.NEXT_OBJECT_INFO;
                        if (classType == 'com') {
                            ysz = win.FINDYSZ(start_ev.OBJECT_INFO.ID);
                            if (ysz) {
                                if (end_ev) to_f.call(ysz, end_ev, param);
                            } else {
                                ysz = new win.YSZ(start_ev.OBJECT_INFO.OBJECT_ID, start_ev.OBJECT_INFO.ELEM, param, function (ysz) {
                                    if (end_ev) to_f.call(ysz, end_ev, param);
                                });
                            }
                        } else if (classType == 'func') {
                            var func = y[classType + '_' + start_ev.OBJECT_INFO.CODE];
                            if (typeof func === 'function') {
                                var p = yszutil.handleobjectparamdata(com.PARAMLIST, param);
                                func(...p).done(function (d) {
                                    if (end_ev) to_f.call(ysz, end_ev, d || param);
                                });
                            }
                        } else if (classType == 'event') {
                            var event_f = y[classType + '_' + start_ev.OBJECT_INFO.CODE];
                            if (typeof event_f === 'function') {
                                event_f();
                                if (end_ev) to_f.call(ysz, end_ev, param);
                            }
                        } else if (classType == 'pfunc') {
                            var pfunc = yszutil.pfunc[classType + '_' + start_ev.OBJECT_INFO.CODE];
                            if (typeof pfunc === 'function') {
                                var p = yszutil.handleobjectparamdata(com.PARAMLIST, param);
                                pfunc(...p).done(function (d) {
                                    if (end_ev) to_f.call(ysz, end_ev, d || param);
                                });
                            }
                        }
                    };
                    to_f.call(y, ev);
                }
            },
            pfunc: {

            },
            com: {

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
}(window);