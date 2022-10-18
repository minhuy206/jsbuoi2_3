/** Bài 1
Mô hình 3 khối
 Đầu vào: 
  -Lương 1 ngày: 100.000VND
  -Nhập vào số ngày làm

  Xử lí:
  -Lương nhân viên = 100.000 * số ngày làm

  -Đầu ra: 
  -In lương nhân viên ra màn hình
 */
document.getElementById("calSalary").onclick = function () {
  // Đầu vào
  var workingDay = document.getElementById("workingDay").value * 1;

  // Xử lí
  var salary = 100000 * workingDay;
  // Current Format
  var currentFormat = Intl.NumberFormat("VN-vn");
  //Đầu ra
  document.getElementById("infoSalary").innerHTML = "";
  var infoSalary = document.createElement("p");
  infoSalary.innerHTML =
    "Tiền lương nhân viên: " + currentFormat.format(salary) + "VNĐ";
  document.getElementById("infoSalary").appendChild(infoSalary);
  infoSalary.className = "alert alert-success";
};

/**
 * Bài 2
 * Mô hình 3 khối
 *  Đầu vào:
 *  -Nhập 5 số
 *
 *  Xử lí:
 *  -Giá trị trung bình = (num1 + num2 + num3 + num4 + num5) / 5
 *
 *  Đầu ra:
 *  -In giá trị trung bình ra màn hình
 */
document.getElementById("calAverage").onclick = function () {
  //Đầu vào
  var num1 = document.getElementById("num1").value * 1;
  var num2 = document.getElementById("num2").value * 1;
  var num3 = document.getElementById("num3").value * 1;
  var num4 = document.getElementById("num4").value * 1;
  var num5 = document.getElementById("num5").value * 1;

  // Xử lí
  var average = (num1 + num2 + num3 + num4 + num5) / 5;

  // Đầu ra
  document.getElementById("infoAverage").innerHTML = "";
  var infoAverage = document.createElement("p");
  infoAverage.innerHTML = "Giá trị trung bình của 5 số: " + average; 
  document.getElementById("infoAverage").appendChild(infoAverage);
  infoAverage.className = "alert alert-success";
};

/**
 * Bài 3
 *  Đầu vào:
 *  -Giá trị của 1 USD
 *  -Số lượng USD muốn đổi
 * 
 *  Xử lí:
 *  -amountVND = 23.500 * amountUSD
 * 
 *  Đầu ra:
 *  -In amountVND ra màn hình
 */
document.getElementById("calExchange").onclick = function () {
  // Đầu vào
  var amountUSD = document.getElementById("amountUSD").value * 1;

  // Xử lí
  var amountVND = 23500 * amountUSD;
  // Current Format
  var currentFormat = Intl.NumberFormat("VN-vn");
  //Đầu ra
  document.getElementById("infoVND").innerHTML = "";
  var infoVND = document.createElement("p");
  infoVND.innerHTML =
    "Tiền nhận được: " + currentFormat.format(amountVND) + "VNĐ";
  document.getElementById("infoVND").appendChild(infoVND);
  infoVND.className = "alert alert-success";
};

/**
 * Bài 4
 *  Đầu vào:
 *  -Nhập chiều dài: 
 *  -Nhập chiều rộng:
 * 
 *  Xử lí:
 *  -Chu vi = dài * 2 + rộng * 2
 *  -Diện tích = dài * rộng
 * 
 *  Đầu ra:
 *  -In chu vi và diện tích ra màn hình
 */
document.getElementById("calPerimeter").onclick = function () {
    // Đầu vào:
    var length = document.getElementById("length").value * 1;
    var width = document.getElementById("width").value * 1;

    // Xử lí:
    var perimeter = (length + width) * 2;

    // Đầu ra:
    document.getElementById("infoPerimeter").innerHTML = "";
    var infoPerimeter = document.createElement("p");
    infoPerimeter.innerHTML = "Chu vi hình chữ nhật: " + perimeter;
    document.getElementById("infoPerimeter").appendChild(infoPerimeter);
    infoPerimeter.className = "alert alert-success";
}

document.getElementById("calAcreage").onclick = function () {
  // Đầu vào:
  var length = document.getElementById("length").value * 1;
  var width = document.getElementById("width").value * 1;

  // Xử lí:
  var acreage = (length * width);

  // Đầu ra:
  document.getElementById("infoAcreage").innerHTML = "";
  var infoAcreage = document.createElement("p");
  infoAcreage.innerHTML = "Diện tích hình chữ nhật: " + acreage;
  document.getElementById("infoAcreage").appendChild(infoAcreage);
  infoAcreage.className = "alert alert-success";
};

/**
 * Bài 5
 *  Đầu vào:
 *  -Nhập số có 2 chữ số: a
 * 
 *  Xử lí:
 *  -Số hàng chục = a / 10;
 *  -Số hàng đơn vị = a % 10;
 *  -Tổng 2 kí số vừa nhập = Số hàng chục + Số hàng đơn vị
 */
document.getElementById("calSum").onclick = function () {
    // Đầu vào
    var number = document.getElementById("number").value * 1;

    // Xử lí
    var secondNum = number % 10;
    var firstNum = (number - secondNum) / 10;
    var sum = firstNum + secondNum;

    // Đầu ra
    document.getElementById("infoSum").innerHTML = "";
    var infoSum = document.createElement("p");
    infoSum.innerHTML = "Tổng 2 kí số của số vừa nhập là: " + sum;
    document.getElementById("infoSum").appendChild(infoSum);
    infoSum.className = "alert alert-success";
}