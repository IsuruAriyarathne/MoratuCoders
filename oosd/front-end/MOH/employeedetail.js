function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      empdetails = JSON.parse(this.responseText);
      renderHtml(empdetails);
    }
  };
  xhttp.open(
    "GET",
    "localhost:8000/employees?" + document.getElementById("idnum").value,
    true
  );
  xhttp.send();
}

function renderHtml(data) {
  document.getElementById("empName").innerHTML = htmlString1;
  document.getElementById("empSalaryID").innerHTML = htmlString2;
  document.getElementById("empGender").innerHTML = htmlString3;
  document.getElementById("empType").innerHTML = htmlString4;
}
