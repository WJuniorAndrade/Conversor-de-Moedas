var moedas = document.querySelectorAll(".moedas")

for (let i = 0; i < moedas.length; i++) {
    var moeda = moedas[i]
    moeda.addEventListener("click", function() {

        var valorInput = parseInt( document.querySelector("#valor").value);

        console.log(`Moeda selecionada: ${moedas[i].value}`);

        validarMoeda(moedas[i].value, valorInput)
    });
}