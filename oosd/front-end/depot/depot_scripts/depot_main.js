var x=0;
var arr = []; //array for waste colloctors
var arrV = []; //array for vehicle supporters
var divLst = ["Wehera","Nuwara para","Damulu para","Migamu para"];
var vehiLst = ['2','3'];

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


function adder(){
  
    let y = document.getElementById('inp2').value;
    let ind = arr.indexOf(y);
    if(ind == -1){
        arr.push(y);
        var para = document.createElement("div");
        var node = document.createTextNode(y);
        para.appendChild(node);
        var element = document.getElementById("divi");
        element.appendChild(para);
    }
    console.log(arr);
}

function adderV(){
  
    let y = document.getElementById('inp4').value;
    let ind = arrV.indexOf(y);
    if(ind == -1){
        arrV.push(y);
        var para = document.createElement("div");
        var node = document.createTextNode(y);
        para.appendChild(node);
        var element = document.getElementById("divi2");
        element.appendChild(para);
    }
    console.log(arrV);
}
function chk(){
    document.getElementById("img1").style.display="none";
    document.getElementById("div7").style.display="block";
    x = document.getElementById('inp1').value;
    let indx = vehiLst.indexOf(x);
    console.log(indx);
    document.getElementById("div4").style.display="block";
    document.getElementById("strg").innerHTML=divLst[x-1]+" division";
    document.getElementById("div3").style.display="block";
    if(indx!=-1){
        document.getElementById("div5").style.display="block";
    }
}

function test(){
    console.log("try");
}