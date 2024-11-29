const nabidka = ["CPU", "GPU", "RAM"];
const kosik = [];

function vypis(array, output){
    let out_value = document.getElementById(output);
    for(let i = 0; i < array.length; i++){
        out_value.innerHTML += i + 1 + ". " + array[i] + "<br>";
    }
}

function Add(){
    const input = document.getElementById("add-component")

    if((input.ariaValueMax<=nabidka.length) && (input.value> 0) && (!isNaN(input.value))){
        kosik.push(nabidka[input.value -1]);
        nabidka.splice(input.value - 1,1);
    }
    else{
        alert("chyba")
    }
    vypis(kosik, "user-cart");
    vypis(nabidka, "content");
    upadateKosikOptions();
}

function updateKosikOptions() { 
    // Najdeme HTML element typu select
    const select = document.getElementById("kosik-nabidka"); 
    // Vymažeme jeho aktuální obsah
    select.innerHTML = ""; 
    
    // Projdeme všechny položky v košíku
    for (let i = 0; i < kosik.length; i++) { 
        // 1. Vytvoříme nový prvek <option> pomocí příkazu createElement, do vnitř píšeme název elementu bez <>
        let option = document.createElement("option"); 
        // 2. Nastavíme hodnotu a zobrazovaný text, hodnota je zde atriput <option value="1"></option>
        option.value = i + 1; 
        option.text = kosik[i]; // Můžete použít i innerHTML, ale text je kratší, element pak vypadá jíž takto <option value="1">Nazev produktu z košíku</option>
        // 3. Přidáme <option> do <select>, jednodušeji si select element adptuje potomka, kterého jsme vytvořili
        select.appendChild(option); 
    } 
} 

vypis(nabidka, "content");
