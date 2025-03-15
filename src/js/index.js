const mobile_main_menu =  $(".mobile-main-menu");
const mobile_menu =  $(".mobile-menu");
const mobile_menu_close =  $(".mobile-menu-close");

const header =  $("header");

mobile_menu.on('click', function(){

    mobile_main_menu.toggleClass("is-hide"); 
    mobile_menu_close.toggleClass("is-hide"); 
    mobile_menu.toggleClass("is-hide"); 
    $('header').css("height","500px");
    header.css('clip-path','polygon(0 0, 100% 0, 100% 95%, 0% 100%)')

})

mobile_menu_close.on('click', function(){

    mobile_main_menu.toggleClass("is-hide"); 
    mobile_menu_close.toggleClass("is-hide"); 
    mobile_menu.toggleClass("is-hide"); 
    $('header').css("height","160px");
    header.css('clip-path','polygon(0 0, 100% 0, 100% 95%, 0% 100%)')

})



$('#share01').on('click',function (){
    $(this).toggleClass("hide")
    $(this).next().toggleClass("hide")
})


$('#share02').on('click',function (){
    $(this).toggleClass("hide")
    $(this).next().toggleClass("hide")
})


$('#share03').on('click',function (){
    $(this).toggleClass("hide")
    $(this).next().toggleClass("hide")
})


$('[name = "close"]').on('click',function (){
    $(this).parent().toggleClass("hide")
    $(this).parent().prev().toggleClass("hide")
})