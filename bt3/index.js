function quydoitien() {
  var sotien = document.getElementById("nhapsotien").value;
  //  thực hiện quy đổi tiền
  var tongtien = 0;
  tongtien = sotien * 23500;
  document.getElementById("tongtien").innerHTML = tongtien.toLocaleString();
}
