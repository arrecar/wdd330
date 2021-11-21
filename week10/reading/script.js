function chckApr(){
    if (document.getElementById("payment").value == ""){
        validateApr();
    }else if (validateApr() == true){
        calculate_mort();
        document.getElementById("payment").focus();
    }
}

function validateApr() {
    var x = document.getElementById("apr").value;
    if (isNaN(x)){
        document.getElementById("aprErr").style.display = "inline";
        document.getElementById("aprErr").innerHTML = "Value must be a number";
        document.getElementById("apr").focus();
    } else if ( x < 0.00 || x > 25.00){
        document.getElementById("aprErr").style.display = "inline";
        document.getElementById("aprErr").innerHTML = "Value must be between 0 and 25.00";
        document.getElementById("apr").focus();
    } else{
        document.getElementById("aprErr").style.display = "none";
        document.getElementById("aprErr").innerHTML = "";
        return true;
    }
}

function chckTerm(){
    if (document.getElementById("payment").value == ""){
        validateTerm();
    } else if (validateTerm() == true){
        calculate_mort();
        document.getElementById("payment").focus();
    }
}

function validateTerm() {
    var x = document.getElementById("term").value;
    if (isNaN(x)){
        document.getElementById("termErr").style.display = "inline";
        document.getElementById("termErr").innerHTML = "Value must be a number";
        document.getElementById("term").focus();
    }else if ( x < 0.00 || x > 40){
        document.getElementById("termErr").style.display = "inline";
        document.getElementById("termErr").innerHTML = "Value must be between 0 and 40";
        document.getElementById("term").focus();
    } else{
        document.getElementById("termErr").style.display = "none";
        document.getElementById("termErr").innerHTML = "";
        return true;
    }
}

function chckAmount(){
    if (document.getElementById("payment").value == ""){
        validateAmount();
    }else if (validateAmount() == true){
        calculate_mort();
        document.getElementById("payment").focus();
    }
}

function validateAmount(){
    var x = document.getElementById("amount").value;
    if (isNaN(x)){
        document.getElementById("amountErr").style.display = "inline";
        document.getElementById("amountErr").innerHTML = "Value must be a number";
        document.getElementById("amount").focus();
    }else {
        document.getElementById("amountErr").style.display = "none";
        document.getElementById("amountErr").innerHTML = "";
        return true;
    }
}

function clear_form() {
    document.getElementById("apr").value = "";
    document.getElementById("aprErr").style.display = "none";
    document.getElementById("aprErr").innerHTML = "";
    document.getElementById("term").value = "";
    document.getElementById("termErr").style.display = "none";
    document.getElementById("termErr").innerHTML = "";
    document.getElementById("amount").value = "";
    document.getElementById("amountErr").style.display = "none";
    document.getElementById("amountErr").innerHTML = "";
    document.getElementById("payment").value = "";
    document.getElementById("apr").focus();
}

function calculate_mort(){

    if (document.getElementById("apr").value == ""){
        document.getElementById("aprErr").style.display = "inline";
        document.getElementById("aprErr").innerHTML = "This field cannot be empty"
    } else if (document.getElementById("term").value == ""){
        document.getElementById("termErr").style.display = "inline";
        document.getElementById("termErr").innerHTML = "This field cannot be empty"
    } else if (document.getElementById("amount").value == ""){
        document.getElementById("amountErr").style.display = "inline";
        document.getElementById("amountErr").innerHTML = "This field cannot be empty"
    }else {
        document.getElementById("amountErr").style.display = "none";
        document.getElementById("amountErr").innerHTML = "";

    var rate = document.getElementById("apr").value;
    var term = document.getElementById("term").value;
    var amount = document.getElementById("amount").value;

    var pmt = ((rate/100/12)*amount)/(1-((1+(rate/100/12))**(-term*12)))
    document.getElementById("payment").value = pmt.toFixed(2);
    }
}