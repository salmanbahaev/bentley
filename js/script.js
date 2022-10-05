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

// ================== car-1

$("#car-1 .colors_color_js").click(function () {
  $("#car-1 .colors_color_js").removeClass("active_color");
  $(this).addClass("active_color");
});

$("#car-1 .wheels_cat").click(function () {
  $("#car-1 .wheels_cat").removeClass("active_color");
  $(this).addClass("active_color");
});
$("#car-1 .saloon_color").click(function () {
  $("#car-1 .saloon_color").removeClass("active_color");
  $(this).addClass("active_color");
});

let nowData = "color";

$("#car-1 .right_arrow").click(function () {
  if (nowData == "color") {
    $("#car-1 .colors_table_wrapper_js, #car-1 .carrr").css("display", "none");
    $("#car-1 .wheel_table_wrapper, #car-1 .wheelll").css("display", "block");
    nowData = "wheel";
    $("#car-1 #cat_text").text("Руль");
  } else if (nowData == "wheel") {
    $("#car-1 .wheel_table_wrapper, #car-1 .wheelll").css("display", "none");
    $("#car-1 .saloon_table_wrapper, #car-1 .salonnn").css("display", "block");
    nowData = "saloon";
    $("#car-1 #cat_text").text("Салон");
  } else if (nowData == "saloon") {
    $("#car-1 .colors_table_wrapper_js, #car-1 .carrr").css("display", "block");
    $("#car-1 .saloon_table_wrapper, #car-1 .salonnn").css("display", "none");
    nowData = "color";
    $("#car-1 #cat_text").text("Цвет");
  }
});

$("#car-1 .left_arrow").click(function () {
  if (nowData == "color") {
    $("#car-1 .colors_table_wrapper_js, #car-1 .carrr").css("display", "none");
    $("#car-1 .saloon_table_wrapper, #car-1 .salonnn").css("display", "block");
    nowData = "saloon";
    $("#car-1 #cat_text").text("Салон");
  } else if (nowData == "wheel") {
    $("#car-1 .wheel_table_wrapper, #car-1 .wheelll").css("display", "none");
    $("#car-1 .colors_table_wrapper_js, #car-1 .carrr").css("display", "block");
    nowData = "color";
    $("#car-1 #cat_text").text("Цвет");
  } else if (nowData == "saloon") {
    $("#car-1 .saloon_table_wrapper, #car-1 .salonnn").css("display", "none");
    $("#car-1 .wheel_table_wrapper, #car-1 .wheelll").css("display", "block");
    nowData = "wheel";
    $("#car-1 #cat_text").text("Руль");
  } 
});

$('#car-1 .color_mag').click(function() {
  $("#car-1 .car-wrap").css("display", "none");
  $("#car-1 .car-wrap-1-1").css("display", "block");
});
$('#car-1 .color_ice').click(function() {
  $("#car-1 .car-wrap").css("display", "none");
  $("#car-1 .car-wrap-1-2").css("display", "block");
});
$('#car-1 .color_red').click(function() {
  $("#car-1 .car-wrap").css("display", "none");
  $("#car-1 .car-wrap-1-3").css("display", "block");
});
$('#car-1 .color_jet').click(function() {
  $("#car-1 .car-wrap").css("display", "none");
  $("#car-1 .car-wrap-1-4").css("display", "block");
});

$('#car-1 .wheel-1-1').click(function() {
  $("#car-1 .wheel-wrap").css("display", "none");
  $("#car-1 .wheel-wrap-1-1").css("display", "block");
});
$('#car-1 .wheel-1-2').click(function() {
  $("#car-1 .wheel-wrap").css("display", "none");
  $("#car-1 .wheel-wrap-1-2").css("display", "block");
});

$('#car-1 .salon-1-1').click(function() {
  $("#car-1 .salon-wrap").css("display", "none");
  $("#car-1 .salon-wrap-1-1").css("display", "block");
});
$('#car-1 .salon-1-2').click(function() {
  $("#car-1 .salon-wrap").css("display", "none");
  $("#car-1 .salon-wrap-1-2").css("display", "block");
});
$('#car-1 .salon-1-3').click(function() {
  $("#car-1 .salon-wrap").css("display", "none");
  $("#car-1 .salon-wrap-1-3").css("display", "block");
});
$('#car-1 .salon-1-4').click(function() {
  $("#car-1 .salon-wrap").css("display", "none");
  $("#car-1 .salon-wrap-1-4").css("display", "block");
});