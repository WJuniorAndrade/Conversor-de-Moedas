function validarMoeda(moedas, valorInput) {

    var dolarAmericano = document.getElementById("dolar-americano").value;
    var dolarCanadiano = document.getElementById("dolar-canadiano").value;
    var dolarAustraliano = document.getElementById("dolar-australiano").value;
    var IeneJapones = document.getElementById("iene-japones").value;
    var euro = document.getElementById("euro").value;
    var bitcoin = document.getElementById("bitcoin").value;

    var painelConversor = document.getElementById("painel-conversor")
    var bandeiraFundo = document.querySelector(".bandeira-background")


    if (moedas == dolarAmericano) {
        console.log(valorInput);
        converterDolarAmericano(painelConversor, valorInput)
        bandeiraFundo.classList.add("america")
    } 
    else {
        bandeiraFundo.classList.remove("america")
    }


    if (moedas == dolarCanadiano) {
        console.log(valorInput);
        converterDolarCanadiano(painelConversor, valorInput)
        bandeiraFundo.classList.add("canadar")
    }
    else {
        bandeiraFundo.classList.remove("canadar")
    }


    if (moedas == dolarAustraliano) {
        console.log(valorInput);
        converterDolarAustraliano(painelConversor, valorInput)
        bandeiraFundo.classList.add("australia")
    }
    else {
        bandeiraFundo.classList.remove("australia")
    }

    if (moedas == IeneJapones) {
        console.log(valorInput);
        converterIeneJapones(painelConversor, valorInput)
        bandeiraFundo.classList.add("japao")
    }
    else {
        bandeiraFundo.classList.remove("japao")
    }


    if (moedas == euro) {
        console.log(valorInput);
        converterEuro(painelConversor, valorInput)
        bandeiraFundo.classList.add("europa")
    }
    else {
        bandeiraFundo.classList.remove("europa")
    }


    if (moedas == bitcoin) {
        console.log(valorInput);
        converterBtiCoin(painelConversor, valorInput)
        bandeiraFundo.classList.add("bitcoin")
    }
    else {
        bandeiraFundo.classList.remove("bitcoin")
    }
}