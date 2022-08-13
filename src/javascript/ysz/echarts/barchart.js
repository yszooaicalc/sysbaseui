;
! function (win) {
    win.YSZ.prototype.barchart = function (msg, options, func, showOnTop, callback) {
        var y = this;
        layui.use(['jquery', 'yszutil', 'echarts'], function () {
            var $ = layui.jquery,
                yu = layui.yszutil,
                echarts = layui.echarts;

            // 接下来的使用就跟之前一样，初始化图表，设置配置项
            var myChart = echarts.init($(y.elem)[0]);
            var option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [150, 230, 224, 218, 135, 147, 260],
                        type: 'line'
                    }
                ]
            };
            myChart.setOption(option);

        });
    };
}(window); 