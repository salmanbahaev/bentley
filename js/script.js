$("#seats_cir").mouseenter(function () {
  $("#seats_cir_img").attr("src", "./img/seats_cir_img.svg");
});

$("#wheel").mouseenter(function () {
  $("#wheel_img").attr("src", "./img/wheel_img.svg");
});

$("#kpp").mouseenter(function () {
  $("#kpp_img").attr("src", "./img/kpp_img.svg");
});

$("#display").mouseenter(function () {
  $("#display_img").attr("src", "./img/display_img.svg");
});

$("#shpon").mouseenter(function () {
  $("#shpon_img").attr("src", "./img/shpon_img.svg");
});

$("#seats_cir").mouseleave(function () {
  $("#seats_cir_img").attr("src", "./img/elipse.svg");
});

$("#wheel").mouseleave(function () {
  $("#wheel_img").atr("src", "./img/elipse.svg");
});

$("#kpp").mouseleave(function () {
  $("#kpp_img").atr("src", "./img/elipse.svg");
});

$("#display").mouseleave(function () {
  $("#display_img").attr("src", "./img/elipse.svg");
});

$("#shpon").mouseleave(function () {
  $("#shpon_img").attr("src", "./img/elipse.svg");
});

$(".colors_color_js").click(function () {
  $(".colors_color_js").removeClass("active_color");
  $(this).addClass("active_color");
});

$(".wheels_cat").click(function () {
  $(".wheels_cat").removeClass("active_color");
  $(this).addClass("active_color");
});
$(".saloon_color").click(function () {
  $(".saloon_color").removeClass("active_color");
  $(this).addClass("active_color");
});

let nowData = "color";

$(".right_arrow").click(function () {
  if (nowData == "color") {
    $(".colors_table_wrapper_js, .carrr").css("display", "none");
    $(".wheel_table_wrapper, .wheelll").css("display", "block");
    nowData = "wheel";
    $("#cat_text").text("Руль");
  } else if (nowData == "wheel") {
    $(".wheel_table_wrapper, .wheelll").css("display", "none");
    $(".saloon_table_wrapper, .salonnn").css("display", "block");
    nowData = "saloon";
    $("#cat_text").text("Салон");
  } else if (nowData == "saloon") {
    $(".colors_table_wrapper_js, .carrr").css("display", "block");
    $(".saloon_table_wrapper, .salonnn").css("display", "none");
    nowData = "color";
    $("#cat_text").text("Цвет");
  }
});

$(".left_arrow").click(function () {
  if (nowData == "color") {
    $(".colors_table_wrapper_js, .carrr").css("display", "none");
    $(".saloon_table_wrapper, .salonnn").css("display", "block");
    nowData = "saloon";
    $("#cat_text").text("Салон");
  } else if (nowData == "wheel") {
    $(".wheel_table_wrapper, .wheelll").css("display", "none");
    $(".colors_table_wrapper_js, .carrr").css("display", "block");
    nowData = "color";
    $("#cat_text").text("Цвет");
  } else if (nowData == "saloon") {
    $(".saloon_table_wrapper, .salonnn").css("display", "none");
    $(".wheel_table_wrapper, .wheelll").css("display", "block");
    nowData = "wheel";
    $("#cat_text").text("Руль");
  } 
});

$('.color_mag').click(function() {
  $(".car-wrap").css("display", "none");
  $(".car-wrap-1-1").css("display", "block");
});
$('.color_ice').click(function() {
  $(".car-wrap").css("display", "none");
  $(".car-wrap-1-2").css("display", "block");
});
$('.color_red').click(function() {
  $(".car-wrap").css("display", "none");
  $(".car-wrap-1-3").css("display", "block");
});
$('.color_jet').click(function() {
  $(".car-wrap").css("display", "none");
  $(".car-wrap-1-4").css("display", "block");
});

$('.wheel-1-1').click(function() {
  $(".wheel-wrap").css("display", "none");
  $(".wheel-wrap-1-1").css("display", "block");
});
$('.wheel-1-2').click(function() {
  $(".wheel-wrap").css("display", "none");
  $(".wheel-wrap-1-2").css("display", "block");
});

$('.salon-1-1').click(function() {
  $(".salon-wrap").css("display", "none");
  $(".salon-wrap-1-1").css("display", "block");
});
$('.salon-1-2').click(function() {
  $(".salon-wrap").css("display", "none");
  $(".salon-wrap-1-2").css("display", "block");
});
$('.salon-1-3').click(function() {
  $(".salon-wrap").css("display", "none");
  $(".salon-wrap-1-3").css("display", "block");
});
$('.salon-1-4').click(function() {
  $(".salon-wrap").css("display", "none");
  $(".salon-wrap-1-4").css("display", "block");
});