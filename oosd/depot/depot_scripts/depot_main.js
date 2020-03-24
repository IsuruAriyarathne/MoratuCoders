var x=0;
var arr = [];

function adder(y){
    arr.push(y);
    
}
function chk(x){
    document.getElementById("division").innerHTML = "you entered: "+x;
    if(x==1){
        document.getElementById("div3").style.display="block";
    }
    else if(x==2){
        document.getElementById("div3").style.display="block";
        document.getElementById("div4").innerHTML ="<p>Sed ut perspiciatis...</p>"
    }
}