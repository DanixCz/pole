const nabidka = ["CPU", "GPU", "RAM"];
const kosik = [];

function vypis_pole_do_elementu(array, output){
    let out_value = document.getElementById(output);
    for(let i = 0; i < array.length; i++){
        out_value.innerHTML += i + 1 + ". " + array[i] + "<br>";
    }
}

vypis_pole_do_elementu(nabidka, "content");

/*
function vypis(array, output){
}

function Add(){
}
*/