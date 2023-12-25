document.addEventListener("DOMContentLoaded", function () {
  var studentIDElement = document.getElementById("studentID");
  var studentNameElement = document.getElementById("studentName");
  var selfieElement = document.getElementById("selfie");
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  var btn3 = document.getElementById("btn3");

  btn1.addEventListener("click", function () {
    studentIDElement.style.fontFamily = "Arial, sans-serif";
    studentIDElement.style.color = "blue";
    
    studentNameElement.style.fontFamily = "Arial, sans-serif";
    studentNameElement.style.color = "green";
  });

  btn2.addEventListener("click", function () {
    selfieElement.style.borderRadius = "50%";
    selfieElement.style.border = "5px solid red";
  });

  btn3.addEventListener("click", function () {
    selfieElement.src = "2.jpg"; 
    selfieElement.alt = "生活照";
  });
});
