$(".menu").attr("isopen","off");
$(".menu").click(function(){
    var isopen=$(this).attr("isopen");
    if(isopen=="off"){
        $(".menuleft").css({
            "width":"3.75rem"
        })
        $(".menuright").css({
            left:"3.75rem"
        })
        $(".menu-s-trans1,.menu-s-trans2,.menu-s-trans3,.menu-s-trans4,.menu-s-trans5").css({
            "margin-left":"0"
        });
        $(this).attr("isopen","on")
    }else{
        $(".menuleft").css({
            "width":"0"
        })
        $(".menuright").css({
            left:"0"
        })
        $(".menu-s-trans1,.menu-s-trans2,.menu-s-trans3,.menu-s-trans4,.menu-s-trans5").css({
            "margin-left":"-3.75rem"
        });
        $(this).attr("isopen","off")
    }

})