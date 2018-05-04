/* 
    echart 柱状图
*/
app= '';

app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15
};

var labelOption = {
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
};

var bar = {
    getOption :function(){ 
        var option = {
            color:['#006EA5','#DE1713'],
            legend:{
                top:10,
                right:15
            },
            label:{
                normal:{
                    show:true,
                    position:'insideBottom',
                    distance:'15',
                    align:'left',
                    verticalAlign: 'middle',
                    rotate:90,
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
                label: labelOption,
                data: [220, 182, 191, 234, 290, 225, 320]
            },
            {
                name:'解决量',
                type: 'bar',
                label: labelOption,
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
    /** 关注主机实例化 **/
    echartBarJobNumInit: function(){  
        $.ajax({
            type:"GET",
            url:'../json/bar.json',
            typedate:'json',
            success:function(data){
                var _barData = data.top;			
                    var bar_chart = echarts.init(document.getElementById("echartBarJobNum"));
                    var bar_option = bar.getOption();
                    bar.initChart(bar_chart,bar_option);
            },
            error:function(){
                alert();
            }

        })
    }        	
};
