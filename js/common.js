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