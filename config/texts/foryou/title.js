



const textFYTitle = `💖Antes de qualquer coisa, respira fundo...
`;

document.addEventListener("DOMContentLoaded", () => {
  const formattedText = textFYTitle
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>")
    .replace(/ {2}/g, "&nbsp;&nbsp;");

  document.querySelectorAll("*").forEach(el => {
    if (el.innerHTML.includes("${textFYTitle}")) {
      el.innerHTML = el.innerHTML.replace(/\$\{textFYTitle\}/g, formattedText);
    }
  });
});
