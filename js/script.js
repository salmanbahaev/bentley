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

// ============== car-2
$("#car-2 .colors_color_js").click(function () {
  $("#car-2 .colors_color_js").removeClass("active_color");
  $(this).addClass("active_color");
});
$("#car-2 .wheels_cat").click(function () {
  $("#car-2 .wheels_cat").removeClass("active_color");
  $(this).addClass("active_color");
});
$("#car-2 .saloon_color").click(function () {
  $("#car-2 .saloon_color").removeClass("active_color");
  $(this).addClass("active_color");
});

let nowData2 = "color";

$("#car-2 .right_arrow").click(function () {
  if (nowData2 == "color") {
    $("#car-2 .colors_table_wrapper_js, #car-2 .carrr").css("display", "none");
    $("#car-2 .wheel_table_wrapper, #car-2 .wheelll").css("display", "block");
    nowData2 = "wheel";
    $("#car-2 #cat_text").text("Руль");
  } else if (nowData2 == "wheel") {
    $("#car-2 .wheel_table_wrapper, #car-2 .wheelll").css("display", "none");
    $("#car-2 .saloon_table_wrapper, #car-2 .salonnn").css("display", "block");
    nowData2 = "saloon";
    $("#car-2 #cat_text").text("Салон");
  } else if (nowData2 == "saloon") {
    $("#car-2 .colors_table_wrapper_js, #car-2 .carrr").css("display", "block");
    $("#car-2 .saloon_table_wrapper, #car-2 .salonnn").css("display", "none");
    nowData2 = "color";
    $("#car-2 #cat_text").text("Цвет");
  }
});

$("#car-2 .left_arrow").click(function () {
  if (nowData2 == "color") {
    $("#car-2 .colors_table_wrapper_js, #car-2 .carrr").css("display", "none");
    $("#car-2 .saloon_table_wrapper, #car-2 .salonnn").css("display", "block");
    nowData2 = "saloon";
    $("#car-2 #cat_text").text("Салон");
  } else if (nowData2 == "wheel") {
    $("#car-2 .wheel_table_wrapper, #car-2 .wheelll").css("display", "none");
    $("#car-2 .colors_table_wrapper_js, #car-2 .carrr").css("display", "block");
    nowData2 = "color";
    $("#car-2 #cat_text").text("Цвет");
  } else if (nowData2 == "saloon") {
    $("#car-2 .saloon_table_wrapper, #car-2 .salonnn").css("display", "none");
    $("#car-2 .wheel_table_wrapper, #car-2 .wheelll").css("display", "block");
    nowData2 = "wheel";
    $("#car-2 #cat_text").text("Руль");
  } 
});

$('#car-2 .color_mag').click(function() {
  $("#car-2 .car-wrap").css("display", "none");
  $("#car-2 .car-wrap-1-1").css("display", "block");
});
$('#car-2 .color_ice').click(function() {
  $("#car-2 .car-wrap").css("display", "none");
  $("#car-2 .car-wrap-1-2").css("display", "block");
});
$('#car-2 .color_red').click(function() {
  $("#car-2 .car-wrap").css("display", "none");
  $("#car-2 .car-wrap-1-3").css("display", "block");
});
$('#car-2 .color_jet').click(function() {
  $("#car-2 .car-wrap").css("display", "none");
  $("#car-2 .car-wrap-1-4").css("display", "block");
});

$('#car-2 .wheel-1-1').click(function() {
  $("#car-2 .wheel-wrap").css("display", "none");
  $("#car-2 .wheel-wrap-1-1").css("display", "block");
});
$('#car-2 .wheel-1-2').click(function() {
  $("#car-2 .wheel-wrap").css("display", "none");
  $("#car-2 .wheel-wrap-1-2").css("display", "block");
});

$('#car-2 .salon-1-1').click(function() {
  $("#car-2 .salon-wrap").css("display", "none");
  $("#car-2 .salon-wrap-1-1").css("display", "block");
});
$('#car-2 .salon-1-2').click(function() {
  $("#car-2 .salon-wrap").css("display", "none");
  $("#car-2 .salon-wrap-1-2").css("display", "block");
});
$('#car-2 .salon-1-3').click(function() {
  $("#car-2 .salon-wrap").css("display", "none");
  $("#car-2 .salon-wrap-1-3").css("display", "block");
});
$('#car-2 .salon-1-4').click(function() {
  $("#car-2 .salon-wrap").css("display", "none");
  $("#car-2 .salon-wrap-1-4").css("display", "block");
});

// ============== car-3
$("#car-3 .colors_color_js").click(function () {
  $("#car-3 .colors_color_js").removeClass("active_color");
  $(this).addClass("active_color");
});
$("#car-3 .wheels_cat").click(function () {
  $("#car-3 .wheels_cat").removeClass("active_color");
  $(this).addClass("active_color");
});
$("#car-3 .saloon_color").click(function () {
  $("#car-3 .saloon_color").removeClass("active_color");
  $(this).addClass("active_color");
});

let nowData3 = "color";

$("#car-3 .right_arrow").click(function () {
  if (nowData3 == "color") {
    $("#car-3 .colors_table_wrapper_js, #car-3 .carrr").css("display", "none");
    $("#car-3 .wheel_table_wrapper, #car-3 .wheelll").css("display", "block");
    nowData3 = "wheel";
    $("#car-3 #cat_text").text("Руль");
  } else if (nowData3 == "wheel") {
    $("#car-3 .wheel_table_wrapper, #car-3 .wheelll").css("display", "none");
    $("#car-3 .saloon_table_wrapper, #car-3 .salonnn").css("display", "block");
    nowData3 = "saloon";
    $("#car-3 #cat_text").text("Салон");
  } else if (nowData3 == "saloon") {
    $("#car-3 .colors_table_wrapper_js, #car-3 .carrr").css("display", "block");
    $("#car-3 .saloon_table_wrapper, #car-3 .salonnn").css("display", "none");
    nowData3 = "color";
    $("#car-3 #cat_text").text("Цвет");
  }
});

$("#car-3 .left_arrow").click(function () {
  if (nowData3 == "color") {
    $("#car-3 .colors_table_wrapper_js, #car-3 .carrr").css("display", "none");
    $("#car-3 .saloon_table_wrapper, #car-3 .salonnn").css("display", "block");
    nowData3 = "saloon";
    $("#car-3 #cat_text").text("Салон");
  } else if (nowData3 == "wheel") {
    $("#car-3 .wheel_table_wrapper, #car-3 .wheelll").css("display", "none");
    $("#car-3 .colors_table_wrapper_js, #car-3 .carrr").css("display", "block");
    nowData3 = "color";
    $("#car-3 #cat_text").text("Цвет");
  } else if (nowData3 == "saloon") {
    $("#car-3 .saloon_table_wrapper, #car-3 .salonnn").css("display", "none");
    $("#car-3 .wheel_table_wrapper, #car-3 .wheelll").css("display", "block");
    nowData3 = "wheel";
    $("#car-3 #cat_text").text("Руль");
  } 
});

$('#car-3 .color_mag').click(function() {
  $("#car-3 .car-wrap").css("display", "none");
  $("#car-3 .car-wrap-1-1").css("display", "block");
});
$('#car-3 .color_ice').click(function() {
  $("#car-3 .car-wrap").css("display", "none");
  $("#car-3 .car-wrap-1-2").css("display", "block");
});
$('#car-3 .color_red').click(function() {
  $("#car-3 .car-wrap").css("display", "none");
  $("#car-3 .car-wrap-1-3").css("display", "block");
});
$('#car-3 .color_jet').click(function() {
  $("#car-3 .car-wrap").css("display", "none");
  $("#car-3 .car-wrap-1-4").css("display", "block");
});
$('#car-3 .color_alpine').click(function() {
  $("#car-3 .car-wrap").css("display", "none");
  $("#car-3 .car-wrap-1-5").css("display", "block");
});
$('#car-3 .color_magnolia').click(function() {
  $("#car-3 .car-wrap").css("display", "none");
  $("#car-3 .car-wrap-1-6").css("display", "block");
});

$('#car-3 .wheel-1-1').click(function() {
  $("#car-3 .wheel-wrap").css("display", "none");
  $("#car-3 .wheel-wrap-1-1").css("display", "block");
});
$('#car-3 .wheel-1-2').click(function() {
  $("#car-3 .wheel-wrap").css("display", "none");
  $("#car-3 .wheel-wrap-1-2").css("display", "block");
});

$('#car-3 .salon-1-1').click(function() {
  $("#car-3 .salon-wrap").css("display", "none");
  $("#car-3 .salon-wrap-1-1").css("display", "block");
});
$('#car-3 .salon-1-2').click(function() {
  $("#car-3 .salon-wrap").css("display", "none");
  $("#car-3 .salon-wrap-1-2").css("display", "block");
});
$('#car-3 .salon-1-3').click(function() {
  $("#car-3 .salon-wrap").css("display", "none");
  $("#car-3 .salon-wrap-1-3").css("display", "block");
});
$('#car-3 .salon-1-4').click(function() {
  $("#car-3 .salon-wrap").css("display", "none");
  $("#car-3 .salon-wrap-1-4").css("display", "block");
});

// ============== car-4
$("#car-4 .colors_color_js").click(function () {
  $("#car-4 .colors_color_js").removeClass("active_color");
  $(this).addClass("active_color");
});
$("#car-4 .wheels_cat").click(function () {
  $("#car-4 .wheels_cat").removeClass("active_color");
  $(this).addClass("active_color");
});
$("#car-4 .saloon_color").click(function () {
  $("#car-4 .saloon_color").removeClass("active_color");
  $(this).addClass("active_color");
});

let nowData4 = "color";

$("#car-4 .right_arrow").click(function () {
  if (nowData4 == "color") {
    $("#car-4 .colors_table_wrapper_js, #car-4 .carrr").css("display", "none");
    $("#car-4 .wheel_table_wrapper, #car-4 .wheelll").css("display", "block");
    nowData4 = "wheel";
    $("#car-4 #cat_text").text("Руль");
  } else if (nowData4 == "wheel") {
    $("#car-4 .wheel_table_wrapper, #car-4 .wheelll").css("display", "none");
    $("#car-4 .saloon_table_wrapper, #car-4 .salonnn").css("display", "block");
    nowData4 = "saloon";
    $("#car-4 #cat_text").text("Салон");
  } else if (nowData4 == "saloon") {
    $("#car-4 .colors_table_wrapper_js, #car-4 .carrr").css("display", "block");
    $("#car-4 .saloon_table_wrapper, #car-4 .salonnn").css("display", "none");
    nowData4 = "color";
    $("#car-4 #cat_text").text("Цвет");
  }
});

$("#car-4 .left_arrow").click(function () {
  if (nowData4 == "color") {
    $("#car-4 .colors_table_wrapper_js, #car-4 .carrr").css("display", "none");
    $("#car-4 .saloon_table_wrapper, #car-4 .salonnn").css("display", "block");
    nowData4 = "saloon";
    $("#car-4 #cat_text").text("Салон");
  } else if (nowData4 == "wheel") {
    $("#car-4 .wheel_table_wrapper, #car-4 .wheelll").css("display", "none");
    $("#car-4 .colors_table_wrapper_js, #car-4 .carrr").css("display", "block");
    nowData4 = "color";
    $("#car-4 #cat_text").text("Цвет");
  } else if (nowData4 == "saloon") {
    $("#car-4 .saloon_table_wrapper, #car-4 .salonnn").css("display", "none");
    $("#car-4 .wheel_table_wrapper, #car-4 .wheelll").css("display", "block");
    nowData4 = "wheel";
    $("#car-4 #cat_text").text("Руль");
  } 
});

$('#car-4 .color_mag').click(function() {
  $("#car-4 .car-wrap").css("display", "none");
  $("#car-4 .car-wrap-1-1").css("display", "block");
});
$('#car-4 .color_ice').click(function() {
  $("#car-4 .car-wrap").css("display", "none");
  $("#car-4 .car-wrap-1-2").css("display", "block");
});
$('#car-4 .color_red').click(function() {
  $("#car-4 .car-wrap").css("display", "none");
  $("#car-4 .car-wrap-1-3").css("display", "block");
});
$('#car-4 .color_jet').click(function() {
  $("#car-4 .car-wrap").css("display", "none");
  $("#car-4 .car-wrap-1-4").css("display", "block");
});

$('#car-4 .wheel-1-1').click(function() {
  $("#car-4 .wheel-wrap").css("display", "none");
  $("#car-4 .wheel-wrap-1-1").css("display", "block");
});
$('#car-4 .wheel-1-2').click(function() {
  $("#car-4 .wheel-wrap").css("display", "none");
  $("#car-4 .wheel-wrap-1-2").css("display", "block");
});

$('#car-4 .salon-1-1').click(function() {
  $("#car-4 .salon-wrap").css("display", "none");
  $("#car-4 .salon-wrap-1-1").css("display", "block");
});
$('#car-4 .salon-1-2').click(function() {
  $("#car-4 .salon-wrap").css("display", "none");
  $("#car-4 .salon-wrap-1-2").css("display", "block");
});
$('#car-4 .salon-1-3').click(function() {
  $("#car-4 .salon-wrap").css("display", "none");
  $("#car-4 .salon-wrap-1-3").css("display", "block");
});
$('#car-4 .salon-1-4').click(function() {
  $("#car-4 .salon-wrap").css("display", "none");
  $("#car-4 .salon-wrap-1-4").css("display", "block");
});

// ============== car-5
$("#car-5 .colors_color_js").click(function () {
  $("#car-5 .colors_color_js").removeClass("active_color");
  $(this).addClass("active_color");
});
$("#car-5 .wheels_cat").click(function () {
  $("#car-5 .wheels_cat").removeClass("active_color");
  $(this).addClass("active_color");
});
$("#car-5 .saloon_color").click(function () {
  $("#car-5 .saloon_color").removeClass("active_color");
  $(this).addClass("active_color");
});

let nowData5 = "color";

$("#car-5 .right_arrow").click(function () {
  if (nowData5 == "color") {
    $("#car-5 .colors_table_wrapper_js, #car-5 .carrr").css("display", "none");
    $("#car-5 .wheel_table_wrapper, #car-5 .wheelll").css("display", "block");
    nowData5 = "wheel";
    $("#car-5 #cat_text").text("Руль");
  } else if (nowData5 == "wheel") {
    $("#car-5 .wheel_table_wrapper, #car-5 .wheelll").css("display", "none");
    $("#car-5 .saloon_table_wrapper, #car-5 .salonnn").css("display", "block");
    nowData5 = "saloon";
    $("#car-5 #cat_text").text("Салон");
  } else if (nowData5 == "saloon") {
    $("#car-5 .colors_table_wrapper_js, #car-5 .carrr").css("display", "block");
    $("#car-5 .saloon_table_wrapper, #car-5 .salonnn").css("display", "none");
    nowData5 = "color";
    $("#car-5 #cat_text").text("Цвет");
  }
});

$("#car-5 .left_arrow").click(function () {
  if (nowData5 == "color") {
    $("#car-5 .colors_table_wrapper_js, #car-5 .carrr").css("display", "none");
    $("#car-5 .saloon_table_wrapper, #car-5 .salonnn").css("display", "block");
    nowData5 = "saloon";
    $("#car-5 #cat_text").text("Салон");
  } else if (nowData5 == "wheel") {
    $("#car-5 .wheel_table_wrapper, #car-5 .wheelll").css("display", "none");
    $("#car-5 .colors_table_wrapper_js, #car-5 .carrr").css("display", "block");
    nowData5 = "color";
    $("#car-5 #cat_text").text("Цвет");
  } else if (nowData5 == "saloon") {
    $("#car-5 .saloon_table_wrapper, #car-5 .salonnn").css("display", "none");
    $("#car-5 .wheel_table_wrapper, #car-5 .wheelll").css("display", "block");
    nowData5 = "wheel";
    $("#car-5 #cat_text").text("Руль");
  } 
});

$('#car-5 .color_mag').click(function() {
  $("#car-5 .car-wrap").css("display", "none");
  $("#car-5 .car-wrap-1-1").css("display", "block");
});
$('#car-5 .color_ice').click(function() {
  $("#car-5 .car-wrap").css("display", "none");
  $("#car-5 .car-wrap-1-2").css("display", "block");
});
$('#car-5 .color_red').click(function() {
  $("#car-5 .car-wrap").css("display", "none");
  $("#car-5 .car-wrap-1-3").css("display", "block");
});
$('#car-5 .color_jet').click(function() {
  $("#car-5 .car-wrap").css("display", "none");
  $("#car-5 .car-wrap-1-4").css("display", "block");
});

$('#car-5 .wheel-1-1').click(function() {
  $("#car-5 .wheel-wrap").css("display", "none");
  $("#car-5 .wheel-wrap-1-1").css("display", "block");
});
$('#car-5 .wheel-1-2').click(function() {
  $("#car-5 .wheel-wrap").css("display", "none");
  $("#car-5 .wheel-wrap-1-2").css("display", "block");
});

$('#car-5 .salon-1-1').click(function() {
  $("#car-5 .salon-wrap").css("display", "none");
  $("#car-5 .salon-wrap-1-1").css("display", "block");
});
$('#car-5 .salon-1-2').click(function() {
  $("#car-5 .salon-wrap").css("display", "none");
  $("#car-5 .salon-wrap-1-2").css("display", "block");
});
$('#car-5 .salon-1-3').click(function() {
  $("#car-5 .salon-wrap").css("display", "none");
  $("#car-5 .salon-wrap-1-3").css("display", "block");
});
$('#car-5 .salon-1-4').click(function() {
  $("#car-5 .salon-wrap").css("display", "none");
  $("#car-5 .salon-wrap-1-4").css("display", "block");
});

// ============== car-6
$("#car-6 .colors_color_js").click(function () {
  $("#car-6 .colors_color_js").removeClass("active_color");
  $(this).addClass("active_color");
});
$("#car-6 .wheels_cat").click(function () {
  $("#car-6 .wheels_cat").removeClass("active_color");
  $(this).addClass("active_color");
});
$("#car-6 .saloon_color").click(function () {
  $("#car-6 .saloon_color").removeClass("active_color");
  $(this).addClass("active_color");
});

let nowData6 = "color";

$("#car-6 .right_arrow").click(function () {
  if (nowData6 == "color") {
    $("#car-6 .colors_table_wrapper_js, #car-6 .carrr").css("display", "none");
    $("#car-6 .wheel_table_wrapper, #car-6 .wheelll").css("display", "block");
    nowData6 = "wheel";
    $("#car-6 #cat_text").text("Руль");
  } else if (nowData6 == "wheel") {
    $("#car-6 .wheel_table_wrapper, #car-6 .wheelll").css("display", "none");
    $("#car-6 .saloon_table_wrapper, #car-6 .salonnn").css("display", "block");
    nowData6 = "saloon";
    $("#car-6 #cat_text").text("Салон");
  } else if (nowData6 == "saloon") {
    $("#car-6 .colors_table_wrapper_js, #car-6 .carrr").css("display", "block");
    $("#car-6 .saloon_table_wrapper, #car-6 .salonnn").css("display", "none");
    nowData6 = "color";
    $("#car-6 #cat_text").text("Цвет");
  }
});

$("#car-6 .left_arrow").click(function () {
  if (nowData6 == "color") {
    $("#car-6 .colors_table_wrapper_js, #car-6 .carrr").css("display", "none");
    $("#car-6 .saloon_table_wrapper, #car-6 .salonnn").css("display", "block");
    nowData6 = "saloon";
    $("#car-6 #cat_text").text("Салон");
  } else if (nowData6 == "wheel") {
    $("#car-6 .wheel_table_wrapper, #car-6 .wheelll").css("display", "none");
    $("#car-6 .colors_table_wrapper_js, #car-6 .carrr").css("display", "block");
    nowData6 = "color";
    $("#car-6 #cat_text").text("Цвет");
  } else if (nowData6 == "saloon") {
    $("#car-6 .saloon_table_wrapper, #car-6 .salonnn").css("display", "none");
    $("#car-6 .wheel_table_wrapper, #car-6 .wheelll").css("display", "block");
    nowData6 = "wheel";
    $("#car-6 #cat_text").text("Руль");
  } 
});

$('#car-6 .color_mag').click(function() {
  $("#car-6 .car-wrap").css("display", "none");
  $("#car-6 .car-wrap-1-1").css("display", "block");
});
$('#car-6 .color_ice').click(function() {
  $("#car-6 .car-wrap").css("display", "none");
  $("#car-6 .car-wrap-1-2").css("display", "block");
});
$('#car-6 .color_red').click(function() {
  $("#car-6 .car-wrap").css("display", "none");
  $("#car-6 .car-wrap-1-3").css("display", "block");
});
$('#car-6 .color_jet').click(function() {
  $("#car-6 .car-wrap").css("display", "none");
  $("#car-6 .car-wrap-1-4").css("display", "block");
});

$('#car-6 .wheel-1-1').click(function() {
  $("#car-6 .wheel-wrap").css("display", "none");
  $("#car-6 .wheel-wrap-1-1").css("display", "block");
});
$('#car-6 .wheel-1-2').click(function() {
  $("#car-6 .wheel-wrap").css("display", "none");
  $("#car-6 .wheel-wrap-1-2").css("display", "block");
});

$('#car-6 .salon-1-1').click(function() {
  $("#car-6 .salon-wrap").css("display", "none");
  $("#car-6 .salon-wrap-1-1").css("display", "block");
});
$('#car-6 .salon-1-2').click(function() {
  $("#car-6 .salon-wrap").css("display", "none");
  $("#car-6 .salon-wrap-1-2").css("display", "block");
});
$('#car-6 .salon-1-3').click(function() {
  $("#car-6 .salon-wrap").css("display", "none");
  $("#car-6 .salon-wrap-1-3").css("display", "block");
});
$('#car-6 .salon-1-4').click(function() {
  $("#car-6 .salon-wrap").css("display", "none");
  $("#car-6 .salon-wrap-1-4").css("display", "block");
});