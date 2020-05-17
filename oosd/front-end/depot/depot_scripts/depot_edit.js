function viewDailyAttendane() {
    var tdate = document.getElementById('tdate').value;
    var xhttp = new XMLHttpRequest();
    var url = "http://localhost:8000/attendance?date=" + tdate;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var dailyAttendance = JSON.parse(this.responseText);
          console.log(dailyAttendance);
          renderHtml(dailyAttendance);
        }
    };
  xhttp.open("GET",url, true);
  xhttp.send();
  }
  
function renderHtml(data) {
    htmlString = "<table class='table table-bordered'><tr><th>Employee ID</th><th>Division</th><th>Vehicle/walk</th></tr>";
    data.forEach(element => {
        htmlString += "<tr>"+"<td>"+element.employee_id+"</td>"+"<td>"+element.division+"</td>"+"<td>"+element.vehiclewalk+"</td>"+"</tr>";
    });
    document.getElementById("display").innerHTML = htmlString;
}