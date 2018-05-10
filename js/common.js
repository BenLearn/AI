/* 
    公共js
*/

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();  //bootstrap 工具提示
    plan();
})

//datetimepicker时间选择插件 变中文，配合实例化 language: 'zh-CN'
$.fn.datetimepicker.dates['zh-CN'] = {    
	days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],  
	daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],  
	daysMin:  ["日", "一", "二", "三", "四", "五", "六", "日"],  
	months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],  
	monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],  
	today: "今天",  
	suffix: [],  
	meridiem: ["上午", "下午"]  
}; 


//plan 进度条
function plan(){
    $(".plan").each(function(){
        var _width = $(this).width();
        var _Pwidth = $(this).parent().width();
        var per = _width/_Pwidth;   //当前宽度占父级百分比
        //console.log(per);
        if(!(per>0.9)){
            $(this).find("span").addClass("off");   /**当进度条少于90%时候 右边显示直角**/  
        }else{
            $(this).find("span").remove("off");
        }
    })
}

//echart图 首页全实例化
function echartIndexInit(){ 
    pie_l.echartCpu3Init();   //圆 cpu使用率
    pie_right.echartAlarm3Init(); //圆 告警
    gauge.echartHostInit();   //仪表盘 关注主机
    gauge.echartApplyInit();  //仪表盘 关注引用
}
//echart图 首页全实例化(查询)
function echartIndexInitSearch(){
    var data_parent = $(event.target).parents().eq(3).find(".form-inline");
    var data_start_num = $(data_parent).find(".data_start").val();
    var data_end_num = $(data_parent).find(".data_end").val();
    if(data_start_num!='' && data_start_num!=null && data_end_num!='' && data_end_num!=null){
        //BarCompany_chart.dispose();
        pie_l_chart.dispose();   //圆 cpu使用率 销毁
        pie_l_chart2.dispose();  //圆 cpu使用率 销毁
        pie_right_chart.dispose();  //圆 告警 销毁
        gauge_l_chart1.dispose(); //仪表盘 关注主机 销毁
        gauge_l_chart2.dispose(); //仪表盘 关注主机 销毁
        gauge_r_chart1.dispose(); //仪表盘 关注引用 销毁
        gauge_r_chart2.dispose(); //仪表盘 关注引用 销毁
        gauge_r_chart3.dispose(); //仪表盘 关注引用 销毁
        gauge_r_chart4.dispose(); //仪表盘 关注引用 销毁
        echartIndexInit();
    }
}

//echart图 运维页面
function echartYunInit(){ 
	bar.echartBarJobNumInit();  //事件工单量实例化
    bar.echartBarCompanyInit();  //影响单位事件量实例化

    pie_yun.echartPieJobTypeInit();  //影响单位事件量实例化
    pie_yun.echartPieJobCompanyInit();  //事件影响程度分布 实例化(查询)
}