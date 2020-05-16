var myObj = {
  employee_id: 200,
  salary_id: 567777,
  name: "isuru",
  dob: 5,
  employee_type: 78988888,
  gender: document.getElementById("selection").options[
    document.getElementById("selection").selectedIndex
  ].value,
};

function loadDoc() {
  alert(document.getElementById("mass2").value);
  alert(document.getElementById("mass3").value);
  alert(document.getElementById("mass1").value);
  alert(document.getElementById("bill4").value);
  alert(document.getElementById("bill5").value);
  alert(
    document.getElementById("selection").options[
      document.getElementById("selection").selectedIndex
    ].value
  );
  alert(JSON.stringify(myObj));
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      alert("successfully added");
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", "localhost:8000/employees", true);
  xhttp.send(JSON.stringify(myObj));
}
