/* 
    echart自定义仪表盘
*/

var gauge = {
    getOption :function(){  
        var option = {
            //backgroundColor: '#FFFFFF',
            tooltip: {
                show: true,
                formatter: "{a}：{c}%",
                position: ['15%', '60%']
            },
            series: [{
                name: "CPU平均使用率",
                type: 'gauge',
                startAngle: 220,
                endAngle: -40,
                splitNumber: 10,     //刻度数量
                min: 0,
                max: 100,
                radius: '75%',       //图表尺寸
                axisLine: {          //仪表盘轴线相关配置。(圆环)
                    show: true,
                    lineStyle: {
                        width: 0,
                        shadowBlur: 0,
                        color: [
                            [0.2, '#00B0F0'],
                            [0.8, '#00B0F0'],
                            [1, '#00B0F0']
                        ]
                    }
                },
                z:3,
                axisTick: {      //刻度样式
                    show: true,
                    lineStyle: {
                        color: "#7bb6c5",
                        width: 1
                    },
                    length: -5,
                    splitNumber: 10
                },
                splitLine: {      //分隔线样式。(最长那条)
                    show: true,
                    length: 5,
                    lineStyle: {
                        color:'#999',  //#7bb6c5   //517c92
                        width: 1,
                    }
                },
                axisLabel: {      //刻度标签。
                    distance: -30,
                    textStyle: {
                        color: "#999",
                        fontSize: "12",
                    },
                    formatter: function(e) {
                        switch (e + "") {
                            case "0":
                                return "0";
                            case "10":
                                return "10";
                            case "20":
                                return "20";
                            case "30":
                                return "30";
                            case "40":
                                return "40";
                            case "50":
                                return "50";
                            case "60":
                                return "60";
                            case "70":
                                return "70";
                            case "80":
                                return "80";
                            case "90":
                                return "90";
                            default:
                                return e;
                        }
                    }
                },
                pointer: {
                    show: true,
                },
                itemStyle:{
                    normal:{
                        color:"#43B7D3",   //指针颜色
                    },
                    emphasis: {	
                        color:"#00a2ff",	
                        shadowBlur: 40,
                        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                    }
                },
                detail: {           //指针评价
                    show:false,
                    //offsetCenter: [0, 0],
                    textStyle: {
                        fontSize: 22,
                        color: "#C7FBFC"
                    },
                    
                },
                title: {
                    show:true,
                    textStyle: {
                        fontSize: 22,
                        color: "#fff"
                    },
                    offsetCenter: [0, 0],
                },
                data: [{
                    name: "0",
                    value: Math.floor("0")   /** 使用率数值 **/
                }]
            },{
                //圆心圈
                tooltip: {
                    show: false,
                },
                label: {
                    normal: {
                        show: false,    //删除线条
                    }
                },		 
                name: '值',
                type: 'pie',
                clockWise: true,        //顺时加载
                hoverAnimation: false,  //鼠标移入变大
                startAngle: 270,        //起始角度 ， 逆时针算 右：0
                radius: [0, 30],
                z:1,					
                itemStyle: {
                    normal: {
                        color:"#43B7D3",
                        shadowBlur: 40,
                        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                    },
                    emphasis: {	
                        color:"#00a2ff",	
                        shadowBlur: 40,
                        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                    }
                },		
                data: [{
                     value: 100,
                     name: ''
                 }]
            },{
                //圆心灰圈
                tooltip: {
                    show: false,
                },
                label: {
                    normal: {
                        show: false,    //删除线条
                    }
                },	
                name: '值',
                type: 'pie',
                clockWise: true,        //顺时加载
                hoverAnimation: false,  //鼠标移入变大
                startAngle: 270,        //起始角度 ， 逆时针算 右：0
                radius: [30, 35],
                z:1,					
                itemStyle: {
                    normal: {
                        color:"#D4EFF4",
                        shadowBlur: 40,
                        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                    },
                    emphasis: {	
                        //color:"#00a2ff",	
                        shadowBlur: 40,
                        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                    }
                },		
                data: [{
                     value: 100,
                     name: ''
                 }]
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
    echartHostInit: function(){  
        $.ajax({
            type:"GET",
            url:'../json/gauge.json',
            typedate:'json',
            success:function(data){
                var _gaugeLData = data.left;
                for(var i=0; i<_gaugeLData.gauge_ID.length; i++){				
                    var gauge_chart = echarts.init(document.getElementById(_gaugeLData.gauge_ID[i]));
                    var gauge_option = gauge.getOption();
                    gauge_option.series[0].name = _gaugeLData.gauge_name[i]; 		    //名称
                    gauge_option.series[0].data = [{
                                name: _gaugeLData.gauge_value_list[i],
                                value: Math.floor(_gaugeLData.gauge_value_list[i])   /** 使用率数值 **/
                            }];
                    //console.log(gauge_option);
                    gauge.initChart(gauge_chart,gauge_option);
                }
            }

        })
    },
    /** 关注应用实例化 **/
    echartApplyInit: function(){  
        $.ajax({
            type:"GET",
            url:'../json/gauge.json',
            dataType:'json',
            success:function(data){
                var _gaugeRData = data.right;
                for(var i=0; i<_gaugeRData.gauge_ID.length; i++){				
                    var gauge_chart = echarts.init(document.getElementById(_gaugeRData.gauge_ID[i]));
                    var gauge_option = gauge.getOption();
                    gauge_option.series[0].name = _gaugeRData.gauge_name[i]; 		    //名称
                    gauge_option.series[0].data = [{
                                name: _gaugeRData.gauge_value_list[i],
                                value: Math.floor(_gaugeRData.gauge_value_list[i])   /** 使用率数值 **/
                            }];
                    //console.log(gauge_option);
                    gauge.initChart(gauge_chart,gauge_option);
                }
            }
        })
    }        	
};
