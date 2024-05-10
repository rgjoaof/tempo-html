let chave = 'cebcd482eda57fa9a6714c1c2ba91885'



function colocarNaTela(dados) {
    console.log(dados)

    document.querySelector('.cidade').innerHTML = 'Tempo em ' + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector('.icone').src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector('.umidade').innerHTML ='Umidade do ar em ' + dados.main.humidity +'%'

}



async function buscarCidade(cidade) {
    let dados = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        cidade +
        '&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric',
    ).then((resposta) => resposta.json())
    //AWAIT= ESPERE
    // FETCH - FERRAMENTE DO JAVA PARA ACESSAR SERVIDOR
    //then = então
    //json = javascript object notation (o formato que o java entende)
    // Math.floor arredonda valores.

    colocarNaTela(dados)
}

function cliqueiNoBotao() {
    let cidade = document.querySelector('.input-cidade').value

    buscarCidade(cidade)
}

/*
Clica no BOTÃO 
  -> CHAMA A FUNÇÃO cliqueiNoBotao()
  -> Vai no INPUT e pega o que está lá dentro
  -> PASSAR a cidade para o servidor

 

*/

