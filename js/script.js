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
    $(".colors_table_wrapper_js").css("display", "none");
    $(".wheel_table_wrapper").css("display", "block");
    nowData = "wheel";
    $("#cat_text").text("Руль");
  } else if (nowData == "wheel") {
    $(".wheel_table_wrapper").css("display", "none");
    $(".saloon_table_wrapper").css("display", "block");
    nowData = "saloon";
    $("#cat_text").text("Салон");
  } else {
    $(".colors_table_wrapper_js").css("display", "block");
    $(".saloon_table_wrapper").css("display", "none");
    nowData = "color";
    $("#cat_text").text("Цвет");
  }
});
