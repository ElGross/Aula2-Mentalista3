var numeroS = Math.floor(Math.random() * 1000) + 1;
var tentativasMaximas = 10;
var tentativas = 0;
var palpite;
while (palpite !== numeroS && tentativas < tentativasMaximas)
      {palpite = prompt('Adivinhe o número secreto entre 1 e 1000');
      if (palpite === null) {alert('Jogo cancelado.'); break;}
      palpite = parseInt(palpite);
      tentativas++;
      if (isNaN(palpite) || palpite < 1 || palpite > 1000) 
      {alert('Por favor, insira um número válido entre 1 e 1000.');} 
      else if (palpite === numeroS) {alert('WOW! Você está com sorte! Muito bem!');}         else if (palpite > numeroS) {alert('Não foi dessa vez! Tente um número menor. Tentativas restantes: ' + (tentativasMaximas - tentativas));}
      else if (palpite < numeroS) {alert('Não foi dessa vez! Tente um número maior. Tentativas restantes: ' + (tentativasMaximas - tentativas));}}
      if (palpite !== numeroS) {alert('Suas tentativas acabaram! O número secreto era ' + numeroS);}