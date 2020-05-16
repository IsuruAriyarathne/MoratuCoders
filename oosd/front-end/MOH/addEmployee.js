
function submitAttendance() {
    
  var emp_Name= document.getElementById('name').value;
  var emp_id = parseInt(document.getElementById('id').value);
  var sal_id = parseInt(document.getElementById('salid').value);
  var emp_dob = document.getElementById('dob').value;
  var emp_gen = document.getElementById('selection').value;
  var emp_type = parseInt(document.getElementById('emtype').value);

  var empObj = {
    employee_id: emp_id,
    salary_id: sal_id,
    name: emp_Name,
    dob: emp_dob,
    employee_type: emp_type,
    gender: emp_gen,
  };

  console.log(empObj);
  alert(JSON.stringify(empObj));
  var xhttp = new XMLHttpRequest();
<<<<<<< HEAD
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
<<<<<<< HEAD
          alert("Data submitted successfully..");
=======
          alert("New Employee added successfully..");
>>>>>>> parent of a237444... submit button
      }
=======
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      alert("New Employee added successfully..");
    }
>>>>>>> ddac3ae7db6c9734fb032454e063cf3a639dc7d4
  };
  xhttp.open("POST", "http://localhost:8000/employees", true);
  xhttp.send(JSON.stringify(empObj));
}
