let a = 0;

document.getElementById("decrement").onclick = function(){
    document.getElementById("Value").innerHTML = --a;
}


document.getElementById("increment").onclick = function(){
    document.getElementById("Value").innerHTML = ++a;
}

document.getElementById("reset").onclick = function(){
    a = 0
    document.getElementById("Value").innerHTML = a;
}