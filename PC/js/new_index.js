/**
 * Created by xingbaofeng on 2018/1/3.
 */
$(function(){
    /*点击热门新闻和最新新闻*/
    $('#newCLICK ul li').hover(function(){
        $(this).parent().find('a').removeClass('tab_cur');
        $(this).parent().find('li').removeClass('tab_li_cur');
        $(this).find('a').addClass('tab_cur');
        $(this).addClass('tab_li_cur');
        $('#new_table0,#new_table1').hide();
        $('#new_table'+$(this).index()).show()
    });
    /*学术推广的划过效果*/
    /*1.给下面的区域都加上合适的id*/
    $('.new_ser_conr ul').each(function(){
        $(this).prop('id','new_ser_tui'+$(this).index())
    })
    $('#new_ser_conl ul li').hover(function(){
        $(this).css('border-bottom','none').siblings().css('border-bottom','1px solid #F2F2F2');
        $(this).addClass('new_ser_conl_cur').siblings().removeClass('new_ser_conl_cur');
        $('#new_ser_tui0,#new_ser_tui1,#new_ser_tui2,#new_ser_tui3').hide();
        $('#new_ser_tui'+$(this).index()).show();
    })

})