// ⚠️ Modifique apenas as variáveis!

var textButton = `Para Minha Princesa`;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\$\{textButton\}/g, textButton);
  });
});
