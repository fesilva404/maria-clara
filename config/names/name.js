// ⚠️ Modifique apenas as variáveis!

var userName = "Maria Clara";

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  const name = typeof userName !== "undefined" ? userName : "você";

  document.querySelectorAll("*").forEach((el) => {
    if (el.innerHTML.includes("${name}")) {
      el.innerHTML = el.innerHTML.replace(/\$\{name\}/g, name);
    }
  });
});