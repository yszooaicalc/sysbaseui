;
! function (win) {
    win.YSZ.prototype.ajax = function (opt) {
        var y = this,
            $ = y.$,
            option = $.extend(true, {}, {
                type: 'post',
                dataType: 'json',
                timeout: 600000,
                cache: true,
            }, opt),
            post_data = function (data) {
                if (!data) { data = {}; }
                data.token = y.token();
                return { requestData: JSON.stringify(data) };
            };
        option['data'] = post_data(opt['data'] || {});
        $.ajax(option);
    };

}(window);