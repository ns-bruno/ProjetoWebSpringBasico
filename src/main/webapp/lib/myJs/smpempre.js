

/**
 * Executa quando termina de carregar a pagina web.
 * @returns {undefined}
 */
window.onload = function () {
    
    dicionarioTipoPessoa();

};

/**
 * Pega todos os elementos com a class tipoPessoa, onde vai definir se a pessoa
 * é juridica(CNPJ) ou fisica(CPF).
 * @returns {undefined}
 */
function dicionarioTipoPessoa() {
    // Pega todos os elementos
    var elementosPessoa = document.getElementsByClassName("tipoPessoa");

    for (var i = 0; i < elementosPessoa.length; i++) {
        // Checa se o que esta dentro da tag
        if (elementosPessoa[i].innerHTML == "0") {
            elementosPessoa[i].innerHTML = "Física";
        
        } else if (elementosPessoa[i].innerHTML == "1") {
            elementosPessoa[i].innerHTML = "Jurídica";
        
        } else {
            elementosPessoa[i].innerHTML = "Desconhecida";
        }
    }
};