function Random(){

    var max = parseInt(document.getElementById("maxNumber").value);

    if(max > 0){

    var random = Math.floor(Math.random() * max);

    random = document.getElementById("Number").innerHTML = random
    }   

    else{
        random = document.getElementById("Number").innerHTML = "Your number need to be bigger than zero"
    }
}
