var a = $("h1").html();
console.log(a); // Imprimiría (print) "Precios"

$("#btn_fade").click(function () {
  a = $("p.sp").hide();
  console.log(a); // Imprimiría (print) "Precios"
});