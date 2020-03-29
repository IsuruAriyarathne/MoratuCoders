var x=0;
var arr = [];
var divLst = ["Wehera","Nuwara para","Damulu para","Migamu para"]

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
function chk(){
    
    x = document.getElementById('inp1').value;
    document.getElementById("div4").style.display="block";
    document.getElementById("strg").innerHTML=divLst[x-1]+" division";
    document.getElementById("div3").style.display="block";
    /*if(x==1){
        document.getElementById("div3").style.display="block";
    }
    else if(x==2){
        document.getElementById("div3").style.display="block";
        document.getElementById("div4").innerHTML ="<p>Sed ut perspiciatis...</p>"
    }*/
}

function test(){
    console.log("try");
}