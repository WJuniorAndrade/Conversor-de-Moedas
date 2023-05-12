function validarMoeda(moedas, valorInput) {

    var dolarAmericano = document.getElementById("dolar-americano").value;
    var dolarCanadiano = document.getElementById("dolar-canadiano").value;
    var dolarAustraliano = document.getElementById("dolar-australiano").value;
    var IeneJapones = document.getElementById("iene-japones").value;
    var euro = document.getElementById("euro").value;
    var bitcoin = document.getElementById("bitcoin").value;

    var painelConversor = document.getElementById("painel-conversor")
    var bandeiraFundo = document.querySelector(".bandeira-background")
    var bandeiraMobile = document.querySelector("body")


    if (moedas == dolarAmericano) {
        console.log(valorInput);
        converterDolarAmericano(painelConversor, valorInput)
        bandeiraFundo.classList.add("america")
        bandeiraMobile.classList.add("bodyAmericana")
    } 
    else {
        bandeiraFundo.classList.remove("america")
        bandeiraMobile.classList.remove("bodyAmericana")
    }


    if (moedas == dolarCanadiano) {
        console.log(valorInput);
        converterDolarCanadiano(painelConversor, valorInput)
        bandeiraFundo.classList.add("canadar")
        bandeiraMobile.classList.add("bodyCanadar")
    }
    else {
        bandeiraFundo.classList.remove("canadar")
        bandeiraMobile.classList.remove("bodyCanadar")
    }


    if (moedas == dolarAustraliano) {
        console.log(valorInput);
        converterDolarAustraliano(painelConversor, valorInput)
        bandeiraFundo.classList.add("australia")
        bandeiraMobile.classList.add("bodyAustralia")
    }
    else {
        bandeiraFundo.classList.remove("australia")
        bandeiraMobile.classList.remove("bodyAustralia")
    }

    if (moedas == IeneJapones) {
        console.log(valorInput);
        converterIeneJapones(painelConversor, valorInput)
        bandeiraFundo.classList.add("japao")
        bandeiraMobile.classList.add("bodyJapao")
    }
    else {
        bandeiraFundo.classList.remove("japao")
        bandeiraMobile.classList.remove("bodyJapao")
    }


    if (moedas == euro) {
        console.log(valorInput);
        converterEuro(painelConversor, valorInput)
        bandeiraFundo.classList.add("europa")
        bandeiraMobile.classList.add("bodyEuropa")
    }
    else {
        bandeiraFundo.classList.remove("europa")
        bandeiraMobile.classList.remove("bodyEuropa")
    }


    if (moedas == bitcoin) {
        console.log(valorInput);
        converterBtiCoin(painelConversor, valorInput)
        bandeiraFundo.classList.add("bitcoin")
        bandeiraMobile.classList.add("bodyBitcoin")
    }
    else {
        bandeiraFundo.classList.remove("bitcoin")
        bandeiraMobile.classList.remove("bodyBitcoin")
    }

}