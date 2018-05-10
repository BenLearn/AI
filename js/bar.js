/* 
    echart 柱状图
*/
var bar = {
    getOption :function(){ 
        var option = {
            color:['#006EA5','#DE1713'],
            grid:{
                top:70,
                bottom: 40,
                left:'5%',
                right:'5%'
            },
            legend:{
                show:true,
                top:10,
                right:15,
                data:['事件量','解决量']
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            label:{                
                    normal: {
                        show: true,
                        position: 'insideBottom',
                        distance: 15,
                        align: 'left',
                        verticalAlign: 'middle',
                        rotate: 90,
                        formatter: '{c}  {name|{a}}',
                        fontSize: 16,
                        rich: {
                            name: {
                                textBorderColor: '#fff'
                            }
                        }
                    }               
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name:'事件量',
                type: 'bar',
                data: [220, 182, 191, 234, 290, 225, 320]
            },
            {
                name:'解决量',
                type: 'bar',
                data: [98, 77, 101, 99, 40, 85, 30]
            }]
        };         
        return option;	
    },
    initChart :function(mychart,option){
        mychart.setOption(option);
        window.addEventListener("resize",function(){  /**echart自适应（拖动屏幕）**/
            mychart.resize();
        });
    },
    /** 事件工单量实例化 **/
    echartBarJobNumInit: function(){  
        $.ajax({
            type:"GET",
            url:'../json/bar.json',
            typedate:'json',
            success:function(data){
                BarJobNum_chart = echarts.init(document.getElementById("echartBarJobNum"));
                var _barData = data.top;			
                var bar_option = bar.getOption();
                bar_option.legend.data = _barData.legend;
                bar_option.xAxis.data = _barData.x;
                bar_option.series = _barData.sdata;
                bar.initChart(BarJobNum_chart,bar_option);
            },
            error:function(){
            }

        })
    },
    /** 事件工单量实例化（查询） **/
    echartBarJobNumInitSearch: function(){        
        var data_parent = $(event.target).parents().eq(3).find(".form-inline");
        var data_start_num = $(data_parent).find(".data_start").val();
        var data_end_num = $(data_parent).find(".data_end").val();
        if(data_start_num!='' && data_start_num!=null && data_end_num!='' && data_end_num!=null){
            BarJobNum_chart.dispose();
            bar.echartBarJobNumInit();
        }
    },
    /** 影响单位事件量 **/
    echartBarCompanyInit:function(){
        $.ajax({
            type:"GET",
            url:'../json/bar.json',
            typedate:'json',
            success:function(data){
                BarCompany_chart = echarts.init(document.getElementById("echartBarCompany"));
                var _barData = data.bottom;			
                var bar_option = bar.getOption();
                bar_option.legend.data = _barData.legend;
                bar_option.legend.show =false;
                bar_option.xAxis.data = _barData.x;
                bar_option.series = _barData.sdata;
                bar.initChart(BarCompany_chart,bar_option);
            },
            error:function(){
            }

        })
    },
     /** 影响单位事件量(查询) **/
    echartBarCompanyInitSearch: function(){        
        var data_parent = $(event.target).parents().eq(3).find(".form-inline");
        var data_start_num = $(data_parent).find(".data_start").val();
        var data_end_num = $(data_parent).find(".data_end").val();
        if(data_start_num!='' && data_start_num!=null && data_end_num!='' && data_end_num!=null){
            BarCompany_chart.dispose();
            bar.echartBarCompanyInit();
        }
    },

};
