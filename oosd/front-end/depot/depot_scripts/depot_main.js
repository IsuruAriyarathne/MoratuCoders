var x=0;
var arr = []; //array for waste colloctors
var arrV = []; //array for vehicle supporters
var vehicles;
var vehiLst = ['2','3']; // these are the divisions that have vehicles
/*  can use this to get selected vehicle
    var e = document.getElementById("exampleFormControlSelect1");
    var strUser = e.options[e.selectedIndex].value;
*/
var attendList = []; //attended employee object array

getVehiList();

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

function getVehiList(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        vehicles = JSON.parse(this.responseText);
        renderHtml(vehicles);
    }
    };
    xhttp.open("GET", "http://localhost:8000/vehicles", true);
    xhttp.send();
}

function getDivison(x){
    return new Promise((res,rej)=>{
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                division = JSON.parse(this.responseText);
                res(division);
        }
        };
        xhttp.open("GET", "http://localhost:8000/divisions?id="+x, true);
        xhttp.send();
    });
}

function renderHtml(data){
    var htmlString = "";
    for(i=0;i<data.length;i++){
        htmlString += "<option>" + data[i].vehicle_num + "</option>"  ;
    }
    document.getElementById("exampleFormControlSelect1").innerHTML = htmlString;
}

function remover(){
    let y = document.getElementById('inp2').value;
    let cnfm = confirm("Do you want to remove "+ y);
    if(cnfm == true){
        let ind = arr.indexOf(y);
        console.log(ind);
        if(ind>-1){
            arr.splice(ind,1);
            var c = document.getElementById("divi").children;
            var parent = document.getElementById("divi");
            parent.removeChild(c[ind]);
        }
    }
    console.log(arr);
}

function removerV(){
    let y = document.getElementById('inp4').value;
    let cnfm = confirm("Do you want to remove "+ y);
    if(cnfm == true){
        let ind = arrV.indexOf(y);
        if(ind>-1){
            arrV.splice(ind,1);
            var c = document.getElementById("divi2").children;
            var parent = document.getElementById("divi2");
            parent.removeChild(c[ind]);
        }
    }
    console.log(arrV);
}


async function adder(){
    let y = document.getElementById('inp2').value;
    let ind = arr.indexOf(y);
    if(ind == -1 && arrV.indexOf(y) == -1){
        var bol = await empValidation(y);
        if(bol){
            arr.push(y);
            var para = document.createElement("div");
            var node = document.createTextNode(y);
            para.appendChild(node);
            var element = document.getElementById("divi");
            element.appendChild(para);
        }
        else{
            alert("Invaild ID")
        } 
    }
    console.log(arr);
}

async function adderV(){
    let y = document.getElementById('inp4').value;
    let ind = arrV.indexOf(y);
    if(ind == -1 && arr.indexOf(y) == -1){
        var bol = await empValidation(y);
        if(bol){
            arrV.push(y);
            var para = document.createElement("div");
            var node = document.createTextNode(y);
            para.appendChild(node);
            var element = document.getElementById("divi2");
            element.appendChild(para);
        }else{
            alert("Invaild ID");
        }  
    }
    console.log(arrV);
}
async function chk(){
    x = document.getElementById('inp1').value;
    if(x>0 && x<22){
        document.getElementById("img1").style.display="none";
        document.getElementById("div7").style.display="block";
        let indx = vehiLst.indexOf(x);
        var div = await getDivison(x); //rest of the code will execute after gain this val
        console.log(indx);
        document.getElementById("div4").style.display="block";
        document.getElementById("strg").innerHTML= div[0].division_name + " division";
        document.getElementById("div3").style.display="block";
        if(indx!=-1){
            document.getElementById("div5").style.display="block";
        }
    }
    else{
        alert(x+" is not a valid division")
    }
}

function test(){
    console.log("try");
}

function submitAttendance() {
    
    var d = new Date();
    var todate = d.getFullYear() +"-" +(d.getMonth()+1)+"-"+d.getDate();
    var emp_division = parseInt(document.getElementById('inp1').value);

    //Loop through arr list
    for( i = 0; i<arr.length; i++ ){
        var empObj = {date: todate,
                     division: emp_division, 
                     employee_id: parseInt(arr[i]), 
                     method : 0};
        attendList.push(empObj);
    }
    //Loop through arrV List
    for( i = 0; i<arrV.length; i++ ){
        var empVObj = {date: todate,
                     division: emp_division, 
                     employee_id: parseInt(arrV[i]), 
                     method : 1};
        attendList.push(empVObj);
    }

    console.log(attendList);
   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert("Data submitted successfully..");
        }
    };
    xhttp.open("POST", "http://localhost:8000/attendance", true);
    xhttp.send(JSON.stringify(attendList));
}