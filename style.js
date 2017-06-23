/**
 * Created by Lenovo on 2017/6/23.
 */


    //入口函数
$(document).ready(function () {
    //需求：鼠标放入一级li中，让他里面的ul显示。移开隐藏。
    var jqC = $(".site-nav-send");

    //绑定事件
    jqC.mouseenter(function () {
        //这个位置用到了this.
//                console.log(this);  //jquery对象绑定的时间中的this也代指js中的dom对象。！！！
        //让this中的ul显示出来。
//                this.children[1].style.display = "block";
        //把js的dom对象包装为jquery对象，然后用jquery方法操作
        $(this).children("ul").show();
    });

    //绑定事件(移开隐藏)
    jqli.mouseleave(function () {
        //这个位置用到了this.
//                console.log(this);  //jquery对象绑定的时间中的this也代指js中的dom对象。！！！
        //让this中的ul显示出来。
//                this.children[1].style.display = "none";
        //把js的dom对象包装为jquery对象，然后用jquery方法操作
        $(this).children("ul").hide();
    });
});
