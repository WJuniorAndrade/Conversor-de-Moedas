var moedas = document.querySelectorAll(".moedas")

for (let i = 0; i < moedas.length; i++) {
    var moeda = moedas[i]
    moeda.addEventListener("click", function() {

        var valorInput = parseInt( document.querySelector("#valor").value)

        var para = document.querySelector("#para")
        para.textContent= ` Sua moeda é: ${moedas[i].value}`

        console.log(moedas[i].value);

        validarMoeda(moedas[i].value, valorInput)
    });
}