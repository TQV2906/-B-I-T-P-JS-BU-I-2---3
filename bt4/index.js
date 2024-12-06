function tinh() {
  var dai = document.getElementById("chieudai").value * 1;
  var rong = document.getElementById("chieurong").value * 1;
  var chuvi = 0;
  var dientich = 0;
  chuvi = (dai + rong) * 2;
  dientich = dai * rong;
  document.getElementById("chuvi").innerHTML = chuvi;
  document.getElementById("dientich").innerHTML = dientich;
}
