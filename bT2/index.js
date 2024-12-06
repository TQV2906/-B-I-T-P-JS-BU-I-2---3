function tinhtrungbinh() {
  var trungbinh1 = document.getElementById("tb1").value * 1;
  var trungbinh2 = document.getElementById("tb2").value * 1;
  var trungbinh3 = document.getElementById("tb3").value * 1;
  var trungbinh4 = document.getElementById("tb4").value * 1;
  var trungbinh5 = document.getElementById("tb5").value * 1;
  //   chek input
  //   console.log("trungbinh1", trungbinh1);
  //   console.log("trungbinh2", trungbinh2);
  //   console.log("trungbinh3", trungbinh3);
  //   console.log("trungbinh4", trungbinh4);
  //   console.log("trungbinh5", trungbinh5);

  var tong = 0;
  tong = trungbinh1 + trungbinh2 + trungbinh3 + trungbinh4 + trungbinh5;

  var tinhtrungbinh = 0;
  tinhtrungbinh = tong / 5;
  document.getElementById("tinhtrungbinh").innerHTML = tinhtrungbinh;
}
