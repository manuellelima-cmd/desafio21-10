let senha = "2007";

let senhaDigitada = prompt("digite a sua senha ");

let tentativas = 3

while (tentativas > 0) {
    tentativas = tentativas - 1;
    if(senhaDigitada.toLowerCase().trim() === senha.toLowerCase().trim()) {
    alert("acesso permitido");
    break;
    
}
else {
    if(tentativas === 0) {
alert("numeros de tentativas esgotado,acesso negado");
break;

 }

alert("senha incorreta, tentativas restantes: ".concat(tentativas));
senhaDigitada = prompt("digite novamente");
    }
}
