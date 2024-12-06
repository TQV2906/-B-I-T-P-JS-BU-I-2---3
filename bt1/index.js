function tinhtongluong() {
  var tienluong = document.getElementById("tienluong1ngay").value;
  var songaylam = document.getElementById("songaylam").value;
  //  kiểm tra input
  // console.log("tienluong", tienluong);
  // console.log("songaylam", songaylam);
  var tongluong = 0;
  tongluong = tienluong * songaylam;
  document.getElementById("tongluong").innerHTML = tongluong.toLocaleString();
}
