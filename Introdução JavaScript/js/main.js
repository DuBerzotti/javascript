function clicou(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"; // Pelo id ele tras o elemento com o seu nome onde consigo manipula-lo
                                                           // E com o innerHTML consigo injetar algo no html como texto
}

function redirecionar(){
    window.open("https://github.com/DuBerzotti"); //Abre em aba diferente
    //window.location.href = "https://github.com/DuBerzotti"; // Abre na mesma aba
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página Carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1 , n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual sua idade: ");
console.log(validaIdade(idade));

alert(soma(5 , 10));
alert(setReplace("Vai Japão" , "Japão", "Brasil"));
*/

/*
//Data
var d = new Date();
alert(d);
alert(d.getMonth() + 1); // Sempre vai iniciar do 0 por isso +1
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());
*/

/*
//Laços de repetição
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
}

var count2;
for (count2=0; count2 <=5; count2++){
    alert(count2);
}
*/

/*
//Condicionais
var idade = prompt("Qual sua idade: "); // exibe caixa de pergunta
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
*/

/*
//Lista de Dicionário
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
//Dicionário
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
*/

//Lista
//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva"); // insere um elemento a lista
//lista.pop("laranja"); //Remove o elemento da lista
//console.log(lista.length); // Vejo o tamanho da minha lista
//console.log(lista.reverse()); // Imprime os elementos ao contrario da lista
//console.log(lista.toString()); // Converte a lista para string
//console.log(lista.toString()[1]); // Tras somente a primeira letra do elemento
//console.log(lista.join(" - ")); // Subistitui a virgula por " - "

//console.log(lista);
//console.log(lista[1]);
//alert(lista[1]);

/*
//Aula de introdução
var nome = "Eduardo Berzotti";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo."

//alert(nome + " tem " + idade + " anos."); //Abre uma caixa com mensagem
//alert(idade + idade2);

//console.log(frase); //Imprimo no console do navegador
//console.log(frase.replace("Japão" , "Brasil")); //Usando o replace altero uma palavra por outra
alert(frase.replace("Japão" , "Brasil"));
console.log(frase.toUpperCase()); // Vai alterar tudo para letra maiuscula
console.log(frase.toLowerCase()); // Tudo letra minusula  
console.log(n1 * n2);
*/