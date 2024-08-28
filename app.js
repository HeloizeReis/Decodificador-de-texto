const texto = document.querySelector(".texto");
const mensagem = document.querySelector(".mensagem");
const botaoCopiar = document.querySelector('.estilo__insercao__botao-copiar');
const titulo = document.querySelector('.titulo');
const paragrafo = document.querySelector('.paragrafo');



/*A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"*/

console.table(matrizCodigo);

function btnEncriptar(){
    const textoEncriptado = criptografar(texto.value);
    mensagem.value = textoEncriptado;
    texto.value = "";
    removerImagemFundo();
}

function criptografar(stringEncriptada){
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];

    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;

}

function btnDesencriptar(){
    const textoDesencriptado = descriptografar(texto.value);
    mensagem.value = textoDesencriptado;
    texto.value = "";
    removerImagemFundo();
}

function descriptografar(stringDesencriptada){
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;

}

function removerImagemFundo() {
    mensagem.style.backgroundImage = 'none';
    botaoCopiar.style.display = 'block';
    titulo.style.display = 'none';
    paragrafo.style.display = 'none';
}

function copiarTexto() {
    mensagem.select();
    document.execCommand('copy');
}