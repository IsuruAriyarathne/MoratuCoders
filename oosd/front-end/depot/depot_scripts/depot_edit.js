var divList;
var allAttends = [];

function getDivisons(){
  return new Promise((res,rej)=>{
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              divisions = JSON.parse(this.responseText);
              res(divisions);
      }
      };
      xhttp.open("GET", "http://localhost:8000/divisions", true);
      xhttp.send();
  });
}

function getTodayAttendance(today,div){
  return new Promise((res,rej)=>{
    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              attList = JSON.parse(this.responseText);
              res(attList);
      }
      };
      xhttp.open("GET", "http://localhost:8000/attendance?date="+today+"&div="+ div, true);
      xhttp.send();
  });
}

function empValidation(id){
  return new Promise((res,rej)=>{
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
              if(this.status == 200){
                  res(true);
              }
              else if(this.status == 400){
                  res(false);
              }       
          }
      };
      xhttp.open("GET", "http://localhost:8000/employees?type=status&id="+id, true);
      xhttp.send();
  });
  
}

async function adder(x){
  let y = document.getElementById('inp'+x).value;
  let ind = allAttends[x-1].indexOf(y);
  if(ind == -1){
    var bol = await empValidation(y);

      if(bol){
          allAttends[x-1].push(y);
          var para = document.createElement("div");
          var node = document.createTextNode(y);
          para.appendChild(node);
          var element = document.getElementById("div"+x);
          element.appendChild(para);
      }
      else{
          alert("Invaild ID")
      } 
      console.log(allAttends);
  }

}

function remover(x){
  let y = document.getElementById('inp'+x).value;
  let cnfm = confirm("Do you want to remove "+ y);
  if(cnfm == true){
      let ind = allAttends[x-1].indexOf(y);
      if(ind>-1){
          allAttends[x-1].splice(ind,1);
          var c = document.getElementById("div"+x).children;
          var parent = document.getElementById("div"+x);
          parent.removeChild(c[ind]);
      }
  }
}

async function run(){
  divList = await getDivisons();
  for(var i=0 ; i<divList.length;i++) {
    var str = divList[i].division_name;
    //console.log(str);
    document.getElementById('header'+(i+1)).innerHTML = str;
    var date = new Date();
    var today = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    var attList = await getTodayAttendance(today, divList[i].division_no);
    //console.log(attList);
    var tempList = [];
    for(var j=0 ; j<attList.length ; j++){
      tempList.push({id:attList[j].employee_id,type:attList[j].vehiclewalk});
      var para = document.createElement("div");
      var node = document.createTextNode(attList[j].employee_id);
      if(attList[j].vehiclewalk == 0){
        para.appendChild(node);
      }else{
        var para1 = document.createElement("div");
        para1.appendChild(node);
        para.appendChild(para1);
      }
      
      var element = document.getElementById("div"+(j+1));
      element.appendChild(para);
    }
    allAttends.push(tempList);
  }
  console.log(allAttends);
}
run();
