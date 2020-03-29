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
        }
    }
    document.getElementById("strg2").innerHTML=arr;
}

function adder(){
    let y = document.getElementById('inp2').value;
    let ind = arr.indexOf(y);
    if(ind == -1){
        arr.push(y);
    }
    document.getElementById("strg2").innerHTML=arr;
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