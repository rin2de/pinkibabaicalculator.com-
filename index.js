function cal(){
    var res;
    var x = document.getElementById("first").value;
    var ope = document.getElementById("operator").value;
    var y = document.getElementById("second").value;
    if(ope == "+"){
        res = parseInt(x) + parseInt(y);
    }else if (ope == "-"){
        res = parseInt(x) - parseInt(y);
    }else if (ope == "*"){
        res = parseInt(x) * parseInt(y);
    }else if (ope == "/"){
        res = parseInt(x) / parseInt(y);
    }else if (ope == "%"){
        res = parseInt(x)/100 * parseInt(y);
    }
    document.getElementById("result").value= res;

}