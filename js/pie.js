/* 
    echart自定义圆
*/


/** 双环隐藏缺角  部分公共样式 **/
var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0,0,0,0)',
        borderColor: 'rgba(0,0,0,0)',
        borderWidth: 0
    },
    emphasis: {
        color: 'rgba(0,0,0,0)',
        borderColor: 'rgba(0,0,0,0)',
        borderWidth: 0
    }
};
/** 双环隐藏缺角  部分白色公共样式 **/
var placeHolderStyle1 = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0,0,0,0)',
        borderColor: 'rgba(0,0,0,0)',
        //borderColor: 'rgba(229,229,229,1)',
        borderWidth: 0
    },
    emphasis: {
        color: 'rgba(0,0,0,0)',
        borderColor: 'rgba(0,0,0,0)',
        //borderColor: 'rgba(229,229,229,1)',
        borderWidth: 0
    }
};

var pie_l ={
    getOption :function(){                 
        option = {
            tooltip: {
                trigger: 'item',
                formatter: function(param){
                    if(param.name!=''&&param.name!=null){
                        return param.name +' : ' + param.value+'%'
                    }else{
                        return '';
                    }
                }
            },
            legend:{ 
                orient: 'horizontal', //horizontal  vertical
                top:  15,
                right: 10,
                data:pie_t_data.legend
            },
            series: [{
                //外圈(左)
                name: '值',
                type: 'pie',
                clockWise: false,        //逆时加载
                hoverAnimation: false,  //鼠标移入变大
                startAngle: 90,        //起始角度 ， 逆时针算 右：0
                stillShowZeroSum:false, //是否在数据和为0（一般情况下所有数据为0） 的时候不显示扇区
                radius: [74, 75],
                center: ['16.65%', '55%'],
                label: {
                         normal: {
                             show: true,
                             position: 'center',//'inside', //center中心  outside外侧  inside，inner 内部  
                             formatter: function(param) {
                                return  param.name +':'+ Math.round(param.percent) + '%\n' ;
                                 //return  Math.round(param.percent);
                             },
                             textStyle: {
                                 color: '#333',
                                 fontSize: 14
                             }
                         },
                         emphasis: {
                             show: true,									 
                             textStyle: {
                                 color:'#5ec6d7',
                                 fontSize: 16
                             }
                         }
                },						
                itemStyle: {
                    normal: {
                        color:"#000",
                        borderColor: "#44B7D3",
                        borderWidth: 10,                //带状宽度
                        shadowBlur: 40,
                        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                    },
                    emphasis: {	
                        //color:"#000",							
                        borderColor: {											
                                    type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#00a2ff' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#70ffac' // 100% 处的颜色
                                    }],
                                    //globalCoord: false // 缺省为 false
                        },
                        borderWidth: 12,                //带状宽度
                        shadowBlur: 40,
                        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                    }
                },		
                data: pie_t_data.sdata[0][0]
                
            },{
                //内圈(左)
                name: '值',
                type: 'pie',
                clockWise: false,
                hoverAnimation: false,
                startAngle: 90,        //起始角度 ， 逆时针算 右：0
                stillShowZeroSum:false, //是否在数据和为0（一般情况下所有数据为0） 的时候不显示扇区
                center: ['16.65%', '55%'],
                radius: [64, 65],
                label: {
                         normal: {
                             show: true,
                             position: 'center',//'inside', //center中心  outside外侧  inside，inner 内部  
                             formatter: function(param) {
                               return param.name +':'+ Math.round(param.percent) + '%' ;
                                 //return  '\n'+Math.round(param.percent);
                             },
                             textStyle: {
                                 color: '#333',
                                 //fontWeight: 'bold',
                                 fontSize: 13
                             }
                         },
                         emphasis: {
                             show: true,									 
                             textStyle: {
                                 color:'#64d3e3',
                                 fontSize: 14
                             }
                         }
                },		
                itemStyle: {
                    normal: {
                        color:"#000",
                        borderColor: "#DE1713",
                        borderWidth: 10,                //带状宽度
                        //shadowBlur: 40,
                        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                    },
                    emphasis: {								
                        borderColor: {											
                                    type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#00a2ff' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#70ffac' // 100% 处的颜色
                                    }],
                                    //globalCoord: false // 缺省为 false
                        },
                        borderWidth: 10,                //带状宽度
                        //shadowBlur: 40,
                        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                    }
                },
                data: pie_t_data.sdata[0][1]
            },{
                //外圈(中)
                name: '值',
                type: 'pie',
                clockWise: false,        //逆时加载
                hoverAnimation: false,  //鼠标移入变大
                startAngle: 90,        //起始角度 ， 逆时针算 右：0
                stillShowZeroSum:false, //是否在数据和为0（一般情况下所有数据为0） 的时候不显示扇区
                radius: [74, 75],
                center: ['50%', '55%'],
                label: {
                         normal: {
                             show: true,
                             position: 'center',//'inside', //center中心  outside外侧  inside，inner 内部  
                             formatter: function(param) {
                                return  param.name +':'+ Math.round(param.percent) + '%\n' ;
                                 //return  Math.round(param.percent);
                             },
                             textStyle: {
                                 color: '#333',
                                 fontSize: 14
                             }
                         },
                         emphasis: {
                             show: true,									 
                             textStyle: {
                                 color:'#5ec6d7',
                                 fontSize: 16
                             }
                         }
                },						
                itemStyle: {
                    normal: {
                        color:"#000",
                        borderColor: "#44B7D3",
                        borderWidth: 10,                //带状宽度
                        shadowBlur: 40,
                        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                    },
                    emphasis: {	
                        //color:"#000",							
                        borderColor: {											
                                    type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#00a2ff' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#70ffac' // 100% 处的颜色
                                    }],
                                    //globalCoord: false // 缺省为 false
                        },
                        borderWidth: 12,                //带状宽度
                        shadowBlur: 40,
                        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                    }
                },		
                data: pie_t_data.sdata[1][0]
                
            },{
                //内圈(中)
                name: '值',
                type: 'pie',
                clockWise: false,
                hoverAnimation: false,
                startAngle: 90,        //起始角度 ， 逆时针算 右：0
                stillShowZeroSum:false, //是否在数据和为0（一般情况下所有数据为0） 的时候不显示扇区
                center: ['50%', '55%'],
                radius: [64, 65],
                label: {
                         normal: {
                             show: true,
                             position: 'center',//'inside', //center中心  outside外侧  inside，inner 内部  
                             formatter: function(param) {
                               return param.name +':'+ Math.round(param.percent) + '%' ;
                                 //return  '\n'+Math.round(param.percent);
                             },
                             textStyle: {
                                 color: '#333',
                                 //fontWeight: 'bold',
                                 fontSize: 13
                             }
                         },
                         emphasis: {
                             show: true,									 
                             textStyle: {
                                 color:'#64d3e3',
                                 fontSize: 14
                             }
                         }
                },		
                itemStyle: {
                    normal: {
                        color:"#000",
                        borderColor: "#DE1713",
                        borderWidth: 10,                //带状宽度
                        //shadowBlur: 40,
                        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                    },
                    emphasis: {								
                        borderColor: {											
                                    type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#00a2ff' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#70ffac' // 100% 处的颜色
                                    }],
                                    //globalCoord: false // 缺省为 false
                        },
                        borderWidth: 10,                //带状宽度
                        //shadowBlur: 40,
                        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                    }
                },
                data: pie_t_data.sdata[1][1]
            },{
                //外圈(右)
                name: '值',
                type: 'pie',
                clockWise: false,        //逆时加载
                hoverAnimation: false,  //鼠标移入变大
                startAngle: 90,        //起始角度 ， 逆时针算 右：0
                stillShowZeroSum:false, //是否在数据和为0（一般情况下所有数据为0） 的时候不显示扇区
                radius: [74, 75],
                center: ['83.31%', '55%'],
                label: {
                         normal: {
                             show: true,
                             position: 'center',//'inside', //center中心  outside外侧  inside，inner 内部  
                             formatter: function(param) {
                                return  param.name +':'+ Math.round(param.percent) + '%\n' ;
                                 //return  Math.round(param.percent);
                             },
                             textStyle: {
                                 color: '#333',
                                 fontSize: 14
                             }
                         },
                         emphasis: {
                             show: true,									 
                             textStyle: {
                                 color:'#5ec6d7',
                                 fontSize: 16
                             }
                         }
                },						
                itemStyle: {
                    normal: {
                        color:"#000",
                        borderColor: "#44B7D3",
                        borderWidth: 10,                //带状宽度
                        shadowBlur: 40,
                        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                    },
                    emphasis: {	
                        //color:"#000",							
                        borderColor: {											
                                    type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#00a2ff' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#70ffac' // 100% 处的颜色
                                    }],
                                    //globalCoord: false // 缺省为 false
                        },
                        borderWidth: 12,                //带状宽度
                        shadowBlur: 40,
                        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                    }
                },		
                data: pie_t_data.sdata[2][0]
                
            },{
                //内圈(右)
                name: '值',
                type: 'pie',
                clockWise: false,
                hoverAnimation: false,
                startAngle: 90,        //起始角度 ， 逆时针算 右：0
                stillShowZeroSum:false, //是否在数据和为0（一般情况下所有数据为0） 的时候不显示扇区
                center: ['83.31%', '55%'],
                radius: [64, 65],
                label: {
                         normal: {
                             show: true,
                             position: 'center',//'inside', //center中心  outside外侧  inside，inner 内部  
                             formatter: function(param) {
                                return param.name +':'+ Math.round(param.percent) + '%' ;
                                 //return  '\n'+Math.round(param.percent);
                             },
                             textStyle: {
                                 color: '#333',
                                 //fontWeight: 'bold',
                                 fontSize: 13
                             }
                         },
                         emphasis: {
                             show: true,									 
                             textStyle: {
                                 color:'#64d3e3',
                                 fontSize: 14
                             }
                         }
                },		
                itemStyle: {
                    normal: {
                        color:"#000",
                        borderColor: "#DE1713",
                        borderWidth: 10,                //带状宽度
                        //shadowBlur: 40,
                        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                    },
                    emphasis: {								
                        borderColor: {											
                                    type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#00a2ff' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#70ffac' // 100% 处的颜色
                                    }],
                                    //globalCoord: false // 缺省为 false
                        },
                        borderWidth: 10,                //带状宽度
                        //shadowBlur: 40,
                        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                    }
                },
                data: pie_t_data.sdata[2][1]
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
    echartCpu3Init: function(){
        $.ajax({
            type:"GET",
            url:'../json/pie_left.json',
            dataType: "json",
            success:function(data){
                pie_t_data = data;
                
                    pie_l_chart = echarts.init(document.getElementById(pie_t_data.ID[0]));
                    var pie_option = pie_l.getOption();					
                    /* pie_option.series[0].data = pie_t_data.sdata[i][0];					
                    pie_option.series[1].data = pie_t_data.sdata[i][1];	 */

                    pie_option.series[0].data[1].itemStyle = placeHolderStyle;  //放置变量。必须   
                    pie_option.series[1].data[1].itemStyle = placeHolderStyle1; //放置变量。必须  
                    pie_option.series[2].data[1].itemStyle = placeHolderStyle;  //放置变量。必须   
                    pie_option.series[3].data[1].itemStyle = placeHolderStyle1; //放置变量。必须 
                    pie_option.series[4].data[1].itemStyle = placeHolderStyle;  //放置变量。必须   
                    pie_option.series[5].data[1].itemStyle = placeHolderStyle1; //放置变量。必须                      
                     		
                    pie_l.initChart(pie_l_chart,pie_option);
                    //console.log(pie_option);

                    pie_l_chart2 = echarts.init(document.getElementById(pie_t_data.ID[1]));
                    var pie_option2 = pie_l.getOption();					
                    /* pie_option2.series[0].data = pie_t_data.bdata[j][0];					
                    pie_option2.series[1].data = pie_t_data.bdata[j][1]; */                   

                    pie_option2.series[0].data = pie_t_data.bdata[0][0];
                    pie_option2.series[1].data = pie_t_data.bdata[0][1];
                    pie_option2.series[2].data = pie_t_data.bdata[1][0];
                    pie_option2.series[3].data = pie_t_data.bdata[1][1];
                    pie_option2.series[4].data = pie_t_data.bdata[2][0];
                    pie_option2.series[5].data = pie_t_data.bdata[2][1];

                    pie_option2.series[0].data[1].itemStyle = placeHolderStyle;  //放置变量。必须   
                    pie_option2.series[1].data[1].itemStyle = placeHolderStyle1; //放置变量。必须  
                    pie_option2.series[2].data[1].itemStyle = placeHolderStyle;  //放置变量。必须   
                    pie_option2.series[3].data[1].itemStyle = placeHolderStyle1; //放置变量。必须 
                    pie_option2.series[4].data[1].itemStyle = placeHolderStyle;  //放置变量。必须   
                    pie_option2.series[5].data[1].itemStyle = placeHolderStyle1; //放置变量。必须 

                    pie_l.initChart(pie_l_chart2,pie_option2);
            },
            error:function(){
                //alert(2);
            }
            
        })
    }
}

 var pie_topItemStyle ={
                        normal: {
                            borderWidth: 5,
                            borderColor: 'rgba(33, 47, 81, 1)',
                        },
                        }
/**  饼图模型(告警)  **/   /** 3圆 **/
var pie_right = {
    getOption :function(){                      
            option = {
                color: piedata.colors[0],
                title: {
                    show:false,
                    text: 'pie',
                    subtext: '2016年',
                    x: '50%', //center
                    y: '30%', //center
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: 16
                    }
                },
                //backgroundColor: '#dde',
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                //show:false,
                    orient: 'horizontal', //horizontal  vertical
                    top:  15,
                    right: 10,
                    //y: 'top',
                    textStyle: {							
                    //color:'#64d3e3'
                    },
                    data:piedata.legend[0].data
                },
                series: [
                
                    {    //左 内圈
                        name: piedata.name[0],  
                        type: 'pie',
                        radius: ['45%', '60%'],
                        clockWise: false,        //逆时加载
                        stillShowZeroSum:false, //是否在数据和为0（一般情况下所有数据为0） 的时候不显示扇区
                        avoidLabelOverlap: true,    //是否启用防止标签重叠策略							 
                        startAngle: piedata.startAngle[0],             //起始角度 ， 逆时针算 右：0
                        center: ['16.65%', '55%'], /** 饼图的中心位置 **/
                        label: {
                            normal: {
                                show: true,
                                position: 'outside',//'inside', //center中心  outside外侧  inside，inner 内部  
                                formatter: function(param) {
                                    //return param.name + ':\n' + Math.round(param.percent) + '%';
                                    return  Math.round(param.percent) + '%';
                                },
                                textStyle: {
                                    //color: '#067cc7',
                                    fontWeight: 'bold',
                                    fontSize: 14
                                }
                            },

                            emphasis: {
                                show: false,
                            }
                        },
                        //itemStyle: pie_topItemStyle,    //图表样式
                        labelLine: {                    //label 文字与饼图连线
                            normal: {
                                show:false,
                                smooth: true,
                                length : 1,
                                lineStyle: {
                                    width: 1
                                }
                            }
                        },
                        data: piedata.sdata[0]
                    },
                    {   //中 内圈
                        name: piedata.name[0],
                        type: 'pie',
                        radius: ['45%', '60%'],
                        clockWise: false,        //逆时加载
                        stillShowZeroSum:false, //是否在数据和为0（一般情况下所有数据为0） 的时候不显示扇区
                        avoidLabelOverlap: true,    //是否启用防止标签重叠策略								 
                        startAngle: piedata.startAngle[0],             //起始角度 ， 逆时针算 右：0
                        center: ['50%', '55%'], /** 饼图的中心位置 **/
                        label: {
                            normal: {
                                show: true,
                                position: 'outside',//'inside', //center中心  outside外侧  inside，inner 内部  
                                formatter: function(param) {
                                    //return param.name + ':\n' + Math.round(param.percent) + '%';
                                    return  Math.round(param.percent) + '%';
                                },
                                textStyle: {
                                    //color: '#067cc7',
                                    fontWeight: 'bold',
                                    fontSize: 14
                                }
                            },

                            emphasis: {
                                show: false,
                            }
                        },
                        //itemStyle: pie_topItemStyle,    //图表样式
                        labelLine: {      //label 文字与饼图连线
                            normal: {
                                show:false,
                                smooth: true,
                                length : 1,
                                lineStyle: {
                                    width: 1
                                }
                            }
                        },
                        data: piedata.sdata[1]
                    },
                    {   //右 内圈
                        name: piedata.name[0],
                        type: 'pie',
                        radius: ['45%', '60%'],
                        clockWise: false,        //逆时加载
                        stillShowZeroSum:false, //是否在数据和为0（一般情况下所有数据为0） 的时候不显示扇区
                        avoidLabelOverlap: true,    //是否启用防止标签重叠策略							 
                        startAngle: piedata.startAngle[0],             //起始角度 ， 逆时针算 右：0
                        center: ['83.31%', '55%'], /** 饼图的中心位置 **/
                        label: {
                            normal: {
                                show: true,
                                position: 'outside',//'inside', //center中心  outside外侧  inside,inner 内部  
                                formatter: function(param) {
                                    //return param.name + ':\n' + Math.round(param.percent) + '%';
                                    return  Math.round(param.percent) + '%';
                                },
                                textStyle: {
                                    //color: '#067cc7',
                                    fontWeight: 'bold',
                                    fontSize: 14
                                }
                            },

                            emphasis: {
                                show: false,
                            }
                        },
                        //itemStyle: pie_topItemStyle,    //图表样式
                        labelLine: {      //label 文字与饼图连线
                            normal: {
                                show:false,
                                smooth: true,
                                length : 1,
                                lineStyle: {
                                    width: 1
                                }
                            }
                        },
                        data: piedata.sdata[2]
                    }
                ]
            };
        return option;
    },
    initChart :function(mychart,option){
        mychart.setOption(option);
        window.addEventListener("resize",function(){  /**echart自适应（拖动屏幕）**/
            mychart.resize();
        });
    },
    echartAlarm3Init: function(){  /**01右3圆实例化(告警总览) **/

        $.ajax({
            type:'GET',
            url:'../json/pie_right.json',
            dataType:"json",
            //async:false,
            success:function(data){
                piedata = data;                
                //console.log(piedata);
                pie_right_chart = echarts.init(document.getElementById('echartAlarm3'));
                var pie01_option = pie_right.getOption();					
                pie_right.initChart(pie_right_chart,pie01_option);
            },
            error:function(){
            }
        })
    }
};

//属于运维页面 （变形圆 凹凸）  事件类别分布 以及 事件影响程度分布  
var pie_yun = {
    getOption :function(){                      
            option = {
                color:["#DE1713","#10293C","#4CA8B4","#FB7B52","#92E7BE"],            
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },            
                visualMap: {
                    show: false,
                    min: 80,
                    max: 600,
                    inRange: {
                        //colorLightness: [0, 1] //明暗
                    }
                },
                series : [
                    {
                        name:'事件类别分布',
                        type:'pie',
                        radius :['20%','55%'],
                        center: ['50%', '60%'],
                        data:[
                            {value:400, name:'业务系统'},
                            {value:150, name:'PC'},
                            {value:274, name:'软件'},
                            {value:235, name:'网络'},
                            {value:300, name:'服务器'}
                        ].sort(function (a, b) { return a.value - b.value; }),
                        roseType: 'radius',
                        label: {
                            normal: {
                                show:true,
                                /* textStyle: {
                                    color: 'rgba(255, 255, 255, 0.3)'
                                } */
                            }
                        },
                        labelLine: {
                            normal: {
                                show:true,
                                /* lineStyle: {
                                    color: 'rgba(255, 255, 255, 0.3)'
                                }, */
                                smooth: 0.2,
                                length: 10,
                                length2: 20
                            }
                        },
                        itemStyle: {
                            normal: {
                                //color: '#c23531',
                                /* shadowBlur: 200,
                                shadowColor: 'rgba(0, 0, 0, 0.5)' */
                            }
                        },
            
                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: function (idx) {
                            return Math.random() * 200;
                        }
                    }
                ]
            };
            return option;
    },
    initChart :function(mychart,option){
        mychart.setOption(option);
        window.addEventListener("resize",function(){  /**echart自适应（拖动屏幕）**/
            mychart.resize();
        });
    },
    //事件类别分布 实例化
    echartPieJobTypeInit:function(){  
        $.ajax({
            type:"GET",
            url:'../json/pie_yun.json', 
            typedate:'json',
            success:function(data){
                PieJobType_chart = echarts.init(document.getElementById("echartPieJobType"));
                var _pieData = data.l;			
                var pie_option = pie_yun.getOption();
                pie_option.series[0].name = _pieData.name;
                pie_option.series[0].data = _pieData.sdata.sort(function (a, b) { return a.value - b.value; }); 
                pie_yun.initChart(PieJobType_chart,pie_option);
                //console.log(pie_option.color);
            },
            error:function(){
            }

        })
    },
    //事件类别分布（查询） 实例化
    echartPieJobTypeInitSearch:function(){
        
        var data_parent = $(event.target).parents().eq(3).find(".form-inline");
        var data_start_num = $(data_parent).find(".data_start").val();
        var data_end_num = $(data_parent).find(".data_end").val();
        if(data_start_num!=''&&data_start_num!=null&&data_end_num!=''&&data_end_num!=null){
            PieJobType_chart.dispose();
            pie_yun.echartPieJobTypeInit();
        }
    },
    //事件影响程度分布 实例化
    echartPieJobCompanyInit:function(){
        $.ajax({
            type:"GET",
            url:'../json/pie_yun.json', 
            typedate:'json',
            success:function(data){
                PieJobCompany_chart = echarts.init(document.getElementById("echartPieJobCompany"));
                var _pieData = data.r;			
                var pie_option = pie_yun.getOption();
                pie_option.series[0].name = _pieData.name;
                pie_option.series[0].data = _pieData.sdata.sort(function (a, b) { return a.value - b.value; }); 
                pie_yun.initChart(PieJobCompany_chart,pie_option);
                //console.log(pie_option.color);
            },
            error:function(){
            }

        })
    },
    //事件影响程度分布 实例化(查询)
    echartPieJobCompanyInitSearch:function(){
        var data_parent = $(event.target).parents().eq(3).find(".form-inline");
        var data_start_num = $(data_parent).find(".data_start").val();
        var data_end_num = $(data_parent).find(".data_end").val();
        if(data_start_num!=''&&data_start_num!=null&&data_end_num!=''&&data_end_num!=null){
            PieJobCompany_chart.dispose();
            pie_yun.echartPieJobCompanyInit();
        }
    }
}