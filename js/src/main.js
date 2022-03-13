/* main.js */

$('.li1').click(function(){
    $(".s1").slideDown();
    $(".s2").slideUp();
    $(".s3").slideUp();
    $(".s4").slideUp();
    $(this).css({"background-color":"#102d66", "color":"#fff"});
    $('.li2').css({"background-color":"#fff", "color":"#333"});
    $('.li3').css({"background-color":"#fff", "color":"#333"});
    $('.li4').css({"background-color":"#fff", "color":"#333"});
});

$('.li2').click(function(){
    $(".s2").slideDown();
    $(".s1").slideUp();
    $(".s3").slideUp();
    $(".s4").slideUp();
    $(this).css({"background-color":"#102d66", "color":"#fff"});
    $('.li1').css({"background-color":"#fff", "color":"#333"});
    $('.li3').css({"background-color":"#fff", "color":"#333"});
    $('.li4').css({"background-color":"#fff", "color":"#333"});
});

$('.li3').click(function(){
    $(".s3").slideDown();
    $(".s2").slideUp();
    $(".s1").slideUp();
    $(".s4").slideUp();
    $(this).css({"background-color":"#102d66", "color":"#fff"});
    $('.li2').css({"background-color":"#fff", "color":"#333"});
    $('.li1').css({"background-color":"#fff", "color":"#333"});
    $('.li4').css({"background-color":"#fff", "color":"#333"});
});

$('.li4').click(function(){
    $(".s4").slideDown();
    $(".s2").slideUp();
    $(".s3").slideUp();
    $(".s1").slideUp();
    $(this).css({"background-color":"#102d66", "color":"#fff"});
    $('.li2').css({"background-color":"#fff", "color":"#333"});
    $('.li3').css({"background-color":"#fff", "color":"#333"});
    $('.li1').css({"background-color":"#fff", "color":"#333"});
});