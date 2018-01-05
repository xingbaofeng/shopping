/**
 * Created by Administrator on 2017/12/22.
 */
$(function(){
    $('.header_tab ul li').hover(function(){
        $(this).css('border-bottom','2px solid #ffc001').siblings().css('border-bottom','none');
        $('.header_tab ul li a').css('color','black');
        $(this).find('a').css('color','#ffc001')
    })
})