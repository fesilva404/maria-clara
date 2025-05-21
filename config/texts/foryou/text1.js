const textFY1 = `Agora, por favor, leia essas palavras com o coração aberto, porque cada linha que escrevi aqui carrega uma parte de mim.
se conhecemos a nao muito tempo. Justos por um destino de um complexo algoritomo com milhares de pessoas inclusas, eu achei uma pequena garota quando vi me apaixonei simplesmente de primeira conversamos e foi incrivel.O seu jeito unico me ganhou completamente. como nao entrava muito no app,Fomos pro IG. E POR BURRICE MINHA eu esqueci de chamar o amor da minha vida, mas como eu tenho a mulher mais foda do mundo vc me chamou e assim comecou definitivamente nossa historia.


`;

document.addEventListener("DOMContentLoaded", () => {
  const formattedText = textFY1
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>")
    .replace(/ {2}/g, "&nbsp;&nbsp;");

  document.querySelectorAll("*").forEach(el => {
    if (el.innerHTML.includes("${textFY1}")) {
      el.innerHTML = el.innerHTML.replace(/\$\{textFY1\}/g, formattedText);
    }
  });
});
