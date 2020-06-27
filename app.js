function getNumber(non){
    var result = document.getElementById("result");

    result.value += non;
}


function clearResult(){
    var result = document.getElementById("result");
    result.value =""
}




function getResult(){
    var result = document.getElementById("result");

    result.value =eval(result.value)

}