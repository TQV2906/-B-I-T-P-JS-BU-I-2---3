//  nhập số tự nhiên có 2 chữ số

function tinh() {
  var so = document.getElementById("nhapso").value * 1;

  //  lấy chữ số ở hàng đơn vị

  var so2 = so % 10;
  //  lấy chữ số hàng chục bằng hàm math floor

  var so1 = Math.floor(so / 10);

  //  tính tổng 2 số

  var tinhtong = so1 + so2;

  document.getElementById("tong").innerHTML = tinhtong;
}
