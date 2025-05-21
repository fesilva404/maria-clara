// ⚠️ Modifique apenas as variáveis!

var textDeclaration4 = `Antes de qualquer coisa, respira fundo... Agora, por favor, leia essas palavras com o coração aberto,Pois Desde de quando lhe conheci, eu aprendi novamente oque e amor e como amar, nao tenho palavras pra descrever meu amor por voce mas pode ter certeza que e verdadeiro.`;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\$\{textDeclaration4\}/g, textDeclaration4);
  });
});