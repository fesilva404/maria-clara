// ⚠️ Modifique apenas as variáveis!

var textHome2 = `Eu sempre desejei encontrar alguém que me fizesse sentir paz no meio do caos. E então... você chegou! mudadando completamente minha vida em poucos dias voce foi a melhor coisa que ja me aconteceu eu quero sempre estar ao seu lado ama-la e respeitada e seu namorado dos sonhos.Eu lhe amo infinitamente e sempre irei lhe amar  que eu sinto por você é sincero, é leve... é real.Voce e o meu grande amor, o amor da minha vida`;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\$\{textHome2\}/g, textHome2);
  });
});
